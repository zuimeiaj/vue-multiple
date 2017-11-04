// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import "vue-ydui/dist/ydui.base.css";
import "vue-ydui/dist/ydui.flexible";
import "../../style/base.less";
import {Icons} from "vue-ydui/dist/lib.rem/icons";
import FooterBar from "../../components/footer/index.vue";
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
import "./index.less";


Vue.component(Icons.name, Icons);
Vue.component('footer-bar', FooterBar);
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);

Vue.config.productionTip=false;


new Vue({
    el: '#app-root',
    
    data() {
        return {}
    }, methods: {}
})
