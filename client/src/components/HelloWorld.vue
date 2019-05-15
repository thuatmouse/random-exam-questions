<template>
  <div class="hello">
    <p v-html="message"></p>
    <input type="text" v-model="name">
    <button @click="hello">Vẫy tay</button>
  </div>
</template>

<script>
import AuthenticationService from '@/Services/AuthenticationService.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      message: ''
    }
  },

  methods: {
    async hello () {
      const response = await AuthenticationService.hello({
        name: this.name
      })
      this.message = response.data.message
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
