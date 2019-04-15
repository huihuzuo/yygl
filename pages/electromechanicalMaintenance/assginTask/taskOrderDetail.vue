<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<form @submit.prevent="formSave" class="content--wrap_form" :model="form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修单号</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<picker class="text2" v-model="form.project" @change="bindPickerChange" :value="index" :range="projectName">
									<view class="uni-input">{{projectName[index]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">故障类型</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" v-model="form.builderUnit" @change="bindPickerChange" :value="index" :range="builder">
									<view class="uni-input">{{builder[index]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">保障日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" v-model="form.date" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="uni-input">{{date}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备名称</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="form.checker" type="text" required="required" placeholder="填写姓名"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">规格型号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<text class="text2" @click="uploadFile">施工检查表</text>							
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报告人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" v-model="form.builderUnit" @change="bindPickerChange" :value="index" :range="num">
									<view class="uni-input">{{num[index]}}</view>
								</picker>
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">修复日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" v-model="form.date" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="uni-input">{{date}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>							
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">故障描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" v-model="form.penalty" type="number" required="required" placeholder="故障描述"/>
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
			   title:'任务单01',
			   btnName:'分配',
               projectName: ['项目名称1', '项目名称2', '项目名称3', '项目名称4', '项目名称5'],
			   builder:['施工单位1', '施工单位2','施工单位3','施工单位4','施工单位5'],
			   num:['编号1', '编号2','编号3','编号4','编号5'],
			   index: 0,			   
			   date: currentDate,
			   time: '12:01',
			   form:{
				   project:'',
				   builderUnit:'',
				   date:'',
				   checker:'',
				   attachment:'',
				   number:'',
				   checkContent:'',
				   penalty:''
				}
            }
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
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
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
		    formSave: function() {				
				//console.log(this.form)
				// 表单校验								
                if(!this.form.checker) {
					uni.showToast({title:"请输入检查人姓名!", icon:"none"});
					return false;	
				}
				if(!this.form.checkContent) {
					uni.showToast({title:"请输入检查内容!", icon:"none"});
				    return false;
				}
				if(!this.form.penalty) {
					uni.showToast({title:"请输入罚金!", icon:"none"});
					return false;
				 }
			  return true;
				  this.$api.savePerformanceCheck(this.form).then(res => {
				    if (res.data.code === 1) {
					  this.projectName = res.data.data
				      this.$message({
				        message: '保存成功！', 
				        type: 'success'
				      })
				      this.goBack()
				    } else {
				      this.$message.error('保存失败')
				    }
				  }).catch(e => {
				    this.$message.error('保存失败')
				  })
			},
			onSave() {
				console.log(this.form)
			}
			
		}
	}
</script>

<style lang="scss">
</style>

