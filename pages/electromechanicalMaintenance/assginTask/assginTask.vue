<template>
	<sub-page :title="title">
		<view slot="content" style="width:100%;height:100%;background-color:#fff;">
			<view class="inner-wrap">
				<view class="inner-wrap-nav">
					<view class="inner-wrap-nav-wrap">
						<view class="inner-wrap-nav-wrap-li"
						v-for="(nav,index) in navBars" 
						:key="index"
						:class="current === index ? 'inner-wrap-nav-wrap-navSlected' : ''"
						@click="navSelect(nav,index)"
						>{{nav}}</view>						
					</view>				
				</view>
				<!-- 未分配 -->
				<view class="inner-wrap-list" v-if="current===1">							      									
					<view class="inner-wrap-list-inner">
						<view class="inner-wrap-list-inner-li" 
						v-for="(task,value) in dfpTaskList" 
				        :key="value">																  		
							<view>
								<view>
									<text>单据编号：</text>
									<text>{{task.djbh}}</text>
								</view>						
							</view>							
							<view >
								<text>故障类型：</text>
								<text>{{task.gzlx}}</text>
							</view>
							<view>
								<text>设备名称：</text>
								<text>{{task.sbmc}}</text>
							</view>
							<view>
								<text>保障日期：</text>
								<text>{{task.bzrq}}</text>
							</view>
							<view>
								<text>报告人：</text>
								<text>{{task.bgr}}</text>
							</view>
							<view>
								<text>要求修复日期：</text>
								<text>{{task.yqxfrq}}</text>
							</view>
							<view>
								<text>设备负责人：</text>
								<text>{{task.sbfzr}}</text>
							</view>
							<view>
								<text>维修人编号：</text>
								<text>{{task.wxrid}}</text>
							</view>
							<view>
								<text>故障描述：</text>
								<text>{{task.gzms}}</text>
							</view>
							<view>
								<text>填报部门：</text>
								<text>{{task.tbbm}}</text>
							</view>
							<view>
								<text>填报单位代码：</text>
								<text>{{task.tbdwdm}}</text>
							</view>
							<view>
								<text>分配状态：</text>
								<text>{{task.fpzt}}</text>
							</view>
							<view>								
								<button :style="{color:textColor === 0 ? 'red':'blue'}" @click="assgin(index)">分配</button>
							</view>
						</view>				
					</view> 
				</view>
				<!-- 已分配 -->				
				<view class="inner-wrap-list" v-if="current===0">							      									
					<view class="inner-wrap-list-inner">
						<view class="inner-wrap-list-inner-li" 
						v-for="(task,value) in yfpTaskList" 
				        :key="value">																  		
							<view>
								<view>
									<text>单据编号：</text>
									<text>{{task.djbh}}</text>
								</view>						
							</view>							
							<view >
								<text>故障类型：</text>
								<text>{{task.gzlx}}</text>
							</view>
							<view>
								<text>设备名称：</text>
								<text>{{task.sbmc}}</text>
							</view>
							<view>
								<text>保障日期：</text>
								<text>{{task.bzrq}}</text>
							</view>
							<view>
								<text>报告人：</text>
								<text>{{task.bgr}}</text>
							</view>
							<view>
								<text>要求修复日期：</text>
								<text>{{task.yqxfrq}}</text>
							</view>
							<view>
								<text>设备负责人：</text>
								<text>{{task.sbfzr}}</text>
							</view>
							<view>
								<text>维修人编号：</text>
								<text>{{task.wxrid}}</text>
							</view>
							<view>
								<text>故障描述：</text>
								<text>{{task.gzms}}</text>
							</view>
							<view>
								<text>填报部门：</text>
								<text>{{task.tbbm}}</text>
							</view>
							<view>
								<text>填报单位代码：</text>
								<text>{{task.tbdwdm}}</text>
							</view>
							<view>
								<text>分配状态：</text>
								<text>{{task.fpzt}}</text>
							</view>
							<!-- <view>								
								<button :style="{color:textColor === 0 ? 'red':'blue'}" @click="assgin(index)">分配</button>
							</view> -->
						</view>				
					</view> 
				</view>						
			</view>
			<view class="blank"></view>							
			<uni-pagination 
			 class="page"
			show-icon="true" 
			:total="total" 
			:current="currentPage"
			@change="getPerpage">
			</uni-pagination>
		</view>
	</sub-page>
