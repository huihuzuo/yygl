<template>
	<view class="index">
		<view class="top-placeholder"></view>
        <view class="index--search">
			<view class="index--search__input">
				<uni-icon type="search" size="20"></uni-icon>
				<input class="" type="text" placeholder="请输入搜索内容"/>
			</view>
			<view class="index--search__person">
				<uni-icon type="person-filled" size="32"></uni-icon>
			</view>
		</view>
		<view class="index--tab">
			 <view class="index--tab__item-wrap">
				 <view class="index--tab__item" 
				 :class="current === index ? 'index--tab__item__selected' : ''" 
				 v-for="(item, index) in tabs" :key="index"
				 @click="onClickItem(item, index)">
					 {{item}}
				 </view>
			 </view>
		</view>
		<scroll-view class="index--item" :scroll-top="scrollTop" :scroll-x="false" :scroll-y="true" @scroll="scroll" :scroll-with-animation="true">
			<view class="index--item__single" v-for="(item, index) in tabs" :key="index" :class="'moudleItem' + index" :style="{height: index === 2 ? moudleItem2Height + 'px' : ''}">
				<view class="index--item__single__head">
					<text class="index--item__single__head__tag"></text>{{item}}
				</view>
				<view class="index--item__single__content">
					<view class="item_content" v-for="(item, i) in menuItems" :key="i" v-if="item.group === index" @click="clickMenuItem(item, i)">
						<view class="item_content_img">
							<image :src="'../../static/img/index/' + item.img + '.png'"/>
							<view>{{item.label}}</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				tabs: [
					'日常养护',
					'专项维护',
					'机电维护'
				],
				current: 0,
				menuItems:[
					{
						label: '履约检查',
						//value: 'dailyMaintenance/performanceCheck/performanceCheck/',
						value: 'dailyMaintenance/performanceCheck/formCheckList/formCheckList',
						img: 'performanceCheck',
						group: 0,
						groupLabel: '日常养护'
					},
					{
						label: '养护巡查',
						value: 'dailyMaintenance/maintenancePatrol/maintenancePatrol',
						img: 'maintenancePatrol',
						group: 0,
						groupLabel: '日常养护'
					},
					{
						label: '小修任务',
						value: 'dailyMaintenance/minorTask/miniTaskList/miniTaskList',
						img: 'minorTask',
						group: 0,
						groupLabel: '日常养护'
					},
					{
						label: '日常清扫',
						value: 'dailyMaintenance/dailyCleaning/dailyCleaning',
						img: 'dailyCleaning',
						group: 0,
						groupLabel: '日常养护'
					},
					{
						label: '事件清扫',
						value: 'dailyMaintenance/eventCleaning/eventCleaning',
						img: 'eventCleaning',
						group: 0,
						groupLabel: '日常养护'
					},
					{
						label: '绿化养护',
						value: 'dailyMaintenance/greenConservation/greenConservation',
						img: 'greenConservation',
						group: 0,
						groupLabel: '日常养护'
					},
					{
						label: '履约检查',
						value: 'specialMaintenance/performanceCheck/formCheckList/formCheckList',
						img: 'performanceCheck',
						group: 1,
						groupLabel: '专项养护'
					},
					{
						label: '设备巡检',
						value: 'electromechanicalMaintenance/equipmentInspection/equipmentInspection',
						img: 'equipmentInspection',
						group: 2,
						groupLabel: '机电维护'
					},
					{
						label: '故障报修',
						value: 'electromechanicalMaintenance/faultRepair/faultRepair',
						img: 'faultRepair',
						group: 2,
						groupLabel: '机电维护'
					},
					{
						label: '维修任务单',
						value: 'electromechanicalMaintenance/maintenanceTaskSheet/maintenanceTaskSheet',
						img: 'maintenanceTaskSheet',
						group: 2,
						groupLabel: '机电维护'
					},
					{
						label: '任务派发',
						value: 'electromechanicalMaintenance/assginTask/assginTask',
						img: 'assginTask',
						group: 2,
						groupLabel: '机电维护'
					},
					{
						label: '维修登记',
						value: 'electromechanicalMaintenance/maintenanceRegistration/maintenanceRegistration',
						img: 'maintenanceRegistration',
						group: 2,
						groupLabel: '机电维护'
					},
					{
						label: '维修验收',
						value: 'electromechanicalMaintenance/maintenanceAcceptance/maintenanceAcceptance',
						img: 'maintenanceAcceptance',
						group: 2,
						groupLabel: '机电维护'
					},
					{
						label: '维修费用',
						value: 'electromechanicalMaintenance/maintenanceCosts/maintenanceCosts',
						img: 'maintenanceCosts',
						group: 2,
						groupLabel: '机电维护'
					},
					{
						label: '备件管理',
						value: 'electromechanicalMaintenance/sparePartsManagement/sparePartsManagement',
						img: 'sparePartsManagement',
						group: 2,
						groupLabel: '机电维护'
					},
					{
						label: '废件入库',
						value: 'electromechanicalMaintenance/wasteRecover/wasteRecover',
						img: 'wasteRecover',
						group: 2,
						groupLabel: '废件入库'
					}
					
				],
				scrollTop: 0,
				rcyhScrollTop: 0,
				zxwhScrollTop: 0,
				jdwhScrollTop: 0,
				moudleItem2Height: 500
			}
		},
		onLoad() {

		},
		onReady () {
			uni.createSelectorQuery().selectAll('.moudleItem0, .moudleItem1, .moudleItem2').boundingClientRect((data) => {				
				this.rcyhScrollTop = 0
				this.zxwhScrollTop = data[0]['height']				
				this.jdwhScrollTop = data[0]['height'] + data[1]['height'] + uni.upx2px(27)
			}).exec()
			uni.createSelectorQuery().selectAll('.index--item').boundingClientRect((data) => {
				this.moudleItem2Height = data[0]['height']
			}).exec()			
		},
		methods: {
			onClickItem(item, index) {
				if (this.current !== index) {
					this.current = index;
				}
				// 点击日常养护 进入日常养护范围 获取该范围实际高度
				if (index === 0) {
					this.scrollTop = this.rcyhScrollTop
				}
				// 点击专项养护 进入专项养护范围 获取该范围实际高度
				if (index === 1) {
					this.scrollTop = this.zxwhScrollTop
				}
				// 点击几点维护 进入几点维护范围 获取该范围实际高度
				if (index === 2) {
					this.scrollTop = this.jdwhScrollTop
				}
			},
			clickMenuItem (item, index) {
				uni.navigateTo({
					url: "../" + item.value
				})
			},
			scroll (e) {
				this.scrollTop = e.detail.scrollTop
			}
		},
		watch: {
			// 监听scrollTop值的变化
			scrollTop (v, ov) {
				//console.log(v,ov)
				// 在日常养护范围内
				if (v >= this.rcyhScrollTop && v < this.zxwhScrollTop) {
					this.current = 0
				}
				// 在专项养护范围内
				if (v >= this.zxwhScrollTop && v < this.jdwhScrollTop) {
					this.current = 1
				}
				// 在机电维护范围内
				if (v >= this.jdwhScrollTop) {
					this.current = 2
				}
			}
		},
		components: {
			uniIcon
		}
	}
