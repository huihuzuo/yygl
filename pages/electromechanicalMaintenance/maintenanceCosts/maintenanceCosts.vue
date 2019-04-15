<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="deleLi">
		<view slot="content" style="width:100%;height:100%;">			
			<view class="subPage--content-bottomhalf">
				<view class="subPage--content-bottomhalf-innerwrap">
					<view class="subPage--content-bottomhalf-innerwrap-li">						
						<view class="subPage--content-bottomhalf-innerwrap-li-content"
						v-for="(li,index) in wxfyAllList"
						:key="index"																								
						>
						    <view class="subPage--content-bottomhalf-innerwrap-li-content-first">
								<view>
									<text class="subPage--content-bottomhalf-innerwrap-li-content-text">单据编号：</text>
									<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.djbh}}</text>
								</view>
								<view class="radio" :class="{'checked':deleteIdList.includes(li.djbh)}" @click="radioChange(li.djbh)"></view>
							</view>							
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">维修单号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.wxdh}}</text>
							</view>							
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">设备名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.sbmc}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">所属合同：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{li.ssht}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">结算金额：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{li.jsje}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">费用说明：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{li.fysm}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">备注：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{li.bz}}</text>
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
			   title: '维修费用',			   
			   wxfyAllList:[],
			   deleteIdList:[],
			   ids:'',			   			  
			   total:100,
			   currentPage:1,			   
			   form:{
				   pageNum:1,
				   pageSize:10,
				   djbh:'',
				   tbdwdm:'',
				   wxdh:'',
				   ksrq:'',
				   jsrq:''					  
				}
	        }
		},
		computed: {},
		mounted(){
			this.getwxfyList()
		},		
		components: {			
			uniPagination,
			uniIcon
		},
		methods:{
			
			// 查询维修登记列表服务
			getwxfyList(){
				uni.showLoading({
					title:'loading...'
				})				
				this.$api.getWxfyList(this.form).then(res =>{					
					 console.log(res)
					if(res.data.code === 1){
						this.wxfyAllList = res.data.data.list
						this.total = res.data.data.total
						console.log(this.wxfyAllList)												
					}
					setTimeout(function () {
						uni.hideLoading();
					}, 500);
				}).catch(e =>{
					console.log(e)
					uni.showToast({
						title:'查询失败'
					})
				})
			},
			// 根据id获取检查明细服务
			seeDetail:function(index){
				let vm = this	
				console.log(index)								
				let detailId = vm.wxfyAllList[index]['djbh']			
				//let indexId = e.target.dataset.id            // 获取当前点击元素的id（索引值）							
				//let detailId = this.xjsbAllList[indexId]    //获取当前点击元素的属性值					  
				//detailId = JSON.stringify(detailId);
				console.log(detailId)
				uni.navigateTo({
					url:'../maintenanceCosts/wxfyDetail/wxfyDetail?djbh='+detailId
				})				
			},
			// 分页获取数据
			getPerpage(val){
				this.current = val.current
				this.form.pageNum = val.current
				this.getwxfyList()
				//console.log(this.current)										
			},
			// 勾选是否要删除的方法
			radioChange(djbh) {
				if(this.deleteIdList.includes(djbh)){
					this.deleteIdList.splice(this.deleteIdList.indexOf(djbh),1)
				}else{
					this.deleteIdList.push(djbh)					
				}
				console.log(this.deleteIdList)
			},
			// 勾选后删除操作
			deleLi(){
				 let djbhs = this.deleteIdList.join(',')
				console.log(djbhs)
				if(djbhs === ''){
					uni.showToast({
						title:'请选择要删除的选项'
					})
				}else{
					this.$api.delWxfyByDjbhs(djbhs).then(res =>{
						if(res.data.code === 1){
							uni.showModal({
								title: '是否确定删除?',								
								success: function (res) {
									if (res.confirm) {
										uni.showToast({
											title:'删除成功！'
										})
										window.location.reload() //删除成功后自动刷新
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
				let detailId = vm.wxfyAllList[index]['djbh']			
				//let indexId = e.target.dataset.id            // 获取当前点击元素的id（索引值）							
				//let detailId = this.xjsbAllList[indexId]    //获取当前点击元素的属性值					  
				//detailId = JSON.stringify(detailId);
				console.log(detailId)					
				uni.navigateTo({
					url:'../maintenanceCosts/wxfyEdit/wxfyEdit?djbh='+detailId
				})
			},
			//添加操作
			addCheck(){
				uni.navigateTo({
					url:'../maintenanceCosts/addWxfy/addWxfy'
				})
			}			
			
		}
	}
</script>

<style lang="scss">
	.subPage--content {			
		&-bottomhalf {
			width:100%;			
			//height:calc(100% - 350upx);
			//height:100%;
			//background-color: #eee;
			//margin-top:10upx;
			display:flex;
			justify-content: center;
			align-items: center;
			&-innerwrap {
				width:90%;
				height:95%;				
				&-li {					
					//padding: 10upx;
					//background-color: #fff;					
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
