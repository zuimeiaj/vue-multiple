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


import {Radio, RadioGroup} from 'vue-ydui/dist/lib.rem/radio';
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);


import {Input} from 'vue-ydui/dist/lib.rem/input';
Vue.component(Input.name, Input);




import VueQr from '../../components/vueQr/index.vue';
Vue.component('vue-qr',VueQr);


Vue.config.productionTip = false

new Vue({
  el: '#app-root',
  data(){
    return {
        goodsProp:"1"
    }
  },methods:{
      showMessage(){
          Alert({mes:"hello world",title:"提示"})
      }
    }
})
