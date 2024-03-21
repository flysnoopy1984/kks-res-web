<template>
    <div id="header-container">
        <header id="header-compact-v3" class="header-original should-stick">
            <div class="header-inner">
                <div class="web-logo"></div>
            </div>
        </header>
    </div>
</template>
<script setup>
import '~/assets/css/css-variable-generator.css'
import '~/assets/css/mainHeader.css'
// import '~/assets/css/header-compact.css'

useHead({
   title: '呀哈哈，福到了',
   meta:[
      { name: 'description', content: '贺卡 送祝福 海报' },
      { name: 'charset', content: 'utf-8' }

   ],
})

// const openId = useUserInfo().openId;
// const href = "/person/"+openId;

</script>
<style scoped>
.web-logo{
    background-image: url();
}
</style>