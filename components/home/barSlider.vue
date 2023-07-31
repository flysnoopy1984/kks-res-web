<!--
created by JackySong@2023
-->
<template>
    <div class="barSliderContainer">
    <!-- <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
        <symbol id="ic_chevron_left" viewBox="0 0 1024 1024"><path d="M641.450667 266.666667a42.666667 42.666667 0 0 0-60.330667 0l-215.125333 215.168a42.666667 42.666667 0 0 0 0 60.330666l215.125333 215.125334a42.666667 42.666667 0 0 0 60.330667-60.330667L456.490667 512l184.96-184.96a42.666667 42.666667 0 0 0 0-60.330667z"></path></symbol>
        <symbol id="ic_chevron_right" viewBox="0 0 1024 1024"><path d="M427.605333 266.666667a42.666667 42.666667 0 0 1 60.330667 0l215.125333 215.168a42.666667 42.666667 0 0 1 0 60.330666l-215.125333 215.125334a42.666667 42.666667 0 0 1-60.330667-60.330667L612.565333 512l-184.96-184.96a42.666667 42.666667 0 0 1 0-60.330667z"></path></symbol>
    </svg> -->
    

    <div class="my-slider slick-slider works-showcase slick-initialized">

        <button @click="slideLeft" class="slick-arrow slick-prev fill-current-color" aria-label="上一页" style="display: block;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14">
                <path fill="#FFF" d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
            </svg>
        </button>
        <button class="slick-arrow slick-next fill-current-color" aria-label="下一页" style="display: block;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14" style="transform: scaleX(-1);">
                <path fill="#FFF" d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
            </svg>
        </button>
    </div>
        <!-- <div class="arrow left">
            <span role="img" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
                <use xlink:href="#ic_chevron_right"></use>
            </svg>
            </span>
        </div> -->

    <!-- <article class="slide-content">

            <section class="slide-item" data-index="0">
                <h3>页面-1</h3>
            </section>
            <section class="slide-item" data-index="1">
                <h3>页面-2</h3>
            </section>
            <section class="slide-item" data-index="2">
                <h3>页面-3</h3>
            </section>
            <section class="slide-item" data-index="3">
                <h3>页面-4</h3>
            </section>
    </article> -->

    </div>
</template>

<script setup>
async function slideLeft(){
    alert("111")

}
async function slideRight() {
    
}
</script>
<style scoped>
.barSliderContainer{
    width: 100%;
    display: flex;
    justify-content: center;


}
.my-slider{
    width: 1200px;
    height: 100px;
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

/* banner 开始 */
.slide-content,
     .slide-item {
        height: 100%;
      }

      .slide-content {
        width: 400%;
        display: -webkit-box;
        overflow: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
      }

      .slide-item {
        -webkit-box-flex: 1;
        width: 0;
      }
</style>