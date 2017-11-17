<template>
    <div class="temp">
        <div class="title">
            <h3>{{newsDetailData.title}}</h3>
            <div class="info">
                {{newsDetailData.add_time |　filterName('YYYY-MM-DD')}}
                <div>
                    {{newsDetailData.click}}浏览
                    分类:经济民生 
                </div>
            </div>
            <div class="content">
                <p v-html="newsDetailData.content"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .title h3{
        color:lightcoral;
        text-align: center;
    }
    .content{
        padding: 5px;
    }
    .info {
        display: flex;
        justify-content: space-between;
        color:rgba(1,1,1,0.4);
    }
</style>


<script>
import tool from '../tool/tool'
export default {
    data () {
        return {
            newsDetailData: {}
        }
    },
    created () {
        var id = this.$route.params.id
        this.getNewsDetailData(id)
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

