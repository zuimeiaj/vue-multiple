// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import "vue-ydui/dist/ydui.base.css";
import "vue-ydui/dist/ydui.flexible";
import "../../style/base.less";
import {Tab, TabPanel} from 'vue-ydui/dist/lib.rem/tab';
import {Button} from 'vue-ydui/dist/lib.rem/button';
import "./index.less";


Vue.component(Tab.name, Tab);
Vue.component(TabPanel.name, TabPanel);
Vue.component(Button.name, Button);
Vue.config.productionTip=false;


new Vue({
    el: '#app-root',
    
    data() {
        return {}
    }, methods: {}
})
