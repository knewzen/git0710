<template>
    <div>
<!-- 1.3使用：因为父组件可以直接拿到子组件，所以可以直接传：把hello赋值给<Son>里的属性,那么<Son>的默认属性就可以拿到hello的值  -->
        <!-- <Son yy="hello"></Son> -->

        <!-- 2.4接收，传到后面的方法名 -->
        <!-- <Son @flag="receiveSonData"></Son> -->

<!-- 3.4调用 -->
        <brother-a></brother-a>
        <brother-b></brother-b>
    </div>
</template>

<script>
// 1.0父传子
// 1.1导入 可起名Son（相当于给子里对象起名）
import Son from './Son.vue'

// 3.2
import BrotherA from './BrotherA.vue'
import BrotherB from './BrotherB.vue'

export default {
  components: {
// 1.2声明      
      Son,
// 3.3声明
      BrotherA,
      BrotherB
  },
  methods:{
// 2.5 实现方法接收参数
      receiveSonData: function (data) {
          console.log(data)
      }
  }
}
</script>

<style>

</style>
