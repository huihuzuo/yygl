<template>
	<sub-page :title="title">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<view class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">单据编号</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" v-model="wxdj.djbh" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报修编号</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" v-model="wxdj.bxdh" disabled/>
							</view>
						</view>						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备名称</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="sbmcIndex" @change="bindsbmcChange" :range="sbmcList" disabled>
									<view class="uni-input">{{wxdj.sbmc}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">规格型号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.ggxh" disabled/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报障日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="bzrqIndex" :start="startDate" :end="endDate" @change="bindbzrqChange" disabled>
									<view class="uni-input">{{wxdj.bzrq}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报告人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.bgr" disabled/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">现场维修人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.xcwxr" disabled/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">现场情况描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.xcqkms" disabled/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修结果确认</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.wxjgqr" disabled/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">确认人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.qrr" disabled/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">确认时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="qrsjIndex" :start="startDate" :end="endDate" @change="bindqrsjChange" disabled>
									<view class="uni-input">{{wxdj.qrsj}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.bz" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.tbr" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="tbsjIndex" :start="startDate" :end="endDate" @change="bindtbsjChange" disabled>
									<view class="uni-input">{{wxdj.tbsj}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报单位</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.tbdw" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.tbbm" disabled/>
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
			   title:'维修登记单明细',			   
			   date: currentDate,
			   wxdj:{}, 			   			  
			   sbmcIndex:0,			   
			   bzrqIndex:currentDate,
			   qrsjIndex:currentDate,
			   tbsjIndex:currentDate,			   		  
			   sbmcList:[]			   				   			   							  
            }
		},
		// 获取列表页传过来的id值到详情页		
		onLoad:function(e){			
			let id = e.djbh			
			this.$api.getWxdjInfoByID(id).then(res =>{				
				 this.wxdj = res.data.data
				  console.log(this.wxdj)				  
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
			goBack(){
				uni.navigateBack()	
			},						
			bindbzrqChange: function(e) {
				this.bzrqIndex = e.target.value
				this.wxdj.bzrq = e.target.value				
			},
			bindyqxfrqChange: function(e) {
				this.yqxfrqIndex = e.target.value
				this.wxdj.yqxfrq = e.target.value				
			},
			bindtbsjChange: function(e) {
				this.tbsjIndex = e.target.value
				this.wxdj.tbsj = e.target.value				
			},
			bindgzlxChange: function(e) {				
				this.gzlxIndex = e.target.value
			    this.wxdj.gzlx = this.gzlxList[e.target.value]					
			},
			bindsbmcChange:function(e) {				
				this.sbmcIndex = e.target.value
			    this.wxdj.sbmc = this.sbmcList[e.target.value]					
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
			
			
		},		
	}
</script>

<style lang="scss">

</style>


