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
								<input class="text2 input"  type="text" v-model="wxfy.djbh" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修单号</text>
							</view>
							<view class="content--wrap_form_li_right">															
								<input class="text2 input"  type="text" v-model="wxfy.wxdh" disabled/>
							</view>
						</view>						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备名称</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="sbmcIndex" @change="bindsbmcChange" :range="sbmcList" disabled>
									<view class="uni-input">{{wxfy.sbmc}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">所属合同</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxfy.ssht" disabled/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">结算金额</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxfy.jsje" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">费用说明</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxfy.fysm" disabled/>						
							</view>
						</view>											
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxfy.bz" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxfy.tbr" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="tbsjIndex" :start="startDate" :end="endDate" @change="bindtbsjChange" disabled>
									<view class="uni-input">{{wxfy.tbsj}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报单位</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxfy.tbdw" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxfy.tbbm" disabled/>
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
			   title:'维修费用明细',			   
			   date: currentDate,
			   wxfy:{}, 			   			  
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
			this.$api.getWxfyInfoByIDjbh(id).then(res =>{				
				 this.wxfy = res.data.data
				  console.log(this.wxfy)				  
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
			bindtbsjChange: function(e) {
				this.tbsjIndex = e.target.value
				this.wxfy.tbsj = e.target.value				
			},			
			bindsbmcChange:function(e) {				
				this.sbmcIndex = e.target.value
			    this.wxfy.sbmc = this.sbmcList[e.target.value]					
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


