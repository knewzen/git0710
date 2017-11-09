# 学习方法介绍

* 笔记法
* 单项查找法
* 项目敲击法

# 单页应用

## 概念

单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。

一旦页面加载完成了，SPA不会因为用户的操作而进行页面的重新加载或跳转。

而是利用 JavaScript 动态的变换HTML的内（采用的是div切换显示和隐藏），从而实现UI与用户的交互。

由于避免了页面的重新加载，SPA 可以提供较为流畅的用户体验。得益于ajax，我们可以实现无跳转刷新，又多亏了浏览器的histroy机制，我们用hash的变化从而可以实现推动界面变化。



## 特点

速度：更好的用户体验，让用户在web app感受native app的速度和流畅，

·MVC：经典MVC开发模式，前后端各负其责。

·ajax：重前端，业务逻辑全部在本地操作，数据都需要通过AJAX同步、提交。

·路由：在URL中采用#号来作为当前视图的地址,改变#号后的参数，页面并不会重载。





## 优点：

> 1、分离前后端关注点，前端负责界面显示，后端负责数据存储和计算，各司其职，不会把前后端的逻辑混杂在一起；

> 2、减轻服务器压力，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；

> 3、同一套后端程序代码，不用修改就可以用于Web界面、手机、平板等多种客户端；

## 缺点：

> 1、SEO问题

> 2、前进、后退、地址栏等，需要程序进行管理；



## 实例:

```html
 <body>
　　	<div id="A" class="a">A</div>
　　	<div id="B" class="b" style="display:none;">B</div>
　　	<div id="C" class="c"   style="display:none;">C</div>
</body>
```

```javascript
function hashChanged(hashObj) {
        // console.log('hashChanged')
        // console.log(hashObj)
  	// 获取新旧url
    var newhash = hashObj.newURL.split('#/')[1];
    var oldhash = hashObj.oldURL.split('#/')[1];
    document.getElementById(oldhash).style.display = 'none';
    document.getElementById(newhash).style.display = 'block'
}

    window.onhashchange = hashChanged
```

或者:

```html
<body>
  <a href="#/a">用户管理</a>
  <a href="#/b">薪资管理</a>
  <div id="view">

  </div>
</body>

<script>
  // 监听地址栏中锚点的变化
  window.onhashchange = function () {
    console.log(1)
    // 得到地址栏的锚点值
    var hash = window.location.hash

    if (hash === '#/a') {
      document.querySelector('#view').innerHTML = '小胆管理用户'
    } else if (hash === '#/b') {
      document.querySelector('#view').innerHTML = '小胆薪资管理'
    }
  }
</script>
```





## 举例

网易音乐: http://music.163.com





# MVC

## 概念

