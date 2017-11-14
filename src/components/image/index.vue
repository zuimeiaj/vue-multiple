<template>
    <div class="v-c-i-auto-mode" :style="{height:height,width:width}" ref="container">
        <img :src="src" @load="onImageLoad"/>
    </div>
</template>





<script>
    import "./index.less"
    const SCALE_MODE_FILL="fill";
    const SCALE_MODE_STRETCH="stretch";
    const SCALE_MODE_FIT="fit";

    export default {
        props:{
            mode:{
                default:SCALE_MODE_FILL,
                type:String
            },width:{
                default:"100%",
                type:String
            },height:{
                defautl:"100%",
                type:String
            },src:{
                default:"",
                type:String
            }
        },methods:{
            onImageLoad(e){
                let image =e.target;
                let container = this.$refs.container;
                let rect =container.getBoundingClientRect();
                let width =rect.width;
                let height =rect.height;
                let imageWidth =e.target.naturalWidth;
                let imageHeight=e.target.naturalHeight;
                let ratioHeight = height/ imageHeight;
                let ratioWidth = width/ imageWidth;
                let ratio = ratioHeight > ratioWidth

                if(this.mode === SCALE_MODE_FILL){
                    if(ratio){
                        image.style.height="100%"
                        image.style.width="auto"
                    }else{
                        image.style.width="100%";
                        image.style.height="auto";
                    }
                }else if(this.mode ===SCALE_MODE_FIT){
                    if(ratio){
                        image.style.width="100%";
                        image.style.height="auto";

                    }else{
                        image.style.height="100%"
                        image.style.width="auto"
                    }
                }else{
                    image.style.width="100%";
                    image.style.height="100%";

                }

            }
        }
    }

</script>