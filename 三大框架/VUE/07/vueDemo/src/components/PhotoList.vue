<template>
    <div class="temp">
        <!-- 顶部标题 -->
        <div class="menu">
            <ul>
                <li>
                    <a v-if="isTrue" @click="getImageData(0)">全部</a>
                </li>
                <li v-for="(item,index) in newslistData" :key="index">
                   <a @click="getImageData(item.id)">{{item.title}}</a>
                </li>
            </ul> 
        </div>
        <!-- 图片 -->
        <div class="image" v-for="(item,index) in imagesData" :key="index">
            <!-- <router-link to="/photodetail"> -->
            <!-- 跳转详情 -->
            <router-link v-bind='{to:"/photodetail/" + item.id}'>
                    <img :src="item.img_url" alt="">

                    <div class="zhaiyao">
                        <p>{{item.zhaiyao}}</p>
                    </div>
            </router-link>
        </div>
    </div>
</template>

<style>
    .image{
        position: relative;
    }
    .image img{
        width:100%;
        height: auto;
    }
    .zhaiyao p{
        position: absolute;
        bottom: 0px;
        left: 0px;
        color: white;
        background-color: rgba(1,1,1,0.3)
    }

    .menu ul{
        list-style: none;
        display: flex;
        overflow-x: auto;
        /* overflow-y: auto; */
        height: 40px;
        padding: 2px;
    }
    .menu li{
        /* flex-shrink: 0; */
        white-space: nowrap;
        margin-right: 10px;
        
    }
</style>

<script>
import tool from '../tool/tool'
// 必须在当前才能引入 加载样式
import { Indicator } from 'mint-ui';

export default {
    data () {
        return {
            newslistData: [],
            imagesData: [],
            isTrue:false
        }
    },
    created () {
       
        this.getPhotoListData()
        this.getImageData(0)
    },
    methods:{
        getPhotoListData () {
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimgcategory`
            this.$http.get(url).then(
                res=>{
                    // console.log(res)
                    this.newslistData = res.body.message
                    // 加载的时候才展示
                    this.isTrue = true
                },res=>{
                    console.log('photolist页面请求图片分类出错')
                }
            )
        },
        getImageData (id) { //上面请求过一次了，可以获取id
            // mui加载效果
            Indicator.open('Loading...');
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimages/${id}`
            this.$http.get(url).then(
                res=>{
                    // console.log(res)
                    this.imagesData = res.body.message
                    Indicator.close();
                },
                res=>{
                    console.log('photolist页面请求图片失败')
                    Indicator.close();
                }
            )
        }
    }
}
</script>
