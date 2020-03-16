<template>
    <div class="page-a">
        <h1>pageA</h1>
        <div>
            <div class="item" v-for="item in items" @click="goPageB">
                {{ item }}
            </div>
        </div>
        <h1 @click="goPageB">go pageB</h1>
    </div>
</template>


<script>
    export default {
        name: 'PageA',
        data() {
            return {
                msg: "我是PageA页面",
                items: Array.from({length:50}, (v,k) => k),
                data: "",
                scrollTop: 0
            };
        },
        beforeRouteEnter(to, from, next) {
            if(from.name == 'pageB'){
                to.meta.isBack = true;
            }

            next();
        },
        /*记住离开首页时页面滚动到的位置*/
        // beforeRouteLeave(to, from, next) {
        //     // this.scrollTop = this.$refs.scroller.$refs.scroller.getPosition().top;
        //     next();
        // },
        mounted() {
            console.log('mounted....');
            // this指向组件的实例，$el指向当前组件的DOM元素
            const $el = this.$el;
            //滚动事件
            $el.addEventListener("scroll", () => {
                //记录位置
                this.scrollTop = $el.scrollTop;
            });
        },
        activated() {
            if(!this.$route.meta.isBack){
                // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
                this.getData();
            } else {
                //恢复滚动条高度
                if(this.scrollTop) {
                    setTimeout(() => {
                        this.$el.scrollTop = this.scrollTop;
                    }, 100);
                }
            }
            // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
            this.$route.meta.isBack = false;

        },
        methods: {
            getData() {
                // getData方法，模拟从后台请求数据
                this.data = "数据";
                console.log('get data')
            },
            goPageB(){
                this.$router.push({ path: "/pageB" });
            },
            back() {
                this.$router.push({ path: "/" });
            }
        },
    }
</script>
<style>
    .page-a {
        height: 100vh;
        overflow-y: auto;
    }
    .item {
        margin: 5px;
        padding: 10px;
        background: #ccc;
    }
</style>
