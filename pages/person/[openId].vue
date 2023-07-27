<template>
    <div>
        <!-- {{ $route.params.group }}
        {{ $route.params.openId }} -->
        <div class="userInfoContainer" v-if="userInfo!=undefined">
            <p>
              <n-avatar
                size="large"
                :src=userInfo.headImgUrl
              /></p>
            <p>nickname: {{userInfo.nickName}}</p>
            <p>sex: {{userInfo.sex}}</p>
            <p>city: {{userInfo.city }}</p>
            <p>province: {{userInfo.province}}</p>
            <div>
                <n-button type="primary" @click="nav.toHome()">返回主页</n-button>
            </div>
        </div>
        <div v-else>
          <n-button type="primary" @click="nav.tojsTest()">返回登陆</n-button>
        </div>
     
     
     
    </div>
</template>
<script setup>
import { NAvatar } from 'naive-ui'
import { NButton } from 'naive-ui'
definePageMeta({
    layout: 'person',
    
})

 const userInfo = useUserInfo().value; 
// if(userInfo == undefined){
//     nav.toWxLogin();
// }



</script>
<style scoped>
.userInfoContainer{
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;

}
</style>