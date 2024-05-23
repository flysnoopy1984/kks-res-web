<!--
created by JackySong@2023
-->

<template>
    <div class="mainContainer">
        <div class="card">
            <div class="signHeader">
                <a class="logo" ></a>
                <div class="titleRow">
                    <div class="title">卡卡送 </div>
                     <div class="web-des">为您提供最贴心的祝福</div>
                     
                </div>
            </div>
            <n-button class="btnLogin" type="info" @click="toMiniApp">
                进入
            </n-button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'blank'
})
import {NSpin,NButton } from 'naive-ui';
import apiMini from '@/zfApi/apiMini';


let req ;
let toUrl = undefined;
init();

//test Url:"weixin://dl/business/?t=NODlKue4yai"

function toMiniApp(){
    // debugger
    if(toUrl == undefined || toUrl=="" )
        init();
    else{
        if(process.client){
            window.location.href =toUrl;
        }      
    }
    
}

function init(){
    const route = useRoute();
    const scheme = route.query.scheme;
    const posterId =route.query.posterId;

    if(posterId !=undefined){
          
            if(posterId == "home"){
                req = {
                    "jump_wxa":
                    {
                        "path": "/pages/home/mainPage",
                        "query": "",
                        "env_version": "release"
                    }
                }
            }
            else if(posterId == "section"){
                req = {
                    "jump_wxa":
                    {
                        "path": "/pages/home/home_section",
                        "query": encodeURI("sectionCode=dailyInter&sectionName=日常互动"),
                        "env_version": "release"
                    }
                }
            }
            else if(posterId == "calendar"){
                req = {
                    "jump_wxa":
                    {
                        "path": "/pages/home/home_calendar",
                        "query": "",
                        "env_version": "release"
                    }
                }
            }
            else{
                req = {
                    "jump_wxa":
                    {
                        "path": "/pages/detail/scan/qr",
                        "query": "scene="+posterId,
                        "env_version": "release"
                    }
                }
             }
        debugger
             reqSchemeUrl(req);
             return;
          
    }

    if(process.client){
        if(scheme !=undefined){
            window.location.href =scheme;
            return;
        }
    }
       
       
}

async function reqSchemeUrl(){
// debugger
    const res = await apiMini.genUrlScheme(req);
             console.log("res:",res);

    if(process.client){
        toUrl = res.data.openlink;
        window.location.href =res.data.openlink;
    }       
    return;
}


</script>
<style scoped>
@font-face{
	font-family: 'aliHealth';
	/* src:url("../fonts/aliHealth-kakasong.ttf"); */
	src:url("@/assets/fonts/kks-aliHealth.ttf");
}
@font-face{
	font-family: 'bxz';
	src:url("@/assets/fonts/kks-biaoxiaozhi.ttf");
}

.mainContainer{
    margin:20px auto;
    display: flex;
    justify-content: center;
}
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.signHeader{
    display: flex;
     justify-content: center;
    
     /* margin-top: 20px; */
}
.signHeader .logo{
    display:inline-block;
    height: 80px;
    width: 100px;
    background: url('/img/kksLogo_128.png')  no-repeat;
    background-size: 80px 80px;
}
.titleRow{
    /* align-self:center; */
    display: flex; 
    flex-direction: column;
    justify-content: space-around;

}
.title{
  
    font-size: 20px;
    font-weight: 700; 
    font-family: 'aliHealth';
    color: #4441A9;
    margin-top:8px;
    /* font-family: "aliHealth", */
}

.web-des{
	font-family: 'bxz';
	letter-spacing: 2px;
	font-size: 14px;
	margin-left: 2px;
    margin-right: 10px;
	color: #61a9b9;
	padding-top: 6px;
}



.loadingArea{
    height:400px;
    width: 100%;

}
.btnLogin{
    margin-top:40px;
    width: 120px;
}
</style>