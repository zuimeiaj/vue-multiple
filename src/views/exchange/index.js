// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import "vue-ydui/dist/ydui.base.css";
import "vue-ydui/dist/ydui.flexible";
import "../../style/base.less";
import "./index.less";


import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll';
Vue.component(InfiniteScroll.name, InfiniteScroll);


Vue.config.productionTip = false

new Vue({
  el: '#app-root',
  data(){
    return {
        list:createItems()
    }
  },methods:{
        loadList(){
            setTimeout(()=>{
                this.list=[...this.list,...createItems()];
                this.$refs.scroll.$emit('ydui.infinitescroll.finishLoad');
            },800)
            
    
        }
    }
})

function createItems(){
    let arr =[];
        arr.length=10;
    return arr.fill(1).map(item=>({name:"大师傅",time:new Date().toLocaleDateString()}))
}
