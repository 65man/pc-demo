<template>
  <div class="index-wrap">

  </div>
</template>

<script>
import {getHome} from '@/api/index'
export default {
  data () {
    return {}
  },
  mounted () {
    getHome().then(res => console.log(res))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
