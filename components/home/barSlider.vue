<!--
created by JackySong@2023
-->
<template>
    <div class="barSliderContainer">
    <!-- <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
        <symbol id="ic_chevron_left" viewBox="0 0 1024 1024"><path d="M641.450667 266.666667a42.666667 42.666667 0 0 0-60.330667 0l-215.125333 215.168a42.666667 42.666667 0 0 0 0 60.330666l215.125333 215.125334a42.666667 42.666667 0 0 0 60.330667-60.330667L456.490667 512l184.96-184.96a42.666667 42.666667 0 0 0 0-60.330667z"></path></symbol>
        <symbol id="ic_chevron_right" viewBox="0 0 1024 1024"><path d="M427.605333 266.666667a42.666667 42.666667 0 0 1 60.330667 0l215.125333 215.168a42.666667 42.666667 0 0 1 0 60.330666l-215.125333 215.125334a42.666667 42.666667 0 0 1-60.330667-60.330667L612.565333 512l-184.96-184.96a42.666667 42.666667 0 0 1 0-60.330667z"></path></symbol>
    </svg> -->
    
        <div class="hd">
            <div class="title-section">
                <h2 class="widget-title">当前热需</h2>
                <div class="links">
                    <a href="#" class="btn-contained" data-size="s" target="_blank">查看更多</a>
                </div>
            </div>
        </div>
        <div class="bd">
            <div class="my-slider slick-slider works-showcase slick-initialized">

                <button @click="slideLeft" class="slick-arrow slick-prev fill-current-color" aria-label="上一页" style="display: block;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14">
                        <path fill="#FFF" d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
                    </svg>
                </button>

                <div class="slick-list">    
                    <div class="slick-track" style="width: 10800px; opacity: 1;" :style="styleMove">
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
                <button @click="slideRight" class="slick-arrow slick-next fill-current-color" aria-label="下一页" style="display: block;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14" style="transform: scaleX(-1);">
                        <path fill="#FFF" d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
                    </svg>
                </button>
                </div>
        </div>
    </div>
</template>

<script setup>
import { NCard } from 'naive-ui';
let curPosX = 0;
const moveDistance = 1200;

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

</script>
<style scoped>
/* swipe 动画*/

.move-right{
    transform: translate3d(1000px, 0, 0);
    transition: all .5s ease;
} 
.move-left{
    transform: translate3d(0px, 0, 0);
    transition: all .5s ease
}


.n-card {
  max-width: 220px;
  max-height: 350px;  
  border-radius: 8px;  
}
.barSliderContainer{
    box-sizing: content-box;
    margin-right: auto;
    margin-left: auto;
    padding-right: 60px;
    padding-left: 60px;
    max-width: 1200px;
    margin-top: 20px;
    /* width: 100%;
    display: flex;
    justify-content: center; */
}
/* list */
.slick-list {
	position: relative;
	display: block;
	overflow: hidden;
	margin: 0;
	padding: 0
}

.slick-list:focus {
	outline: none
}

.slick-list.dragging {
	cursor: pointer;
	cursor: hand
}

.slick-slider .slick-track,
.slick-slider .slick-list {
	transform: translate3d(0, 0, 0)
}


/* track */
.slick-track {
	position: relative;
	top: 0;
	left: 0;
	display: block;
	margin-right: auto;
	margin-left: auto;

}

.slick-track:before,
.slick-track:after {
	display: table;
	content: ''
}

.slick-track:after {
	clear: both
}

.slick-loading .slick-track {
	visibility: hidden
}

.my-slider{
    width: 1200px;
    /* margin: 20px; */
    padding: 20px;
    background-color: #fff8e8;

}
.works-showcase .slick-slide>div {
	display: flex
}
.slick-initialized .slick-slide {
	display: block
}
.slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

/* slide */

.slick-slide {
	float: left;
	min-height: 1px;
	height: 100%;
	display: none
}

.slick-slide img {
	display: block
}

.slick-slide.slick-loading img {
	display: none
}

.slick-slide.dragging img {
	pointer-events: none
}

[dir='rtl'] .slick-slide {
	float: right
}

.slick-initialized .slick-slide {
	display: block
}

.slick-loading .slick-slide {
	visibility: hidden
}

.slick-vertical .slick-slide {
	display: block;
	height: auto;
	border: 1px solid transparent
}

.slick-arrow.slick-hidden {
	display: none
}

.slick-slide,
.slick-slider .slick-track,
.slick-slider .slick-list {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden
}
.slick-arrow.slick-hidden {
	display: none
}


.slick-prev,
.slick-next {
	width: 40px;
	height: 40px;
	position: absolute;
	top: 50%;
	z-index: 10;
	margin-top: -20px;
	border: none;
	border-radius: 40px;
	background: var(--white);
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
	color: var(--grayBlack);
	transform: translate(0, -50%)
}

.slick-prev svg,
.slick-next svg {
	vertical-align: -3px
}

.slick-prev:hover,
.slick-next:hover {
	background: #389eac;
	box-shadow: none;
	color: #fff
}

.slick-prev {
	left: -45px
}

.slick-prev svg {
	margin-left: -1px
}

.slick-next {
	right: -45px
}

.slick-next svg {
	margin-left: 1px
}
.fill-current-color path,.fill-current-color circle,.fill-current-color polygon {
    fill: currentColor
}


.works-showcase .slick-slide > div {
    display: flex;
}

.brief-works-item {
	display: inline-flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 40px 20px 0;
	min-height: 373.5px;
	width: 20%;
	vertical-align: top;
	line-height: 1
}
.brief-works-item .cover {
	width: 120px;
	height: 180px;
	margin-bottom: 15px
}
.brief-works-item .cover .cover-label::before {
	top: 23px;
	right: 23px;
	width: 131px;
	height: 36px;
	font-size: 24px;
	line-height: 36px;
	transform: translate(50%, -100%) rotate(45deg) scale(.5)
}

.brief-works-item .cover .cover-label.limited-vip-can-read-label::before {
	font-size: 20px
}

.shadow-cover {
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2)
}

.barSliderContainer .widget-title {
	font-weight: bold;
	font-size: 24px;
	line-height: 1
}

.barSliderContainer .title-section {
	display: flex;
	justify-content: space-between;
	align-items: center
}

.gbarSliderContainer .links {
	margin-left: auto
}

.barSliderContainer .links a {
	margin-left: 8px
}

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


</style>