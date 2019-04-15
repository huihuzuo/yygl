<!-- <template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		  <view slot="content" style="width:100%;height:100%;">
			  <view class="subPage--content">
				  <view class="subPage--content--wrap">
				  <form action="" class="content--wrap_form" :model="form">
					  <view class="content--wrap_form_li">
						<view class="content--wrap_form_li_left">
							<text class="text1">巡查路线</text>
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
							<text class="text1">巡查方向</text>
						</view>
						<view class="content--wrap_form_li_right">
							<picker class="text2" v-model="form.builderUnit" @change="bindPickerChange" :value="index" :range="builder">
								<view class="uni-input">{{builder[index]}}</view>
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
	export default{
		data(){
			return{
				title:'巡查设置',
				btnName:'保存',
				projectName: ['路线1', '路线2', '路线3', '路线4', '路线5'],
				builder:['方向1', '方向2','方向3','方向4','方向5'],
				index: 0,	
				form:{
				   project:'',
				   builderUnit:''				   
				}
			}
		},
		components: {
			uniIcon,			
		},
	}
</script>

<style lang="scss">
</style>
 -->