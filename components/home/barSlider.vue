<template>
    <div class="barSliderContainer" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <div class="dataContainer">
            <div class="hd" v-if="props.secData!=null">
                <div class="title-section">
                    <h2 class="widget-title">{{props.secData.secName}}</h2>
                    <div class="links">
                        <UButton color="#2F8E9C" variant="link" @click="showMore">
                            查看更多
                            <UIcon name="i-heroicons-document" class="ml-1" />
                        </UButton>

                        <UModal v-model="showKKSMini">
                            <UCard
                                class="w-120 h-120"
                                :ui="{ header: { padding: 'text-center' } }"
                                title="请到小程序查看更多内容">
                                <template #header-icon>
                                    <div class="text-right">
                                        <UButton variant="ghost" class="text-3xl p-4" @click="showKKSMini=false">
                                            <UIcon name="i-heroicons-x-circle" class="text-3xl"/>
                                        </UButton>
                                    </div>
                                </template>
                                <div class="w-full h-[366px] flex justify-center items-center">
                                    <img src="/img/kks_mini_ys.jpg" class="h-[266px] w-[266px]">
                                </div>
                            </UCard>
                        </UModal>
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
                    <div v-if="secData.evGroup[0].length == 0 && pageStatus ==0" class="noDatas">
                        <UEmpty icon="i-heroicons-cloud-x" size="lg" description="暂时没有数据" />
                    </div>

                    <div v-else class="slick-list">    
                        <div class="slick-track" style="opacity: 1;" :style="styleMove">  
                            <div v-if="pageStatus == 1" class="flex">
                                <USkeleton size="lg" class="loadingArea">
                                    <template #description>
                                        数据马上来咯
                                    </template>
                                </USkeleton> 
                            </div>
                            
                            <div v-else :aria-label="gp[0].title" v-for="(gp,index) in secData.evGroup" :key="index" class="slick-slide slick-active" style="outline: none;" :style="gpStyle">
                                <div> 
                                     <!-- 图片显示区域 -->
                                    <div class="brief-works-item" v-for="poster in gp">
                                        <HomeTurnOverCard :poster="poster"></HomeTurnOverCard>
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
import type { pageSectionData } from '@/utils/models';
import type { PropType } from 'vue';

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
    hasLoaded:{
        type:Boolean,
        default:false,
    }
})

/*配置 */

let gpNo = props.secData.evGroup.length ==1?0:-1;
let pageStatus =1;
const moveDistance = props.cfg.gpWidth;
const gpMaxItemNum = props.cfg.gpMaxItemNum; 
const showButton = ref(false);
const showKKSMini = ref(false);

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

if(props.hasLoaded) pageStatus = 0;


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

function showMore(){
    showKKSMini.value = true;
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



.noDatas{
  max-width: 1200px;
  padding-top: 30px;
}

.loadingArea{
    width: 1200px;
    display: flex;
    height: 150px;

    justify-content: center;
}


</style>
