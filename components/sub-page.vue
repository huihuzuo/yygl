<template>
  <view class="subPage">
		<view class="top-placeholder"></view>
		<view class="subPage--head">
			<uni-icon class="subPage--head__back" type="arrowleft" size="30" @click="goBack"></uni-icon>
			<text class="subPage--head__title">{{title}}</text>
			<text class="subPage--head__button" @click="btnClick">{{btnName}}</text>
		</view>
		<view class="subPage--content">
			<slot name="content"></slot>  
		</view>
  </view>
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui'
	export default {
		name: 'subPage',
		props: {
			// 当前子页面标题
			title: {
				type: String,
				default: function() {
					return ''
				},
				required: true
			},
			// 当前子页面右上角是否有按钮 有按钮的化直接传输按钮名称 
			btnName: {
				type: String,
				default: function() {
					return ''
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			/**
			 * 返回按钮
			 */
			goBack() {
				uni.navigateBack()
			},
			/**
			 * 按钮点击事件
			 */
			btnClick () {
				// 有按钮后 执行$emit
				if (this.btnName) {
					this.$emit('onBtnClick')
				}				
			}
		},
		components: {
			uniIcon
		}
	}
</script>

<style lang="scss">
	@import '../assets/style/subPage.scss'
</style>
