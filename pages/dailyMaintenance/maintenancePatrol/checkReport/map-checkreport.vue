<template>
	<sub-page :title="title" @onBtnClick="setting">
		<view slot="content" style="width:100%;height:100%;" class="mapContent">
			<map style="width: 100%;" v-bind:style="{height: height + 'px'}" :latitude="latitude" :longitude="longitude" v-if="latitude && longitude"
			 :markers="currentMarkPoint" :polyline="trajectory">
				<!-- #ifdef APP-PLUS -->
				<cover-view class="btnPC" @click="reportEvent">上报事件</cover-view>
				<cover-view class="btn" @click="endCheck">结束巡查</cover-view>
				<!-- #endif -->
				<cover-view class="myCanvas"></cover-view>
				<cover-view class="myCanvas-first"></cover-view>
				<cover-view class="myCanvas-first-innerWrap"></cover-view>
				<cover-view class="myCanvas-first-innerWrap-li1"></cover-view>
				<cover-view class="myCanvas-first-innerWrap-li2"></cover-view>
				<cover-view class="myCanvas-first-innerWrap-li3"></cover-view>
				<cover-view class="myCanvas-first-innerWrap-li4"></cover-view>
				<cover-view class="myCanvas-first-innerWrap-li-title1">巡查类型</cover-view>
				<cover-view class="myCanvas-first-innerWrap-li-content1">{{yhcx_xlpz['xclx']}}</cover-view>
				<cover-view class="myCanvas-first-innerWrap-li-title2">巡查车辆</cover-view>
				<cover-view class="myCanvas-first-innerWrap-li-content2">{{xccl}}</cover-view>
				<cover-view class="myCanvas-first-innerWrap-li-title3">巡查单号</cover-view>
				<cover-view class="myCanvas-first-innerWrap-li-content3">{{yhcx_xlpz['xcdh']}}</cover-view>
				<cover-view class="myCanvas-first-innerWrap-li-title4">巡查人员</cover-view>
				<cover-view class="myCanvas-first-innerWrap-li-content4">{{xcry}}</cover-view>
			</map>

			<!-- #ifdef H5 -->
			<button class="btnPC" @click="reportEventPC">上报事件</button>
			<button class="btn" @click="endCheckPC">结束巡查</button>
			<!-- #endif -->
		</view>
	</sub-page>
</template>

