<template>
    <div class="temp">
        <div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">
		        <li v-for="(item,index) in goodslistData" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">
                            <h4>{{item.title}}</h4>
                            <br>
                            <div class="info">
                                {{item.add_time | filterName('hh:mm:ss')}}
                                <div>
                                     库存{{item.stock_quantity}}件 
                                </div>
                            </div>
                        </div>
                    </a>
                </li>

		    </ul>    
		</div>
    </div>
</template>

<style>
    .mui-media-body h4{
        text-align: center;
        color: orange;
    }
    .info{
        display: flex;
        justify-content: space-between;
        color:rgba(1,1,1,0.4)
    }
</style>

<script>
import tool from '../tool/tool'
export default {
    data () {
        return {
            goodslistData: []
        }
    },
    created () {
        this.getGoodsListData()
    },
    methods:{
        getGoodsListData () {
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getgoods?pageindex=1`
            this.$http.get(url).then(
                res=>{
                    // console.log(res)
                    this.goodslistData = res.body.message
                },
                res=>{
                    console.log('goodslist页面请求数据出错')
                }
            )
        }
    }
}
</script>
