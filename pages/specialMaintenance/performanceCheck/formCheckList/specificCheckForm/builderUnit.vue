<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<form @submit.prevent="formSave" class="content--wrap_form" :model="form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">项目名称</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<picker class="text2" @change="bindHtmcPickerChange" :value="htmcIndex" :range="htmcList">
									<!-- <view class="uni-input">{{htmcList[htmcIndex]}}</view> -->
									<view class="uni-input" v-if="htmcCount === 0 && htmcIndex === 0">请选择</view>
									<view class="uni-input" v-else>{{htmcList[htmcIndex]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">施工单位</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="form.xmsglx" type="text" required="required" disabled="disabled"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">检查日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="uni-input">{{date}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">检查人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="form.gj_jbr" type="text" required="required" placeholder="填写姓名"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">附件</text>
							</view>
							<view class="content--wrap_form_li_right">
								<text class="text2">选择施工检查表</text>							
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">合同编号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" @change="bindHtbhPickerChange" :value="htbhIndex" :range="htbhList">
									<view class="uni-input" v-if="htmcCount === 0 && htbhIndex === 0">请选择</view>
									<view class="uni-input" v-else>{{htbhList[htbhIndex]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">检查内容</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" @change="jcnrbindPickerChange" :value="jcnrIndex" :range="jcnrList">
									<view class="uni-input" v-if="jcnrCount === 0 && jcnrIndex === 0">请选择</view>								   
									<view class="uni-input" v-else>{{jcnrList[jcnrIndex]}}</view>
								</picker>																																						
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>							
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">罚金(万元)</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="form.gj_fj" type="number"  placeholder="填写罚金"/>
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
			return {
			   title:'施工单位履约检查表',
			   btnName:'保存',
               htmcList: [],
			   jcnrList:[],
			   htbhList:[],
			   htmcIndex: 0,
			   htbhIndex: 0,
			   jcnrIndex:0,
			   jcnrCount:0,
			   htbhIsSelectChange: false,	// 合同编号是否选择改变的	
			   gjJbrIsChange: false, // 检查人是否手动改变
			   gjFjIsChange:false,
			   date: currentDate,			   
			   choseJcnr:false,						  
			   form:{				   				   
				   htbh:'',
				   htmc:'',
				   xmsglx:'',
				   gj_jbr:'',
				   jcnr:'',
				   gj_fj:0,
				   gj_qdrq:currentDate
				},
				xmlistArr: [],
				htmcCount: 0
            }
		},
		mounted(){
			this.onQuery()
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
			bindHtmcPickerChange: function(e) {
				console.log('合同名称picker发送选择改变，携带值为', e.target.value)
				this.htmcCount = this.htmcCount + 1
				this.htmcIndex = e.target.value
				this.form.htmc = this.xmlistArr[e.target.value].htmc				
				this.form.xmsglx = this.xmlistArr[e.target.value].xmsglx
				if (this.htbhIsSelectChange === false) {
					this.htbhIndex = e.target.value
					this.form.htbh = this.xmlistArr[e.target.value].htbh
				}
				if (this.gjJbrIsChange === false) {
					this.form.gj_jbr = this.xmlistArr[e.target.value].gj_jbr
				}
				if (this.gjFjIsChange === false) {
					this.form.gj_fj = this.xmlistArr[e.target.value].gj_fj
				}
			},
			bindHtbhPickerChange: function(e) {
				console.log('合同编号picker发送选择改变，携带值为', e.target.value)	
				if (this.htmcIndex === 0) {
					uni.showToast({
						title: '请您优先选择项目名称'
					})
				} else {
					this.htbhIndex = e.target.value
					this.form.htbh = this.xmlistArr[e.target.value].htbh
					this.htbhIsSelectChange = true
				}
			},
			jcnrbindPickerChange:function(e){
				this.jcnrCount +=1
				this.jcnrIndex = e.target.value
				this.form.jcnr = this.jcnrList[e.target.value]
			},
			bindDateChange: function(e) {
				this.date = e.target.value
				this.form.gj_qdrq = e.target.value
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
			onQuery(){
				this.$api.queryForm(this.form.htbh).then(res =>{
					if(res.status === 200){
						//console.log(res)
						let list = res.data.data
						this.xmlistArr = list
						console.log(this.xmlistArr)
						let reshtmcList = [] //合同名称的数组
						let reshtbhList = [] //合同编号的数组
						list.forEach((li,index) =>{						
							reshtmcList.push(li.htmc)
							this.htmcList = reshtmcList
							reshtbhList.push(li.htbh)
							this.htbhList = reshtbhList						
							//this.jcnrList.push(li['lyjcs'][index]['jcnr'])
							//console.log(this.jcnrList)
							if(li.lyjcs.length>0){
								li.lyjcs.forEach((i) =>{
									this.jcnrList.push(i.jcnr)
								})
							}														
						})	
						//console.log(reshtmcList)
					}
				}).catch(e =>{
					uni.showToast({
						title:'查询失败'
					})
				})
			},
			// 保存
			onSave(){			
				console.log(this.form)
				this.$api.saveBuilderUnitForm(this.form).then(res =>{
					if(res.status === 200){
						console.log(res, 575757)
						uni.showToast({
							title:'保存成功！'
						})					
					}else{
						uni.showToast({
							title:'保存失败'
						})
					}					
				}).catch(e =>{
					console.log(1)					
				})
			uni.navigateBack({})
			},
												
		},
		watch: {
			'form.gj_jbr'(v, ov) {
				if (this.xmlistArr[this.htmcIndex].gj_jbr !== v) {
					this.gjJbrIsChange = true
				}
			}
		}
	}
</script>

<style lang="scss">
</style>
