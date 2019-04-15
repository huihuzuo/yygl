<template>
	<view class="mapContent">
		<map 
		style="width: 100%;" v-bind:style="{height: height + 'px'}" 
		:latitude="latitude" :longitude="longitude"
		v-if="latitude && longitude"
		:markers="currentMarkPoint"
		:polyline="trajectory">				
		   <cover-view class="myCanvas-second" @click="toRoadSetting">启动巡查</cover-view> 
		   <!-- <cover-view class="myCanvas"></cover-view>
		   <cover-view class="myCanvas-first"></cover-view>
		   <cover-view class="myCanvas-first-innerWrap"></cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li1"></cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li2"></cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li3"></cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li4"></cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li5"></cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li6"></cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-title5">用时</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-content5">10:10:10</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-title6">上报事件个数</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-content6">8</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-title1">巡查类型</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-content1">养护普通巡查</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-title2">巡查车辆</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-content2">养护普通巡查</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-title3">巡查单号</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-content3">养护普通巡查</cover-view>		   
		   <cover-view class="myCanvas-first-innerWrap-li-title4">巡查人员</cover-view>
		   <cover-view class="myCanvas-first-innerWrap-li-content4">养护普通巡查</cover-view> -->
		   
        </map>
		
		<!-- #ifdef H5 -->
		<view class="btnPC" @click="toRoadSettingPC">启动巡查</view>
		<!-- #endif -->		
       
	</view>
</template>

<script>
import MapEvent from '../mixin/mapEvent.js'
export default {
	data() {
		return {
			latitude: 39.909,
			longitude: 116.39742,
			height: 600,
			currentMarkPoint: [], // 当前位置点 或地图上所有点 都需集成在此
			trajectory: [] // 运行轨迹线
		};
	},
	mixins:[MapEvent],
	methods:{
		toRoadSetting () {				
			uni.navigateTo({
				url:"../../dailyMaintenance/maintenancePatrol/roadSetting/roadSetting"
			})
		},
		toRoadSettingPC () {
			uni.navigateTo({
				url:"../../dailyMaintenance/maintenancePatrol/roadSetting/roadSetting"
			})
		}
	}
}
</script>

