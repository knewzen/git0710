<template>
    <div class="discuss">
        <div class="submitTitle">
            <h3>发送评论</h3>
            <!-- 一般通过ref属性获取dom元素 -->
            <textarea ref="textAREA" placeholder="请输入评论内容"></textarea>
            <mt-button type="primary" size="large"  @click="submitDiscuss">发送评论</mt-button>
        </div>

        <div class="showTitle">
            <h3>展示评论</h3>
            <ul >
                <li v-for="(item,index) in discussData" :key="index">
                    <div>
                        {{item.content}}
                    </div>
                    <div class="info">
                        {{item.user_name}}
                        <div>
                             {{item.add_time | filterName('YYYY/MM/DD')}}
                        </div>
                    </div>
                </li>
            </ul> 
        </div>
    </div>
</template>

<style>
    .discuss{
        padding: 5px;
    }
    .showTitle ul{
        padding: 0px;
        margin: 0px;
    }
    .showTitle li{
        list-style: none;
        border-bottom: 1px solid rgba(1,1,1,0.2);
    }
    .info{
        display: flex;
        justify-content: space-between;
    }
</style>

<script>
import tool from '../../tool/tool'
// 提示方法
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            discussData: []
        }
    },
    props:['recDiscussid'], //接收
    created () {
        this.getDiscussData()
    },
    methods:{
        submitDiscuss () {
            // 获取textarea中输入的数据
            let contentValue = this.$refs.textAREA.value
            // 优化
            if (!contentValue ||　contentValue.trim() == '') {
                Toast('请输入内容后再次提交');
                return
            }

            // 发送评论内容的请求
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/postcomment/${this.recDiscussid}`
            this.$http.post(url,{content:contentValue},{emulateJSON:true}).then(
                res=>{
                    // console.log(res)
                    this.getDiscussData()
                     Toast('提交成功');
                    this.$refs.textAREA.value = ''  //提交成功清空内容
                },
                res=>{
                     Toast('提交失败');
                    console.log('discuss页面发送评论内容出错')
                }
            )
            
        
            
            // 发送post请求
            // this.$http.get(url).then()
            // this.$http.jsonp(url).then()
            // this.$http.post(url,{emulateJSON:true}).then()
            // 添加 {emulateJSON:true} 属性会在当前请求头里添加额外参数，能获取数据回调
        },
        //  获取评论内容
        getDiscussData () {
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getcomments/${this.recDiscussid}?pageindex=1`
            this.$http.get(url).then(
                res=>{
                    // console.log(res.body.message)
                    this.discussData = res.body.message
                },
                res=>{
                    console.log('discuss页面中请求评论内容出错')
                }
            )
        }
    }
}
</script>

