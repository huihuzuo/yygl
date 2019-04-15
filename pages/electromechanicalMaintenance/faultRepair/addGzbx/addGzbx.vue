<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<view class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">单据编号</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" v-model="rcxj.djbh"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">故障类型</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="gzlxIndex" @change="bindgzlxChange" :range="gzlxList">
									<view class="uni-input">{{gzlxList[gzlxIndex]}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备名称</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="sbmcIndex" @change="bindsbmcChange" :range="sbmcList">
									<view class="uni-input">{{sbmcList[sbmcIndex]}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">规格型号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.ggxh"/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报障日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="bzrqIndex" :start="startDate" :end="endDate" @change="bindbzrqChange">
									<view class="uni-input">{{bzrqIndex}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报告人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.bgr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">要求修复日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="yqxfrqIndex" :start="startDate" :end="endDate" @change="bindyqxfrqChange">
									<view class="uni-input">{{yqxfrqIndex}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备负责人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.sbfzr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">故障描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.gzms" />
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.bz"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.tbr"/>
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
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.tbdw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.tbbm"/>
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
			   title:'添加故障报修单',
			   btnName:'保存',
			   date: currentDate,
			   resDataOBj:{},
			   gzlxIndex:0,
			   sbmcIndex:0,
			   bzrqIndex:currentDate,
			   yqxfrqIndex:currentDate,
			   tbsjIndex:currentDate,
			   gzlxList:['类型1','类型2','类型3'],
			   sbmcList:[],
			   rcxj:{
				   djbh:'gzbx'+new Date().getTime(),
				   gzlx:'',
				   sbmc:'',
				   ggxh:'',
				   bzrq:'',
				   bgr:'',
				   yqxfrq:'',
				   sbfzr:'',
				   gzms:'',
				   bz:'',
				   tbr:'',
				   tbdw:'',
				   tbbm:'',
				   tbsj:''			   				   
			   }			  
            }
		},
		
		mounted(){
			this.getSbmc()
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
			goBack(){
				uni.navigateBack()	
			},						
			bindbzrqChange: function(e) {
				this.bzrqIndex = e.target.value
				this.rcxj.bzrq = e.target.value				
			},
			bindyqxfrqChange: function(e) {
				this.yqxfrqIndex = e.target.value
				this.rcxj.yqxfrq = e.target.value				
			},
			bindtbsjChange: function(e) {
				this.tbsjIndex = e.target.value
				this.rcxj.tbsj = e.target.value				
			},
			bindgzlxChange: function(e) {				
				this.gzlxIndex = e.target.value
			    this.rcxj.gzlx = this.gzlxList[e.target.value]					
			},
			bindsbmcChange:function(e) {				
				this.sbmcIndex = e.target.value
			    this.rcxj.sbmc = this.sbmcList[e.target.value]					
			},
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
			// 获取设备名称
			getSbmc(){				
				this.$api.getSbmc().then(res =>{
					if(res.data.code === 1){
						let ressbinfo = []
						ressbinfo = res.data.data						
						ressbinfo.forEach((mc) =>{
							this.sbmcList.push(mc.sbmc)
						})
						console.log(this.sbmcList)
					}
				}).catch(e =>{
					
				})				
			},											
			// 添加后保存
			onSave(){
				this.$api.addGzbx(this.rcxj).then(res =>{
					console.log(res)
					if(res.data.code === 1){
						uni.showToast({
							title:'保存成功！',
							success:function(){
								 setTimeout(function () {									
									uni.navigateTo({
										url:'../../faultRepair/faultRepair'
									})
								  }, 100) 							
							}
						})						
					}
				}).catch(() =>{
					uni.showToast({
						title:'保存失败！'
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


