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
				<cover-view class="btnMobile" @click="startClean">开始清扫</cover-view>
				<!-- #endif -->
			  </map>			  
			  <cover-view class="btn" @click="startClean">开始清扫</cover-view>				   
		  </view>
	</sub-page>	  
</template>

<script>
	import MapEvent from '../../../mixin/mapEvent.js'
	export default {
		data() {
			return {
				title:'日常清扫',
				btnName:'配置',
				latitude: 39.909,
				longitude: 116.39742,
				height: 600,
				currentMarkPoint: [], // 当前位置点 或地图上所有点 都需集成在此
				trajectory: [], // 运行轨迹线
				isConfig:false  // 判断是否保存成功的标识
				
			};
		},
		mixins: [MapEvent],
		onLoad:function(e){
			//发请求判断是否配置成功
			this.$api.isConfig().then(res =>{
				if(res.status === 200){
					this.isConfig = true
				}else{
					uni.navigateTo({
						url:'../dailyCleaning/cleanSetting/cleanSetting'
					})
				}
			})
		},
		methods:{
			startClean(){
				if(this.isConfig){
					uni.navigateTo({  // 如果配置成功跳到结束清扫页面
						url:'./endCleaning'
						//url:'./cleanSetting/cleanSetting'
					})
				}else{ // 反之进行配置
					uni.navigateTo({
						url:'../dailyCleaning/cleanSetting/cleanSetting'
					})
				}
				
			},
			// 点击配置后先根据人员id查询
			setting(){
				this.$api.queryRcqsPz().then(res =>{
					if(res.status === 200){
						console.log()
					}
				}).catch(e =>{
					
				})
				uni.navigateTo({
					url:'../dailyCleaning/cleanSetting/cleanSetting'
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
