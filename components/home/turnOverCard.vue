<template>
    <div v-show="cardShow" @click="turnOver()">        
            <n-card content-style="padding:0; max-height:60px">
                <template #cover>
                    <view class="imgWrapper">
                        <img @error="errorImg" v-lazy="poster.url">
                        <!-- <n-image @error="errorImg" width="198px" object-fit="fill" :src=showData.imgUrl :lazy="true"  :preview-disabled="true"  /> -->
                    </view>   
                </template>
                <template #default>
                    <view class="content">
                        {{poster.title}}
                        <n-button type="primary" size="small"  class="btnImg">
                            <n-icon>
                                <log-in-icon />
                            </n-icon>
                        </n-button>
                    </view>     
                </template>
            </n-card>
        </div>
    <div v-show="!cardShow"  @click="turnOver()">
        <n-card content-style="padding:0; max-height:60px">
                <template #cover>
                    <view class="imgWrapper qrWrapper"> 
                        <n-button type="info" class="btnQrBack">返回</n-button>
                        <img @error="errorImg" :src="poster.miniQrUrl">
                        <!-- <n-image @error="errorImg" :src=poster.miniQrUrl :preview-disabled="true" :lazy="true" /> -->
                    </view>
                </template>
                <template #default>
                    <view class="content">
                        请用微信扫一扫访问
                    </view>     
                </template>
        </n-card>
    </div>
    <!-- <n-card :title="poster.title">
            <template #cover>
                <img @error="errorImg" v-lazy="poster.url">
            </template>
        </n-card> -->
</template>

<script setup lang="ts">
import { pageEventPoster } from 'utils/models';
import type { PropType } from 'vue'
import { NCard,NImage,NButton,NIcon} from 'naive-ui';
import { ScanOutlined as LogInIcon} from '@vicons/antd'
const props = defineProps({
    poster:{
        type: Object as PropType<pageEventPoster>,
        required: true
    }
 
})

// const showData = reactive({
//     title:props.poster.title,
//     imgUrl:props.poster.url,

//     imgWidth:200
// })

const cardShow = ref(true);


/*图片错误处理 */
function errorImg(e:any){
    console.log("error:",e);
    
}

/*图片翻转动画 */
function turnOver(){
     cardShow.value = !cardShow.value;
}
</script>
<style scoped>
.cardback{
    /* background: #7cb7fe; */
    width: 200px;
    height: 350px; 
}
.n-card {
  max-width: 200px;
  max-height: 350px;  
  border-radius: 8px;  
}
.content{
    max-height:60px;
    height:60px;
    width:100%;
    display:flex;
    font-size:16px;
    justify-content: center;
    align-items: center;
    /* padding:0px 16px; */
    font-weight:500;
    position: relative;
}
.imgWrapper{
    width:198px; 
    height:350px;
    display: flex; 
    

}
.qrWrapper{
    justify-content: center;
    align-items: center;
    position:relative;
}
.qrWrapper img{
    padding-bottom:80px; 
    width:90%
}
.btnQrBack{
   position: absolute;
   bottom: 70px;
}
.btnImg{
    position: absolute;
    top:16px;
    right:10px;
    z-index:999;
    box-shadow: 3px 2px 4px 0px rgba(79, 79, 79, 0.5);
}
/* .brief-works-item {
	display: inline-flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 20px 20px 0;
	min-height: 370px;
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
*/
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