<template>
    <div>
        <!-- {{ $route.params.group }}
        {{ $route.params.openId }} -->
        <div class="userInfoContainer">
          <p>
            <n-avatar
              size="large"
              :src=userInfo.headimgurl
            /></p>
          <p>nickname: {{userInfo.nickname}}</p>
          <p>sex: {{userInfo.sex}}</p>
          <p>city: {{userInfo.city }}</p>
          <p>province: {{userInfo.province}}</p>
      </div>
      <div>
         
      </div>
    </div>
</template>
<script setup>
import { NButton } from 'naive-ui'
definePageMeta({
    layout: 'person'
})

userInfo = 


backToHome = ()=>{
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