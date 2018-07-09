<template>
  <div class="header">
    <div class="header-inner w">
      <router-link :to="{path:'/'}">
        <img src="../../assets/logo.png" alt="">
      </router-link>
      <div class="header-nav right">
        <ul class="nav-list">
          <li>登录</li>
          <li class="nav-pile">|</li>
          <li>注册</li>
          <li class="nav-pile">|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
  .header-inner{
    color: #b2b2b2;
    img{
      height: 50px;
      vertical-align: middle;
    }
  }
  .header-nav{
    .nav-list{
      >li{
        float: left;
        cursor: pointer;
      }
      .nav-pile{
        padding: 0 10px;
      }
    }
  }
}
</style>
