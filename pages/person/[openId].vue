<template>
    <div>
        <div class="userInfoContainer" v-if="userInfo!=undefined">
          <div v-if="openIdError == true">
            <h1>走错咯，请返回主页</h1>
            <UButton color="primary" @click="nav.toHome()">返回主页</UButton>
          </div>
          <div v-else>
            <p>
              <UAvatar
                size="lg"
                :src="userInfo.headImgUrl"
              />
            </p>
            <p>nickname: {{userInfo.nickName}}</p>
            <p>sex: {{userInfo.sex}}</p>
            <p>city: {{userInfo.city }}</p>
            <p>province: {{userInfo.province}}</p>
            <div>
                <UButton color="primary" @click="nav.toHome()">返回主页</UButton>
            </div>
          </div>
        </div>
        <div v-else>
          <UButton color="primary" @click="nav.toWxLogin()">返回登陆</UButton>
        </div>   
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'person',
})

const userInfo = useUserInfo().value; 
let openIdError = false;
const route = useRoute()

if(route.params.openId != userInfo.openId){
  openIdError = true;
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
