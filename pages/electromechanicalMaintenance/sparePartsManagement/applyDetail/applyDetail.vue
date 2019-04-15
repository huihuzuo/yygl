
 <template>
 	<sub-page :title="title">
 		<view slot="content" style="width:100%;height:100%;">
 			<view class="subPage--content">
 				<view class="subPage--content--wrap">
 					<view  class="content--wrap_form">
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">单据编号</text>
 							</view>
 							<view class="content--wrap_form_li_right">							
 								<input class="text2 input"  type="text" v-model="detailObj['id']" disabled/>
 							</view>
 						</view>						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修单号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" v-model="detailObj['wxdh']" disabled/>						
							</view>
						</view>
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">需用人</text>
 							</view>
 							<view class="content--wrap_form_li_right">
 								<input class="text2 input"  type="text" v-model="detailObj['xyr']" disabled/>
 							</view>
 						</view>
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">领用说明</text>
 							</view>
 							<view class="content--wrap_form_li_right">
 								<input class="text2 input" type="text" v-model="detailObj['lysm']" disabled/>
 							</view>
 						</view>
 						
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">备注</text>
 							</view>
 							<view class="content--wrap_form_li_right">								
 								<input class="text2 input" type="text" v-model="detailObj['bz']" disabled/>
 							</view>
 						</view>
 						
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">填报人</text>
 							</view>
 							<view class="content--wrap_form_li_right">
 								<input class="text2 input"  type="text" v-model="detailObj['tbr']" disabled/>
 							</view>
 						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="tbsjIndex" :start="startDate" :end="endDate" @change="tbbindDateChange" disabled>
									<view class="uni-input" >{{detailObj.tbsj}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>	
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">填报单位</text>
 							</view>
 							<view class="content--wrap_form_li_right">
 								<input class="text2 input"  type="text" v-model="detailObj['tbdw']" disabled/>
 							</view>
 						</view>
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">填报部门</text>
 							</view>
 							<view class="content--wrap_form_li_right">
 								<input class="text2 input"  type="text" v-model="detailObj['tbbm']" disabled/>
 							</view>
 						</view>	 						 									
 					</view>
 					<!-- 检查项 -->					
					<view class="subPage--content-bottomhalf-innerwrap-li-content-detail">						
						<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content"
						v-for="(mx,index) in detailObj.mx" 
						:key="index">
						   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">序号：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.xh"></view>
						   </view>									
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">备件名称：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.bjmc"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">备件编码：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.bjbm"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">规格型号：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.ggxh"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">计量单位：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.jldw"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">需用数量：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.xysl"></view>
							</view>
							<view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li">
							   <view class="subPage--content-bottomhalf-innerwrap-li-content-detail-content-li-title">备注：</view>
							   <view><input type="text" placeholder="请填写" v-model="mx.bz"></view>
							</view>									
						</view>
					</view>
 					<view class="blank"></view>
 					
 				</view>
 			    
 			</view>
 		</view>
 	</sub-page>	
 </template>
 
 <script>
 	import {uniIcon} from '@dcloudio/uni-ui';
 	
     export default {
 		data() {
 			const currentDate = this.getDate({
 				format: true
 			});
 			return {
 			   title:'备件领用申请明细',			   
 			   detailObj:{},
 			   mxList:[],			  
               xjlxList:['收费机电','隧道机电'],
 			   xjlxCount:0,
 			   xjlxIndex:0,
			   xjsjIndex:0,
			   tbsjIndex:0,
 			   xjlx:'',
 			   date: currentDate,
			  }
 		},
 		
 		// 获取列表页传过来的id值到详情页		
 		onLoad:function(e){			
 		 // 看一下传过来的是什么		 
 		  console.log(e);      //e 打印出是一个包含id的对象
 		  // 获取传过来的id
 		  let id = e.djbh;      
 		  console.log(id)
 		  // 请求详情页
 			uni.showLoading({
 				title:'loading...'
 			})					  
 			this.$api.getLysqInfoByDjbh(id).then(res =>{
 				if(res.data.code === 1){
 					console.log(res)
 					this.detailObj = res.data.data
 					this.mxList = res.data.data.mx
 				}
 				setTimeout(uni.hideLoading(),500)
 								
 			}).catch(e =>{
 				
 			})            
 		},
 		computed: {
 			startDate() {
 				return this.getDate('start');
 			},
 			endDate() {
 				return this.getDate('end');
 			}
 		},
 		components: {
 			uniIcon,			
 		},
 		methods:{			
 			getDate(type) {
 				const date = new Date();			
 				let year = date.getFullYear();
 				let month = date.getMonth() + 1;
 				let day = date.getDate();			
 				if (type === 'start') {
 					year = year - 60;
 				} else if (type === 'end') {
 					year = year + 2;
 				}
 				month = month > 9 ? month : '0' + month;;
 				day = day > 9 ? day : '0' + day;			
 				return `${year}-${month}-${day}`;
 			},
//  			bindXjlxChange:function(e){
//  				//this.xjlxCount +=1
//  				this.xjlxIndex = e.target.value
//  				this.detailObj.xjlx = this.xjlxList[e.target.value]
//  			},
// 			xjsjbindDateChange:function(e){
// 				this.detailObj.jcsj=e.target.value
// 			},
//  			tbbindDateChange:function(e){
//  				this.detailObj.tbsj=e.target.value
//  			},									
 			
 			
 		},		
 	}
 </script>
 
 <style lang="scss">
 	.content-wrap{
 		width:100%;
 		//height:calc(100% - 200upx);
 		//background-color: #fff;
 		border-bottom:1ipx solid #eee;
 		font-size:30upx;
 		color:#4e5258;										
 		&-li {
 			width:100%;			
 			margin-top:20upx;
 			//background-color: #eee;
 			display:flex;
 			justify-content: center;						
 			&-inner {
 				width:92%;				
 				&-title{
 					display:flex;
 					justify-content: space-between;
 					align-items: center;
 					width:100%;
 					height:90upx;	
 					font-size:35upx;				
 					border-bottom:1upx solid #eee;
 					&-left{
 						font-size:27upx;
 					}
 					&-right{
 						color:#3288f3;
 					}					
 				}
 				&-body{
 					display:flex;
 					justify-content: space-around;
 					height:100upx;
 					align-items: center;
 				}
 			}
 		}
 		
 	}
 	.blank{
 		height:90upx;
 	}
	.subPage--content-bottomhalf-innerwrap-li-content-detail{
		width:100%;
		border-top: 1upx solid #fff;
		margin-top:20upx;			
		&-content{
			border-bottom:1upx solid #ccc;
			&-li{
				display: flex;
				font-size:28upx;
				color:#4e5258;
				&-title{
					text-align: center;
					line-height: 52.5upx;
				}
			}							
		}		
	}
 	.content-wrap-bottom{
 		position: fixed;
 		bottom:0;
 		left:0;
 		width:100%;
 		height:90upx;
 		text-align: center;
 		line-height: 90upx;
 		color:#3288f3;
 		background-color: #fff;
 	}
 </style>
 
 