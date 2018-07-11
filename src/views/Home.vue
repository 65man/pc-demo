<template>
  <div class="home">
    <Header @login="listenLogin" @reg="listenReg" @about='listenAbout' @loginSuccess='lgSuccess'></Header>
    <div class="container">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <Footer></Footer>
    <myDialog :is-show="isShowLogDialog" @on-close="closedialog('isShowLogDialog')">
      <LogForm></LogForm>
    </myDialog>
    <myDialog :is-show="isShowRegDialog" @on-close="closedialog('isShowRegDialog')">
      <RegForm></RegForm>
    </myDialog>
    <myDialog :is-show="isShowAboutDialog" @on-close="closedialog('isShowAboutDialog')">
      <AboutForm></AboutForm>
    </myDialog>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Dialog from '~/base/dialog'
import LogForm from '~/logForm/LogForm'
import RegForm from '~/regForm/RegForm'
import AboutForm from '~/aboutForm/AboutForm'

export default {
  data () {
    return {
      isShowLogDialog: false,
      isShowRegDialog: false,
      isShowAboutDialog: false
    }
  },
  components: {
    Header,
    Footer,
    myDialog: Dialog,
    LogForm,
    RegForm,
    AboutForm
  },
  mounted () {

  },
  methods: {
    listenLogin (val) {
      this.isShowLogDialog = val
    },
    listenReg (val) {
      this.isShowRegDialog = val
    },
    listenAbout (val) {
      this.isShowAboutDialog = val
    },
    closedialog (attr) {
      this[attr] = false
    },
    lgSuccess () {
      this.closedialog('isShowLogDialog')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
