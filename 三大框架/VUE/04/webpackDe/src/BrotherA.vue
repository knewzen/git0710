<template>
<!-- 3.0兄弟传值 -->
<!-- 3.1把A和B都在App.vue里调用成为他们的父组件，他们两个就是兄弟关系了 -->

<!-- 比如A里的数据想传给B，但两者为兄弟，没有任何关联（A里面拿不到B，所以没法传给B） -->
<!-- 如：可以通过父组件调用两次，但太麻烦 -->
<!-- 代理思想：可以创建一个第三方对象，先把值传给第三方，让第三方帮你把值传给B  -->
<!-- 3.4所以 创建第三方bus.js -->

    <!-- 3.8在A里点击 把值传给B -->
    <div>
        <button @click="sendToB">toB</button>
    </div>
</template>

<script>
// 3.7 拿到bus 引入
import Bus from './bus'
export default {

    methods:{
        // 3.9实现 发送
        sendToB: function () {
            Bus.$emit('toBFlag','111111')
        }
    }

}
</script>

<style>

</style>