<style lang="scss">
.mapContent {
	width: 100%;
	height: 100%;
// 	.myCanvas {
// 		width:683.33upx; 
// 		height:475upx;		
// 		border-radius:11.11upx;		
// 		position:absolute;
// 		bottom:48.61upx;
// 		left: 50%;
// 		margin-left:-341.66upx;										
// 	}
// 	.myCanvas-first {
// 		position:absolute;
// 		bottom:190upx;
// 		left: 50%;
// 		margin-left:-341.66upx;
// 		width:683.33upx;
// 		//height:333.33upx;
// 		height:410.33upx;
// 		background-color:#fff;
// 		border-radius:11.11upx; 		
// 	}
// 	.myCanvas-first-innerWrap {
// 		width:555.55upx;
// 		height:215.27upx;		
// 		position:absolute;
// 		bottom:250upx;
// 		left: 50%;
// 		margin-left:-277.77upx;
// 	}
	.myCanvas-second {
		position:absolute;
		bottom:48.61upx;
		left: 50%;
		margin-left:-341.66upx;
		width:683.33upx;
		height:100upx;
		background-color:#3288f3;
		border-radius: 50upx;
		text-align: center;
		line-height:100upx;
		color:#fff;
		font-size:29.16upx;
		font-family: SourceHanSansCN-Regular;
	}
// 	.myCanvas-first-innerWrap-li1 {
// 		width:277upx;
// 		height:107upx;				
// 		position:absolute;
// 		bottom:357upx;
// 		left: 50%;
// 		margin-left:-277.77upx;		
// 	}
// 	.myCanvas-first-innerWrap-li2 {
// 		width:277upx;
// 		height:107upx;				
// 		position:absolute;
// 		bottom:250upx;
// 		left: 50%;
// 		margin-left:-277.77upx;
// 		
// 	}
// 	.myCanvas-first-innerWrap-li3 {
// 		width:277upx;
// 		height:107upx;				
// 		position:absolute;
// 		bottom:357upx;
// 		left: 50%;
// 		margin-right:-277.77upx;		
// 	}
// 	.myCanvas-first-innerWrap-li4 {
// 		width:277upx;
// 		height:107upx;				
// 		position:absolute;
// 		bottom:250upx;
// 		left: 50%;
// 		margin-right:-277.77upx;		
// 	}
// 	.myCanvas-first-innerWrap-li5 {
// 		width:277upx;
// 		height:107upx;				
// 		position:absolute;
// 		bottom:470upx;
// 		left: 50%;
// 		margin-left:-277.77upx;
// 		//background-color: orange;
// 	}
// 	.myCanvas-first-innerWrap-li6 {
// 		width:277upx;
// 		height:107upx;				
// 		position:absolute;
// 		//bottom:357upx;
// 		bottom:470upx;
// 		left: 50%;
// 		margin-right:-277.77upx;
// 		//background-color: pink;
// 	}
// 	.myCanvas-first-innerWrap-li-title1 {
// 	    color:#8a8e93;
// 		font-size:25upx;
// 		font-family: SourceHanSansCN-Regular;
// 		width:277upx;
// 		height:53.5upx;
// 		position:absolute;
// 		bottom:410.5upx;
// 		left: 50%;
// 		margin-left:-277.77upx;
// 		text-align: center;
// 		line-height:53.5upx;				
// 	}
// 	.myCanvas-first-innerWrap-li-content1 {
// 	    color:#4e5258;
// 		font-size:29.16upx;
// 		font-family: SourceHanSansCN-Regular;
// 		position:absolute;
// 		bottom:357upx;
// 		left: 50%;
// 		width:277upx;
// 		height:53.5upx;
// 		margin-left:-277.77upx;
// 		text-align: center;
// 		line-height:53.5upx;			
// 	}
// 	.myCanvas-first-innerWrap-li-title2 {
// 	    color:#8a8e93;
// 		font-size:25upx;
// 		font-family: SourceHanSansCN-Regular;
// 		width:277upx;
// 		height:53.5upx;
// 		position:absolute;
// 		bottom:303.5upx;
// 		left: 50%;
// 		margin-left:-277.77upx;
// 		text-align: center;
// 		line-height:53.5upx;		
// 	}
// 	.myCanvas-first-innerWrap-li-content2 {
// 	    color:#4e5258;
// 		font-size:29.16upx;
// 		font-family: SourceHanSansCN-Regular;
// 		position:absolute;
// 		bottom:250upx;
// 		left: 50%;
// 		width:277upx;
// 		height:53.5upx;
// 		margin-left:-277.77upx;
// 		text-align: center;
// 		line-height:53.5upx;			
// 	}
// 	.myCanvas-first-innerWrap-li-title3 {
// 	    color:#8a8e93;
// 		font-size:25upx;
// 		font-family: SourceHanSansCN-Regular;
// 		width:277upx;
// 		height:53.5upx;
// 		position:absolute;
// 		bottom:410.5upx;
// 		left: 50%;
// 		margin-left:0upx;
// 		text-align: center;
// 		line-height:53.5upx;		
// 	}
// 	.myCanvas-first-innerWrap-li-content3 {
// 	    color:#4e5258;
// 		font-size:29.16upx;
// 		font-family: SourceHanSansCN-Regular;
// 		position:absolute;
// 		bottom:357upx;
// 		left: 50%;
// 		width:277upx;
// 		height:53.5upx;
// 		margin-left:0upx;
// 		text-align: center;
// 		line-height:53.5upx;			
// 	}
// 	.myCanvas-first-innerWrap-li-title4 {
// 	    color:#8a8e93;
// 		font-size:25upx;
// 		font-family: SourceHanSansCN-Regular;
// 		width:277upx;
// 		height:53.5upx;
// 		position:absolute;
// 		bottom:303.5upx;
// 		left: 50%;
// 		margin-left:0upx;
// 		text-align: center;
// 		line-height:53.5upx;		
// 	}
// 	.myCanvas-first-innerWrap-li-content4 {
// 	    color:#4e5258;
// 		font-size:29.16upx;
// 		font-family: SourceHanSansCN-Regular;
// 		position:absolute;
// 		bottom:250upx;
// 		left: 50%;
// 		width:277upx;
// 		height:53.5upx;
// 		margin-left:0upx;
// 		text-align: center;
// 		line-height:53.5upx;				
// 	}
// 	// 
// 	.myCanvas-first-innerWrap-li-title5 {
// 	    color:#8a8e93;
// 		font-size:25upx;
// 		font-family: SourceHanSansCN-Regular;
// 		width:277upx;
// 		height:53.5upx;
// 		position:absolute;
// 		bottom:515upx;
// 		left: 50%;
// 		margin-left:-277.77upx;
// 		text-align: center;
// 		line-height:53.5upx;				
// 	}
// 	.myCanvas-first-innerWrap-li-content5 {
// 	    color:#4e5258;
// 		font-size:29.16upx;
// 		font-family: SourceHanSansCN-Regular;
// 		position:absolute;
// 		bottom:470upx;		
// 		left: 50%;
// 		width:277upx;
// 		height:53.5upx;
// 		margin-left:-277.77upx;
// 		text-align: center;
// 		line-height:53.5upx;			
// 	}
// 	
//     .myCanvas-first-innerWrap-li-title6 {
// 	    color:#8a8e93;
// 		font-size:25upx;
// 		font-family: SourceHanSansCN-Regular;
// 		width:277upx;
// 		height:53.5upx;
// 		position:absolute;
// 		bottom:515upx;
// 		//bottom:464upx;;
// 		left: 50%;
// 		margin-left:0upx;
// 		text-align: center;
// 		line-height:53.5upx;		
// 	}
// 	.myCanvas-first-innerWrap-li-content6 {
// 	    color:#4e5258;
// 		font-size:29.16upx;
// 		font-family: SourceHanSansCN-Regular;
// 		position:absolute;
// 		bottom:470upx;
// 		left: 50%;
// 		width:277upx;
// 		height:53.5upx;
// 		margin-left:0upx;
// 		text-align: center;
// 		line-height:53.5upx;			
//	}
		
/* #ifdef H5 */
.btnPC {
	position:absolute;
	bottom:48.61upx;
	left: 50%;
	margin-left:-341.66upx;
	width:683.33upx;
	height:100upx;
	background-color:#3288f3;
	border-radius: 50upx;
	text-align: center;
	line-height:100upx;
	color:#fff;
	font-size:29.16upx;
	font-family: SourceHanSansCN-Regular;	
}
/* #endif */
}
</style>
