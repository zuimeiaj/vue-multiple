<template>
    <div :class="['keyboard',visible?'show':'hide']">
        <div class="flex-layout">
            <div class=" flex-item-3">
                <div class="flex-layout">
                    <span @touchstart.stop.prevent="handleClick(1)" class="flex-item-1">1</span>
                    <span @touchstart.stop.prevent="handleClick(2)" class="flex-item-1">2</span>
                    <span @touchstart.stop.prevent="handleClick(3)" class="flex-item-1">3</span>
                </div>
                <div class="flex-layout">
                    <span @touchstart.stop.prevent="handleClick(4)" class="flex-item-1">4</span>
                    <span @touchstart.stop.prevent="handleClick(5)" class="flex-item-1">5</span>
                    <span @touchstart.stop.prevent="handleClick(6)" class="flex-item-1">6</span>
                </div>
                <div class="flex-layout">
                    <span @touchstart.stop.prevent="handleClick(7)" class="flex-item-1">7</span>
                    <span @touchstart.stop.prevent="handleClick(8)" class="flex-item-1">8</span>
                    <span @touchstart.stop.prevent="handleClick(9)" class="flex-item-1">9</span>
                </div>
                <div class="flex-layout">
                    <span @touchstart.stop.prevent="handleClick(0)" class="flex-item-1 zero">0</span>
                    <span @touchstart.stop.prevent="handleClick(0)" class="flex-item-1"></span>
                    <span @touchstart.stop.prevent="handleClick('.')" class="flex-item-1 dot">.</span>
                </div>
            </div>
            <div class="flex-layout flex-item-1 flex-cols action-bar">
                <span @touchstart.stop.prevent="handleClick('delete')" class="delete-icon flex-item-1"></span>
                <span @touchstart.stop.prevent="handleClick('confirm')" class="confirm flex-item-1">确定</span>
            </div>
        </div>
    </div>
</template>


<script>
    import "./index.less";

    /**
     * @event confirm
     * @event change
     * @property  decimal
     * @property  integer
     * @property  visible
     */
    export default {
        props: {
            decimal: {
                type: Number,
                default: 2
            }, integer: {
                type: Number,
                default: 6
            }, visible: {
                type: Boolean,
                default: false
            },defaultValue:{
                type:String,
                default:""
            }
        },
        data() {
            return {
                value: this.defaultValue
            }
        },
        methods: {
            handleClick(input) {
                let amount=this.value;

                if(input==="confirm") {

                    return this.$emit("confirm", amount);
                }

                let isEmpty=amount==="";
                let isDelete=input==="delete";
                let isDecimalInput=amount.indexOf(".")> -1||input==="."

                if(input===".") {

                    if(input==="."&&isEmpty) {

                        amount="0.";
                    } else {
                        let last=amount[amount.length-1];
                        if(amount.indexOf(input)=== -1) {
                            amount+=input;
                        }
                    }

                } else if(isDelete) {
                    amount=amount.slice(0, -1);
                } else if(isEmpty&&input==="0") {
                    amount="0.";
                } else if(amount==="0"&&input!==".") {
                    amount+="."+input;
                } else {
                    amount+=input;
                }

                let arr=amount.split('.');

                if(isDecimalInput&&(!arr[1]||arr[1].length<=this.decimal )) {
                    this.value=amount;
                }
                if(!isDecimalInput&&arr[0].length<=this.integer) {
                    this.value=amount;
                }
                this.$emit("change", this.value);
            }
        }
    }
</script>