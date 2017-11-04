<template>
    <div class="g-footer-bar">
        <ul>
            <li :class="{on:'home'===highlightAction}">
                <a href="/home.html">
                    <yd-icon  size="0.5rem" name="home-outline"/>
                    <p> 首页</p>
                </a>

                </li>
            </li>

            <li :class="{on:'shopcart'===highlightAction}">
                <a href="/shopcart.html">
                    <yd-icon  size="0.5rem" name="shopcart-outline"/>
                    <p> 购物车</p>
                </a>

            </li>
            <li :class="{on:'ucenter'===highlightAction}">
                <a href="ucenter.html">
                    <yd-icon  size="0.5rem" name="ucenter-outline"></yd-icon>
                    <p> 我的</p>
                </a>

            </li>

        </ul>
    </div>
</template>

<script>
    import "./index.less";
    export default {
        data(){

           let page= /(\w+\.html)/.exec(location.href);
           let name ="";
            if(page){
                name=page[0].split(".")[0];
            }
            console.log(name)

        return {
                highlightAction:name
        }

        }
    }
</script>