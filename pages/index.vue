<template>
    <div>
        <HomeBanner></HomeBanner>
        
        <div>
          <!-- <HomeBarSlider></HomeBarSlider> -->
    
          <!-- <div class="divIn">
            <n-button type="warning" @click="doTestAny">TestAny</n-button>
          </div> -->
          <template v-if="secList.length>0">
            <LazyHomeBarSlider v-for="secEV in secList" :title="secEV.secName">            
            </LazyHomeBarSlider>
          </template>
        
          <!-- <span v-for="secEV in secList" :key="secEV.secCode">{{ secEV.secName }}</span>  -->
       
        </div>
      
    </div>
</template>

<script setup lang="ts">
import { NButton,useMessage } from 'naive-ui'
import apiWebData from '@/zfApi/apiWebData';
import {pageSection,pageSectionEvent} from '@/utils/models'

const appConfig = useAppConfig();

let secList = ref<pageSection[]>([]);
let secEventList= ref<pageSectionEvent[]>([]);

// let secList:pageSection[] = []; 
// let secEventList:pageSectionEvent[]= [];

initPage();
//微信登陆
async function doWxLogin(){
  nav.toWxLogin();
}

// async function initPage() {
//   const message = useMessage();
//   var res = await apiWebData.querySectionEvents(tools.currentYear());
  
//   let hash = new Map(); 
//   if(res.code == 200){
//     if(res.data!=undefined){
//       secEventList =  res.data;    
//       secEventList.forEach((item)=>{
//         const sec:pageSection = {
//           secCode : item.secCode,
//           secName: item.secName
//         } 
//         hash.set(item.secCode,sec);
//       })
//       secList = [...hash.values()]
//     }
//   }
//   else{
//     message.error(res.msg);
//   }
// }

//加载栏目，栏目中对应的Item（祝福海报）
async function initPage() {
  const message = useMessage();

  //请求Section和相关事件
  //请求每个事件的相关Poster
  var res = await apiWebData.querySectionEvents(tools.currentYear());
  let hash = new Map(); 
  if(res.code == 200){
    console.log(res.data);
    if(res.data!=undefined){

      secEventList.value =  res.data;    
      secEventList.value.forEach((item)=>{
        const sec:pageSection = {
          secCode : item.secCode,
          secName: item.secName
        } 
        hash.set(item.secCode,sec);
      })
      secList.value = [...hash.values()]
    }
  }
  else{
    message.error(res.msg);
  }
}

/* Test */
async function doTestAny(){ 
  navigateTo("/my/amTest");
}

</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
</style>
