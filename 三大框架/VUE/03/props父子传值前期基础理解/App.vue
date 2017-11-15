<template>
  <div>

      <h1>APP.vue组件</h1>

        <!-- 组件要像标签一样使用 -->
        <Son></Son>
  </div>
</template>


<script>
import Son from './Son.vue'; // 导入son.vue文件，要给son导出的对象起名字
export default {
// 组件调用的注意点：如果要导入使用子组件，一定要在父组件里声明来告知父组件    
  components: {
    //   Son:Son
    Son     //两个值一样可以简写

  }
}
</script>

<style>
  h1 {color: red;}
</style>

一个大的组件（页面）一般可以分为很多小组件进行管理；
Son.vue需要在App.vue内呈现
也就是一个组件想要使用另一个组件，就需要引入
