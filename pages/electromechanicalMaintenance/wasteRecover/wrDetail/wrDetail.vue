<template>
	<sub-page :title="title">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<form  class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">单据编号</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<input class="text2 input" type="text" v-model="detailObj['djbh']"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修单号</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<input class="text2 input" type="text" v-model="detailObj['wxdh']"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">退库人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="detailObj['tkr']"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">退库说明</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="detailObj['tksm']"/>
							</view>
						</view>												
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" />						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="detailObj['tbr']"/>
							</view>
						</view>	
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报单位</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="detailObj['tbdw']"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="detailObj['tbbm']"/>
							</view>
						</view>							
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="uni-input">{{date}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">仓库名称</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="detailObj['ckmc']"/>
							</view>
						</view>	
					</form>
					<!-- 检查项 -->
					<view class="content-wrap">
					   <view class="content-wrap-li" v-for="(mx,value) in mxList" :key="value">
						   <view class="content-wrap-li-inner">
							   <view class="content-wrap-li-inner-title">
								  <view class="content-wrap-li-inner-title-left">序号{{mx.xh}}</view> 							  
							   </view>
							   <view class="content-wrap-li-inner-body">
								    <view class="content-wrap-li-inner-body-li">
								    	<view class="content-wrap-li-inner-body-li-left">
								    		<text class="text1">退库单据编号</text>
								    	</view>
								    	<view class="content-wrap-li-inner-body-li-right">
								    		<input type="text" v-model="mx.tkdjbh">
								    	</view>
								    </view>
									<view class="content-wrap-li-inner-body-li">
										<view class="content-wrap-li-inner-body-li-left">
											<text class="text1">备件名称</text>
										</view>
										<view class="content-wrap-li-inner-body-li-right">
											<input type="text" v-model="mx.bjmc">
										</view>
									</view>	
									<view class="content-wrap-li-inner-body-li">
										<view class="content-wrap-li-inner-body-li-left">
											<text class="text1">备件编号</text>
										</view>
										<view class="content-wrap-li-inner-body-li-right">
											<input type="text" v-model="mx.bjbh">
										</view>
									</view>	
								   <view class="content-wrap-li-inner-body-li">
										<view class="content-wrap-li-inner-body-li-left">
											<text class="text1">规格型号</text>
										</view>
										<view class="content-wrap-li-inner-body-li-right">
											<input type="text" v-model="mx.ggxh">
										</view>
								   </view>
								   <view class="content-wrap-li-inner-body-li">
										<view class="content-wrap-li-inner-body-li-left">
											<text class="text1">退库数量</text>
										</view>
										<view class="content-wrap-li-inner-body-li-right">
											<input type="text" v-model="mx.tksl">
										</view>
								   </view>
									<view class="content-wrap-li-inner-body-li">
										<view class="content-wrap-li-inner-body-li-left">
											<text class="text1">计量单位</text>
										</view>
										<view class="content-wrap-li-inner-body-li-right">
											<input type="text" v-model="mx.jldw">
										</view>
									</view>	   
								  <view class="content-wrap-li-inner-body-li">
								  		<view class="content-wrap-li-inner-body-li-left">
								  			<text class="text1">备件状态</text>
								  		</view>
								  		<view class="content-wrap-li-inner-body-li-right">
								  			<input type="text" v-model="mx.bjzt">
								  		</view>
								  </view>	  
									<view class="content-wrap-li-inner-body-li">
										<view class="content-wrap-li-inner-body-li-left">
											<text class="text1">备注</text>
										</view>
										<view class="content-wrap-li-inner-body-li-right">
											<input type="text" v-model="mx.bz">
										</view>
									</view>	   
							   </view>
						   </view>
					   </view>					   
					</view>
					<view class="blank"></view>
					<!-- 增加操作 -->
					<view class="content-wrap-bottom" @click="addCheck">			   
						 <uni-icon type="plus" size="20" color="blue"></uni-icon>
						 <text class="add"></text>
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
			   title:'明细',
			   //btnName:'保存',
			   detailObj:{},
			   mxList:[],			                			   			   
			   date: currentDate,
			   djbh:'',
			   id:''			  			   			   
            }
		},			
		// 获取列表页传过来的id值到详情页		
		onLoad:function(e){			
		 // 看一下传过来的是什么		 
		  console.log(e);      //e 打印出是一个包含id的对象
		  // 获取传过来的id
		  let id = e.djbh;      
		  console.log(id)
		  // 请求详情页								  
			this.$api.getFjrkInfoByDjbh(id).then(res =>{
				if(res.data.code === 1){	
					console.log(res)
					this.detailObj = res.data.data
					console.log(this.detailObj)
					this.mxList = res.data.data.mx
				}												
			}).catch(e =>{
				
			})            
		},
		mounted(){
			
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		components: {
			uniIcon,			
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
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;			
				return `${year}-${month}-${day}`;
			},
			
											
			
			
		},		
	}
</script>

<style lang="scss">
	.content-wrap{
		width:100%;		
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
					margin-top:20upx;
					&-li{
						display:flex;
						justify-content: space-between;
						align-items: center;
						line-height:50upx;
						&-right {
							//width:184.02upx;
							display: flex;
							justify-content:space-between;						
							.input {
								//width:152upx;						    
						    }
							.input-placeholder {
								color:#ccc;							
							}							
							 .icon {
								 color:#c2c6ca;
							 }
						}
					}
				}
			}
		}
		
	}
	.blank{
		height:90upx;
	}
	.content-wrap-bottom{
		position: fixed;
		bottom:0;
		left:0;
		width:100%;
		height:90upx;
		text-align: center;
		line-height: 90upx;
		color:#3288f3;
		background-color: #fff;
	}
</style>

