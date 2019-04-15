<template>
	<sub-page :title="title">
		<view slot="content" style="width:100%;height:100%;background-color:#fff;">
			<view class="inner-wrap">
				<view class="inner-wrap-nav">
					<view class="inner-wrap-nav-innerbox">
						<view class="inner-wrap-nav-innerbox-li">
							<view class="inner-wrap-nav-innerbox-li-item item1" @click="navTo('/addmaintenanceRegistration')">维修登记</view>
							<view class="inner-wrap-nav-innerbox-li-item item2" @click="navTo('/addsparePartsManagement')">备件领用</view>
						</view>
						<view class="inner-wrap-nav-innerbox-li">
							<view class="inner-wrap-nav-innerbox-li-item item3" @click="navTo('/addwasteRecover')">废件入库申请</view>
							<view class="inner-wrap-nav-innerbox-li-item item4" @click="navTo('/addmaintenanceCosts')">维修费用结算</view>
						</view>
						<view class="inner-wrap-nav-innerbox-li">
							<view class="inner-wrap-nav-innerbox-li-item item4" @click="navTo('/addmaintenanceAcceptance')">维修验收</view>
						</view>
					</view>
				</view>
				<view class="inner-wrap-blank"></view>
				<view class="inner-wrap-list">
					<view class="inner-wrap-list-inner">
						<view class="inner-wrap-list-inner-li" v-for="(task,value) in wxTaskList" :key="value">
							<view class="inner-wrap-list-inner-li-first">
								<view>
									<text>单据编号：</text>
									<text>{{task.djbh}}</text>
								</view>
								<view class="radio" :class="{'checked':choseIdList.includes(task.djbh)}" @click="radioChange(task.djbh)"></view>
							</view>
							<view>
								<text>故障类型：</text>
								<text>{{task.gzlx}}</text>
							</view>
							<view>
								<text>设备名称：</text>
								<text>{{task.sbmc}}</text>
							</view>
							<view>
								<text>保障日期：</text>
								<text>{{task.bzrq}}</text>
							</view>
							<view>
								<text>报告人：</text>
								<text>{{task.bgr}}</text>
							</view>
							<view>
								<text>维修人编号：</text>
								<text>{{task.wxrid}}</text>
							</view>
							<view>
								<text>要求修复日期：</text>
								<text>{{task.yqxfrq}}</text>
							</view>
							<view>
								<text>设备负责人：</text>
								<text>{{task.sbfzr}}</text>
							</view>
							<view>
								<text>故障描述：</text>
								<text>{{task.gzms}}</text>
							</view>
							<view>
								<text>填报部门：</text>
								<text>{{task.tbbm}}</text>
							</view>
							<view>
								<text>填报单位代码：</text>
								<text>{{task.tbdwdm}}</text>
							</view>
							<view>
								<text>分配状态：</text>
								<text style="color:red">{{task.fpzt}}</text>
							</view>
						</view>
					</view>
					<!-- <uni-icon class="inner-wrap-list-right" type="arrowright" size="20"></uni-icon> -->
				</view>
				<view class="blank"></view>
				<uni-pagination class="page" show-icon="true" :total="total" :current="currentPage" @change="getPerpage">
				</uni-pagination>
			</view>
		</view>
	</sub-page>
</template>

<script>
	import {
		uniIcon,
		uniPagination
	} from '@dcloudio/uni-ui';
	export default {
		data() {
			return {
				checked: '',
				choseIdList: [],
				total: 100,
				currentPage: 1,
				title: '维修任务单',
				wxTaskList: [],
				arr: [],
				form: {
					pageNum: 1,
					pageSize: 10,
					djbh: '',
					ssdwdm: '',
					gzlx: '',
					ggxh: '',
					ksrq: '',
					jsrq: ''
				}
			}
		},
		mounted() {
			this.getWxTaskList()
		},
		components: {
			uniIcon,
			uniPagination
		},
		methods: {
			//勾选是否添加维修单到别的模块的方法(根据djbh)，此页的djbh就是要跳转的页面上的bxdh															
			radioChange(djbh) {
				if (this.choseIdList.includes(djbh)) {
					let index = this.indexOf(djbh)
					this.choseIdList.splice(index, 1);
				} 
				else {
					this.choseIdList.push(djbh) // 存入之后查找
				}							
				//勾选的时候存值bxdh
				this.$store.commit('wxdjBxdh',{
					djbh:djbh
				})
				console.log(djbh)
			},
			indexOf(val) {
				for (let i = 0; i < this.choseIdList.length; i++) {
					if (this.choseIdList[i] === val) {
						return i;
					}
				}
				return -1;
			},
			navTo(item) {
				
				if ( this.choseIdList.length === 1) {
					uni.navigateTo({
						url: './addModule' + item
					})
				} else if(this.choseIdList.length === 0){
					uni.showToast({
						title: '请先选择维修任务单'
					})
				}else {
					uni.showToast({
						title: '维修单最多只能选择一项'
					})
				}
			},
			// 获取分页数据
			getPerpage(val) {
				this.current = val.current
				this.form.pageNum = val.current
				this.getWxTaskList()
				//console.log(this.current)										
			},
			getWxTaskList() {
				this.$api.getWxrwdList(this.form).then(res => {
					if (res.data.code === 1) {
						console.log(res)
						this.wxTaskList = res.data.data.list
						this.total = res.data.data.total
					} else {
						uni.showToast({
							title: '查询失败'
						})
					}
				}).catch(e => {
					uni.showToast({
						title: '查询失败'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.inner-wrap {
		width: 100%;
		height: 100%;
		font-size: 32upx;

		&-nav {
			width: 100%;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			overflow: hidden;

			&-innerbox {
				width: 70%;

				&-li {
					width: 100%;
					height: 100upx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					&-item {
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 20upx;
						width: 40%;
						height: 60upx;
						font-size: 29upx;
					}

					.item1 {
						border: 0.8upx solid #3288f3;
					}

					.item2 {
						border: 0.8upx solid orange;
					}

					.item3 {
						border: 0.8upx solid pink;
					}

					.item4 {
						border: 0.8upx solid aqua;
					}
				}

			}
		}

		&-blank {
			width: 100%;
			height: 300upx;
		}

		&-list {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			&-inner {
				width: 90%;

				&-li {
					background-color: #eee;
					margin-top: 30upx;
					dispaly: flex;
					font-size: 32upx;
					line-height: 66upx;

					&-first {
						display: flex;
						justify-content: space-between;
						align-items: center;

						.radio {
							width: 35upx;
							height: 35upx;
							border: 1upx solid #2d76fb;
							border-radius: 50%;
						}

						.checked {
							background-color: #2d76fb;
						}
					}
				}
			}

		}
	}

	.blank {
		width: 100%;
		height: 60upx;
	}

	.page {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		overflow: hidden;
		background-color: #fff;
		height: 60upx;

	}
</style>
