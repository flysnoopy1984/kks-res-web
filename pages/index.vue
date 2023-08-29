<template>
    <div>
        <!-- <HomeBanner></HomeBanner> -->
        <HomeCalendarLine></HomeCalendarLine>
        <div>
          <!-- <HomeBarSlider></HomeBarSlider> -->
    
          <!-- <div class="divIn">
            <n-button type="warning" @click="doTestAny">TestAny</n-button>
          </div> -->
       
          <template v-if="secList.length>0">
            <LazyHomeBarSlider v-for="secEV in secList" :section="secEV" style="padding-bottom: 60px;">            
            </LazyHomeBarSlider>    
          </template>       
        </div>
      
    </div>
</template>

<script setup lang="ts">
import {useMessage } from 'naive-ui'
import apiWebData from '@/zfApi/apiWebData';
import {pageSection} from '@/utils/models'

const appConfig = useAppConfig();

let secList = ref<pageSection[]>([]);
const message = useMessage();
const pageData = usePageCommData().value;

let eventCodes:string[] = []; // 当获取好Section所有事件后，获取首页需要最先显示的海报事件Codes

//Section Events
if(pageData.pageSection.length==0){
  //请求Section和相关事件
  const res = await apiWebData.querySectionEvents(tools.currentYear());
  if(res.code == 200){

    if(res.data!=undefined){
        let gotCalenderEvent = false;
        /*设置 state Section Events */
        res.data.forEach((item,index)=>{

          const secEvents = pageData.pageSectionEvent.get(item.secCode);
          /* 设置显示内容 */
          item.weekDay = tools.weekDay(item.ecStartDate);
          item.diffNow = tools.diffDay(item.ecStartDate);
          //非日历事件需要查询海报
          if(item.evType>0) eventCodes.push(item.evCode);
          //找到当前日历事件
          if(item.diffNow>=0 && item.evType ==0 && gotCalenderEvent==false) {
            eventCodes.push(item.evCode);
            pageData.curCalendarEventIndex = index;
            gotCalenderEvent= true;
          }
        
          if(secEvents == undefined){
            pageData.pageSectionEvent.set(item.secCode,[item]);
            pageData.pageSection.push({
               secCode : item.secCode,
               secName: item.secName
            });
          }      
          else
              secEvents.push(item);
        });
      }
  
  }
  else{ 
    message.error(res.msg);
  }
}
if(pageData.pageSectionEvent.size>0){
  secList.value = pageData.pageSection;
}

//获取首页的Event Poster 
async function queryHomePoster() {

  const res = await apiWebData.queryHomePoster(eventCodes);
  // console.log("queryHomePoster:",res);

  if(process.server){
      res.data?.forEach((item)=>{
      
      const evPosters =  pageData.pageHomePoster.get(item.defaultEvent);

      if(evPosters == undefined){
        pageData.pageHomePoster.set(item.defaultEvent,[item]);
      }
      else{
        evPosters.push(item);
      }
    });

  }
  

}
queryHomePoster();




</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
</style>
