<template>
    <span ref="container" style="display: inline-block"></span>
</template>
<script>
    const  QRCode =require("./qrcode");
    export default {
        props: {
            value: {
                default: "",
                type: String
            },
            size: {
                default: 128,
                type: Number
            }
        },

        created() {
            setTimeout(()=>{
                new QRCode(this.$refs.container, {
                    text: this.value,
                    width: 128,
                    height: 128,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            })
        }
    }
</script>