[MVC](https://baike.baidu.com/item/MVC)全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范，用一种业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。MVC被独特的发展起来用于映射传统的输入、处理和输出功能在一个逻辑的图形化用户界面的结构中。

## 使用目的

使用MVC的目的是将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。比如一批统计数据可以分别用[柱状图](https://baike.baidu.com/item/%E6%9F%B1%E7%8A%B6%E5%9B%BE)、[饼图](https://baike.baidu.com/item/%E9%A5%BC%E5%9B%BE)来表示。C存在的目的则是确保M和V的同步，一旦M改变，V应该同步更新。

MVC 是一种使用 MVC（Model View Controller 模型-视图-控制器）设计创建 Web 应用程序的模式：

- Model（模型）表示应用程序核心（比如数据库记录列表）。
- View（视图）显示数据（数据库记录）。
- Controller（控制器）处理输入（写入数据库记录）。

MVC 模式同时提供了对 HTML、CSS 和 JavaScript 的完全控制。

**Model（模型）**是应用程序中用于处理应用程序数据逻辑的部分。
　　通常模型对象负责在数据库中存取数据。

**View（视图）**是应用程序中处理数据显示的部分。
　　通常视图是依据模型数据创建的。

**Controller（控制器）**是应用程序中处理用户交互的部分。
　　通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据。

MVC 分层有助于管理复杂的应用程序，因为您可以在一个时间内专门关注一个方面。例如，您可以在不依赖业务逻辑的情况下专注于视图设计。同时也让应用程序的测试更加容易。

MVC 分层同时也简化了分组开发。不同的开发人员可同时开发视图、控制器逻辑和业务逻辑。

![01](C:\Users\Administrator\Desktop\vue资料\images\01.jpg)

## 特点

### 优点:

* 耦合性低
* 重用性高
* 成本低
* 部署快
* 可维护性高
* 有利于软件工程化管理

### 缺点

* 没有明确的定义
* **不适合小型，中等规模的应用程序**
* **增加系统结构和实现的复杂性**
* **视图与控制器间的过于紧密的连接**
* **视图对模型数据的低效率访问**
* **般高级的界面工具或构造器不支持模式**


# MVVM

## 概念

MVVM是Model-View-ViewModel的简写。

![02](C:\Users\Administrator\Desktop\vue资料\images\02.jpg)

MVVM 模式使用的是数据绑定基础架构。

View绑定到ViewModel，然后执行一些命令在向它请求一个动作。而反过来，ViewModel跟Model通讯，告诉它更新来响应UI

## 优点

MVVM模式和MVC模式一样，主要目的是分离视图(View）和模型（Model），有几大优点

**1. 低耦合**。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

**2. 可重用性**。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

**3. 独立开发**。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码。

**4. 可测试**。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。



# 扩展

设计模式详解

> http://www.cnblogs.com/maowang1991/archive/2013/04/15/3023236.html

开发模式简介:

> http://www.cnblogs.com/liang--liang/p/3613815.html

学习网站介绍:

* 网易云课堂: 

  > http://study.163.com/category/front-end-development

* 红客联盟

  > http://www.cnhonkerarmy.com/portal.php

* 我要自学网

  > http://www.51zxw.net/list.aspx?cid=451







# VUE

## 概念

Vue.js (读音 /vjuː/，类似于 **view**) 是一套构建用户界面的**渐进式框架**。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)和 [Vue 生态系统支持的库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。

> 官网: https://cn.vuejs.org
>
> 官方文档: https://cn.vuejs.org/v2/api/

![04](C:\Users\Administrator\Desktop\vue资料\images\04.jpg)

## 特点

* 组件化开发                                 减少部署成本，提高开发效率。
* 声明式渲染
* 生命周期思想
* 可复用性强
* 可组合性强


## 数据绑定

* 单向数据绑定

  > 模型变化过后，自动同步到界面上；
  >
  > 一般纯展示型的数据会用到单项数据绑定；
  >
  > 使用表达式的方式都是单向的

  ![img](file:///C:/Users/Administrator/Desktop/vue%E8%B5%84%E6%96%99/images/l.png?lastModify=1510141715)

* 双向数据绑定

  > 两个方向的数据自动同步：
  >
  > 模型发生变化自动同步到视图上；
  >
  > 视图上的数据发生变化过后自动同步到模型上；



# VUE学习

## 引入

### template

我们以前处理数据的方式:

```html
<body>
    <input type="text">
    <p></p>
</body>
</html>
<script>
    var obj = {
        msg:'你好,vue',
        name:'我是中国人'
    }

    // 获取dom
    var oInput = document.querySelector('input')
    var oP = document.querySelector('p')

    oInput.value = obj.msg
    oP.innerHTML = obj.name
</script>
```



### data-bind 简单封装

```html
<body>
    <p></p>
</body>

</html>
<script>
    function databind(options) {
        var obj = options.data()

        // 获取dom
        var oP = document.querySelector('p')
        oP.innerHTML = obj.msg
    }
</script>
<script>
    var obj = {
        msg: '你好,vue'
    }

    new databind({
        data: function () {
            return obj
        }
    })

</script>
```



### form-value

```html
html部分:
<body>
    <input type="text" v-model="msg">
    <input type="text" v-model="name">
    <p v-text="msg"></p>
</body>
</html>
<!-- 导入 -->
<script src="./05-form-value.js"></script>
<script>
    var obj = {
        msg:'我是中国人',
        name:'name'
    }
    new DataBind ({
        data:function () {
            return obj
        }
    })
</script>
```

```javascript
js部分:
function DataBind (options) {

    var obj = options.data()

    DataBind.vModel(obj)

    DataBind.vText(obj)
}

DataBind.vModel = function (obj) {
    var oInputs = document.querySelectorAll('[v-model]')
    for(var i = 0; i < oInputs.length; i++){
        var oInput = oInputs[i]
        var attrVal = oInput.getAttribute('v-model')
        oInput.value = obj[attrVal]
    }
}

DataBind.vText = function (obj) {
    var oPs = document.querySelectorAll('[v-text]')
    for(var i = 0; i < oPs.length; i++){
        var oP = oPs[i]
       var attrVal = oP.getAttribute('v-text')
       console.log(attrVal)
        oP.innerHTML = obj[attrVal]
    }
}
```



## vuePoint

### start  了解

```html
<body>
    <!-- <input type="text" v-model="msg"> -->
    <div id="app">
       <input type="text" v-model="msg">
       <p v-text="msg"></p>
    </div>
</body>
</html>
<!-- 1.引入包文件 -->
<script src="./vue.js"></script>

<script>
    var obj = {
        msg:'我是中国人,我爱自己的祖国'
    }

    // 2.创建实例化对象
    var vm = new Vue({
        data:function () {
            return obj
        }
    })
    // 3.$mount是需要你告诉vue,渲染到那部分区域
    // 参数是一个选择器
    vm.$mount('#app')
</script>
```





### v-text

```html
<body>
    <div id="app">
        <h1>v-text讲解</h1>
        v-text一般用于正常显示的标签,input除外
        <br>

        <span v-text="msg"></span>
        <!-- v-text内容部分可以写js的表达式 -->
        <p v-text="1+1"></p>
        <p v-text="'1' + 1"></p>

        <!-- v-text内部还可以写函数 -->
        <p v-text="Math.random()"></p>
        <p v-text="typeof JSON.stringify({a:1,b:3})"></p>
        <p v-text="JSON.stringify({a:12,b:34})"></p>

        <!-- v-text内部不能使用bom以及bom对象的属性 -->
        <!-- <p v-text="window.location.href"></p> -->
        <!-- 全局定义的属性也不能用 -->
        <!-- <p v-text="alert(1111)"></p> -->

        <p v-text="'name' + 1"></p>
        <p v-text="name + 1"></p>



        <!-- 在vue中,用v-开头的属性叫做指令 -->
    </div>
</body>
</html>
<!-- 1.引入 -->
<script src="./vue.js"></script>
<script>
    // 实例化
    var vm = new Vue({
        data:function () {
            return {
                msg:'你好',
                name: 999
            }
        }
    })

    // 渲染的位置
    vm.$mount('#app')
</script>
```



### v-html-{{}}

```html
<body>
    {{msg}}
    <!-- vue的内容要渲染的区域 -->
    <div id="app">
        <h1>v-html的使用</h1>
        <p v-text="msg"></p>
        <p v-text="name"></p>

        <br>

        v-html和v-text非常相似
        v-text指定元素的innerText为内容部分
        v-html指定元素的innerHTML为内容部分

        <br>

        <p v-html="msg"></p>
        <p v-html="name"></p>

        <!-- 插值表达式 -->
        <p>{{msg}}</p>
        {{msg}}
        {{name}}
        <!-- 插值表达式相当于v-text -->
        <!-- 插值表达式不能用于属性中,除了属性以外的地方都可以使用 -->
        <!-- <p v-text="{{msg}}"></p> -->
    </div>
</body>
</html>
<!-- 1.引入 -->
<script src="./vue.js"></script>
<script>
    // 实例化
    var vm = new Vue({
        data:function () {
            return {
                msg:'html要显示的内容',
                name:'<h1>name部分</h1>'
            }
        }
    })
    // 设置渲染的位置
    vm.$mount('#app')
</script>
```



### v-bind

```html
<body>
    <div id="app">
        <!-- <p aa="msg内容"></p> -->
        <p v-bind:aa="msg">aaa</p>
        <!-- <p aa="1"></p> -->
        <!-- <p v-text="msg"></p> -->

        <img v-bind:src="imgPath" alt="">
        <!-- 错误用法: -->
        <!-- <img src="imgPath" alt=""> -->
        <div v-bind:class="color">这是个div</div>
        <div v-bind:yy="1 + 1">家分店搜if噢is发的</div>
        <div v-bind:yy="Math.random()">这是个div</div>
        <!-- <div v-bind:yy="alert(111)">这是个div</div> -->
        
    </div>
</body>
</html>
<!-- 1.引包 -->
<script src="./vue.js"></script>
<script>
    // 实例化
    var vm = new Vue({
        data:function () {
            return {
                color:'red',  
                msg:'msg内容',
                name:1,
                imgPath:'./img/demo01.jpeg'
            }
        }
    })
    // 网界面上渲染的位置
    vm.$mount('#app')
</script>
```



### v-bind-class

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
     .red{
         color: red;
     }
     .size{
         font-size: 40px;
     }
     .yellow{
         background-color: yellow;
     }
    </style>
</head>
<body>
    <div id="app">
        <h1>v-bind  class</h1>

        <div v-bind:class="colorObj">这是个div</div>
        <div v-bind:class="sex === 1">这是个div</div>
    
    </div>
</body>
</html>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        data:function () {
            return {
                sex:2,
                msg:'你好,哈哈',
                colorObj:{
                    red:true,
                    size:true,
                    yellow:true
                }
            }
        }
    })
    vm.$mount('#app')
</script>
```



### v-if-else-show-hide

```html
<body>
    <div id="app">
        <!-- v-if的值,如果为true,标签内容显示,如果为false,则标签被干掉
        v-else如果要使用的话,必须和v-if连用. -->


        <h1>v-if的使用</h1>
        <h1 v-if="msg">这是h1标签</h1>

        <h1>v-else</h1>
        <h1 v-if="msg">这是h1标签</h1>
        <h1 v-else>这是else部分</h1>

        <h1>v-show</h1>
        <!-- v-show的值如果为true,则正常显示,如果为false,则用样式隐藏 -->
        <h1 v-show="msg">这是show标签</h1>
        
        <h1>v-hide</h1>
        <h1 v-hide="msg">这是hide标签</h1>

    </div>
</body>
</html>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        data:function () {
            return {
                msg:true
            }
        }
    })
    vm.$mount('#app')
