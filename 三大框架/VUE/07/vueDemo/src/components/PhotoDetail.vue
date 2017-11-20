<template>
    <div class="temp">
        <div class="title">
            <h3>{{photoDetailData.title}}</h3>
        </div>
        <div class="otitle">
            <div>
                 {{photoDetailData.click}}次浏览
            </div>
            分类: 经济民生
        </div>

        <!-- 6.1 添加 lg-preview 组件的位置-->
        <lg-preview class="preview"></lg-preview>

        <!-- 加入图片 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li v-for="(item,index) in photoImageData" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <!-- 6.2 v-preview="item.src" 绑定实现预览-->
                            <img class="img"  v-preview="item.src" :src="item.src" alt="">
                     </li>
		        </ul> 
		</div>

        <div class="content">
            <p v-html="photoDetailData.content"></p>
        </div>

        <Discuss :recDiscussid="toDiscussid"></Discuss>
    </div>
</template>

<style>

    .title{
        text-align: center;
        color:blueviolet;
        padding: 5px;
    }
    .otitle{
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        color:rgba(1,1,1,0.3);
    }

    /* 6.3 */
    .preview {
        position: absolute;
        top: 0px;
        left: 0px;
    }
    
    .mui-grid-view.mui-grid-9{
        background-color: white;
    }
    .img{
        width: 70px;
        height: 70px;   
    }
    .content {
        padding: 5px;
    }
</style>


<script>
import tool from '../tool/tool'
import Discuss from './sub/Discuss.vue'
export default {
    components: {
        Discuss
    },
    data () {
        return {
            photoDetailData: {},
            photoImageData:[],
            toDiscussid:0
        }
    },
    created () {
        var id = this.$route.params.id
        this.getPhotoDetailData(id)
        this.getPhotoImageData(id)
        this.toDiscussid = id
    },
    methods:{
        getPhotoDetailData (id) {
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimageInfo/${id}`
            this.$http.get(url).then( //请求方法内部都是封装了socket.io输入输出操作（socket：监听外来邮件；内部要不要往外发  实现通讯）
                res=>{
                    // console.log(res)
                    this.photoDetailData = res.body.message[0]
                },
                res=>{
                    console.log('photodetail页面请求文字数据出错')
                }
            )
        },
        getPhotoImageData (id) {
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getthumimages/${id}`
            this.$http.get(url).then(
                res=>{
                    // console.log(res)
                    this.photoImageData = res.body.message
                },
                res=>{
                    console.log('photodetail页面请求图片数据出错')
                }
            )
        }
    }
}
</script>

