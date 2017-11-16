<template>
    <div>
        Son.vue

        <!-- 2.1触发条件 -->
        <button @click="hello">给父组件App.vue传值,我是son组件</button>
    </div>
</template>

<script>
export default {
// 1.4接收值
    props:['yy'],
    // 查看值
    created : function () {
        console.log(this)
        console.log(this.yy)
    },
    // 2.0子传父 ：需要触发条件
    data: function () {
        return {
            
        }
    },
    methods:{
    // 2.2实现方法        
        hello: function () {
            // 2.3传
            this.$emit('flag',{a:2,b:4})
            // flag相当于暗号，父组件也有，约定好把这里的值传到父的暗号位置
        }
    }
}
</script>

<style>

</style>
