<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<view  class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">合同编号</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<!-- <text>{{detailObj.id}}</text> -->
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lyjc.htbh"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">合同金额</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lyjc.htje"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">合同名称</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lyjc.htmc"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">施工单位</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lyjc.sgdw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">管理单位</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lyjc.gldw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">检查人</text>
							</view>
							<view class="content--wrap_form_li_right">								
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lyjc.jcr"/>
							</view>
						</view>
							<view class="content--wrap_form_li">
								<view class="content--wrap_form_li_left">
									<text class="text1">检查日期</text>
								</view>
								<view class="content--wrap_form_li_right">
									<picker class="text2" mode="date" :value="jcrqIndex" :start="startDate" :end="endDate" @change="bindjcrqChange">
										<view class="uni-input">{{jcrqIndex}}</view>
									</picker> 							 
									<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
								</view>
							</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">违约罚金合计</text>
							</view>
							<view class="content--wrap_form_li_right">
								<!-- <text>{{detailObj.tbdw}}</text> -->
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lyjc.fjhj"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" placeholder="请填写" v-model="lyjc.bz"/>
							</view>
						</view>																		
					</view>
					<!-- 检查项 -->
					<view class="subPage--content-bottomhalf-innerwrap-li-content-detail">											
						<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content"
						v-for="(mx,index) in lyjc.lyjcmxb" 
						:key="index"
						>
						   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">编号：</view>
							   <input type="text" placeholder="请填写" v-model="mx.bh">
						   </view>
						   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							  <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">检查内容：</view>
							  <view><input type="text" placeholder="请填写" v-model="mx.jcnr"></view>
						   </view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">罚金：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.fj"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">备注：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.memo"></view>
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
			   title:'添加履约检查',
			   btnName:'保存',			   			                 			   			   
			   date: currentDate,			   
			   jcrqIndex:currentDate,			   
			   lyjc:{
				   htbh:'',
				   htmc:'',
				   htje:'',
				   sgdw:'',
				   gldw:'',
				   jcr:'',
				   jcrq:'',
				   fjhj:'',
				   bz:'',								
				   lyjcmxb: [
						{
					      bh: '',
						  jcnr:'',
						  memo: '',
						  fj: ''						  						  						  						  
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
			
			bindjcrqChange:function(e){
				this.jcrqIndex = e.target.value				
			},															
			// 添加后保存
			onSave(){								
				this.$api.addSgdw(this.lyjc).then(res =>{
					if(res.data.code === 1){
						uni.showToast({
							title:'保存成功'
						})
						
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


