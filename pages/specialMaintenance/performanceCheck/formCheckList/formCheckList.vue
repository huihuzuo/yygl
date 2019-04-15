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
			  title:'履约检查',
			  checkList:[
				  {
					  label: '施工单位履约检查表',
					  value: 'specificCheckForm/builderUnit',				  					  				  
				  },
				  {
					  label: '进场准备情况检查表',
					  value: 'specificCheckForm/readyEnterArea',					  					  					  
				  }
			  ]
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

<style lang="scss">
	
</style>
