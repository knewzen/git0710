<template>
    <div class="temp">
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
        <div class="image" v-for="(item,index) in imagesData" :key="index">
            <router-link to="/photodetail">
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
    .zhaiyao p{
        position: absolute;
        bottom: 0px;
        left: 0px;
        color: white;
        background-color: rgba(1,1,1,0.3)
    }
    .image img{
        width:100%;
        height: auto;
    }

    .menu ul{
        list-style: none;
        padding: 0px;
        display: flex;
        overflow-x: auto;
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
                    this.isTrue = true
                },res=>{
                    console.log('photolist页面请求图片分类出错')
                }
            )
        },
        getImageData (id) {
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
