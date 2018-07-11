<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <label for="userName" class="g-form-label">用户名:</label>
        <input type="text" class="g-form-input"  name="userName" id="userName" v-validate="{required:true,email:true}" placeholder="请输入用户名" v-model="usernameModel">
        <!-- <span>{{ errors.first('userName') }}</span> -->
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <label for="userPwd" class="g-form-label">密码:</label>
        <input v-validate="{required:true,min:6}" type="text" class="g-form-input" name="userPwd" id="userPwd" placeholder="请输入密码" v-model.lazy="passwordModel">
        <!-- <span>{{ errors.first('userPwd') }}</span> -->
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/index.js'
import eventBus from '@/utils/eventBus.js'
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: '',
      status: ''
    }
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过'
        console.log('wwww')
      } else {
        this.errorText = ''
        login({userName: this.usernameModel, passWord: this.passwordModel}).then(res => {
          this.$store.state.userName = res.data.userName
          eventBus.$emit('has-log', '666')
        }, err => {
          console.log(err)
        })
      }
    }
  },
  computed: {
    userErrors () {
      let errorText, status, userFlag
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '必须包换@'
      } else {
        status = true
        errorText = ''
      }
      if (!userFlag) {
        errorText = ''
        userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status, passwordFlag
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码必须1-6位'
      } else {
        status = true
        errorText = ''
      }
      if (!passwordFlag) {
        errorText = ''
        passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  mounted () {
    console.log(this.$store.state.userName)
    console.log(this.$store.getters.getUserName)
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";

.login-form{
  .g-form{
    .g-form-line{
      padding: 15px 0;
      .g-form-error{
        font-size: 14px;
        color: red;
      }
      .g-form-label{
        display: inline-block;
        width: 100px;
        font-size: 16px;
      }
      .g-form-input{
        height: 30px;
        width: 200px;
        line-height: 30px;
        vertical-align: middle;
        padding: 0 10px;
        border: 1px solid #ccc;
        font-size: 12px;
      }
      .g-form-btn{
        padding-left: 100px;
        .button{
          background: $btnColor;
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
