<template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<view  class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">单据编号</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<!-- <text>{{detailObj.id}}</text> -->
								<input class="text2 input"  type="text" v-model="detailObj.id"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检类型</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2"  :value="xjlxIndex" @change="bindXjlxChange" :range="xjlxList">
									<view class="uni-input">{{detailObj.xjlx}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检周期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" v-model="detailObj.xjzq"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">检查时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindjcsjChange">
									<view class="uni-input">{{detailObj.jcsj}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input  class="text2 input" type="text" v-model="detailObj.xjr" disabled/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检描述</text>
							</view>
							<view class="content--wrap_form_li_right">								
								<input class="text2 input" type="text" v-model="detailObj.xjms"/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<!-- <text>{{detailObj.tbr}}</text> -->
								<input class="text2 input"  type="text" v-model="detailObj.tbr" disabled/>
							</view>
						</view>
							<view class="content--wrap_form_li">
								<view class="content--wrap_form_li_left">
									<text class="text1">填报时间</text>
								</view>
								<view class="content--wrap_form_li_right">
									<picker class="text2" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindtbsjChange">
										<view class="uni-input">{{detailObj.tbsj}}</view>
									</picker> 							 
									<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
								</view>
							</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报单位</text>
							</view>
							<view class="content--wrap_form_li_right">
								<!-- <text>{{detailObj.tbdw}}</text> -->
								<input class="text2 input"  type="text" v-model="detailObj.tbdw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" v-model="detailObj.tbbm"/>
							</view>
						</view>							
										
					</view>
					<!-- 检查项 -->
					<view class="content-wrap">
					   <view class="content-wrap-li" v-for="(mx,value) in mxList" :key="value">
						   <view class="content-wrap-li-inner">							  
							   <view class="content-wrap-li-inner-body">
								    <view ><input type="text" placeholder="序号" v-model="mx.mx_xh"></view>	
								    <view><input type="text" placeholder="检查项" v-model="mx.mx_jcx"></view>
								   <view><input type="text" placeholder="检查结果" v-model="mx.mx_jcjg"></view>
								   <view><input type="text" placeholder="备注" v-model="mx.mx_bz"></view>
							   </view>
						   </view>
					   </view>					   
					</view>
					<view class="blank"></view>
					<!-- 增加操作 -->
					<view class="content-wrap-bottom" @click="addCheck">			   
						 <uni-icon type="plus" size="20" color="blue"></uni-icon>
						 <text class="add"></text>
					</view>
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
			   title:'编辑检查项',
			   btnName:'保存',
			   detailObj:{},
			   mxList:[],			   
               xjlxList:['收费机电','隧道机电'],			   
			   xjlxIndex:0,
			   xjlx:'',
			   date: currentDate
			   			  
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
			this.$api.getSbxjInfoById(id).then(res =>{
				if(res.data.code === 1){					
					this.detailObj = res.data.data
					
					console.log(this.detailObj)
// 					this.xjlxIndex = this.xjlxList.indexOf(res.data.data.xjlx)
// 					if(this.xjlxIndex === -1) {
// 						this.xjlxIndex =0
// 					}
					this.mxList = res.data.data.mx
					this.detailObj.mx = this.mxList
					console.log(this.detailObj)
				}												
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
					year = year + 10;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;			
				return `${year}-${month}-${day}`;
				//return year + "-" + month + "-" + date
			},
			bindXjlxChange:function(e){
				//this.xjlxCount +=1
				this.xjlxIndex = e.target.value
				this.detailObj.xjlx = this.xjlxList[e.target.value]
			},
			bindjcsjChange:function(e){
				this.detailObj.jcsj=e.target.value
			},
			bindtbsjChange:function(e){
				this.detailObj.tbsj=e.target.value
			},
			addCheck(){
              // 编辑页面的添加是对子表的添加，每点击一次加号，子表就增加一项
			  this.mxList.push({
				  mx_xh:'',
				  mx_jcx:'',
				  mx_jcjg:'',
				  mx_bz:'',
				  mx_id:'',
				  mx_pid:''
			  })
			},									
			// 编辑后保存
			onSave(){
				this.$api.editSbxj(this.detailObj).then(res =>{
					console.log(this.detailObj)
					
				}).catch(() =>{
					
				})
					
				
			}
			
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

