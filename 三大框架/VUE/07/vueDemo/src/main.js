// 对根组件的设置（以及路由、全局变量等）

// 1.0引入vue
import Vue from 'vue'
// 1.1对自定义根组件首次导入渲染
import App from './App.vue'

// 2.0当前项目引入mint-ui组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 2.0引入mui中的样式库
import './static/css/mui.min.css'

// 3.0引入vue-router来控制各个页面的切换（路径）
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 4.0vue中请求的时候,除了可以使用axios之外,还可以使用vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 6.0导入图片预览组件
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)


// 引入各个页面组件
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Shopcar from './components/ShopCar.vue'
import Search from './components/Search.vue'
import NewsList from './components/NewsList.vue'
import NewsDetail from './components/NewsDetail.vue'
import PhotoList from './components/PhotoList.vue'
import PhotoDetail from './components/PhotoDetail.vue'
import GoodsList from './components/GoodsList.vue'

// 引入全局的css样式
import './root.css'

// 5.0引入moment处理时间日期
import moment from 'moment'
// 5.1定义一个公有过滤器
Vue.filter('filterName',function (input,fmtString) { //两个形参:加工的内容,加工的样式
    return moment(input).format(fmtString)
})


// 3.1进行vue-router的实例化
var router = new VueRouter({
    // 动态获取样式，进行修改
    linkActiveClass:'mui-active',
    // 定义组件层级关系
    routes:[
        {name:'root',path:'/',redirect:'/home'},
        {name:'home',path:'/home',component:Home},

        // 包含功能：假设member是home的子组件,增加children属性再放子组件路由
        // { name: 'home', path: '/home', component: Home, children: [ {name:'member',path:'/member',component:Member} ] },
        
        {name:'member',path:'/member',component:Member},
        {name:'shopcar',path:'/shopcar',component:Shopcar},
        {name:'search',path:'/search',component:Search},
        {name:'newslist',path:'/newslist',component:NewsList},
        {name:'newsdetail',path:'/newsdetail/:id',component:NewsDetail},
        {name:'photolist',path:'/photolist',component:PhotoList},
        {name:'photodetail',path:'/photodetail/:id',component:PhotoDetail},
        {name:'goodslist',path:'/goodslist',component:GoodsList}
    ]
})

// 1.2初始化
new Vue({
    el: '#app',
    router,//3.2路由声明
    render: createElement => createElement(App)
})