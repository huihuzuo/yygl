<template>
	<sub-page :title="title">
		<view slot="content" style="width:100%;height:100%;">		
			 <view class="subPage--content-bottomhalf">
				<view class="subPage--content-bottomhalf-innerwrap">
					<view class="subPage--content-bottomhalf-innerwrap-li">		
						<view class="subPage--content-bottomhalf-innerwrap-li-content"
						v-for="(wxsgli,value) in wxsgList"
						:key="value"
						>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">单位名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{wxsgli.dwmc}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">单位编号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{wxsgli.dwid}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">部门名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{wxsgli.dwid}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">部门编号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{wxsgli.bmid}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">损坏类型：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{wxsgli.shlxname}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">病害类型：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{wxsgli.sjlxname}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">填报人：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{wxsgli.tbr}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">维修前照片：</text>
								<img class="subPage--content-bottomhalf-innerwrap-li-content-img" :src="wxsgli.YSQTP"/>
							</view>	
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">维修后照片：</text>
								<img class="subPage--content-bottomhalf-innerwrap-li-content-img" :src="wxsgli.YSHZP"/>
							</view>
						</view>						
					</view>										
					<uni-pagination 
						show-icon="true" 
						:total="total" 
						:current="current"
						@change="getPerpage">
					</uni-pagination>
				</view>
			</view>
		</view>
	 </view>
  </sub-page>
</template>

<script>
	import {
		uniIcon,
		uniPagination
	} from '@dcloudio/uni-ui';
	export default {
		data() {			
			return {
				title: '维修施工记录',
				wxsgList:[],							
				total:5,
				current:1,
				form: {
					dwmc:'',
					dwid:'',
					bmmc:'',
					bmid:'',
					tbr:'',
					shlxname:'',
					sjlxname:'',					
					pageNum:1,
					pageSize:5
				}
			}
		},
		computed: {
			
		},
		components: {
			uniIcon,
			uniPagination
		},
		mounted(){
			this.onQuery()
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},			
			// 查询施工照片记录列表
			onQuery(){
				this.$api.getWxsgzpjl().then(res =>{				
					this.wxsgList = res.data.data.rows
					this.total = res.data.data.totle
					console.log(this.wxsgList)
				}).catch(e =>{
					
				})
			},
			// 分页获取数据
			getPerpage(val){
				this.current = val.current
				this.form.pageNum = val.current
				//console.log(this.current)								
			},											
		}
	}
</script>

<style lang="scss">
	.subPage--content {
		&-tophalf{
			width:100%;
			height:200upx;			
			display: flex;
			justify-content: center;
			align-items: center;
			&-innerwrap{
				width:90%;
				height:100%;				
				&-first {
					width:100%;
					height:50%;					
					border-bottom:1upx solid #eee;
					display:flex;
					justify-content: center;
					align-items: center;
					position:relative;
					.numBadge{
						position:absolute;
						left:580upx;
						top:1.38upx;
					}
					&-inner{
						width:70%;
						height:100%;
						display:flex;
						justify-content: space-between;
						align-items: center;						
						font-size:29.16upx;
						&-li {
							height:100%;
							display:flex;
							justify-content: space-between;
							align-items: center;
							
						}
												
					}
					.subPage--content-tophalf-innerwrap-first-inner-li-selected{
						color: #2d76fb;
						border-bottom: 2.08upx solid  #2d76fb;
					}
				}
				&-second {
					width:100%;
					height:50%;	
					display:flex;
					justify-content: center;
					align-items: center;					
					&-inner{
						width:70%;
						height:65%;
						display:flex;
						justify-content: center;
						align-items: center;						
						border:1upx solid #eee;
						border-radius: 5upx;
						//margin-top:20upx;
						font-size:29.16upx;
						&-li{
							width:265.5upx;
							height:70upx;
					        text-align: center;
							line-height:70upx;									
						}
						.subPage--content-tophalf-innerwrap-second-inner-li-selected {
							background-color: #eee;
							
						}
					}
				}
			}
			
		}
		&-bottomhalf {
			width:100%;			
			display:flex;
			justify-content: center;
			align-items: center;
			&-innerwrap {
				width:90%;
				height:95%;				
				&-li {					
					//padding: 30upx;										
					&-content {
						background-color: #eee;
						margin-top:30upx;
						dispaly:flex;
						font-size:32upx;
						line-height:66upx;						
					}
					.subPage--content-bottomhalf-innerwrap-li-content-img{
						display:block;
						width:200upx;
						height:200upx;
					}					
				}
				&-btn{
					width:100%;
					height:80upx;
					line-height: 80upx;
					text-align: center;
					color:#2d76fb;
					font-size:32upx;
					border:1upx solid #eee;
					background-color: #fff;
				}
			}
		}
	}
</style>
