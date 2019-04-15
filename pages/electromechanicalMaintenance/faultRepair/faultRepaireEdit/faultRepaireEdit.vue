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
								<input type="text" class="text2 input" v-model="rcxj.djbh" disabled/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">故障类型</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="gzlxIndex" @change="bindgzlxChange" :range="gzlxList">
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
								<picker class="text2" :value="sbmcIndex" @change="bindsbmcChange" :range="sbmcList">
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
								<input type="text" class="text2 input" v-model="rcxj.ggxh"/>
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
								<input type="text" class="text2 input" v-model="rcxj.bgr"/>						
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
								<input type="text" class="text2 input" v-model="rcxj.sbfzr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">故障描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="故障描述" v-model="rcxj.gzms"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="备注" v-model="rcxj.bz"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.tbr"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报单位</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.tbdw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" v-model="rcxj.tbbm"/>
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
			   title:'编辑故障保修单',
			   btnName:'保存',               
			   date: currentDate,
			   bzrqIndex:currentDate,
			   yqxfrqIndex:currentDate,
			   tbsjIndex:currentDate,
			   resDataOBj:{},
			   gzlxIndex:0,
			   sbmcIndex:0,
			   gzlxList:['类型1','类型2','类型3'],
			   sbmcList:[],
			   rcxj:{
				   djbh:'',
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
		// 根据单据编号获取信息
		onLoad:function(e){
			//console.log(e)
			let id = e.djbh
			console.log(id)
			this.$api.getGzbxInfoByIDjbh(id).then(res =>{
				console.log(res)
				if(res.data.code === 1){
					//console.log(this.rcxj)
					this.rcxj.djbh = res.data.data.djbh
					this.rcxj.gzlx = res.data.data.gzlx
					this.rcxj.ggxh = res.data.data.ggxh
					this.rcxj.sbmc = res.data.data.sbmc
					this.rcxj.bzrq = res.data.data.bzrq
					this.rcxj.bgr = res.data.data.bgr
					this.rcxj.yqxfrq = res.data.data.yqxfrq
				   this.rcxj.sbfzr = res.data.data.sbfzr
				   this.rcxj.gzms = res.data.data.gzms
				   this.rcxj.bz = res.data.data.bz
				   this.rcxj.tbr = res.data.data.tbr
				   this.rcxj.tbdw = res.data.data.tbdw
				   this.rcxj.tbbm = res.data.data.tbbm
				   this.rcxj.tbsj = res.data.data.tbsj				   
				 }
				 console.log(this.rcxj)
			}).catch(e =>{
				
			})
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
			// 编辑后保存
			onSave(){				
				this.$api.editGzbx(this.rcxj).then(res =>{					
					if(res.data.code === 1){												
						uni.showToast({
							title:'保存成功！'
						})												
					}else{
						uni.showToast({
							title:'保存失败'
						})
					}					
				}).catch(e =>{
					uni.showToast({
						title:'保存失败'
					})					
				})
			   			
			},																			
		},
		
	}
</script>

<style lang="scss">
	
</style>

