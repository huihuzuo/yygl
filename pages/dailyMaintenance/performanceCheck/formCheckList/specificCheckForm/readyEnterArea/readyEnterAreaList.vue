<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="deleLi">
		<view slot="content" style="width:100%;height:100%;">			
			<view class="subPage--content-bottomhalf">
				<view class="subPage--content-bottomhalf-innerwrap">
					<view class="subPage--content-bottomhalf-innerwrap-li">						
						<view class="subPage--content-bottomhalf-innerwrap-li-content"
						v-for="(li,index) in jczbAllList"
						:key="index"																								
						>
						    <view class="subPage--content-bottomhalf-innerwrap-li-content-first">
								<view>
									<text class="subPage--content-bottomhalf-innerwrap-li-content-text">合同编号：</text>
									<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.htbh}}</text>
								</view>
								<view class="radio" :class="{'checked':deleteIdList.includes(li.id)}" @click="radioChange(li.id)"></view>
							</view>							
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">检查日期：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.jcrq}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">合同名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{li.htmc}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">施工单位：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.sgdw}}</text>
							</view>							
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">管理单位：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.gldw}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">检查人：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.jcr}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">合同金额：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.htje}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">违约罚金合计：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.wyfj}}</text>
							</view>						
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">备注：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{li.bz}}</text>
							</view>							
							<!-- 列表中的明细 -->
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail">
								<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-title">
									明细
								</view>
								<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content"
								v-for="(mx,mxindex1) in li.jczbmxb" 
								:key="mxindex1">
								   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
									   <view>编号：</view>
									   <view>{{mx.bh}}</view>
								   </view>
								   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
									  <view>检查内容：</view>
									  <view>{{mx.jcnr}}</view>
								   </view>
									<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
									   <view>罚金：</view>
									   <view>{{mx.fj}}</view>
									</view>
									<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
									   <view>备注：</view>
									   <view>{{mx.memo}}</view>
									</view>										
								</view>
							</view>
							<view class="operationBtn">
								<view class="subPage--content-bottomhalf-innerwrap-btn" @click="edit(index)">编辑</view>
								<view class="subPage--content-bottomhalf-innerwrap-btn" @click="seeDetail(index)">明细</view>
							</view>																												
						</view>						
					</view>										
					
				</view>
			</view>
		    <view class="blank"></view>							
		    <view class="bottom">				
		    	<!-- 增加操作 -->
		    	<view class="bottom-add" @click="addCheck">			   
		    		 <uni-icon type="plus" size="20" color="blue"></uni-icon>					 
		    	</view>		   						
		    	<uni-pagination 
		    	    class="bottom-page"
		    		show-icon="true" 
		    		:total="total" 
		    		:current="currentPage"
		    		@change="getPerpage">
		    	</uni-pagination>
		    </view>
		</view>		
	</sub-page>	
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui';
	import uniPagination from "@dcloudio/uni-ui/lib/uni-pagination/uni-pagination"
	export default {
		data() {												
			return {
			   checked:'',
			   btnName:'删除',
			   title: '进场准备履约检查',			   
			   jczbAllList:[],
			   deleteIdList:[],
			   ids:'',			   			   
			   total:100,
			   currentPage:1,			   
			   form:{
				   pageNum:1,
				   pageSize:10				   				   
				}
	        }
		},
		computed: {},
		mounted(){
			this.getJczbAllList()
		},		
		components: {			
			uniPagination,
			uniIcon
		},
		methods:{		
			// 查询施工单位列表服务
			getJczbAllList(){
				uni.showLoading({
					title:'loading...'
				})				
				this.$api.queryReadyAreaList(this.form).then(res =>{					
					 console.log(res)
					if(res.data.code === 1){
						this.jczbAllList = res.data.data.list
						this.total = res.data.data.total
						//console.log(this.jczbAllList)												
					}
					setTimeout(function () {
						uni.hideLoading();
					}, 500);
				}).catch(e =>{
					console.log(e)
					uni.showToast({
						title:'查询失败，请稍后'
					})
				})
			},
			// 根据id获取检查明细服务
			seeDetail:function(index){
				let vm = this	
				console.log(index)								
				let detailId = vm.jczbAllList[index]['id']			
				//let indexId = e.target.dataset.id            // 获取当前点击元素的id（索引值）							
				//let detailId = this.xjsbAllList[indexId]    //获取当前点击元素的属性值					  
				//detailId = JSON.stringify(detailId);
				console.log(detailId)
				uni.navigateTo({
					url:'./detailJczb?id='+detailId
				})				
			},
			// 分页获取数据
			getPerpage(val){
				this.current = val.current
				this.form.pageNum = val.current
				this.getJczbAllList()
				//console.log(this.current)										
			},
			// 勾选是否要删除的方法
			radioChange(id) {
				if(this.deleteIdList.includes(id)){
					this.deleteIdList.splice(this.deleteIdList.indexOf(id),1)
				}else{
					this.deleteIdList.push(id)					
				}
				console.log(this.deleteIdList)
			},
			//添加操作
			addCheck(){
				uni.navigateTo({
					url:'./addJczb'
				})				
			},
			// 勾选后删除操作
			deleLi(){
				 let ids = this.deleteIdList.join(',')
				console.log(ids)
				if(ids === ''){
					uni.showToast({
						title:'请选择要删除的选项'
					})
				}else{
					this.$api.deleteJczbByIds(ids).then(res =>{
						if(res.data.code === 1){
							uni.showModal({
								title: '是否确定删除?',								
								success: function (res) {
									if (res.confirm) {
										uni.showToast({
											title:'删除成功！'
										})																		
										//window.location.reload(); 删除成功后自动刷新
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							})
						}
					}).catch(() =>{
						uni.showToast({
							title:'删除失败！'
						})
					})											
				}
			},				
			// 编辑操作
		    edit:function(index){
				let vm = this	
				console.log(index)								
				let detailId = vm.jczbAllList[index]['id']							
				console.log(detailId)						
				uni.navigateTo({
					url:'./editJczb?id='+detailId
				})
			}						
		}
	}
</script>

<style lang="scss">
	.subPage--content {			
		&-bottomhalf {
			width:100%;						
			display:flex;
			justify-content: center;
			align-items: center;
			&-innerwrap {
				width:90%;
				height:95%;				
				&-li {															
					&-content {
						//padding: 10upx;
						background-color: #eee;
						margin-top:30upx;
						dispaly:flex;
						font-size:32upx;
						line-height:66upx;
						&-first{
							display:flex;
							justify-content: space-between;
							align-items: center;
							.radio{
								width:35upx;
								height:35upx;
								border:1upx solid #2d76fb;
								border-radius:50%;
							}
							.checked{
								background-color: #2d76fb;
							}
						}
						&-detail{
							width:100%;
							border-top: 1upx solid #fff;
							margin-top:20upx;
							&-title{
								text-align: center;																
							}
							&-content{
								margin-top:30upx;
								&-li{
									display:flex;
								}							
							}														
						}
						
					}
					.operationBtn{
						display:flex;
						justify-content: space-around;
						align-items: center;
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
	    .subPage--content-bottomhalf-blank{
			width:100%;
			height:200upx;
		}
		
	}
	.blank{
		width:100%;
		height:200upx;
	}
	.bottom{
		background-color: 100%;
		background-color: #fff;
		position:fixed;
		overflow: hidden;
		bottom:0;
		left:0;
		width:100%;						
		&-add{
			width:100%;								
			text-align: center;		
			color:#3288f3;
			background-color: #fff;
			font-size:20upx;
			height:80upx;
			line-height:80upx;
			
		}			
	}
	.page{
		width:100%;
		position:fixed;
		bottom:0;
		left:0;
		overflow: hidden;
		background-color: #fff;
		
	}
    
</style>

