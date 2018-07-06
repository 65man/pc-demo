<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
export default {
  data () {
    return {

    }
  },
  components: {
    Header,
    Footer
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
