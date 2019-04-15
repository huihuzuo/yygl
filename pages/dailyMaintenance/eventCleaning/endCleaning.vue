<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="setting">		
		  <view slot="content" style="width:100%;height:100%;" class="mapContent">
			  <map 
			    style="width: 100%;" 
				v-bind:style="{height: height + 'px'}" 
				:latitude="latitude" 
				:longitude="longitude"
				v-if="latitude && longitude"
				:markers="currentMarkPoint"
				:polyline="trajectory">
				<!-- #ifdef APP-PLUS -->	
				<cover-view class="btnMobile" @click="endClean">完成清扫</cover-view>
				<!-- #endif -->
			  </map>			  
			  <cover-view class="btn" @click="endClean">完成清扫</cover-view>				   
		  </view>
	</sub-page>	  
</template>

<script>
	import MapEvent from '../../../mixin/mapEvent.js'
	export default {
		data() {
			return {
				title:'清扫中',
				btnName:'配置',
				latitude: 39.909,
				longitude: 116.39742,
				height: 600,
				currentMarkPoint: [], // 当前位置点 或地图上所有点 都需集成在此
				trajectory: [] // 运行轨迹线
			};
		},
		mixins: [MapEvent],
		methods:{
			endClean(){
				uni.showModal({
				// title: '提示',
				content: '是否确定结束清扫？',
				success: function (res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
				});
			},
			setting(){
				uni.navigateTo({
					url:'../eventCleaning/cleanSetting/cleanSetting'
				})
			}
			
		}
	}
	
</script>

<style lang="scss">
	.btn {
		position:absolute;
		bottom:48.61upx;
		left: 50%;		
		margin-left:-104.16upx;		
		width:208.33upx;		
		height:83.33upx;
		background-color:#3288f3;
		border-radius: 50upx;
		text-align: center;
		line-height:80upx;
		color:#fff;
		font-size:29.16upx;
		font-family: SourceHanSansCN-Regular;
	}
	/* #ifdef APP-PLUS */
	.btnMobile {
		position:absolute;
		bottom:48.61upx;
		left: 50%;		
		margin-left:-104.16upx;		
		width:208.33upx;		
		height:83.33upx;
		background-color:#3288f3;
		border-radius: 50upx;
		text-align: center;
		line-height:80upx;
		color:#fff;
		font-size:29.16upx;
		font-family: SourceHanSansCN-Regular;
	}
	/* #endif */
</style>

