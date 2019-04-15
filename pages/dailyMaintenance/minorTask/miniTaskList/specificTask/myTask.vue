<template>
	<sub-page :title="title">
		  <view slot="content" style="width:100%;height:100%;" > 
		    <view class="subPage--content-tophalf">
				<view class="subPage--content-tophalf-innerwrap">
					<view class="subPage--content-tophalf-innerwrap-first">
						<view class="subPage--content-tophalf-innerwrap-first-inner">
							<view class="subPage--content-tophalf-innerwrap-first-inner-li"
							v-for="(handle,index) in HandleTabs"
							:key="index"
							:class="currentHandle === index ? 'subPage--content-tophalf-innerwrap-first-inner-li-selected' : ''" 
							@click="onClickHandle(handle, index)"
							>{{handle}}</view>														
						</view>
						<view class="numBadge" style="background:#FFF">								
							<!-- <uni-badge text="5" type="warning"></uni-badge>	 -->							
						</view>
					</view>					
					<view class="subPage--content-tophalf-innerwrap-second">
						<view class="subPage--content-tophalf-innerwrap-second-inner">
							<view class="subPage--content-tophalf-innerwrap-second-inner-li"
							v-for="(task,index) in taskTabs"
							:key="index"
							:class="currentTask === index ? 'subPage--content-tophalf-innerwrap-second-inner-li-selected' : ''" 
							@click="onClickTask(task, index)"
							>{{task}}</view>							
						</view>
					</view>
				</view>				
			</view>
			<!-- tophalf设置fixed，脱离文档流，利用blank元素占位 -->
			<view class="subPage--content-bottomhalf-blank"></view>
			<!-- v-if切换养护任务 已处理-->
		    <view class="subPage--content-bottomhalf" v-if="currentHandle === 0 && currentTask ===0">
				<view class="subPage--content-bottomhalf-innerwrap">
					<view class="subPage--content-bottomhalf-innerwrap-li">						
						<view class="subPage--content-bottomhalf-innerwrap-li-content"
						v-for="(mantainance,value) in yhYclList"
						:key="value"
						>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">养护单位：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{mantainance.YHRWD_YHDW}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">养护日期：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{mantainance.YHRWD_RQ}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">单据编号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{mantainance.YHRWD_DJBH}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">养护路线名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{mantainance.YHRWD_LX}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">审核状态：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{mantainance.SHZT}}</text>
							</view>						
							<view class="subPage--content-bottomhalf-innerwrap-btn">处理</view>													
						</view>						
					</view>
					
				</view>
			</view>
			<!-- 养护任务单 未处理 -->
			<view class="subPage--content-bottomhalf" v-if="currentHandle === 1 && currentTask ===0">
				<view class="subPage--content-bottomhalf-innerwrap">
					<view class="subPage--content-bottomhalf-innerwrap-li">						
						<view class="subPage--content-bottomhalf-innerwrap-li-content"
						v-for="(mantainance,value) in yhWclList"
						:key="value"
						>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">养护单位：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{mantainance.YHRWD_YHDW}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">养护日期：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{mantainance.YHRWD_RQ}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">单据编号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{mantainance.YHRWD_DJBH}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">养护路线名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{mantainance.YHRWD_LX}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">审核状态：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{mantainance.SHZT}}</text>
							</view>							
							<view class="subPage--content-bottomhalf-innerwrap-btn">处理</view>
							
							
						</view>						
					</view>
				
				</view>
			</view>
			<view class="pageBlank"></view>
			<uni-pagination 
				show-icon="true"
				 class="page"
				:total="total" 
				:current="current"
				@change="getPerpage">
			</uni-pagination>
			<!-- 切换清扫任务 已处理 -->
			<view class="subPage--content-bottomhalf" v-if="currentHandle === 0 && currentTask === 1">
				<view class="subPage--content-bottomhalf-innerwrap">
					<view class="subPage--content-bottomhalf-innerwrap-li">
						<view class="subPage--content-bottomhalf-innerwrap-li-content"
						v-for="(clean,value) in qsYclList"
						:key="value"
						>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">清扫任务单据编号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{clean.QSRWD_DJBH}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">事件类型名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.SJLXNAME}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">路线名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.LXNAME}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">填报时间：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.QSRWD_TBSJ}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">桩号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.QSRWD_ZH}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">审核状态：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.SHZTNAME}}</text>
							</view>						
							<view class="subPage--content-bottomhalf-innerwrap-btn">处理</view>							
						</view>		
					
					</view>													
				</view>
			</view>
			<!-- 清扫任务未处理 -->
			<view class="subPage--content-bottomhalf" v-if="currentHandle === 1 && currentTask === 1">
				<view class="subPage--content-bottomhalf-innerwrap">
					<view class="subPage--content-bottomhalf-innerwrap-li">
						<view class="subPage--content-bottomhalf-innerwrap-li-content"
						v-for="(clean,value) in qsWclList"
						:key="value"
						>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">清扫任务单据编号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">{{clean.QSRWD_DJBH}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">事件类型名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.SJLXNAME}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">路线名称：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.LXNAME}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">填报时间：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.QSRWD_TBSJ}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">桩号：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.QSRWD_ZH}}</text>
							</view>
							<view>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text">审核状态：</text>
								<text class="subPage--content-bottomhalf-innerwrap-li-content-text" >{{clean.SHZTNAME}}</text>
							</view>							
							<view class="subPage--content-bottomhalf-innerwrap-btn">处理</view>							
						</view>		
						<!-- <uni-pagination
						    class="page"
							show-icon="true" 
							:total="total" 
							:current="current"
							@change="getPerpage">
						</uni-pagination> -->
					</view>													
				</view>
			</view>
			<view class="pageBlank"></view>
		    <!-- <uni-pagination
		        class="page"
		    	show-icon="true" 
		    	:total="total" 
		    	:current="current"
		    	@change="getPerpage">
		    </uni-pagination> -->
		  </view>
	</sub-page>
