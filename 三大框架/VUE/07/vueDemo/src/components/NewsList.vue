<template>
  <div class="temp">
      <ul class="mui-table-view">
				<li v-for="(item,index) in newslistData" :key="index" class="mui-table-view-cell mui-media">
					<!-- <router-link to="/newsdetail"> -->
                    <!-- 路由传值 v-bind和to同时使用-->
                    <router-link v-bind='{to:"/newsdetail/"+item.id}'>
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<!-- <p class='mui-ellipsis'>{{item.zhaiyao}}</p> -->

                            <!-- 5.2过滤器使用:转换时间格式 -->
                             <p class='mui-ellipsis'>发布时间:{{item.add_time | filterName('YYYY-MM-DD hh:mm:ss')}}  <span>点击量: {{item.click}}</span>   </p>
                        </div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
import tool from '../tool/tool'
export default {
    data () {
        return {
            newslistData: []
        }
    },
    created () {
        this.getNewsListData()
    },
    methods:{
        getNewsListData(){
            // var url = 'http://vue.studyit.io/api/getnewslist'

            // 假设上面没有请求，谁跳转到本页面，谁传age后面的值
            // var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnewslist?age=""`

            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnewslist`
            this.$http.get(url).then(
                res=>{
                    // console.log(res)
                    // 拿到这个数据，↑ 定义全局变量 ↓ 接收
                    this.newslistData = res.body.message
                },
                res=>{
                    console.warn('newslist页面信息请求出错')
                }
            )
        }
    }
}
</script>

<style>

</style>
