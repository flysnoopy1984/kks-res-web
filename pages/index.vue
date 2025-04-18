<template>
    <div>
      <HomeCalendarLine @select-event="selectEvent"></HomeCalendarLine>
      
      <HomeBarSlider  ref="calBarSlider" :sec-data="secCalendar" style="padding-bottom: 40px;"></HomeBarSlider>  
      <HomeBarSlider v-for="sec in sdList" :sec-data="sec" :has-loaded=true style="padding-bottom: 60px;">            
      </HomeBarSlider>   
     
    </div>
</template>

<script setup lang="ts">
// import {useMessage } from 'naive-ui'
import apiWebData from '@/zfApi/apiWebData';
import apiPoster from '@/zfApi/apiPoster';
import type {pageSectionData,pageEventPoster,ResComm,pageSectionEvent,homeData} from '@/utils/models'

let sdList = reactive<pageSectionData[]>([]);

let secCalendar = reactive<pageSectionData>({
  secName: "热点日历",
  secCode: "hotCalendar",
  curEvCode :"",
  isCalendar :true,
  evGroup :[[]],
  posterDatas:[]
});


const calBarSlider= ref();
// 不使用toast，直接移除原来的message变量
// const toast = useToast();
let eventCodes:string[] = []; // 当获取好Section所有事件后，获取首页需要最先显示的海报事件Codes
const secMap = new Map<string,pageSectionEvent[]>();

initSectionPoster();

//组织Poster数据,为了bar EventGroup 
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

//CalendarLine 选择日历组件后，更新滑动组件
async function selectEvent(evCode:string){

    //修改加载数据状态
    console.log("select Event:",calBarSlider);
    if(calBarSlider.value!=undefined){
     
    //  debugger
      calBarSlider.value.changePageState(1);
      //当前事件
      secCalendar.curEvCode = evCode;
      
      
      let res = await apiPoster.queryPosterByEvCode(evCode,1,20);
      
      if(res!=undefined){
          res = res as ResComm<pageEventPoster[]>
          if(res.code == 200){
          
          secCalendar.posterDatas =  res.data as pageEventPoster[];
          secCalendar.evGroup = getPosterData(secCalendar.posterDatas);
        }
      
        calBarSlider.value.changePageState(0);
      }
    }
}
/**查询除日历外的其他栏目海报 */
async function  initSectionPoster(){

if(useSectionData().value.length ==0){
  const res = await apiWebData.queryHomeData() as ResComm<homeData[]>;
    if(res.code == 200){
        const dataList = res.data as homeData[];
        dataList.forEach((item:homeData)=>{
          const sd:pageSectionData ={
              secCode: item.sectionCode,
              secName: item.sectionName,
              evGroup :getPosterData(item.posterList),
              // evGroupPoster: [[]],
              posterDatas:item.posterList,
            }
            // sd.evGroup = getPosterData(sd.posterDatas);
 
          sdList.push(sd);
        })
        if(process.client)
          useSectionData().value =sdList;
    }
}
else
  sdList = useSectionData().value;
 
}

onMounted(() => {
  
})

</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
.loadingPage{
  width:100%
}
</style>