</template>

<script>
	import {uniPagination} from '@dcloudio/uni-ui';
	export default {
		data() {
			return{
				title:'任务派发',
				current:1,
				navBars:['已分配', '未分配'],
				dfpTaskList:[],
				yfpTaskList:[],
				fpzt:0,
				total:100,
				form:{
					pageNum:1,
					pageSize:10,
				},			
				currentPage:1, //当前页
				textColor:0			
			}
		},
		mounted(){
			this.getWfpTaskList()
		},
		components:{uniPagination},
		methods:{
			navSelect(item,index){
				console.log('11')
				if(this.current !== index){
					this.current = index;
				}
				if(this.current === 0){
					this.getYfpTaskList()
				}else{
					this.getWfpTaskList()
				}
			},
			// 获取分页数据
			getPerpage(val){
				console.log(val)
				this.currentPage = val.current
				this.form.pageNum = val.current
				this.getWfpTaskList()
				this.getYfpTaskList()
				//console.log(this.current)										
			},
			//获取未分配任务单
			getWfpTaskList(index){
				this.$api.getWFPrw().then(res =>{
					if(res.data.code === 1){
						console.log(res)
						this.dfpTaskList = res.data.data
						console.log(this.dfpTaskList)
						this.total = res.data.total						
					}else{
						uni.showToast({
							title:'查询失败'
						})
					}
				}).catch(e =>{
					uni.showToast({
						title:'查询失败'
					})
				})
			},
			//获取已分配任务单
			getYfpTaskList(){
				this.$api.getYFPrw().then(res =>{
					if(res.data.code === 1){
						console.log(res)
						this.yfpTaskList = res.data.data
						this.total = res.data.total						
					}
				}).catch(e =>{
					
				})
			},
			// 分配任务单
			assgin:function(index){
				let djbh = ''
				let wxrid = ''
				this.dfpTaskList.forEach(item =>{
					djbh = item.djbh
					wxrid = item.wxrid
				})
				console.log(djbh,wxrid)
				//点击分配的时候传值	
				this.$store.commit('assignTask',{					
					djbh:djbh,
					wxrid:"123",					
				})	            
				uni.navigateTo({
					url:'../assginTask/startAssgin/startAssgin'
				})
			}
			
		},
		
		
	}
</script>

<style lang="scss">
	.inner-wrap{
		width:100%;
		//height:100%;
		font-size:32upx;
		&-nav{
			width:100%;
			height:100upx;
			background-color: #fff;
			margin-bottom:10upx;
			display:flex;
			justify-content: center;
			align-items: center;
			&-wrap{
				width:70%;				
				display:flex;
				justify-content: space-around;
				align-items: center;
				&-li{
					height:100upx;
					line-height:100upx;					
				}
			}
			.inner-wrap-nav-wrap-navSlected{
				color:#3288f3;
				border-bottom:1px solid #3288f3;
			}
		}
		&-list{
			width:100%;
			//height:120upx;			
			margin-bottom:10upx;			
			display:flex;
			justify-content: space-between;
			margin-top:10upx;
			width:100%;											
			display:flex;			
			align-items: center;
			justify-content: center;			
			&-inner{
				width:90%;				
				&-li{				
					background-color: #eee;
					margin-top:30upx;
					dispaly:flex;
					font-size:32upx;
					line-height:66upx; 
				}
			}
		}
	}
	.blank{
		width:100%;
		height:60upx;
	}
	.page{
		width:100%;
		position:fixed;
		bottom:0;
		left:0;
		//overflow: hidden;
		background-color: #fff;
		//height:60upx;
		
	}
</style>
