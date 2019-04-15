<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="deleLi">
		<view slot="content" style="width:100%;height:100%;">			
			<view class="subPage--content-bottomhalf">
				<view class="subPage--content-bottomhalf-innerwrap">
					<view class="subPage--content-bottomhalf-innerwrap-li">						
						<view class="subPage--content-bottomhalf-innerwrap-li-content"
						v-for="(li,index) in xjsbAllList"
						:key="index">																														
						    <view class="subPage--content-bottomhalf-innerwrap-li-content-first">
								<view>
									<text class="subPage--content-bottomhalf-innerwrap-li-content-text">单据编号：</text>
									<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.id}}</text>
								</view>
								<view class="radio" :class="{'checked':deleteIdList.includes(li.id)}" @click="radioChange(li.id)"></view>
							</view>							
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">巡检类型：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.xjlx}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">巡检周期：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.xjzq}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">检查时间：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.jcsj}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">巡检人：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.xjr}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">巡检描述：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{li.xjms}}</text>
							</view>		
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">备注：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.bz}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">填报人：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.tbr}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">填报时间：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{li.tbsj}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">填报单位：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.tbdw}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">填报部门：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.tbbm}}</text>
							</view>										
							<!-- 列表中的明细 -->
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail">
								<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-title">
									检查明细
								</view>
								<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content"
								v-for="(mx,mxindex) in li.mx" 
								:key="mxindex">
									<view>{{mx.mx_xh}}</view>
									<view>{{mx.mx_jcx}}</view>
									<view>{{mx.mx_jcjg}}</view>
									<view>{{mx.mx_bz}}</view>
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
	import  uniPagination from "@dcloudio/uni-ui/lib/uni-pagination/uni-pagination"
	export default {
		data() {												
			return {
			   checked:'',
			   btnName:'删除',
			   title: '设备巡检',			   
			   xjsbAllList:[],
			   deleteIdList:[],			   
			   ids:'',			   			   
			   total:100,
			   currentPage:1,			   
			   form:{
				   pageNum:1,
				   pageSize:10,
				   id:'',
				   tbdwdm:'',
				   ksrq:'',
				   jsrq:''				   
				}
	        }
		},
		computed: {},
		mounted(){
			this.getSbxjList()
		},		
		components: {			
			uniPagination,
			uniIcon
		},
		methods:{			
			// 查询设备巡检列表服务
			getSbxjList(){
				uni.showLoading({
					title:'loading...'
				})				
				this.$api.getSbxjAllList(this.form).then(res =>{										
					if(res.data.code === 1){
						this.xjsbAllList = res.data.data.list
						this.total = res.data.data.total
						console.log(this.xjsbAllList)																																													
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
			// 列表页面的增加操作
			addCheck(){
				uni.navigateTo({
				  url:'../equipmentInspection/addPage/addPage'
				})
			},
			// 根据id获取检查明细服务
			seeDetail:function(index){
				let vm = this	
				console.log(index)								
				let detailId = vm.xjsbAllList[index]['id']			
				//let indexId = e.target.dataset.id            // 获取当前点击元素的id（索引值）							
				//let detailId = this.xjsbAllList[indexId]    //获取当前点击元素的属性值					  
				//detailId = JSON.stringify(detailId);
				console.log(detailId)
				uni.navigateTo({
					url:'../equipmentInspection/checkDetail/checkDetail?id='+detailId
				})				
			},
			// 分页获取数据
			getPerpage(val){
				this.current = val.current
				this.form.pageNum = val.current
				this.getSbxjList()
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
			// 勾选后删除操作
			deleLi(){
				 let ids = this.deleteIdList.join(',')
				console.log(ids)
				if(ids === ''){
					uni.showToast({
						title:'请选择要删除的选项'
					})
				}else{
					this.$api.deleteSbxjInfoByIds(ids).then(res =>{
						if(res.data.code === 1){
							uni.showModal({
								title: '是否确定删除?',								
								success: function (res) {
									if (res.confirm) {
										uni.showToast({
											title:'删除成功！'
										})
										//window.location.reload() 删除成功后自动刷新
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
				let detailId = vm.xjsbAllList[index]['id']			
				//let indexId = e.target.dataset.id            // 获取当前点击元素的id（索引值）							
				//let detailId = this.xjsbAllList[indexId]    //获取当前点击元素的属性值					  
				//detailId = JSON.stringify(detailId);
				console.log(detailId)											
				uni.navigateTo({
					url:'../equipmentInspection/editEquipmentInspection/editEquipmentInspection?id='+detailId
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
								display:flex;
								justify-content: space-between;							
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
		.blank{
			height:150upx;
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
		
	}

	
    
</style>
