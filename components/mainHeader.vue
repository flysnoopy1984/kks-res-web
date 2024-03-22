<template>
    <div id="header-container">
        <header id="header-compact-v3">
            <div class="logoWrapper">
                <div class="web-logo"></div>
                <div style="margin-top:10px">
                    <div class="logo-text">卡卡送</div>
                    <div class="web-des">为您提供最贴心的祝福</div>
                </div>
            
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
      { name: 'description', content: '祝福 海报 节日 贺卡' },
      { name: 'charset', content: 'utf-8' }

   ],
})

// const openId = useUserInfo().openId;
// const href = "/person/"+openId;

</script>
