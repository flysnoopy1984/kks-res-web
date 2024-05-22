<!--
created by JackySong@2023
-->

<template>
    <div>
        <n-spin size="large"  class="loadingArea">
            <!-- <template #description>
                
            </template> -->
        </n-spin> 
    </div>
</template>

<script setup>
definePageMeta({
    layout:'blank'
})
import {NSpin } from 'naive-ui';
import apiMini from '@/zfApi/apiMini';

init();

//test Url:"weixin://dl/business/?t=NODlKue4yai"

function init(){
    const route = useRoute();
    const scheme = route.query.scheme;
    const posterId =route.query.posterId;

    if(posterId !=undefined){
            let req = {}
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
            else if(posterId = "section"){
                req = {
                    "jump_wxa":
                    {
                        "path": "/pages/home/home_section",
                        "query": "sectionCode=dailyInter&sectionName=日常互动",
                        "env_version": "release"
                    }
                }
            }
            else if(posterId = "calendar"){
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

async function reqSchemeUrl(req){

    const res = await apiMini.genUrlScheme(req);
             console.log("res:",res);
    debugger
    if(process.client){
        window.location.href =res.data.openlink;
    }       
    return;
}


</script>
<style scoped>
.loadingArea{
    height:400px;
    
}
</style>