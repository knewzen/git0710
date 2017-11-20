<template>
    <div class="temp">
        <div class="title">
            <h3>{{newsDetailData.title}}</h3>
            <div class="info">
                {{newsDetailData.add_time |　filterName('YYYY-MM-DD')}}
                <div>
                    浏览：{{newsDetailData.click}}
                    分类:经济民生 
                </div>
            </div>
            <div class="content">
                <p v-html="newsDetailData.content"></p>
            </div>
        </div>

        <!-- op2.2调用 添加评论组件 -->
        <Discuss :recDiscussid="discussID"></Discuss>
    </div>
</template>

<style scoped>
    .title h3{
        color:lightcoral;
        text-align: center;
    }
    .info {
        display: flex;
        justify-content: space-between;
        color:rgba(1,1,1,0.4);
    }
    .content{
        padding: 5px;
    }
</style>


<script>
import tool from '../tool/tool'

// op2.0 封装子组件
import Discuss from './sub/Discuss.vue'

export default {
    data () {
        return {
            newsDetailData: {}, //详情用对象
            discussID: 0
        }
    },
    created () {
        //获取id  // $route就是hash值 
        var id = this.$route.params.id// 先获得一个值，定义一个值，再传给子组件
        this.getNewsDetailData(id) //保存值
        this.discussID = id  //父给子传
    },
    components: {
        // op2.1声明
      Discuss  
    },
    methods:{
        getNewsDetailData (id) {
            // 请求当前页面的数据
            // var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnew/` + id
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnew/${id}`
            this.$http.get(url).then(
                res=>{
                //    console.log(res) 
                    this.newsDetailData = res.body.message[0]
                    console.log(this.newsDetailData)
                },
                res=>{
                    console.log('newsdetail页面请求数据失败')
                }
            )
        }
    }
}
</script>

