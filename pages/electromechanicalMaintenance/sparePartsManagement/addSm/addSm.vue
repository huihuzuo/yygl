<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<view  class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">单据编号</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<!-- <text>{{detailObj.id}}</text> -->
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lysq.djbh"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修单号</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lysq.wxdh"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">需用人</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lysq.xyr"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">领用说明</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lysq.lysm"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lysq.bz"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">								
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lysq.tbr"/>
							</view>
						</view>
							<view class="content--wrap_form_li">
								<view class="content--wrap_form_li_left">
									<text class="text1">填报时间</text>
								</view>
								<view class="content--wrap_form_li_right">
									<picker class="text2" mode="date" :value="tbsjIndex" :start="startDate" :end="endDate" @change="bindtbsjChange">
										<view class="uni-input">{{tbsjIndex}}</view>
									</picker> 							 
									<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
								</view>
							</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报单位</text>
							</view>
							<view class="content--wrap_form_li_right">
								<!-- <text>{{detailObj.tbdw}}</text> -->
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lysq.tbdw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lysq.tbbm"/>
							</view>
						</view>							
										
					</view>
					<!-- 检查项 -->
					<view class="subPage--content-bottomhalf-innerwrap-li-content-detail">											
						<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content"
						v-for="(mx,index) in lysq.mx" 
						:key="index"
						>
						   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">序号：</view>
							   <input type="text" placeholder="请填写" v-model="mx.xh">
						   </view>									
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">备件名称：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.bjmc"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">备件编码：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.bjbm"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">规格型号：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.ggxh"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">计量单位：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.jldw"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">需用数量：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.xysl"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">备注：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.bz"></view>
							</view>									
						</view>
					</view>									
				</view>			    
			</view>
		</view>
	</sub-page>	
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui';	
    export default {
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {
			   title:'添加检查项',
			   btnName:'保存',			   			   
               xjlxList:['收费机电','隧道机电'],			   			   
			   date: currentDate,
			   xjlxIndex:0,
			   xjlxCount:0,
			   jcsjIndex:currentDate,
			   tbsjIndex:currentDate,
			   lysq:{
				   djbh:'wxdj'+new Date().getTime(),
				   wxdh:'wxdh'+new Date().getTime(),				   
				   xyr:'',
				   lysm:'',
				   bz:'',
				   tbr:'',
				   tbsj:'',
				   tbdw:'',
				   tbbm:'',				   
				   mx: [
						{
					      xh: '',
						  bz:'' ,
						  bjmc: '',
						  bjbm: '',
						  jldw: '',
						  ggxh:'',
						  xysl: ''
						  
						}
				   ]
			   }
			   
            }
		},	
		components: {
			uniIcon,			
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},		
		methods:{			
			getDate(type) {
				const date = new Date();			
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 10;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;			
				return `${year}-${month}-${day}`;
				//return year + "-" + month + "-" + date
			},
			bindXjlxChange:function(e){
				this.xjlxCount +=1
				this.xjlxIndex = e.target.value
				this.lysq.xjlx = this.xjlxList[e.target.value]
				
			},
			bindjcsjChange:function(e){
				this.jcsjIndex = e.target.value
				this.lysq.jcsj = e.target.value
			},
			bindtbsjChange:function(e){
				this.tbsjIndex = e.target.value
				this.lysq.tbsj = e.target.value
			},
												
			// 添加后保存
			onSave(){				
				console.log(this.lysq)
				this.$api.addLysq(this.lysq).then(res =>{
					if(res.data.code === 1){
						uni.showToast({
							title:'保存成功'
						})
						console.log(this.lysq)
					}else{
						uni.showToast({
							title:'保存失败'
						})
					}										
				}).catch(() =>{
					uni.showToast({
						title:'保存失败'
					})
				})									
			}			
		},		
	}
</script>

<style lang="scss">
	.content-wrap{
		width:100%;
		//height:calc(100% - 200upx);
		//background-color: #fff;
		border-bottom:1ipx solid #eee;
		font-size:30upx;
		color:#4e5258;										
		&-li {
			width:100%;			
			margin-top:20upx;
			//background-color: #eee;
			display:flex;
			justify-content: center;						
			&-inner {
				width:92%;				
				&-title{
					display:flex;
					justify-content: space-between;
					align-items: center;
					width:100%;
					height:90upx;	
					font-size:35upx;				
					border-bottom:1upx solid #eee;
					&-left{
						font-size:27upx;
					}
					&-right{
						color:#3288f3;
					}					
				}
				&-body{
					display:flex;
					justify-content: space-around;
					height:100upx;
					align-items: center;
				}
			}
		}
		
	}
	.subPage--content-bottomhalf-innerwrap-li-content-detail{
		width:100%;
		border-top: 1upx solid #fff;
		margin-top:20upx;			
		&-content{			
			&-li{
				display: flex;
				font-size:28upx;
				color:#4e5258;
				&-title{
					text-align: center;
					line-height: 52.5upx;
				}
			}							
		}		
	}
	
</style>

