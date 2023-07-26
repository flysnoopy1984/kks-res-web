<template>
    <div>
        <!-- {{ $route.params.group }}
        {{ $route.params.openId }} -->
        <div class="userInfoContainer" v-show="userInfo.openId!=null">
          <p>
            <n-avatar
              size="large"
              :src=userInfo.headImgUrl
            /></p>
          <p>nickname: {{userInfo.nickName}}</p>
          <p>sex: {{userInfo.sex}}</p>
          <p>city: {{userInfo.city }}</p>
          <p>province: {{userInfo.province}}</p>
      </div>
      <div>
         
      </div>
    </div>
</template>
<script setup>
import { NAvatar } from 'naive-ui'
definePageMeta({
    layout: 'person'
})



const userInfo = useUserInfo().value; 




console.log("openId",userInfo.openid);
const b= userInfo.openid!=null;

function backToHome(){
    navigateTo("/");
}
</script>
<style scoped>
.userInfoContainer{
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;

}
</style>