<!--
created by JackySong@2023
-->
<template>
    <div>
        <div class="op">
            <n-button size="tiny" type="primary" @click="slideLeft">
            Left
            </n-button>
            <n-button size="tiny" type="info" @click="slideRight">
            Right
            </n-button>
        </div>
        <div calss="moveCap">
            <!-- <div class="moveTrack" :class="{'move-right':moveRight,'move-left':moveLeft}"> -->
            <div class="moveTrack" :style="styleMove" >
            <div class="moveList" >
                <div class="moveItem">
                    移1
                </div> 
                <div  class="moveItem">
                    移2
                </div>
                <div  class="moveItem">
                    移3
                </div>
                <div  class="moveItem">
                    移4
                </div>
                <div  class="moveItem">
                    移5
                </div>
            </div>  
            <div class="moveList">
                <div class="moveItem m2">
                    移1
                </div> 
                <div  class="moveItem m2">
                    移2
                </div>
                <div  class="moveItem m2">
                    移3
                </div>
                <div  class="moveItem m2">
                    移4
                </div>
                <div  class="moveItem m2">
                    移5
                </div>
            </div>                 
        </div>  
        </div>
      
       
       
        <!-- <div class="moveTrack">
            <Transition name="move">      
            <div class="moveList" v-if="show">
                <div class="moveItem">
                    移1
                </div> 
                <div  class="moveItem">
                    移2
                </div>
                <div  class="moveItem">
                    移3
                </div>
                <div  class="moveItem">
                    移4
                </div>
                <div  class="moveItem">
                    移5
                </div>
            </div>  
            </Transition>
            <div class="moveList">
                <div class="moveItem moveItem2">
                    移1
                </div> 
                <div  class="moveItem moveItem2">
                    移2
                </div>
                <div  class="moveItem moveItem2">
                    移3
                </div>
                <div  class="moveItem moveItem2">
                    移4
                </div>
                <div  class="moveItem moveItem2">
                    移5
                </div>
            </div>              
        </div> -->
       
       
        <div class="area">
            <n-button size="tiny" type="warning" @click="doTroggle">Toggle</n-button>
           
            <Transition name="first">
                <p v-if="show">hello</p>
            </Transition>
          
        </div>
     
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'test'
})

import { NButton } from 'naive-ui'
import { ref } from 'vue'
const show = ref(true);
const moveLeft = ref(false);
const moveRight =ref(false);

let curPosX = 0;

const styleMove = reactive({
    transform: "translate3d("+curPosX+"px, 0, 0)",
    transition: "all .5s ease",
});

let moveDir = "moveLeft";

async function doTroggle(){
    show.value = !show.value
}
async function slideLeft(){
    moveDir = "moveLeft";

    
    curPosX-=1000;
    styleMove.transform = "translate3d("+curPosX+"px, 0, 0)";

    moveRight.value = false;
    moveLeft.value = true;
   show.value = !show.value
}
async function slideRight() {
    // moveDir = "moveRight";
    // moveRight.value = true;
    // moveLeft.value = false;
    // debugger
    curPosX+=1000;
    styleMove.transform = "translate3d("+curPosX+"px, 0, 0)";
    show.value = !show.value
}
</script>
<style scoped>
.area{
    margin: 10px;
}
.op{
    margin: 20px;
    display: flex;
    justify-content: space-around;
    width: 150px;
}
.moveCap{
    position: relative;
	display: block;
	overflow: hidden;
	margin: 0;
	padding: 0;
    width: 1200px;

}
.moveTrack{
    display: flex;
 
    
}
.moveList{
    display: flex;
    transform: translate3d(0px,0,0);
}
.moveList >div{
    margin-left: 10px;
    margin-right:15px;
}
.moveItem{
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(244, 207, 139);
    width: 200px;
    height: 250px;
    transform: translate3d(0px,0,0);
}
.m2{
    background-color: rgb(136, 246, 156);
}

 .move-enter-active{
    transform: translate3d(0px,0,0);
 
    transition: all .5s ease;
}
.move-leave-to{
    transform: translate3d(-1000px,0,0);
    transition: all .5s ease;
} 

.moveleft-enter-active{
    transform: translate3d(0px, 0, 0);
    transition: all .5s ease
}

.move-right{
    transform: translate3d(1000px, 0, 0);
    transition: all .5s ease;
} 
.move-left{
    transform: translate3d(0px, 0, 0);
    transition: all .5s ease
}

/*first css */

.first-leave-active{
    transition: opacity 0.5s ease;
    
    transform: translate3d(0, 0, 0);
}
.first-leave-to {
  opacity: 0;
  transition: all 1.5s;
  transform: translate3d(100px, 0, 0);
}



</style>