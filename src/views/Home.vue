<template>
  <div class="home">
    <Header @login="lisenLogin" ></Header>
    <div class="container">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <Footer></Footer>
    <myDialog :is-show="isShowLogDialog"></myDialog>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Dialog from '~/base/dialog'
export default {
  data () {
    return {
      isShowLogDialog: false
    }
  },
  components: {
    Header,
    Footer,
    myDialog: Dialog
  },
  mounted () {

  },
  methods: {
    lisenLogin (val) {
      this.isShowLogDialog = val
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
