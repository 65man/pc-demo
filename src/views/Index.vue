<template>
  <div class="index-wrap w clearfix">
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="(product,index) in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="(item,index) in product.list" :key="index">
              <a href="#">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
            <!-- <li><a href="#">数据统计</a></li>
            <li><a href="#">数据统计</a></li>
            <li><a href="#">数据统计</a></li> -->
          </ul>
          <div v-if="index != product.length" class="hr" :key="index"></div>
        </template>
      </div>
      <div class="index-left-block">
        <h2>最新消息</h2>
        <ul>
          <li v-for="(item,key) in newsList" :key="key">
            <a :href="item.url" class="newsItem">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <Slide :slides="slidesData"></Slide>
      <div class="index-board-list">
        <div class="index-board-item" :class="[{'line-last':index%2 !=0},'index-board-' + item.id]" v-for="(item,index) in boardList" :key="index">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <router-link class="btn" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getOrderList,
  getNewsList,
  getSwiper,
  getBoardList
} from '@/api/index'
import Slide from '@/components/slide/slideShow'
import Loading from '../components/loading/Loading'
export default {
  data () {
    return {
      productList: '',
      newsList: '',
      boardList: '',
      isLoading: true,
      slidesData: ''
    }
  },
  components: {
    Slide,
    Loading
  },
  methods: {
    loadPageData () {
      getSwiper().then(res => {
        console.log(res)
        this.slidesData = res.data
      })
      getOrderList().then(res => {
        this.productList = res
        console.log(this.productList)
      })
      getNewsList().then(res => {
        this.newsList = res.data
        console.log(res)
      })
      getBoardList().then(res => {
        console.log(res)
        this.boardList = res.data
      })
    }
  },
  mounted () {
    // getHome().then(res => console.log(res))
    this.loadPageData()
    this.isLoading = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.hot-tag {
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
      margin-top: 15px;
    }
    ul {
      padding: 10px 15px;
      li {
        padding: 5px;
        font-size: 14px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.index-right {
  width: 900px;
  float: right;
  .line-last {
    margin-right: 0 !important;
  }
  .index-board-car .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    .index-board-item-inner {
      background-position: 0 50%;
      padding-left: 120px;
      min-height: 125px;
      h2 {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        padding: 15px 0;
      }
      p{
        font-size: 14px;
      }
      .index-board-button {
        margin-top: 20px;
        .btn {
          background: #4fc08d;
          color: #fff;
          display: inline-block;
          padding: 10px 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
