<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="save">
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
								<text class="text1">报修单号</text>
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
								<picker class="text2" :value="sbmcIndex" @change="bindsbmcChange" :range="sbmcList">
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
								<input class="text2 input" type="text" v-model="wxdj.ggxh"/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报障日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="bzrqIndex" :start="startDate" :end="endDate" @change="bindbzrqChange" >
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
								<input class="text2 input" type="text" v-model="wxdj.bgr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">现场维修人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.xcwxr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">现场情况描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.xcqkms" />						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修结果确认</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.wxjgqr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">确认人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.qrr" />						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">确认时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="qrsjIndex" :start="startDate" :end="endDate" @change="bindqrsjChange" >
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
								<input class="text2 input" type="text" v-model="wxdj.bz" />
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.tbr" />
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="tbsjIndex" :start="startDate" :end="endDate" @change="bindtbsjChange" >
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
								<input class="text2 input" type="text" v-model="wxdj.tbdw" />
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="wxdj.tbbm" />
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
			   title:'编辑维修登记单',			   
			   date: currentDate,
			   btnName:'保存',
			   wxdj:{
				  djbh:'',
				   bxdh:'',
				   sbmc:'',
				   ggxh:'',
				   bzrq:'',
				   bgr:'',
				   xcwxr:'',
				   xcqkms:'',
				   wxjgqr:'',
				   qrr:'',
				   qrsj:'',
				   bz:'',
				   tbsj:'',
				   tbdw:'',
				   tbbm:''
			   }, 			   			  
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
				 this.wxdj.djbh = res.data.data.djbh
				 this.wxdj.bxdh = res.data.data.bxdh
				 this.wxdj.sbmc = res.data.data.sbmc
				 this.wxdj.ggxh = res.data.data.ggxh
				 this.wxdj.bzrq = res.data.data.bzrq
				 this.wxdj.bgr = res.data.data.bgr
				 this.wxdj.xcwxr = res.data.data.xcwxr
				 this.wxdj.xcqkms = res.data.data.xcqkms
				 this.wxdj.wxjgqr = res.data.data.wxjgqr
				 this.wxdj.qrr = res.data.data.qrr
				 this.wxdj.qrsj = res.data.data.qrsj
				 this.wxdj.bz = res.data.data.bz
				 this.wxdj.tbsj = res.data.data.tbsj
				 this.wxdj.tbdw = res.data.data.tbdw
				 this.wxdj.tbbm = res.data.data.tbbm
				  console.log(this.wxdj)				  
			}).catch(e =>{				
			})
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
				this.wxdj.bzrq = e.target.value				
			},			
			bindtbsjChange: function(e) {
				this.tbsjIndex = e.target.value
				this.wxdj.tbsj = e.target.value				
			},
			bindqrsjChange: function(e) {
				this.qrsjIndex = e.target.value
				this.wxdj.qrsj = e.target.value				
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
			// 编辑后保存
			save(){
				this.$api.editWxdj(this.wxdj).then(res =>{
					if(res.data.code === 1){
						uni.showToast({
							title:'保存成功！'
						})
					}else{
						uni.showToast({
							title:'保存失败！'
						})
					}
				}).catch(e =>{
					uni.showToast({
						title:'保存失败！'
					})
				})
			}
			
			
		},		
	}
</script>

<style lang="scss">

</style>


