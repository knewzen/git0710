<template>
  
</template>

<script>

// 3.10 引入 接收
import Bus from './bus'
export default {
  created: function () {
      Bus.$on('toBFlag',function (data) {
          console.log(data)
      })
  }
}

// 测试：npm run server通过点击可以 打印出结果11111
</script>

<style>

</style>