</script>
```



### v-on

```html
<body>
    <div id="app">
       <h1>v-on是用来定义事件的</h1> 

        <button v-on:click="hello">按钮</button>


        <button v-on:click="hello(1)">按钮1</button>
        <button v-on:click="hello(1,2,3,{a:1,b:2},'sdijfosdof')">按钮2</button>



        <form v-on:click="hello">
            <!-- .stop的作用就是阻止事件冒泡 -->
            <!-- .stop被称为修饰符 -->
            <button v-on:click.stop="hello">按钮</button>
        </form>


        <!-- v-on:可以简写成@ -->
        <button @click="hello">jsoifdsf</button>

    </div>
</body>
</html>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        // data这个方法内部不要写方法,一般写数据
        data:function () {
            return {

            }
        },
        methods:{
            hello: function () {
                // window.alert(11111)
                console.log(arguments)
            }
        }
    })
    vm.$mount('#app')
</script>
```



### v-for

##ref     

##filter 过滤器

##computed 计算属性

## LifeCycle 生命周期

## watch监听方法

## axios

## 组件

## props            父子组件传值

##busEvent    兄弟组件传值

##vue-router  路由



##webpack

###vue-loader 解析vue的加载器

###url-loader   图片加载器

* 图片格式: 

  > jpg | png | jpeg | bmp | gif

### file-loader  字体文件加载器

* 常见的字体格式: 

  > ttf | woff | woff2 | eot | svg

### css-loader + style-loader      css文件加载器



