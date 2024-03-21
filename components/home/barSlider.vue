<!--
created by JackySong@2023
-->
<template>
    <div class="barSliderContainer" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <div class="dataContainer">
            <div class="hd" v-if="props.secData!=null">
                <div class="title-section">
                    <h2 class="widget-title">{{props.secData.secName}}</h2>
                    <div class="links">
                        <n-button icon-placement="right" color="#2F8E9C" text tag="a">
                            查看更多
                            <template #icon>
                                <n-icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.05a2.512 2.512 0 0 1 0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9.5a2.49 2.49 0 0 1 1-.45V5a2 2 0 0 0-2-2H5zm11 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zm-1.085-.5a1.497 1.497 0 0 1 0 1a1.5 1.5 0 1 1 0-1zM11 16.5A1.497 1.497 0 0 0 9.5 15a1.5 1.5 0 1 0 1.5 1.5zM6.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-.1-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" fill="currentColor"></path></g></svg>
                                </n-icon>
                            </template>                          
                        </n-button>
                    </div>
                </div>
            </div>

            <div class="bd">
                <div class="my-slider slick-slider works-showcase slick-initialized">
                    <Transition name="btn-left">
                        <button v-show="showButton" @click="slideLeft" class="slick-arrow slick-prev fill-current-color" aria-label="上一页" style="display: block;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14">
                                <path fill="#FFF" d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
                            </svg>
                        </button>
                    </Transition>
                    <div v-if="secData.evGroup[0].length == 0" class="noDatas">
                        <n-empty size="huge" description="暂时没有数据">
                            <template #icon>
                                <n-icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M10 2c2.817 0 4.415 1.923 4.647 4.246h.07C16.532 6.246 18 7.758 18 9.623c0 .095-.004.19-.011.283A5.75 5.75 0 0 0 7.772 13h-2.49C3.469 13 2 11.488 2 9.623c0-1.865 1.47-3.377 3.282-3.377h.071C5.587 3.908 7.183 2 10 2zm8 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0zm-2.646-1.146a.5.5 0 0 0-.708-.708L13.5 12.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L14.207 13.5l1.147-1.146z" fill="currentColor"></path></g></svg>
                                </n-icon>
                            </template>
                        </n-empty>
                    </div>

                    <div v-else class="slick-list">    
                        <div class="slick-track" style="opacity: 1;" :style="styleMove">  
                            <n-space v-if="pageStatus == 1">
                                <div class="works-item brief-works-item" v-for="n in gpMaxItemNum">
                                    <n-skeleton width="190px" height="250px" :sharp="false" />
                                </div>
                            </n-space>
                            
                            <div v-else :aria-label="gp[0].title" v-for="(gp,index) in secData.evGroup" :key="index" class="slick-slide slick-active" style="outline: none;" :style="gpStyle">
                                <div> 
                                    <div class="works-item brief-works-item" v-for="poster in gp">        
                                        <n-card :title="poster.title">
                                            <template #cover>
                                                <img @error="errorImg" v-lazy="poster.url">
                                            </template>
                                        </n-card>
                                    </div>
                                </div>  
                            </div>                          
                        </div>                            
                    </div>
                    <Transition name="btn-right">
                        <button v-show="showButton" @click="slideRight" class="slick-arrow slick-next fill-current-color" aria-label="下一页" style="display: block;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14" style="transform: scaleX(-1);">
                                <path fill="#FFF" d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
                            </svg>
                        </button>
                    </Transition>           
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { NCard,NButton,NIcon,NEmpty,NSkeleton,NSpace } from 'naive-ui';
import { pageSectionData } from 'utils/models';
import type { PropType } from 'vue'

const props = defineProps({
    cfg:{
        type:Object,
        default:{
            totalwidth:12000,
            gpWidth:1200,
            gpMaxItemNum:5,
            trans:"all .5s ease"
        }
    },

    secData:{
        type: Object as PropType<pageSectionData>,
        required: true
    },
})

debugger
/*配置 */

let gpNo = props.secData.evGroup.length ==1?0:-1;
let pageStatus =0;
const moveDistance = props.cfg.gpWidth;
const gpMaxItemNum = props.cfg.gpMaxItemNum; 
const showButton = ref(false);

const styleMove = reactive({
    transform: "translate3d("+curPosX()+"px, 0, 0)",
    transition: props.cfg.trans,
    width: props.cfg.totalwidth+"px",
});

const gpStyle = {
    width: props.cfg.gpWidth+"px",
}

defineExpose({
    changePageState
})



function changePageState(status:number){
    
 
    //loading
    if(status>0){
        gpNo = 0;
        moveSlide("none");
        pageStatus = 1;
       
    }
   
    //load done
    else{
        gpNo =props.secData.evGroup.length ==1?0:-1;
        moveSlide("none");   
        pageStatus = 0;
    }    
}



function curPosX(){ 
    const curX =  gpNo*moveDistance;
    return curX;
}

function moveSlide(trans:String){
    styleMove.transition = trans;
    styleMove.transform = "translate3d("+curPosX()+"px, 0, 0)";
}

function slideLeft(){

    gpNo++;
    moveSlide(props.cfg.trans);

    if(gpNo == 0){
        setTimeout(function() {
            gpNo-= (props.secData.evGroup.length/2);
            moveSlide("none");
        }, 700);        
    }
}

function slideRight() {  
   
    gpNo--; 
    moveSlide(props.cfg.trans);

    if(gpNo % (props.secData.evGroup.length/2) == -1 && gpNo!=-2){
        setTimeout(function() {
            gpNo = -1; 
            moveSlide("none");
        }, 700);
    } 
}

function mouseEnter(){
   // debugger
    if(props.secData.evGroup.length>1 )
        showButton.value=true;
}

function mouseLeave(){
    showButton.value=false;
}
/*图片错误处理 */
function errorImg(e:any){
    console.log("error:",e);
    
}

</script>
<style scoped>
@import url('@/assets/css/barSlider.css');
/* swipe 动画*/
.move-right{
    transform: translate3d(1000px, 0, 0);
    transition: all .5s ease;
} 
.move-left{
    transform: translate3d(0px, 0, 0);
    transition: all .5s ease;
}

/*按钮动画 */

.btn-left-leave-active,
.btn-left-enter-active {
  transition: all 0.5s ease;
  transform: translateX(0);

}
.btn-left-enter-from,
.btn-left-leave-to {
    transition: all 0.5s ease;
    transform: translateX(-25px);
    opacity: 0;
}

.btn-right-leave-active,
.btn-right-enter-active {
  transition: all 0.5s ease;
  transform: translateX(0);
 

}
.btn-right-enter-from,
.btn-right-leave-to {
    transition: all 0.5s ease;
    transform: translateX(25px);
    opacity: 0;
}
/* 动画结束 */


/* 按钮 -- 更多链接 */
.btn-contained {
    display: inline-block;
    border: none;
    border-radius: 4px;
    background: var(--white);
    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    color: var(--grayBlack);
    padding: 0 14px;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
}


.n-card {
  max-width: 220px;
  max-height: 350px;  
  border-radius: 8px;  
}
.noDatas{
  max-width: 1200px;
  padding-top: 30px;
}
img[lazy=error]{
    background-image: url('/assets/img/error.svg');
    background-position: center center;
    background-size: 20%;
    background-repeat: no-repeat;
    opacity: 0.1;
    height: 370px;
}
img[lazy=loading]{
    background-image: url('/assets/img/loading.svg');
    background-position: center center;
    background-size: 20%;
    background-repeat: no-repeat;
    opacity: 0.1;
    height: 370px;
}


</style>