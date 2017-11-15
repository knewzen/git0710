<template>
  <div>
      Son.vue
      
      <button @click="hello">按钮</button>
  </div>
</template>

<script>
export default {
  // 演示2：子给父传
  data:function() {
    return {
      son: ''
    }
  },
  methods: {
    hello: function() { 
      // 子组件向父组件传值
      // $emit（发送）里面有两个参数：1.方法名（标识符）2.要传的值
      this.$emit('sendApp', 'son发来的礼物')
    }
  },
// 过程：父子都定义好一个占位符sendApp；也就是调用这个方法，就会把数据传递过去，传递到约定好的占位符后面的值，然后再进入到data形参


  // 父传子
  // 接受值
  props: ['yy', 'aa'],
  // 初始化之后的方法内可以接收到值
  created: function() {
    console.log(this)
  }
  
}
</script>

<style>

</style>