<script>
	import MapEvent from '../../../../mixin/mapEvent.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				title: '巡查上报',
				//btnName:'设置',
				latitude: 39.909,
				longitude: 116.39742,
				height: 600,
				currentMarkPoint: [], // 当前位置点 或地图上所有点 都需集成在此
				trajectory: [], // 运行轨迹线
				xclx: '',
				xccl: '',
				xcdh: '',
				xcry: ''
			};
		},
		mounted() {
			this.getUserInfo()
		},
		mixins: [MapEvent],
		computed: {
			...mapState(['yhcx_xlpz'])
		},
		methods: {
			getUserInfo() {
				let vm = this
				uni.getStorage({
					key: 'userInfo',
					success: function(res) {
						if (res && res.data) {
							vm.xcry = res.data.xcry
							vm.xccl = res.data.xccl
						}
					}
				})
			},
			goBack() {
				uni.navigateBack()
			},
			reportEventPC() {
				uni.navigateTo({
					url: '../checkReport/reportEvent/reportEvent'
				})
			},
			endCheckPC() {
				uni.showModal({
					// title: '提示',
					content: '是否确定结束巡查？',
					success: function(res) {
						if (res.confirm) {
							uni.navigateBack({
								delta:2
							})
							console.log('用户点击确定');

						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			reportEvent() {				
				uni.navigateTo({
					url: '../checkReport/reportEvent/reportEvent'
				})
			},
			endCheck() {
				uni.showModal({
					// title: '提示',
					content: '是否确定结束巡查？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.mapContent {
		width: 100%;
		height: 100%;
	}
	.myCanvas {
		width: 683.33upx;
		height: 475upx;
		border-radius: 11.11upx;
		position: absolute;
		bottom: 48.61upx;
		left: 50%;
		margin-left: -341.66upx;
	}
	.myCanvas-first {
		position: absolute;
		bottom: 190upx;
		left: 50%;
		margin-left: -341.66upx;
		width: 683.33upx;
		height: 333.33upx;
		background-color: #fff;
		border-radius: 11.11upx;
	}
	.myCanvas-first-innerWrap {
		width: 555.55upx;
		height: 215.27upx;
		position: absolute;
		bottom: 250upx;
		left: 50%;
		margin-left: -277.77upx;
	}

	.myCanvas-second {
		position: absolute;
		bottom: 48.61upx;
		left: 50%;
		margin-left: -341.66upx;
		width: 683.33upx;
		height: 100upx;
		background-color: #3288f3;
		border-radius: 50upx;
		text-align: center;
		line-height: 100upx;
		color: #fff;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
	}

	.myCanvas-first-innerWrap-li1 {
		width: 277upx;
		height: 107upx;
		position: absolute;
		bottom: 357upx;
		left: 50%;
		margin-left: -277.77upx;
	}

	.myCanvas-first-innerWrap-li2 {
		width: 277upx;
		height: 107upx;
		position: absolute;
		bottom: 250upx;
		left: 50%;
		margin-left: -277.77upx;

	}

	.myCanvas-first-innerWrap-li3 {
		width: 277upx;
		height: 107upx;
		position: absolute;
		bottom: 357upx;
		left: 50%;
		margin-right: -277.77upx;
	}

	.myCanvas-first-innerWrap-li4 {
		width: 277upx;
		height: 107upx;
		position: absolute;
		bottom: 250upx;
		left: 50%;
		margin-right: -277.77upx;
	}

	.myCanvas-first-innerWrap-li-title1 {
		color: #8a8e93;
		font-size: 25upx;
		font-family: SourceHanSansCN-Regular;
		width: 277upx;
		height: 53.5upx;
		position: absolute;
		bottom: 410.5upx;
		left: 50%;
		margin-left: -277.77upx;
		text-align: center;
		line-height: 53.5upx;
	}

	.myCanvas-first-innerWrap-li-content1 {
		color: #4e5258;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
		position: absolute;
		bottom: 357upx;
		left: 50%;
		width: 277upx;
		height: 53.5upx;
		margin-left: -277.77upx;
		text-align: center;
		line-height: 53.5upx;
	}

	.myCanvas-first-innerWrap-li-title2 {
		color: #8a8e93;
		font-size: 25upx;
		font-family: SourceHanSansCN-Regular;
		width: 277upx;
		height: 53.5upx;
		position: absolute;
		bottom: 303.5upx;
		left: 50%;
		margin-left: -277.77upx;
		text-align: center;
		line-height: 53.5upx;
	}

	.myCanvas-first-innerWrap-li-content2 {
		color: #4e5258;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
		position: absolute;
		bottom: 250upx;
		left: 50%;
		width: 277upx;
		height: 53.5upx;
		margin-left: -277.77upx;
		text-align: center;
		line-height: 53.5upx;
	}

	.myCanvas-first-innerWrap-li-title3 {
		color: #8a8e93;
		font-size: 25upx;
		font-family: SourceHanSansCN-Regular;
		width: 277upx;
		height: 53.5upx;
		position: absolute;
		bottom: 410.5upx;
		left: 50%;
		margin-left: 0upx;
		text-align: center;
		line-height: 53.5upx;
	}

	.myCanvas-first-innerWrap-li-content3 {
		color: #4e5258;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
		position: absolute;
		bottom: 357upx;
		left: 50%;
		width: 277upx;
		height: 53.5upx;
		margin-left: 0upx;
		text-align: center;
		line-height: 53.5upx;
	}

	.myCanvas-first-innerWrap-li-title4 {
		color: #8a8e93;
		font-size: 25upx;
		font-family: SourceHanSansCN-Regular;
		width: 277upx;
		height: 53.5upx;
		position: absolute;
		bottom: 303.5upx;
		left: 50%;
		margin-left: 0upx;
		text-align: center;
		line-height: 53.5upx;
	}

	.myCanvas-first-innerWrap-li-content4 {
		color: #4e5258;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
		position: absolute;
		bottom: 250upx;
		left: 50%;
		width: 277upx;
		height: 53.5upx;
		margin-left: 0upx;
		text-align: center;
		line-height: 53.5upx;
	}

	/* #ifdef H5 */
	.btnPC {
		position: absolute;
		bottom: 48.61upx;
		left: 50%;
		//margin-left:-341.66upx;
		margin-left: -320.66upx;
		//width:683.33upx;
		width: 300upx;
		//width:341.665upx;
		height: 80upx;
		background-color: #3288f3;
		border-radius: 50upx;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
	}

	.btn {
		position: absolute;
		bottom: 48.61upx;
		left: 50%;
		//margin-left:-341.66upx;
		//width:683.33upx;
		margin-left: 20upx;
		//width:341.665upx;
		width: 300upx;
		height: 80upx;
		background-color: #eee;
		border-radius: 50upx;
		text-align: center;
		line-height: 80upx;
		color: #3288f3;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
	}

	/* #endif */

	/* #ifdef APP-PLUS */
	.btnPC {
		position: absolute;
		bottom: 48.61upx;
		left: 50%;
		//margin-left:-341.66upx;
		margin-left: -320.66upx;
		//width:683.33upx;
		width: 300upx;
		//width:341.665upx;
		height: 80upx;
		background-color: #3288f3;
		border-radius: 50upx;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
	}

	.btn {
		position: absolute;
		bottom: 48.61upx;
		left: 50%;
		//margin-left:-341.66upx;
		//width:683.33upx;
		margin-left: 20upx;
		//width:341.665upx;
		width: 300upx;
		height: 80upx;
		background-color: #ccc;
		border-radius: 50upx;
		text-align: center;
		line-height: 80upx;
		color: #3288f3;
		font-size: 29.16upx;
		font-family: SourceHanSansCN-Regular;
	}

	/* #endif */
</style>
