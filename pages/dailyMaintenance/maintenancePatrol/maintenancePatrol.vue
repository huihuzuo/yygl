<template>
	<sub-page :title="title">
		  <view slot="content" style="width:100%;height:100%;">
			  <map-content></map-content>			 
		  </view>
	</sub-page>
</template>

<script>
	export default {
		data() {
			return {
				title: '启动巡查'
			};
		},
		onLoad() {  
        },  
		methods: {
			toRoadSetting: function() {
				uni.navigateTo({
					url:"../maintenancePatrol/roadSetting/roadSetting"
				})
			}
		},
		components: {
		}
	}
</script>

<style lang="scss">

</style>

       
       
       
       
       
       
       
      

