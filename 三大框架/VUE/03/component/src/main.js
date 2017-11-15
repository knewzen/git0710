// 第二部分
// import是ES6中导入文件的一种形式
import Vue from '../node_modules/vue/dist/vue'
// import Vue from 'vue'

// 导入（能够使用app内的对象）
import App from './App.vue'

// 这就是根组件，相当于单页应用的主页面，里面放不同的组件，所以这里不写data
var vm = new Vue({
    el: '#app', //靠这个关联到html的
    
    // 用render方法把App内的东西放到render里，再渲染添加到#app坑
    // render: function (createElement) {
    //     createElement(App)
    // },
    render: createElement => createElement(App)
    

})

// 第三部分 是组件（组件名，组件内容）
// 解决组件名：vue内规定，若想单独创建一个文件形式的组件的话，不是把组件写到某个html页面里面，要写在.vue结尾的文件
// 解决组件内容：一个对象内至少要有template模板部分，而且这个模板用来写html的



// 现在希望三个文件能运行，但是main包含es6语法，而且包含.vue文件；
// 所以把这两个文件做处理（经过webpack打包，生成一个新的能被浏览器识别的文件，在引入到html中）
// 打包操作：webpack ./main.js ./dist/hebing.js

// 创建webpack配置文件