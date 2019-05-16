<template>
  <div class="question">
    <h1 style="text-align: center">QUESTION</h1>
    <hr>
    <el-tabs type="card" @tab-click="handleClick">
      <el-tab-pane :label="`Đề ${index + 1}`" :name="key" v-for="(array, key, index) in data" :key="index + 1">
        <div v-for="(item, index) in data[currentTab]" :key="index">
          <h2>Câu hỏi {{ index + 1 }}</h2>
          <p>{{ item.q }}</p>
          <div v-if="item.s.indexOf('2.3.41') !== -1" class="image"><img src="../../public/images/2.3.4.1.png"></div>
          <div v-if="item.s.indexOf('2.3.42') !== -1" class="image"><img src="../../public/images/2.3.4.2.png"></div>
          <div v-if="item.s.indexOf('2.3.43') !== -1" class="image"><img src="../../public/images/2.3.4.3.png"></div>
          <div v-if="item.s.indexOf('2.3.44') !== -1" class="image"><img src="../../public/images/2.3.4.4.png"></div>
          <div v-if="item.s.indexOf('2.3.45') !== -1" class="image"><img src="../../public/images/2.3.4.5.png"></div>
          <div v-if="item.s.indexOf('2.3.52') !== -1" class="image"><img src="../../public/images/2.3.5.2.png"></div>
          <div v-if="item.s.indexOf('2.3.60') !== -1" class="image"><img src="../../public/images/2.3.6.0.png"></div>
          <div v-if="item.s.indexOf('2.3.61') !== -1" class="image"><img src="../../public/images/2.3.6.1.png"></div>
          <div v-if="item.s.indexOf('2.3.62') !== -1" class="image"><img src="../../public/images/2.3.6.2.png"></div>
          <div v-if="item.s.indexOf('3.3.71') !== -1" class="image"><img src="../../public/images/3.3.7.1.png"></div>
          <div v-if="item.s.indexOf('3.3.74') !== -1" class="image"><img src="../../public/images/3.3.7.4.png"></div>
          <div v-if="item.s.indexOf('3.3.75') !== -1" class="image"><img src="../../public/images/3.3.7.5.png"></div>
          <div v-if="item.s.indexOf('3.3.84') !== -1" class="image"><img src="../../public/images/3.3.8.4.png"></div>
          <div v-if="item.s.indexOf('3.3.87') !== -1" class="image"><img src="../../public/images/3.3.8.7.png"></div>
          <div v-if="item.s.indexOf('3.3.88') !== -1" class="image"><img src="../../public/images/3.3.8.8.png"></div>
          <div v-if="item.s.indexOf('3.3.89') !== -1" class="image"><img src="../../public/images/3.3.8.9.png"></div>
          <div v-if="item.s.indexOf('3.3.90') !== -1" class="image"><img src="../../public/images/3.3.9.0.png"></div>
          <div v-if="item.s.indexOf('4.3.91') !== -1" class="image"><img src="../../public/images/4.3.9.1.png"></div>
          <div v-if="item.s.indexOf('4.3.92') !== -1" class="image"><img src="../../public/images/4.3.9.2.png"></div>
          <div v-if="item.s.indexOf('4.3.93') !== -1" class="image"><img src="../../public/images/4.3.9.3.png"></div>
          <div v-if="item.s.indexOf('4.3.94') !== -1" class="image"><img src="../../public/images/4.3.9.4.png"></div>
          <div v-if="item.s.indexOf('4.3.95') !== -1" class="image"><img src="../../public/images/4.3.9.5.png"></div>
          <div v-if="item.s.indexOf('4.3.96') !== -1" class="image"><img src="../../public/images/4.3.9.6.png"></div>
          <div v-if="item.s.indexOf('4.3.97') !== -1" class="image"><img src="../../public/images/4.3.9.7.png"></div>
          <div v-if="item.s.indexOf('4.3.98') !== -1" class="image"><img src="../../public/images/4.3.9.8.png"></div>
          <div v-if="item.s.indexOf('4.3.99') !== -1" class="image"><img src="../../public/images/4.3.9.9.png"></div>
          <div v-if="item.s.indexOf('4.3.100') !== -1" class="image"><img src="../../public/images/4.3.100.png"></div>
          <el-radio v-for="s in item.A" :key="s">{{ s }}</el-radio>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AuthenticationService from '@/Services/AuthenticationService.js'
export default {
  name: 'questions',
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      message: '',
      currentTab: 'de1'
    }
  },

  created () {
    console.log('line 28:', this.data)
  },

  methods: {
    handleClick (tab) {
      this.currentTab = tab.name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: 400;
  color: #1f2f3d;
}
.question {
  width: 1280px;
  margin: 0 auto;
  border: dashed 1px #ccc;
  text-align: left;
  padding: 20px
}
.image {
  margin: 20px
}
</style>
