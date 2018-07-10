<template>
 <div class="scroll">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in slides" :key="index">
        <!-- <a :href="item.href"> -->
          <img :src="item.src" alt="">
        <!-- </a> -->
      </swiper-slide>

      <!-- <swiper-slide><img src="../../assets/slideShow/pic2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/slideShow/pic3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/slideShow/pic4.jpg" alt=""></swiper-slide> -->

      <!-- <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide> -->
      <!-- Optional controls -->
      <div class="swiper-pagination "  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import '../../style/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'HelloWorld',
  components: {
    swiper,
    swiperSlide
  },
  props: ['slides'],
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        // 循环
        loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        autoplay: true,
        // autoplay: {
        //     delay: 3000,
        //     stopOnLastSlide: false,
        //     disableOnInteraction: true,
        // },
        // 设置轮播
        effect: 'slide',
        // 滑动速度
        speed: 800,
        // 滑动方向
        direction: 'horizontal',
        // 小手掌抓取滑动
        // grabCursor : true,
        // 滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          }
        },
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperSlides: [1, 2, 3, 4]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // 可以使用swiper这个对象去使用swiper官网中的那些方法
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(0, 0, false);
    console.log(this.slides)
    console.log(typeof (this.slides))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// import 'swiper/dist/css/swiper.css'
  .scroll{
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }
</style>
