<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<view class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修人员</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<picker class="text2" @change="bindwxryPickerChange" :value="wxryIndex" :range="wxryList">									
									<view class="uni-input" v-if="wxryCount === 0 && wxryIndex === 0">请选择</view>
									<view class="uni-input" v-else>{{wxryList[wxryIndex]}}</view>
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
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {uniIcon} from '@dcloudio/uni-ui';
    export default {
		data() {			
			return {
			   title:'任务派发',
			   btnName:'保存',
               wxryIndex:0,
			   wxryCount:0,
			   wxryList:[],
			   form:{
				   wxrid:'',
				   fpry:'',
				   djbh:''
			   }				
            }
		},		
		computed: {			
			//...mapState(['assignTask']),
			getDJBH () {
				// return this.$store.state.assignTask.djbh
				return this.$store.state.assignTask.djbh
			},
			getWXRID(){
				return this.$store.state.assignTask.wxrid
			}
		},
		mounted(){
			this.getfpry()
		},
		components: {
			uniIcon			
		},
		methods:{			
			bindwxryPickerChange: function(e) {	
				this.wxryCount +=1
				this.wxryIndex = e.target.value
				this.form.fpry = this.wxryList[e.target.value]
			},
			// 获取分配人员信息
			getfpry(){
				this.$api.getfpWxrwd().then(res =>{
					if(res.data.code === 1){
						let reswxryList = []
						reswxryList = res.data.data						
						reswxryList.forEach((wxry) =>{
							this.wxryList.push(wxry.fpry)
						})
					}
				}).catch(e =>{
					
				})
			},
			// 提交保存分配后的人员
			onSave(){
				this.form.djbh=this.getDJBH
				this.form.wxrid=this.getWXRID
				this.$api.savefpWxrwd(this.form).then(res =>{					
					if(res.data.code === 1){
						uni.showToast({
							title:'保存成功'
						})
						uni.navigateBack({
							delta:2
						})
					}else{
						uni.showToast({
							title:'保存失败'
						})
					}
					
				}).catch(e =>{
					
				})
			}
			
		}	
	}
</script>

<style lang="scss">
</style>
