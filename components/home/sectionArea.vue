<!-- 显示栏目区域 -->
<!--
created by JackySong@2023
-->
<template>
    <div class="sectionArea">
         <div class="title">{{ title }}</div>
         <div class="content">

         </div>
    </div>
</template>

<script setup>


defineProps({
    bkColor:{
        type: String,
        default:"#fffcf6"
    },
    title:{
        type:String,
    }
})



</script>
<style scoped>

.sectionArea{
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
   
   
}
.sectionArea .title{
    height: 40px;
    line-height: 40px;
    margin: 15px;
    font-size: 22px;
    /* background-color: rgb(190, 255, 251); */
}
.sectionArea .content{

    height: 400px;
    background-color: v-bind('bkColor'); 
}

</style>