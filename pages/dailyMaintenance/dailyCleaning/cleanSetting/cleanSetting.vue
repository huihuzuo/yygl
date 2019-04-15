<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="formSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<form class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">日常清扫单号</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<input class="text2 input" v-model="form.id" type="text" required="required"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">清扫路线</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<picker class="text2" @change="qslxbindPickerChange" :value="qslxIndex" :range="qslxList">
									<view class="uni-input" v-if="qslxCount ===0 && qslxIndex === 0">请选择</view>
									<view class="uni-input" v-else>{{qslxList[qslxIndex]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">清扫方向</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" @change="mjmcbindPickerChange" :value="qsxxIndex" :range="mjmcList">
									<view class="uni-input" v-if="qsxxCount ===0 && qsxxIndex === 0">请选择</view>
									<view class="uni-input" v-else>{{mjmcList[qsxxIndex]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>										
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">清扫人员</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="form.qsry" type="text" required="required"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">天气</text>
							</view>
							<view class="content--wrap_form_li_right">
								<!-- <input class="text2 input" v-model="form.checkContent" type="text" required="required" placeholder="填写内容"/> -->	
								<picker class="text2" @change="wetherbindPickerChange" :value="wetherIndex" :range="wetherList">
									<view class="uni-input" v-if="wetherCount ===0 && wetherIndex === 0">请选择</view>
									<view class="uni-input" v-else>{{wetherList[wetherIndex]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>						
					</form>
				</view>
			</view>
		</view>
	</sub-page>	
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui';
	export default {
		data() {			
			return {
			   title:'内容配置',	
			   btnName:'保存',		       
			   wetherList:['大风', '阵雨','暴雪','晴天','小雨'],			   
			   qslxIndex:0,
			   qslxCount:0,
			   qsxxIndex:0,
			   qsxxCount:0,
			   wetherIndex:0,
			   wetherCount:0,
			   mjmcList:[],
			   qslxList:[],
			   bmCode:'0101',
			   mjlxbm:'03', //清扫方向
			   form:{
				   id:'rcqsid'+new Date().getTime(),
				   lxcode:'',
				   qsry:'',
				   qsxx:'', //天气
				   xcfx:'',				   				   				  
				}
		    }
		},
		mounted(){
			this.onQuery()
			this.getUserInfo()
		},
		computed: {
			
		},
		components: {
			uniIcon,			
		},
		methods:{								
			wetherbindPickerChange:function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.wetherCount += 1 
				this.wetherIndex = e.target.value
				this.form.wether = this.wetherList[e.target.value]
			},
			qslxbindPickerChange:function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.qslxCount += 1 
				this.qslxIndex = e.target.value
				this.form.lxcode = this.qslxList[e.target.value]
			},
			mjmcbindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.qsxxCount += 1 
				this.qsxxIndex = e.target.value
				this.form.qsxx = this.mjmcList[e.target.value]
			},
			formSave() {				
				this.$api.saveRcqsPZ(this.form).then(res =>{
					if(res.status  === 200){
						uni.showToast({
							title:'保存成功'
						})
						uni.navigateTo({
							url:'../dailyMaintenance/endCleaning/endCleaning'
						})
					}else{
						uni.showToast({
							title:'配置保存失败'
						})
					}
				}).catch(e =>{
					uni.showToast({
						title:'配置保存失败'
					})
				})				
			},
			onQuery(){
				// 获取清扫方向
				let _params = {
					mjlxbm: this.mjlxbm
				}
				this.$api.dailyCleanSet(_params).then(res =>{
					if(res.status === 200){
						console.log(res)
						let resmjmcList = []
						resmjmcList = res.data.data
						console.log(this.mjmcList)				
						resmjmcList.forEach((item)=>{
							this.mjmcList.push(item.mjmc)
						})						
					}
				}).catch(e =>{
					
				})
				//获取清扫路线	
				let _params2 = {
					bmCode: this.bmCode
				}
				this.$api.queryYhXcRoadSet(_params2).then(res =>{
					if(res.data.code === 1){
						console.log(res)
						const list = res.data.data						
						list.forEach((li) =>{
							this.qslxList.push(li.lxcode)
						})						
					}
				}).catch(e =>{
					uni.showToast({
						title:'查询失败'
					})
				})
			},
			// 获取登录人员名
			getUserInfo(){
				let vm = this
				uni.getStorage({
					key: 'userInfo',
					success: function(res){
						if (res && res.data) {							
							vm.form.qsry = res.data.qsry							
						}
					}
				})
			}							
		}
	}
</script>

<style>
</style>
