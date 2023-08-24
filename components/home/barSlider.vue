<!--
created by JackySong@2023
-->
<template>
    <div class="barSliderContainer" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <div class="dataContainer">
            <div class="hd" v-if="title!=''">
                <div class="title-section">
                    <h2 class="widget-title">{{title}}</h2>
                    <div class="links">
                        <n-button icon-placement="right" color="#2F8E9C" text tag="a">
                            查看更多
                            <template #icon>
                                <n-icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.05a2.512 2.512 0 0 1 0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9.5a2.49 2.49 0 0 1 1-.45V5a2 2 0 0 0-2-2H5zm11 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zm-1.085-.5a1.497 1.497 0 0 1 0 1a1.5 1.5 0 1 1 0-1zM11 16.5A1.497 1.497 0 0 0 9.5 15a1.5 1.5 0 1 0 1.5 1.5zM6.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-.1-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" fill="currentColor"></path></g></svg>
                                </n-icon>
                            </template>                          
                        </n-button>
                        <!-- <a href="#" class="btn-contained" data-size="s" target="_blank"></a> -->
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

                    <div class="slick-list">    
                        <div class="slick-track" style="width: 12000px; opacity: 1;" :style="styleMove">
                            

                            <div class="slick-slide slick-active slick-current" style="outline: none; width: 1200px;">
                                <div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/b32829350c44eeb046aecc86e18af0dacd23997198fdd-f8OFyN_fw240webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/b32829350c44eeb046aecc86e18af0dacd23997198fdd-f8OFyN_fw240webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/b32829350c44eeb046aecc86e18af0dacd23997198fdd-f8OFyN_fw240webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                    <img src="https://gd-hbimg.huaban.com/b32829350c44eeb046aecc86e18af0dacd23997198fdd-f8OFyN_fw240webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                    <img src="https://gd-hbimg.huaban.com/b32829350c44eeb046aecc86e18af0dacd23997198fdd-f8OFyN_fw240webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                </div>              
                            </div>
                            <!--第二个-->
                            <div class="slick-slide slick-active slick-current" style="outline: none; width: 1200px;">
                                <div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/49b919bbee0b70769db0c4d9283dcb80e85aa0783f9ea-ykDLhM_fw480webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/49b919bbee0b70769db0c4d9283dcb80e85aa0783f9ea-ykDLhM_fw480webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/b32829350c44eeb046aecc86e18af0dacd23997198fdd-f8OFyN_fw240webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/efc4503a3f9582e5afbd5d006d7674f9aeb12e606cc31-6ubQbc_fw480webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/b3dfcc54072a5e4230c236332deb37392b931fdc2dfce-UKmlQd_fw240webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                </div>              
                            </div>
                            <!--第三个-->
                            <div class="slick-slide slick-active slick-current" style="outline: none; width: 1200px;">
                                <div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/49b919bbee0b70769db0c4d9283dcb80e85aa0783f9ea-ykDLhM_fw480webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/49b919bbee0b70769db0c4d9283dcb80e85aa0783f9ea-ykDLhM_fw480webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/b32829350c44eeb046aecc86e18af0dacd23997198fdd-f8OFyN_fw240webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                    <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/efc4503a3f9582e5afbd5d006d7674f9aeb12e606cc31-6ubQbc_fw480webp">
                                                </template>
                                            卡片内容
                                        </n-card>
                                    </div>
                                <div class="works-item brief-works-item">
                                        <n-card title="带封面的卡片">
                                                <template #cover>
                                                <img src="https://gd-hbimg.huaban.com/b3dfcc54072a5e4230c236332deb37392b931fdc2dfce-UKmlQd_fw240webp">
                                                </template>
                                            卡片内容
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

<script setup>
import { NCard,NButton,NIcon } from 'naive-ui';

defineProps({
    title:{
        type:String,
        default:"",
    }
})
let curPosX = 0;
const moveDistance = 1200;
const showButton = ref(false);

const styleMove = reactive({
    transform: "translate3d("+curPosX+"px, 0, 0)",
    transition: "all .5s ease",
});

function slideLeft(){
    curPosX+=moveDistance;
    styleMove.transform = "translate3d("+curPosX+"px, 0, 0)";
}
function slideRight() {
    curPosX-=moveDistance;
    styleMove.transform = "translate3d("+curPosX+"px, 0, 0)";
}
function mouseEnter(){
    showButton.value=true;
}

function mouseLeave(){
    showButton.value=false;
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



</style>