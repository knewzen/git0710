// 3.5 引入 new另一个对象
import Vue from 'vue'

var bus = new Vue()

// 3.6导出 让A拿到bus 
export default bus

// module.exports = bus