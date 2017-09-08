// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#home-app',
  data(){
    return {
      message:"home page "
    }
  }
  ,methods:{
    changeMessage(){
      this.message="new ..message";
    }
  }
})
