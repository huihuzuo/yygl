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
								<input class="text2 input"  type="text" v-model="rcxj.djbh" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">故障类型</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="gzlxIndex" @change="bindgzlxChange" :range="gzlxList" disabled>
									<view class="uni-input">{{rcxj.gzlx}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备名称</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="sbmcIndex" @change="bindsbmcChange" :range="sbmcList" disabled>
									<view class="uni-input">{{rcxj.sbmc}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">规格型号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.ggxh" disabled/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报障日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="bzrqIndex" :start="startDate" :end="endDate" @change="bindbzrqChange" disabled>
									<view class="uni-input">{{rcxj.bzrq}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报告人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.bgr" disabled/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">要求修复日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="yqxfrqIndex" :start="startDate" :end="endDate" @change="bindyqxfrqChange" disabled>
									<view class="uni-input">{{rcxj.yqxfrq}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备负责人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.sbfzr" disabled/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">故障描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.gzms" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.bz" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.tbr" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="tbsjIndex" :start="startDate" :end="endDate" @change="bindtbsjChange" disabled>
									<view class="uni-input">{{rcxj.tbsj}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报单位</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.tbdw" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.tbbm" disabled/>
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
			   title:'故障报修单明细',			   
			   date: currentDate,
			   rcxj:{}, 
			   resDataOBj:{},
			   gzlxIndex:0,
			   sbmcIndex:0,
			   bzrqIndex:currentDate,
			   yqxfrqIndex:currentDate,
			   tbsjIndex:currentDate,
			   gzlxList:[],				  
			   sbmcList:[]
			   				   			   							  
            }
		},
		// 获取列表页传过来的id值到详情页		
		onLoad:function(e){			
			let id = e.djbh			
			this.$api.getGzbxInfoByIDjbh(id).then(res =>{				
				 this.rcxj = res.data.data
				  console.log(this.rcxj)				  
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
			
			
		},		
	}
</script>

<style lang="scss">

</style>


