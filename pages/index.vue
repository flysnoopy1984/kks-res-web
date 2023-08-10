<template>
    <div>
        <HomeBanner></HomeBanner>
        
        <div>
          <HomeBarSlider></HomeBarSlider>
    
          <!-- <div class="divIn">
            <n-button type="warning" @click="doTestAny">TestAny</n-button>
          </div> -->
          <!-- <HomeSectionArea bk-color="#b0f2fb" title="当下流行"></HomeSectionArea> -->

          <HomeSectionArea v-for="secEV in secList" :title="secEV.secName">            
          </HomeSectionArea>
        </div>
      
    </div>
</template>

<script setup lang="ts">
import { NButton,useMessage } from 'naive-ui'
import apiWebData from '@/zfApi/apiWebData';
import {pageSection,pageSectionEvent} from '@/utils/models'

const appConfig = useAppConfig();

const secList = ref<pageSection[]>([]);
  
const secEventList= ref<pageSectionEvent[]>([]);

initPage();
//微信登陆
async function doWxLogin(){
  nav.toWxLogin();
}

//加载栏目，栏目中对应的Item（祝福海报）
async function initPage() {
  const message = useMessage();
  var res = await apiWebData.querySectionEvents(tools.currentYear());
  let hash = new Map(); 
  if(res.code == 200){
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
