
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
 								<text class="text1">巡检类型</text>
 							</view>
 							<view class="content--wrap_form_li_right">
 								<picker class="text2"  :value="xjlxIndex" @change="bindXjlxChange" :range="xjlxList" disabled>
 									<view class="uni-input" disabled>{{detailObj.xjlx}}</view>
 								</picker> 							 
 								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
 							</view>
 						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检周期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" v-model="detailObj['xjzq']" disabled/>						
							</view>
						</view>
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">检查时间</text>
 							</view>
 							<view class="content--wrap_form_li_right">
 								<picker class="text2" mode="date" :value="xjsjIndex" :start="startDate" :end="endDate" @change="xjsjbindDateChange" disabled>
 									<view class="uni-input" disabled>{{detailObj.jcsj}}</view>
 								</picker> 							 
 								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
 							</view>
 						</view>
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">巡检人</text>
 							</view>
 							<view class="content--wrap_form_li_right">
 								<input class="text2 input" type="text" v-model="detailObj['xjr']" disabled/>
 							</view>
 						</view>
 						
 						<view class="content--wrap_form_li">
 							<view class="content--wrap_form_li_left">
 								<text class="text1">巡检描述</text>
 							</view>
 							<view class="content--wrap_form_li_right">								
 								<input class="text2 input" type="text" v-model="detailObj['xjms']" disabled/>
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
 					<view class="content-wrap">
 					   <view class="content-wrap-li" v-for="(mx,value) in mxList" :key="value">
 						   <view class="content-wrap-li-inner">
 							  <!-- <view class="content-wrap-li-inner-title">
 								 							  
 							   </view> -->
 							   <view class="content-wrap-li-inner-body">
								    <view><input placeholder="序号" v-model="mx.mx_xh" disabled></view> 
 								    <view><input type="text" placeholder="检查项" v-model="mx.mx_jcx" disabled></view>
 								    <view><input type="text" placeholder="检查结果" v-model="mx.mx_jcjg" disabled></view>
 								    <view><input type="text" placeholder="备注" v-model="mx.mx_bz" disabled></view>
 							   </view>
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
 			   title:'明细',			   
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
 		  let id = e.id;      
 		  console.log(id)
 		  // 请求详情页
 			uni.showLoading({
 				title:'loading...'
 			})					  
 			this.$api.getSbxjInfoById(id).then(res =>{
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
 
 