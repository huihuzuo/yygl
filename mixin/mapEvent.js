export default {
	mounted () {
		// 获取设备信息
		uni.getSystemInfo({
			success: ((res) => {
				// 因地图高度不能设成百分比、故通过分辨率请求更新地图高度
				this.height = res.windowHeight - 80
			})
		})
		this.currentMarkPoint = []
		// 获取当前位置 定位当前点
		uni.getLocation({
			type: "gcj02",
			success: ((res) => {
				this.latitude = res.latitude
				this.longitude = res.longitude
				this.currentMarkPoint = this.addMarkPoint([[this.longitude, this.latitude]])
				this.watchTrajectory()
			}),
			fail: (() => {
				uni.showToast({
					title: '定位失败，请开启gps定位'
				})
				// this.currentMarkPoint = this.addMarkPoint([[this.longitude, this.latitude]])
			})
		})
	},
	methods: {
		/**
		 * 为地图上添加标注点
		 */
		addMarkPoint (points) {
			let handlePoints = []
			for (let i = 0; i < points.length; i++) {
				let _point = {}
				_point = {
					longitude: points[i][0],
					latitude: points[i][1],
					iconPath: "/static/img/location.png"	
				}
				handlePoints.push(_point)
			}
			return handlePoints
		},
		/**
		 * 为地图上添加标记线
		 */
		addPolyLine (points) {
			this.trajectory = [{
				points: points,
				color: "#0892f7",
				width: 6
			}]
		},
		/**
		 * 开启行走时获取点位信息 存为数组 用来标记行走轨迹线
		 */
		watchTrajectory () {
			let tempPoints = []
			let longitude = this.longitude
			let latitude = this.latitude
			this.timer = setInterval(() => {
				uni.getLocation({
					type: "gcj02",
					success: ((res) => {
						tempPoints.push({longitude: res.longitude, latitude: res.latitude})
						this.addPolyLine(tempPoints)
					})
				})
			}, 5000)
		},
		setting() {				
			uni.navigateTo({
				url:'../../maintenancePatrol/checkSetting/checkSetting'
			})
		}
},
}