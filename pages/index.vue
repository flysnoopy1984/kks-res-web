<template>
    <div>
        <HomeBanner></HomeBanner>
        
        <div>
          <HomeBarSlider></HomeBarSlider>
    
          <!-- <div class="divIn">
            <n-button type="warning" @click="doTestAny">TestAny</n-button>
          </div> -->
          <HomeSectionArea bk-color="#b0f2fb" title="当下流行"></HomeSectionArea>
          <HomeSectionArea></HomeSectionArea>
        </div>
      
    </div>
</template>

<script setup>
// import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'

const appConfig = useAppConfig();

//微信登陆
async function doWxLogin(){
 
  nav.toWxLogin();
}

//加载栏目，栏目中对应的Item（祝福海报）
async function initPage() {

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
