<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="formSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<form @submit.prevent="formSave" class="content--wrap_form" :model="form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">清扫路线</text>
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
								<text class="text1">清扫方向</text>
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
								<text class="text1">人员</text>
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
								<text class="text1">天气</text>
							</view>
							<view class="content--wrap_form_li_right">
								<!-- <input class="text2 input" v-model="form.checkContent" type="text" required="required" placeholder="填写内容"/> -->	
								<picker class="text2" v-model="form.builderUnit" @change="bindPickerChange" :value="index" :range="num">
									<view class="uni-input">{{num[index]}}</view>
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
		       projectName: ['项目名称1', '项目名称2', '项目名称3', '项目名称4', '项目名称5'],
			   builder:['施工单位1', '施工单位2','施工单位3','施工单位4','施工单位5'],
			   num:['编号1', '编号2','编号3','编号4','编号5'],
			   index: 0,			   			   			   
			   form:{
				   project:'',
				   builderUnit:'',
				   date:'',
				   checker:'',
				   attachment:'',
				   number:'',
				   checkContent:''
				   
				}
		    }
		},
		computed: {
			
		},
		components: {
			uniIcon,			
		},
		methods:{						
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},					    
			formSave() {
				console.log(this.form)
			}
		}
	}
</script>

<style>
</style>
