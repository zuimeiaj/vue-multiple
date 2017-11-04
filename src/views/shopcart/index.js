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
import {Spinner} from 'vue-ydui/dist/lib.rem/spinner';
import {CheckBox, CheckBoxGroup} from 'vue-ydui/dist/lib.rem/checkbox';
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
};
import "./index.less";
Vue.component(SliderItem.name,SliderItem);
Vue.component(Slider.name,Slider);
Vue.component(Button.name,Button);
Vue.component(Icons.name,Icons);
Vue.component('footer-bar',FooterBar);
Vue.component(Spinner.name, Spinner);
Vue.component(CheckBox.name, CheckBox);


Vue.config.productionTip = false;
const MODE_EDIT=1;
const MODE_NORMAL=2;

new Vue({
  el: '#app-root',
  computed:{
    headerBtnText(){
        return this.mode===MODE_NORMAL?"编辑":"完成"
    },
    payBtnText(){
        return this.mode ===MODE_NORMAL?"结算":"删除"
    },
    totalAmount(){
        let total=0;
        this.shopCartData.forEach(item=>{
            if(item.checked){
                total+=(item.sale_price*item.count)
            }else{
            
            }
        });
        return total.toFixed(2)
    },selectedGoods(){
        return this.shopCartData.filter(item=>item.checked);
      }
  },
  data(){
    return {
      mode:MODE_NORMAL,
      shopCartData:[
          {
              logo:"http://img0.imgtn.bdimg.com/it/u=797956111,2965131047&fm=27&gp=0.jpg",
              good_name:"超级好迟到 西瓜",
              prop:"10斤装",
              sale_price:3490.89,
              count:1,
              checked:true
          },{
              logo:"http://img.jdzj.com/UserDocument/2014d/daidaqian/Picture/2014123105337.jpg",
              good_name:"超级好迟到 西瓜",
              prop:"龙泉大葡萄，20斤装",
              sale_price:24.89,
              count:1,
              checked:true
          }
      ]
    }
  },methods:{
        back(){
          history.back();
        },
        changeMode(){
            this.mode = this.mode ===MODE_NORMAL?MODE_EDIT:MODE_NORMAL;
            this.shopCartData.forEach(item=>item.checked=this.mode ===MODE_NORMAL)
        },deleteFromShopCart(){
            let result =[];
            this.shopCartData.forEach(item=>{
                if(!item.checked){
                    result.push(item);
                }
            })
            this.shopCartData=result;
        },checkout(){
            if(this.shopCartData.length===0) return this.$dialog.toast({mes:"你的购物车空空如也"})
            if(this.mode ===MODE_NORMAL){
                if(this.selectedGoods.length>0){
                    // create order
                }else{
                    this.$dialog.toast({mes:"您没有选中任何商品"})
                }
            }else{
                if(this.selectedGoods.length>0){
                    this.$dialog.confirm({mes:"确定要删除选中的商品吗？" ,opts:()=>{
                        this.deleteFromShopCart();
                    }})
                }else{
                    this.$dialog.toast({mes:"请选择要删除的商品"})
                }
                
               
            }
        }
        
    }
})