</script>

<style lang="scss">
	.index {
		width: 100%;
		height: 100%;
		position: fixed;
		overflow: hidden;
		view {
			width: 100%;
		}
		.top-placeholder {
			height: 30px;			
		}
		&--search{
			height: 100upx;
			padding: 0 27.77upx;
			position: relative;
			width: calc(100% - 55.55upx) !important;
			&__input {
				width: calc(100% - 133.33upx) !important;
				float: left;
				border: solid 1px #ebedf0;
				height: 66.66upx;
				margin-top: 22.22upx;
				padding: 0 31.25upx;
				font-family: SourceHanSansCN-Regular;
				font-size: 27.77upx;
				display:flex;
				align-items: center;
				.uni-icon-search {
					width:50upx;
				}
			}
			&__person {
				float: right;
				//width: 69.44upx !important;
				width: 50upx !important;
				text-align: right;
				margin-top: 27.77upx;				
			}			
		}
		&--tab {
			height: 96.52upx;
			font-family: SourceHanSansCN-Regular;
			font-size: 29.16upx;
			color: #8a8e93;
			border-bottom: 0.69upx solid #f0f2f6;
			&__item-wrap {
				padding: 0 125upx; 
				padding-top: 38.88upx;
				.index--tab__item {
					width: 125upx;
					height: 100%;
					float: left;
					margin-left: 62.5upx;
				    border-bottom: 2.08upx solid #ffffff;
				}
				.index--tab__item:first-child {
					margin-left: 0;
				}
				.index--tab__item__selected {
					color: #2d76fb;
					border-bottom: 2.08upx solid  #2d76fb;
				}
			}
		}
		&--item {
			height: calc(100% - 247upx);
			background-color: #fafbfc;
			&__single {
				min-height: 364.58upx;
				margin-top: 20.83upx;
				background-color: #ffffff;
				position: relative;
				&__head {					
					height: 83.33upx;
					padding-top: 27.77upx;
					padding-left: 27.77upx;
					font-family: SourceHanSansCN-Regular;
					font-size: 33.33upx;
					color: #1f262e;
					&__tag {
						display: inline-block;
						width: 4.16upx;
						height: 29.16upx;
						background-color: #2d76fb;
						border-radius: 2.08upx;
						margin-right: 19.44upx;
						margin-top: 1.38upx;
					}
				}
				&__content {
					.item_content {
						width: 208.33upx;
						height: 208.33upx;
						background-color: #ffffff;
						box-shadow: 0 2.77upx 11.11upx 0 rgba(31, 38, 46, 0.08);
						float: left;
						text-align: center;
                        display: table;
						margin-left: 27.77upx;
						margin-top: 27.77upx;
						.item_content_img {
						  width: 100%;
						  height: 100%;
						  display: table-cell;
						  vertical-align: middle;
						  image {
							display: inline-block;
							max-height: 44.44upx;
							max-width: 44.44upx;
						  }
						  view {
							font-family: SourceHanSansCN-Regular;
							font-size: 29.16upx;
							font-weight: normal;
							font-stretch: normal;
							line-height: 10.41upx;
							letter-spacing: -0.69upx;
							color: #1f262e;
							margin-top: 29.16upx;
						  }
						}
					}
				}
			}
			&__single:first-child {
				margin-top: 0;
			}
			&__single:nth-child(1) {
				height: 611.11upx;
			}
			&__single:nth-child(2) {
				height: 364.58upx;
			}
			&__single:nth-child(3) {
				height: 838.88upx;
			}
		}
	}
</style>
