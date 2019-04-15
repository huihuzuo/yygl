<template>	
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">		 
	  <view slot="content" style="width:100%;height:100%;">
		<view class="subPage--content">
			<view class="subPage--content--wrap">
				<form @submit.prevent="formSave" class="content--wrap_form" :model="bean">
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">事件单号</text>
						</view>
						<view class="content--wrap_form_li_right">
							<input class="text2 input" v-model="bean.sjdh" type="text" required="required" placeholder="填写单号"/>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">事件类型</text> 
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="sjlxbindPickerChange" :value="sjlxIndex" :range="sjlxList">
								<view class="uni-input" v-if="sjlxCount === 0 && sjlxIndex === 0">请选择</view>
								<view class="uni-input" v-else>{{sjlxList[sjlxIndex]}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">巡查路线</text>
						</view>
						<view class="content--wrap_form_li_right">
							<input class="text2 input" type="text" v-text="yhcx_xlpz['xcRoadtype']"/>							
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">巡查方向</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="xcfxbindPickerChange" :value="xcfxIndex" :range="xcfxList">
								<view class="uni-input" v-if="xcfxCount === 0 && xcfxIndex === 0">请选择</view>
								<view class="uni-input" v-else>{{xcfxList[xcfxIndex]}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">损害类型</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="shlxbindPickerChange" :value="shlxIndex" :range="shlxList">
								<view class="uni-input" v-if="shlxCount === 0 && shlxIndex === 0">请选择</view>
								<view class="uni-input" v-else>{{shlxList[shlxIndex]}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
					<view class="content--wrap_form_li" v-if="bean.sjlx ==='病害'">
						<view class="content--wrap_form_li_left">
							<text class="text1">病害类型</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="bhlxbindPickerChange" :value="bhlxIndex" :range="bhlxList">
								<view class="uni-input" v-if="bhlxCount === 0 && bhlxIndex === 0">请选择</view>
								<view class="uni-input" v-else>{{bhlxList[bhlxIndex]}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
					<view class="content--wrap_form_li" v-if="bean.sjlx ==='病害'">
						<view class="content--wrap_form_li_left">
							<text class="text1">病害数量</text>
						</view>
						<view class="content--wrap_form_li_right">
							<input class="text2 input" v-model="bean.bhsl" type="text" placeholder="填写病害数量"/>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">车道</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="cdbindPickerChange" :value="cdIndex" :range="cdList">
								<view class="uni-input" v-if="cdCount === 0 && cdIndex === 0">请选择</view>
								<view class="uni-input" v-else>{{cdList[cdIndex]}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">事件说明</text>
						</view>
						<view class="content--wrap_form_li_right">
							<input class="text2 input" v-model="bean.checker" type="text" required="required" placeholder="填写说明"/>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">处置方式</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="czfsbindPickerChange" :value="czfsIndex" :range="czfsList">
								<view class="uni-input" v-if="czfsCount === 0 && czfsIndex === 0">请选择</view>
								<view class="uni-input" v-else>{{czfsList[czfsIndex]}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">紧急度</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2"  @change="jjdbindPickerChange" :value="jjdIndex" :range="jjdList">
								<view class="uni-input" v-if="jjdCount === 0 && jjdIndex === 0">请选择</view>
								<view class="uni-input" v-else>{{jjdList[jjdIndex]}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>					
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">巡查类型</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="xclxbindPickerChange" :value="xclxIndex" :range="xclxList">
								<view class="uni-input" v-if="xclxCount === 0 && xclxIndex === 0">请选择</view>
								<view class="uni-input" v-else>{{xclxList[xclxIndex]}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">子目号</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="zmhbindPickerChange" :value="zmhIndex" :range="zmhList" :range-key="'ZMHT_ZMH'">
								<view class="uni-input" v-if="zmhCount === 0 && zmhIndex === 0 && !zmhList[zmhIndex]">请选择</view>
								<view class="uni-input" v-else>{{zmhList[zmhIndex]['ZMHT_ZMH']}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
					<view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">子目名称</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" @change="zmmcbindPickerChange" :value="zmmcIndex" :range="zmhList" :range-key="'ZMHT_ZMMC'">
								<view class="uni-input" v-if="zmmcCount === 0 && zmmcIndex === 0 && !zmhList[zmmcIndex]">请选择</view>
								<view class="uni-input" v-else>{{zmhList[zmmcIndex]['ZMHT_ZMMC']}}</view>
							</picker>
							<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
						</view>
					</view>
				</form>
				
				<view class="camera" @click="takePhoto">
					<view  flash="auto">
						<uni-icon type="camera" size="30" color="grey"></uni-icon>							
					</view>
					<image mode="widthFix" :src="src"></image>
					
				</view>	
				
			</view>			
		</view>							
	  </view>	 
	</sub-page>		
</template>

<script>	
	import {uniIcon} from '@dcloudio/uni-ui';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			const timestamp = Date.parse(new Date());
			return {
			   src:'',
			   title:'上报事件',
			   btnName:'保存',
			   zmhIndex:0,
			   zmhCount:0,
			   zmmcIndex:0,
			   zmmcCount:0,
			   sjlxIndex:0,
			   sjlxCount:0,
			   xcfxIndex:0,
			   xcfxCount:0,
			   shlxIndex:0,
			   shlxCount:0,
			   bhlxIndex:0,
			   bhlxCount:0,
			   czfsIndex:0,
			   czfsCount:0,
			   jjdIndex:0,
			   jjdCount:0,
			   xclxIndex:0,
			   xclxCount:0, 	   
			   cdIndex:0,
			   cdCount:0,
			   zmhList:[],
			   zmmcList:[],
			   cdList:[1,2,3,4],			  
			   xclxList:[],
			   sjlxList:[],
			   xcfxList:[],
			   shlxList:[],
			   bhlxList:[],
			   czfsList:[],
			   jjdList:[],				
			   bean:{
				   bhsl:'',
				   cd:'',
				   zmh:'',
				   zmmc:'',
				   jjd:'',
				   czfs:'',
				   bhlx:'',
				   shlx:'',
				   xcfx:'',
				   xclx:'',
				   xcRoadtype:'',
				   sjdh:'sjdh' + timestamp									 						  
				},
				domainType: {
					'sjlx': '06',
					'xcfx': '03',
					'shlx':'08',
					'bhlx':'07',
					'czfs':'20',
					'jjd':'12',
					'xclx':'13'					
				},
				ryid: null,
				YDJH_ID: null
		    }
		},
		computed: {
			...mapState(['yhcx_xlpz'])
		},
		mounted(){
			this.getUserInfo()			
			this.getReportEvent('sjlx', this.domainType['sjlx'])
			this.getReportEvent('xcfx', this.domainType['xcfx'])
			this.getReportEvent('shlx', this.domainType['shlx'])
			this.getReportEvent('bhlx', this.domainType['bhlx'])
			this.getReportEvent('czfs', this.domainType['czfs'])
			this.getReportEvent('jjd', this.domainType['jjd'])
			this.getReportEvent('xclx', this.domainType['xclx'])
		},
		components: {
			uniIcon,			
		},
		methods:{			
			 takePhoto() {
				 uni.chooseImage({
					sourceType: ['camera', 'album'],//拍照或相册
					sizeType:['compressed', 'original'] ,//压缩或原图
					count:6,
					success: function (res) {						
						uni.getImageInfo({
							src: res.tempFilePaths[0],
							success: function (res,image) {
								console.log(res.path,"图片路径:"+image.path)
							}
						});
						 uni.uploadFile({
							url: 'http://192.168.10.234:8080/uploadFiles/', //后台服务上传路径  http://192.168.10.234:8080/uploadFiles/20190305/hdsx_1551794947615_5.png
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
							}
						});
					}
				});				
			},													 
			zmhbindPickerChange:function(e){
				this.zmhCount += 1
				this.zmhIndex = e.target.value
				this.bean.zmh = this.zmhList[e.target.value]
			},
			zmmcbindPickerChange:function(e){
				this.zmmcIndex = e.target.value
				this.zmmcCount += 1			
				this.bean.zmmc = this.zmmcList[e.target.value]
			},
			cdbindPickerChange:function(e){
				this.cdIndex = e.target.value
				this.cdCount += 1			
				this.bean.cd = this.cdList[e.target.value]
			},
			jjdbindPickerChange:function(e){
				this.jjdIndex = e.target.value
				this.jjdCount += 1			
				this.bean.jjd = this.jjdList[e.target.value]
			},
			czfsbindPickerChange:function(e){
				this.czfsIndex = e.target.value
				this.czfsCount += 1			
				this.bean.czfs = this.czfsList[e.target.value]
			},
			bhlxbindPickerChange:function(e){
				this.bhlxIndex = e.target.value
				this.bhlxCount += 1			
				this.bean.bhlx = this.bhlxList[e.target.value]
			},
			shlxbindPickerChange:function(e){
				this.shlxIndex = e.target.value
				this.shlxCount += 1			
				this.bean.shlx = this.shlxList[e.target.value]
			},
			xclxbindPickerChange:function(e){
				this.xclxIndex = e.target.value
				this.xclxCount += 1			
				this.bean.xclxlx = this.xclxList[e.target.value]
			},
			xcfxbindPickerChange:function(e){
				this.xcfxIndex = e.target.value
				this.xcfxCount += 1			
				this.bean.xcfx = this.xcfxList[e.target.value]
			},
			sjlxbindPickerChange:function(e){
				this.sjlxIndex = e.target.value
				this.sjlxCount += 1			
				this.bean.sjlx = this.sjlxList[e.target.value]
				console.log(this.bean.sjlx)
			},									
			// 获取上报事件表单信息			
		    getReportEvent (type, mjlxbm) {			
		    	let _params = {
		    		mjlxbm:mjlxbm
		    	}
				//this.bean.xcRoadtype = 
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
			onSave() {
				this.$api.saveReportEvent(this.bean).then(res =>{
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
				// uni.navigateBack({})
				console.log(this.bean)
			},
			// 缓存获取人员信息
			getUserInfo () {
				let vm = this
				uni.getStorage({
					key: 'userInfo',
					success: function(res){
						if (res && res.data) {
							vm.ryid = res.data.id
							vm.getYhjhByRyid(vm.ryid)
						}
					}
				})
			},
			// 根据人员id获取月度计划id
			getYhjhByRyid (ryid) {
				let _params = {
					ryid: ryid
				}
				this.$api.getYhjhByRyid(_params).then(res =>{
					if(res.data.code === 1){
					    if (res && res.data && res.data.data && res.data.data.length > 0) {
							this.YDJH_ID = res.data.data[0]['YDJH_ID']
							console.log(this.YDJH_ID)
							if (this.YDJH_ID) {
								this.getZmxxByYdjhID(this.YDJH_ID)
							}
						} else {
							console.log('未返回月度计划信息！')
						}								
					}
				}).catch(e =>{					
				})
			},
			// 根据月度计划id获取子目列表
			getZmxxByYdjhID (YDJH_ID) {
				let _params = {
					yhijid: YDJH_ID
				}
				this.$api.getZmxxByYdjhID(_params).then(res =>{
					if(res.data.code === 1){
					    if (res && res.data && res.data.data && res.data.data.length > 0) {
							this.zmhList = res.data.data
							console.log(res.data.data)
						} else {
							console.log('未返回所属合同的子目列表！')
						}								
					}
				}).catch(e =>{					
				})
			}
			
		}
	}
</script>

<style lang="scss">
	
	.camera{
		width:80upx;
		height:80upx;		
		border:1upx solid #ccc;
		text-align: center;
		line-height:80upx;
		margin-top:15upx;		
	}
	
</style>
