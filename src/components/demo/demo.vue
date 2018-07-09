<template>
  <div class="demo">
    <div><span>{{$store.state.count}}</span><button @click="increment">+</button></div>
    <div><span>{{$store.state.count}}</span><button @click="decrement">-</button></div>
    <p>total:{{total}}</p>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  data () {
    return {
      // count: '',
      total: ''
    }
  },
  computed: {
    // ...mapState([
    //   'count'
    // ])
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
