// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import "vue-ydui/dist/ydui.base.css";
import "vue-ydui/dist/ydui.flexible";
import "../../style/base.less";
import {SliderItem,Slider} from "vue-ydui/dist/lib.rem/slider";
import {Button} from "vue-ydui/dist/lib.rem/button";
import {Icons} from "vue-ydui/dist/lib.rem/icons";
import FooterBar from "../../components/footer/index.vue";

import "./index.less";
Vue.component(SliderItem.name,SliderItem);
Vue.component(Slider.name,Slider);
Vue.component(Button.name,Button);
Vue.component(Icons.name,Icons);
Vue.component('footer-bar',FooterBar);




Vue.config.productionTip = false

new Vue({
  el: '#app-root',
  data(){
    return {
      message:"index page --- "
    }
  },methods:{
      showMessage(){
          Alert({mes:"hello world",title:"提示"})
      }
    }
})
