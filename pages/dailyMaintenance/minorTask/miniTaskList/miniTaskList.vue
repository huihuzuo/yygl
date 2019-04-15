<template>
	<view class="subPage">
		<sub-page :title="title">
			  <view slot="content" style="width:100%;height:100%;"> 
			    <view class="subPage--content--wrap">
			    	<form action="" class="content--wrap_form">
			    		<view class="content--wrap_form_li" @click="intoCheckForm(item, index)" v-for="(item, index) in checkList" :key="index">
			    			<view class="content--wrap_form_li_left">
			    				<text class="text1">{{item.label}}</text>
			    			</view>
			    			<view class="content--wrap_form_li_right">														
			    				<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
			    			</view>
			    		</view>			    		
			    	</form>
			    </view>
			  </view>
		</sub-page>		
	</view>
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui';
	export default {
		data() {
		  return {
			  title:'小修任务',
			  checkList:[
				  {
					  label: '我的任务单',
					  value: 'specificTask/myTask',				  					  				  
				  },
				  {
					  label: '维修施工照片记录',
					  value: 'specificTask/buildPhotos',					  					  					  
				  }
			  ],
		  }
		},
		methods:{
			goBack(){
				uni.navigateBack()	
			},
			intoCheckForm (item,index) {
				uni.navigateTo({
					url: "./" + item.value
				})
			}
		},
		components: {
			uniIcon
		}	
	}
</script>

<style>
</style>
