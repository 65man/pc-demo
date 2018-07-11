<template>
  <div class="dialog">
    <div class="dilog-wrap">
      <div class="dialog-cover" v-show="isShow" @click="closeMyself"></div>
      <transition name="drop">
        <div class="dialog-content" v-show="isShow">
          <div class="dialog-close"  @click="closeMyself">x</div>
          <slot>
            <p>empty</p>
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';

.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
  .dialog{
    position: relative;
    z-index: 999;
    .dilog-wrap{
      position: fixed;
      width: 100%;
      height: 100%;
      .dialog-cover{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        background: #000;
        opacity: .3;
        width: 100%;
        height: 100%;
      }
      .dialog-content{
          width: 50%;
          position: fixed;
          max-height: 50%;
          overflow: auto;
          background: #fff;
          top: 20%;
          left: 50%;
          margin-left: -25%;
          z-index: 10;
          border: 2px solid #464068;
          padding: 2%;
          line-height: 1.6;
          .dialog-close{
            position: absolute;
            top: 5px;
            right: 5px;
            width: 20px;
            height: 20px;
            text-align: center;
            cursor: pointer;
            &:hover{
              color: $btnColor;
            }
          }
        }
    }
  }
</style>