</template>

<script>
	import uniPagination from "@dcloudio/uni-ui/lib/uni-pagination/uni-pagination"
	//import uniBadge from "@dcloudio/uni-ui/lib/uni-badge/uni-badge";
	export default {
		data() {
			return {
				currentHandle: 0, // 0 已处理  1 未处理  默认点击已处理  this.onClickHandle(this.HandleTabs[0], 0)
				currentTask:0, // 0 养护任务  1清扫任务 // 默认养护任务
				total:100,
				current:1,
				form:{ 															
					pageNum:1,
					pageSize:10									
				},				
				HandleTabs:['已处理','未处理'], // 0 已处理  1未处理
				taskTabs:['养护任务','清扫任务'],
				title: '我的任务',								
				yhYclList:[],
				yhWclList:[],
				qsYclList:[],
				qsWclList:[]
			};
		},
		mounted(){			
			this.onClickHandle(this.HandleTabs[0], 0)
		},
		methods: {			           
			// 获取养护任务单已处理列表
			getYHycl(){
				this.$api.getYICHULIyhList(this.form).then(res =>{
					if(res.data.code === 1){
						this.yhYclList = res.data.data
						this.total = res.data.data.total
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
			// 获取养护任务单未处理列表
			getYHwcl(){
				this.$api.getWEICHULIyhList(this.form).then(res =>{
					if(res.data.code === 1){
						this.yhWclList = res.data.data
						this.total = res.data.data.total
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
			// 获取清扫任务单已处理列表
			getQSycl(){
				this.$api.getYICHULIqsList(this.form).then(res =>{
					if(res.data.code === 1){
						this.qsYclList = res.data.data
						this.total = res.data.data.total
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
			// 获取清扫任务单未处理列表
			getQSwcl(){
				this.$api.getWEICHULIqsList(this.form).then(res =>{
					if(res.data.code === 1){
						this.qsWclList = res.data.data
						this.total = res.data.data.total
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
			
			
			// 点击切换处理状态
			onClickHandle(item, index) {
				this.current = 1
				this.form.pageNum = 1
				if (this.currentHandle !== index) {
					// this.currentHandle  0 已派发  1未派发
					this.currentHandle = index;					
				}
				// 养护任务
				if (this.currentTask === 0) {
					// 已派发 
					if (index === 0) {						
						this.getYHycl()
					}
					// 未派发
					if (index === 1) {						
						this.getYHwcl()
					}
					
				}
				// 清扫任务
				if (this.currentTask === 1) {
					// 已处理
					if (index === 0) {					
					  this.getQSycl()
					}
					// 未处理
					if (index === 1) {			        
					   this.getQSwcl()
					}					
				}
			},
			// 点击切换任务类型
			onClickTask(item, index) {
				this.current = 1
				this.form.pageNum = 1
				if (this.currentTask !== index) {
					this.currentTask = index;
				}				
				if(this.currentHandle === 0){
					if(index === 0){
						this.getYHycl()
					}else{
						this.getQSycl()
					}
				}else{
					if(index === 0){
						this.getYHwcl()
					}else{
						this.getQSwcl()
					}
				}
		
			},
			// 分页获取数据
			getPerpage(val){
				this.current = val.current
				this.form.pageNum = val.current				
				// 当处理状态为0和1时再判断是哪个任务类型，来调取服务
				if(this.currentHandle === 0){
					if(this.currentTask === 0){
						this.getYHycl()
					}else{
						this.getQSycl()
					}
				}else{
					if(this.currentTask === 0){
						this.getYHwcl()
					}else{
						this.getQSwcl()
					}
				}								
			},			
			
		},
		components: {
			//uniBadge,
			uniPagination
		}
	}
</script>

<style lang="scss">
	.subPage--content {			
		&-tophalf{
			width:100%;
			height:200upx;
			position:fixed;
			background-color: #fff;
			overflow: hidden;
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
		.pageBlank{
			width:100%;
			height:60upx;
		}
		.page{
			position:fixed;
			bottom:0;
			overflow: hidden;
		}
	}
</style>
