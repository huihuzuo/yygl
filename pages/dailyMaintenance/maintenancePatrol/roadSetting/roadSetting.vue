<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<form @submit.prevent="formSave" class="content--wrap_form" :model="qdxcPzdj">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡查单号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<view class="content--wrap_form_li_right">
									<input class="text2 input" v-model="qdxcPzdj.id" type="text" required="required" />							
								</view>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡查路线</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" @change="lxbindPickerChange" :value="lxIndex" :range="lxCodeList">
									<view class="uni-input" v-if="lxlxCount === 0 && lxIndex === 0">请选择</view>
									<view class="uni-input" v-else>{{lxCodeList[lxIndex]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">起始桩号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="qdxcPzdj.szhh" type="text"/> 							 
								
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">终止桩号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="qdxcPzdj.ezhh" type="text"/>							 
								
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡查方向</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" @change="xcfxbindPickerChange" :value="xcfxIndex" :range="xcfxList">
									<view class="uni-input" v-if="xcfxCount === 0 && xcfxIndex ===0">请选择</view>
									<view class="uni-input" v-else>{{xcfxList[xcfxIndex]}}</view>
								</picker>							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>								
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡查开始时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2"  mode="date" :value="qdxcPzdj.kssj" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="uni-input">{{qdxcPzdj.kssj}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>								
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡查人员</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="qdxcPzdj.xcry" type="text"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡查车辆</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="qdxcPzdj.xccl" type="text"/>														
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡查类型</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" @change="xclxbindPickerChange" :value="xclxIndex" :range="xclxList">
									<view class="uni-input" v-if="xclxIndex === 0 && xclxCount === 0">请选择</view>
									<view class="uni-input" v-else>{{xclxList[xclxIndex]}}</view>
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
			const currentDate = this.getDate({
				format: true
			});
			const timestamp = Date.parse(new Date());			
			return {
			   title:'线路配置',
			   btnName:'保存',		       			  					   
			   lxIndex: 0,
			   xclxIndex:0,
			   xcfxIndex:0,
			   date: currentDate,
			   lxCodeList:[], 
			   lxsetList:[], 
			   xclxList:[],
			   xcfxList:[],			   
			   szhhIsChange:false,
			   ezhhIsChange:false,
			   lxlxCount: 0,
			   xcfxCount:0,
			   xclxCount:0,
			   bmCode: '0101',
			   qdxcPzdj:{				   
				   xcry:'',
				   xccl:'',				   
				   szhh:'',
				   ezhh:'',				   
				   id:'xcdh' + timestamp,				   				   
				   lx:'',				   
				   xcfx:'',
				   xclx:'',
				   kssj:currentDate
				   //date:''																		   
				},
				domainType: {
					'xclx': '13',
					'xcfx': '03'
				}
		    }
		},
		mounted(){			
			this.onQuery()
			this.getUserInfo()
			this.getMjlx('xclx', this.domainType['xclx'])
			this.getMjlx('xcfx', this.domainType['xcfx'])
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
			//路线类型的picker点击事件	
			lxbindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.lxlxCount = this.lxlxCount + 1
				this.lxIndex = e.target.value
				this.qdxcPzdj.lx = this.lxsetList[e.target.value].lxcode
				this.qdxcPzdj.szhh = this.lxsetList[e.target.value].szhh
				this.qdxcPzdj.ezhh = this.lxsetList[e.target.value].ezhh
				if (this.szhhIsChange === false) {
					this.qdxcPzdj.szhh = this.lxsetList[e.target.value].szhh
				}
				if (this.ezhhIsChange === false) {
					this.qdxcPzdj.ezhh = this.lxsetList[e.target.value].ezhh
				}
			},
			//巡查方向picker点击事件
			xcfxbindPickerChange:function(e){
				this.xcfxCount += 1	
				this.qdxcPzdj.xcfx = this.xcfxList[e.target.value]
				this.xcfxIndex = e.target.value				
			},
			// 巡查类型的picker点击事件
			xclxbindPickerChange:function(e){
				this.xclxCount += 1
				this.xclxIndex = e.target.value
				this.qdxcPzdj.xclx = this.xclxList[e.target.value]
			},
			bindDateChange: function(e) {
				this.qdxcPzdj.kssj = e.target.value
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
		    // 保存线路配置
			onSave() {
				this.$api.saveRoadSetting(this.qdxcPzdj).then(res =>{
					console.log(this.qdxcPzdj)
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
            // 点击保存的时候存值，在reportEvent.vue里 取值来显示
			
				this.$store.commit('saveYhXCXLPZ', {
					xcdh: this.qdxcPzdj.xcdh,
					xclx: this.qdxcPzdj.xclx,
					xcRoadtype: this.qdxcPzdj.lx
				})
				uni.navigateTo({
					url:"../../maintenancePatrol/checkReport/map-checkreport"
				})
			},
			//巡查路线
			onQuery(){			
				let _params = {
					bmCode: this.bmCode
				}
				this.$api.queryYhXcRoadSet(_params).then(res =>{
					if(res.data.code === 1){
						console.log(res)
						const list = res.data.data
						this.lxsetList = list
						list.forEach((li) =>{
							this.lxCodeList.push(li.lxcode)
						})						
					}
				}).catch(e =>{
					uni.showToast({
						title:'查询失败'
					})
				})
			},
			//巡查方向和类型
			getMjlx (type, mjlxbm) {			
				let _params = {
					mjlxbm:mjlxbm
				}
				this.$api.queryYhXcfxLx(_params).then(res =>{
					if(res.data.code === 1){
						const data = res.data.data						
						this[type + 'AllList'] = data
						data.forEach((li) => {
							this[type + 'List'].push(li.mjmc)
						}) 												
					}
				}).catch(e =>{					
				})
			},
			// 获取用户登录信息 哪个页面需要哪个页面获取
			getUserInfo () {
				let vm = this
				uni.getStorage({
					key: 'userInfo',
					success: function(res){
						if (res && res.data) {							
							vm.qdxcPzdj.xcry = res.data.xcry
							vm.qdxcPzdj.xccl = res.data.xccl
						}
					}
				})
			}
	 }
}
</script>

<style lang="scss">
</style>
