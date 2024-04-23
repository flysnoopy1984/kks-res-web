<!--
created by JackySong@2023
-->
<template>
    <div class="lineContainer">
        <div class="calSlider" v-if="secEvents!=undefined">
            <div class="calLineData">
                <Transition name="btn-left">
                <button @click="moveLeft" class="calLine_prev fill-current-color" style="display: block;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14">
                        <path fill="#FFF" d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
                    </svg>
                </button>
                </Transition>
                <div class="lineTrack" style="opacity: 1;" :style="styleMove">
                    <div v-for="(ev,index) in secEvents" @click="eventItemSelected(index)" :key="ev.evCode">
                        <div  class="calItem" :class="{selEventItem:ev.selected}">
                            <div>
                                <div class="eventName" :class="{selEventText1:ev.selected}">  {{ ev.evName }}</div>
                                <div class="eventDate" :class="{selEventText2:ev.selected}">
                                    {{ev.weekDay}}
                                </div>
                            </div>
                            <div v-if="ev.diffNow == 0">
                                <span class="eventName" :class="{selEventText1:ev.selected}">今天</span>
                            </div>
                            <div v-else-if="ev.diffNow<0">
                                <span class="eventName overEvent">已过</span>
                            </div>
                            <div v-else>
                                <span class="diffNow" :class="{selEventText2:ev.selected}"> {{ ev.diffNow }}</span>
                                <span class="diffNow-text" :class="{selEventText2:ev.selected}">天后</span>
                            </div>
                        </div>                  
                    </div>
                </div>
                <Transition name="btn-right">
                    <button @click="moveRight" class="calLine_next fill-current-color" aria-label="下一页" style="display: block;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14" style="transform: scaleX(-1);">
                            <path fill="#FFF" d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
                        </svg>
                    </button>
                </Transition>   
            </div>          
        </div>
    </div>
   
</template>

<script setup lang="ts">
import {pageSectionEvent} from '@/utils/models'
import apiWebData from '@/zfApi/apiWebData';
//import { provide } from 'vue'

//const selectEvCode = inject('selectEvCode') as string;

const emit = defineEmits(['selectEvent']);

const props = defineProps({
    secCodeKey:{
        type:String,
        default:"hotCalendar",
    },
})
const cfg = {
    maxEventNum:5
}

//事件数据
const pageData = usePageCommData().value;
//动画相关
let curPosX = 0;
const moveDistance = 1200;
const styleMove = reactive({
    transform: "translate3d("+curPosX+"px, 0, 0)",
    transition: "all .5s ease",
});
let curEventIndex = -1;
let eventsPageCount =0;



 const secEvents = pageData.pageSectionEvent.get(props.secCodeKey) as pageSectionEvent[];
// if(secEvents != undefined){

//     //根据数据计算出，事件最多右滑多少次，数据长度除与5（5为页面显示事件的数量）
//     eventsPageCount = Math.ceil((secEvents.length)/cfg.maxEventNum)-1;

//     //初始化当前选中的事件,获取当前选中事件的Index
//     curEventIndex = pageData.curCalendarEventIndex;

//     //eventItemSelected(curEventIndex);

//     //根据当前index,决定当前滑动到哪个位置
//     if(curEventIndex>-1){
//         const rollNum = Math.floor(curEventIndex/cfg.maxEventNum);
//         curPosX = 0-moveDistance*rollNum;
//         styleMove.transform = "translate3d("+curPosX+"px, 0, 0)";    
//     }

// }
const evCalendarList =  useEventCalendarList().value;
async function init(){
   if(evCalendarList.currentEventIndex == -1){
  //  apiWebData.
   }
}


function moveLeft(){    
    if(curPosX <0){
        curPosX += moveDistance;
        styleMove.transform = "translate3d("+curPosX+"px, 0, 0)";
    }
}
function moveRight(){
    const maxLen = -eventsPageCount*moveDistance;
    if(curPosX>maxLen){
        curPosX -= moveDistance;
        styleMove.transform = "translate3d("+curPosX+"px, 0, 0)";
    }
}

function eventItemSelected(index:number){
   
    if(curEventIndex>=0){
        secEvents[curEventIndex].selected = false;
    }
    secEvents[index].selected = true;
    curEventIndex = index;
    emit("selectEvent",secEvents[index].evCode);
    //提供数据给其他组件
   // provide('selectEvCode', secEvents[index].evCode);
}
// const test = () => {
//     console.log("test In");
//   }
//   defineExpose({
//    test
//   })
</script>
<style scoped>
.calSlider{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;  
}
.calLineData{
    max-width: v-bind(moveDistance)px;
    overflow: hidden;
     /* border: 1px solid #000; */
}
.lineTrack{
    display: flex;
    position: relative;
    width: 12000px;


} 
.calItem{
    width: 175px;
    height: 45px;
    padding: 12px 20px;
    border: 1px solid var(--main-border-line);
    background-color: var(--main-border-bk);
    margin-right: 12px;
    margin-left: 12px;
    border-radius: 12px;
    /* font-family: Alibaba Sans,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor:pointer;

} 
.calItem:hover{
    background-color: var(--main-border-bk-hover);
}
.eventName{
    font-weight: 500;
    font-size: 16px;
    color: #33383e;
} 

/* 选中的事件 */
.selEventItem{
    background-color: #fcf2f6;
    border: 1px solid #ffe6ee;
    color:#ff5967 !important;
}
.selEventItem:hover{
    background-color: #fcf2f6 !important;
}
.selEventText1{
    color:#ff5967 !important;
}
.selEventText2{
    color:#ff7385 !important;
}
/* */

.eventDate{
    color: rgba(30,32,35,.45);
    font-weight: 400;
    font-size: 12px;
}
.overEvent{
    color:#727c89
}

.diffNow{
    font-weight: 700;
    font-size: 20px;
    color: #1e2023;
}
.diffNow-text{
    font-size: 12px;
    color: rgba(30,32,35,.45);
    margin-left: 4px;
}

.calLine_prev{
    width: 40px;
    height: 60px;
    position: absolute;
    top: 35%;
    z-index: 10;
    margin-top: -20px;
    border: none;
    border-radius: 10px;
    background: var(--main-button-color2);
    color: var(--white);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    left:-55px;
} svg{
    vertical-align: -3px;
    margin-left: -1px;
}
.calLine_next{
    width: 40px;
    height: 60px;
    position: absolute;
    top: 35%;
    z-index: 10;
    margin-top: -20px;
    border: none;
    border-radius: 10px;
    background: var(--main-button-color2);
    color: var(--white);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
   
    right:-55px;
} svg{
    vertical-align: -3px;
    margin-left: 1px;
}

.calLine_next:hover,
.calLine_prev:hover {
    background :var(--main-button-hover2);
	box-shadow: none;

}

.lineContainer{
    max-width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;  
    margin-left: auto;
    margin-right: auto;    
}


</style>