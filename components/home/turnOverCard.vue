<template>
    <div v-show="cardShow" @click="turnOver()">        
            <n-card :title="poster.title">
                <template #cover>
                    <img @error="errorImg" v-lazy="poster.url">
                </template>
            </n-card>
        </div>
    <div v-show="!cardShow" class="n-card cardback" @click="turnOver()">
       

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
import { NCard} from 'naive-ui';
const props = defineProps({
    poster:{
        type: Object as PropType<pageEventPoster>,
        required: true
    }
 
})
const cardShow = ref(true);
/*图片错误处理 */
function errorImg(e:any){
    console.log("error:",e);
    
}

/*图片翻转动画 */
function turnOver(){
    cardShow.value = !cardShow.value;
   // alert(title);
}
</script>
<style scoped>
.cardback{
    background: #7cb7fe;
    width: 220px;
    height: 350px; 
}
.n-card {
  max-width: 220px;
  max-height: 350px;  
  border-radius: 8px;  
}
.brief-works-item {
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