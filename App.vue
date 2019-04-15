<script>
	export default {
		onLaunch: function () {
		},
		onShow: function () {
			uni.setNavigationBarColor({
				frontColor: "#000000",
				backgroundColor: "#f5f7fa"
			})
		},
		onHide: function () {
		},
		mounted() {
			this.login()
		},
		methods: {
				login(){
				let _params = {
					username:'admin',
					password:'123456'
				}
				this.$api.login(_params).then(res =>{
					//console.log(res)
					if(res.status === 200){
						//sessionStorage.setItem("username","a");
						uni.setStorage({
							key: 'userInfo',
							data: res.data,
							success:function(){
							}
						})
// 						uni.getStorage({
// 							key: 'userInfo',
// 							success:function(res){
// 								console.log(res)
// 							}
// 						})
					}
				}).catch(e =>{
					
				})
			}
		}
	
		
	}
</script>

<style>
	* {
        margin: 0;
        padding: 0
    }
	uni-page-body {
		width: 100%;
		height: 100%;
	}
	
	
</style>
