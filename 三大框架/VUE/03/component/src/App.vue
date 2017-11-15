<template>
  <div>

      <h1>APP.vue组件</h1>

      <!-- 图片加载器 -->
      <!-- <img src="./images/demo.jpg" alt=""> -->

      <Son yy="1" :aa="msg"  @sendApp="world"></Son>
      <!-- yy是Son的属性，1是app要传的，用的v-bind绑定  ;v-on定义事件-->

      ewfqfeffeffqf
  </div>
</template>

<script>
import Son from './Son.vue';
export default {
  // 演示1：父组件给子组件传值：只需要在调用子组件的时候，给Son标签添加属性
  data: function () { 
    return {
      msg: '给son的礼物'
    }
  },
  components: {
    Son
  },

  // 子传父亲
  methods: {
    world:function (data) {
      console.log(data)
    //this.$on // $on是接收
    }
  }

}
</script>

<style>
  h1 {color: red;}
</style>

