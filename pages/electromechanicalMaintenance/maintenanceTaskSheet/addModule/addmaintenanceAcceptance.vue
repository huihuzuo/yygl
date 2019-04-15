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
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.djbh"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报修单号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.bxdh"/>
							</view>
						</view>						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备名称</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="sbmcIndex" @change="bindsbmcChange" :range="sbmcList">
									<view class="uni-input">{{wxys.sbmc}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">规格型号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.ggxh"/>
							</view>
						</view>						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报障日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="bzrqIndex" :start="startDate" :end="endDate" @change="bindbzrqChange">
									<view class="uni-input">{{wxys.bzrq}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报告人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.bgr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">现场维修人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.xcwxr"/>						
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">现场情况描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.xcqkms"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修结果描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.wxjgms"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修结果确认</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.wxjgqr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">确认人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.qrr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">确认时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="qrsjIndex" :start="startDate" :end="endDate" @change="bindqrsjChange">
									<view class="uni-input">{{qrsjIndex}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.bz"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.tbr"/>
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
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.tbdw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxys.tbbm"/>
							</view>
						</view>						
					</view>										
				</view>			    
			</view>
		</view>
	</sub-page>	
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex' 
	import {uniIcon} from '@dcloudio/uni-ui';	
    export default {
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {
			   title:'维修验收',
			   btnName:'保存',
			   date: currentDate,			  			  
			   sbmcIndex:0,
			   bzrqIndex:currentDate,
			   qrsjIndex:currentDate,
			   tbsjIndex:currentDate,			   
			   sbmcList:[],
			   wxys:{				   
				   djbh:'wxdj'+new Date().getTime(),
				   bxdh:'',
				   sbmc:'',
				   ggxh:'',
				   bzrq:'',
				   bgr:'',
				   xcwxr:'',
				   xcqkms:'',
				   wxjgms:'',
				   wxjgqr:'',
				   qrr:'',
				   qrsj:currentDate,				   				   
				   bz:'',
				   tbr:'',
				   tbsj:currentDate,
				   tbdw:'',
				   tbbm:''				  			   				   
			   }
			  
            }
		},		
		mounted(){
			this.getSbmc()
			this.getDjBxdInfo()
		},
		computed: {	
			storebxdh(){				
				return this.$store.state.wxdjBxdh.djbh				
			},
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
				this.wxys.bzrq = e.target.value				
			},
			bindqrsjChange: function(e) {
				this.qrsjIndex = e.target.value
				this.wxys.qrsj = e.target.value				
			},	
			bindtbsjChange: function(e) {
				this.tbsjIndex = e.target.value
				this.wxys.tbsj = e.target.value				
			},	
			bindsbmcChange:function(e) {				
				this.sbmcIndex = e.target.value
				this.wxys.sbmc = this.sbmcList[e.target.value]				
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
					}else{
						uni.showToast({
							title:'获取设备名称失败'
						})
					}
				}).catch(e =>{
					uni.showToast({
						title:'获取设备名称失败'
					})
				})				
			},	
			// 获取报修单信息
			getDjBxdInfo(){				
				this.wxys.bxdh = this.storebxdh	
				console.log(this.wxys.bxdh)			
				this.$api.getwxysDjBxdInfo(this.wxys.bxdh).then(res =>{
					if(res.data.code === 1){
					        let wxysArr = []   
						    wxysArr = res.data.data							
							wxysArr.forEach((wxys) =>{
								this.wxys.bxdh = wxys.bxdh
								this.wxys.xcwxr = wxys.xcwxr
								this.wxys.gzms = wxys.gzms
								this.wxys.xcqkms = wxys.xcqkms
								this.wxys.wxjgms = wxys.wxjgms
								this.wxys.sbmc = wxys.sbmc
								this.wxys.ggxh = wxys.ggxh
								this.wxys.bzrq = wxys.bzrq
								this.wxys.bgr = wxys.bgr                                
							})																		
					}
				}).catch(e =>{
					
				})
			},										
			// 添加后保存
			onSave(){
				this.$api.addWxys(this.wxys).then(res =>{
					if(res.data.code === 1){
						uni.showToast({
							title:'保存成功！'
						})
					}else{
						uni.showToast({
							title:'保存失败！'
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




