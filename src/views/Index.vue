<template>
  <div class="index-wrap w clearfix">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="(product,index) in productList">
          <h3 :key="index">{{product.title}}</h3>
          <ul>
            <li v-for="(item,index) in product.list" :key="index">
              <a href="#">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
            <!-- <li><a href="#">数据统计</a></li>
            <li><a href="#">数据统计</a></li>
            <li><a href="#">数据统计</a></li> -->
          </ul>
          <div v-if="index != product.length" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block">
        <h2>最新消息</h2>
        <ul>
          <li v-for="(item,key) in newsList" :key="key">
            <a :href="item.url">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <Slide></Slide>
    </div>
  </div>
</template>

<script>
import { getOrderList, getNewsList, getSwiper } from '@/api/index'
import Slide from '@/components/slide/slideShow'
export default {
  data () {
    return {
      productList: '',
      newsList: ''
    }
  },
  components: {
    Slide
  },
  mounted () {
    // getHome().then(res => console.log(res))
    getOrderList().then(res => {
      this.productList = res
      console.log(this.productList)
    })
    getNewsList().then(res => {
      this.newsList = res.data
      console.log(res)
    })
    getSwiper().then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hr{
  height: 1px;
  width: 100%;
  background: #ddd;
}
.hot-tag{
  background: red;
  color: #fff;
}
.index-left {
  width: 300px;
  float: left;
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    h2 {
      background: #4fc08d;
      padding: 10px 15px;
      color: #fff;
    }
    h3 {
      padding: 0 15px 5px 15px;
      font-weight: bold;
      color: #222;
      margin-top:15px;
    }
    ul {
      padding: 10px 15px;
      li{
        padding: 5px;
        font-size: 14px;
      }
    }
  }
}
.index-right {
  width: 900px;
  float:right;
}
</style>
