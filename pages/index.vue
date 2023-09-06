<template>
    <div>
        <!-- <HomeBanner></HomeBanner> -->
        <HomeCalendarLine @select-event="selectEvent"></HomeCalendarLine>
        <div>
          <!-- <HomeBarSlider></HomeBarSlider> -->
    
          <!-- <div class="divIn">
            <n-button type="warning" @click="doTestAny">TestAny</n-button>
          </div> -->
          <!-- <n-button type="warning" @click="doTest">TestAny</n-button> -->
          <template v-if="secMap.size>0">
            <LazyHomeBarSlider ref="calBarSlider" :sec-data="secCalendar" style="padding-bottom: 60px;"></LazyHomeBarSlider>
            <LazyHomeBarSlider v-for="sec in sdList" :sec-data="sec" style="padding-bottom: 60px;">            
            </LazyHomeBarSlider>    
          </template>      
        
        </div>
      
    </div>
</template>

<script setup lang="ts">
import {useMessage,NButton } from 'naive-ui'
import apiWebData from '@/zfApi/apiWebData';
import apiPoster from '@/zfApi/apiPoster';
import {pageSectionData,pageEventPoster,ResComm,pageSectionEvent} from '@/utils/models'


const sdList = reactive<pageSectionData[]>([]);
let secCalendar = reactive<pageSectionData>({
  secName: "",
  secCode: "",
  curEvCode :"",
  isCalendar :true,
  evGroup :[[]],
 // loadstatus:1,
  posterDatas:[]
});




const calBarSlider= ref();

const message = useMessage();
const pageData = usePageCommData().value;


let eventCodes:string[] = []; // 当获取好Section所有事件后，获取首页需要最先显示的海报事件Codes

//Section Events
const res = await apiWebData.querySectionEvents(tools.currentYear());
const secMap = new Map<string,pageSectionEvent[]>();
if(res.code == 200){
  if(res.data!=undefined){
      let gotCalenderEvent = false;
      /*设置 state Section Events */
      
      res.data.forEach((item,index)=>{
      //  debugger
        let secEvents = secMap.get(item.secCode);
        //let secEvents =  pageData.pageSectionEvent.get(item.secCode);
        if(secEvents == undefined)
          secMap.set(item.secCode,[item]);
        else
          secEvents.push(item);
          
        /* 设置Calendar Line 组件 显示内容 */
        item.weekDay = tools.weekDay(item.ecStartDate);
        item.diffNow = tools.diffDay(item.ecStartDate);
        //非日历事件需要查询海报
        if(item.evType>0) {
          eventCodes.push(item.evCode);
          addSectionData(item);
        }
        //找到当前日历事件
        if(item.diffNow>=0 && item.evType ==0 && gotCalenderEvent==false) {
          eventCodes.push(item.evCode);
          
          pageData.curCalendarEventIndex = index;
          item.selected = true;
          gotCalenderEvent= true;

          addSectionData(item);
        }
      });
      
      //设置State
      pageData.pageSectionEvent = secMap;
   //    pageData.pageSectionData = sdList.value;
      // console.log("pageData.pageSectionData",pageData.pageSectionData);
    }

}
else{ 
  message.error(res.msg);
}

function addSectionData(item:pageSectionEvent){

  if(item.evType == 0){
    secCalendar.secName = item.secName;
    secCalendar.secCode = item.secCode;
    secCalendar.curEvCode = item.evCode;
  }
  else{
   const sd:pageSectionData ={
              secName: item.secName,
              secCode: item.secCode,
              curEvCode :item.evCode,
              isCalendar :false,
              evGroup :[[]],
              // evGroupPoster: [[]],
              posterDatas:[]
            }
 
    sdList.push(sd);
  }

}

queryHomePoster();



//获取首页的Event Poster 
async function queryHomePoster() {
//  debugger
  const res = await apiWebData.queryHomePoster(eventCodes);
 //console.log("queryHomePoster:",res);
  handlePosterData(res);
}

function handlePosterData(res:ResComm<pageEventPoster[]>){

  const secMap = new Map<String,pageSectionData>();

  if(res.code == 200){
    //遍历所有的海报，可能是多事件查询，所以要根据不同事件进行整理。
    if(res.data!=undefined){
        res.data.forEach((item)=>{
         // debugger;
          let sec = secMap.get(item.defaultEvent);
          //日历事件
          if(item.defaultEvent == secCalendar.curEvCode){
            secCalendar.posterDatas.push(item);
          }
          else{
            if(sec == undefined){
              sec = sdList.find(s=>s.curEvCode == item.defaultEvent) as pageSectionData;
              sec.posterDatas = [item];
              secMap.set(item.defaultEvent,sec);
              //在sdList中没有获取到，则到secCalendar获取
            } 
            else
              sec.posterDatas.push(item);
             
            }
         
      });
     // debugger
      sdList.forEach((sd)=>{
        sd.evGroup = getPosterData(sd.posterDatas);
        // console.log("sd.evGroup",sd.evGroup);
      })
    
      secCalendar.evGroup =  getPosterData(secCalendar.posterDatas);
    }
  }

}

function getPosterData(posters:pageEventPoster[]){
     
    const evGroup:[pageEventPoster[]]= [[]];
    const gpMaxItemNum = 5;
    if(posters != undefined){
        let i=0,j=0;
        let no = 1;
        for(let n=0;n<posters.length;n++){              
            if(no>gpMaxItemNum){
                no = 1;
                j=0;
                i++;
                evGroup[i] = []; 
            }
            evGroup[i][j] = posters[n];
            j++;no++;            
        } 
        if(evGroup.length>1){
             // clone 一组数据，最后一条到最前面，其他接到最后，用于滑动     
        const len = evGroup.length;
        let data= evGroup[len-1];
        evGroup.unshift(data);
        for(i=1;i<len;i++){
            data= evGroup[i];
            evGroup.push(data);  
        }
        }
     
      
    }
    //console.log("evGroup",evGroup);
    return evGroup;
    

}   
// console.log("secCalendar",secCalendar);
// console.log("sdList",sdList);

//CalendarLine 选择日历组件后，更新滑动组件
async function selectEvent(evCode:string){


  //修改加载数据状态
  calBarSlider.value.changePageState(1);
  //当前事件
  secCalendar.curEvCode = evCode;
  
  const res = await apiPoster.querySectionEvents(evCode,20);
    if(res.code == 200){
     
      secCalendar.posterDatas =  res.data;
      secCalendar.evGroup = getPosterData(secCalendar.posterDatas);
    }
  
    calBarSlider.value.changePageState(0);
  
}


</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
</style>
