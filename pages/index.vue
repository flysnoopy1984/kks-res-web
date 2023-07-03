<template>
    <div>
        <HomeCarousel></HomeCarousel>
        <HomeSectionList></HomeSectionList>
        <div class="divIn">
          <n-button type="info" @click="doLogin">Login</n-button>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'


function doLogin(){

  // const message = useMessage();
  //  message.info("I don't know why nobody told you how to unfold your love");

}
</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
</style>
