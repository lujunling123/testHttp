<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
      <button id="dl" @click="test()" ><b>测试接口</b></button>
  </div>
</template>

<script>
import http from './http.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test () {
      http.post('token-manager/unchk/auth/login/personal', {phone: '13797619092', password: '12345678'}).then((res) => {
        if (res.data && res.data.status === 20) {
          console.log(res)
        } else {
          console.log(res)
        }
        return res
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

</style>
