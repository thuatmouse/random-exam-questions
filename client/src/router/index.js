import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UploadFiles from '@/components/UploadFiles.vue'
import Questions from '@/components/Questions.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'uploadFiles',
      component: UploadFiles
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions
    }
  ]
})
