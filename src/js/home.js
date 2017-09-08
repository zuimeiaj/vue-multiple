// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Swipe from "vue-awesome-swiper";
import "../less/home.less";

const number=require("./common");
require('swiper/dist/css/swiper.css');
const swiper=Swipe.swiper;
const swiperSlide=Swipe.swiperSlide;
Vue.use(Swipe);
Vue.config.productionTip=false

/* eslint-disable no-new */
new Vue({
    components: {swiper, swiperSlide},
    el: '#home-app',
    data() {
        return {
            message: "home page  -- dsx"+number,
            slides:[1,2,3,4]
        }
    },

     methods: {
        changeMessage() {
            this.message="new ..message";
        }, addSlide() {
            this.slides.push(this.slides[this.slides.length-1]+1);
        }
    }
})
