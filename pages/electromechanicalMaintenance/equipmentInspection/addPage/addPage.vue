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
								<input class="text2 input"  type="text" placeholder="请填写" v-model="rcxj.id"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检类型</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2"  :value="xjlxIndex" @change="bindXjlxChange" :range="xjlxList">
									<view class="uni-input" v-if="this.xjlxCount === 0 && this.xjlxIndex === 0">请选择</view>
									<view class="uni-input" v-else>{{xjlxList[xjlxIndex]}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检周期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" placeholder="请填写" v-model="rcxj.xjzq"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">检查时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="jcsjIndex" :start="startDate" :end="endDate" @change="bindjcsjChange">
									<view class="uni-input">{{jcsjIndex}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input  class="text2 input" type="text" placeholder="请填写" v-model="rcxj.xjr"/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">巡检描述</text>
							</view>
							<view class="content--wrap_form_li_right">								
								<input class="text2 input" type="text" placeholder="请填写" v-model="rcxj.xjms"/>
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<!-- <text>{{detailObj.tbr}}</text> -->
								<input class="text2 input"  type="text" placeholder="请填写" v-model="rcxj.tbr"/>
							</view>
						</view>
							<view class="content--wrap_form_li">
								<view class="content--wrap_form_li_left">
									<text class="text1">填报时间</text>
								</view>
								<view class="content--wrap_form_li_right">
									<picker class="text2" mode="date" :value="tbsjIndex" :start="startDate" :end="endDate" @change="bindtbsjChange">
										<view class="uni-input">{{tbsjIndex}}</view>
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
								<input class="text2 input"  type="text" placeholder="请填写" v-model="rcxj.tbdw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input"  type="text" placeholder="请填写" v-model="rcxj.tbbm"/>
							</view>
						</view>							
										
					</view>
					<!-- 检查项 -->
	 				<view class="content-wrap">
					   <view class="content-wrap-li" v-for="(perMx,index) in rcxj.mx" :key="index">
						   <view class="content-wrap-li-inner">							  
							   <view class="content-wrap-li-inner-body">
								    <view><input type="text" placeholder="序号" v-model="perMx.mx_xh"></view>	
								    <view><input type="text" placeholder="检查项" v-model="perMx.mx_jcx"></view>
								   <view><input type="text" placeholder="检查结果" v-model="perMx.mx_jcjg"></view>
								   <view><input type="text" placeholder="备注" v-model="perMx.mx_bz"></view>
							   </view>
						   </view>
					   </view>					   
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
			   title:'添加检查项',
			   btnName:'保存',			   			   
               xjlxList:['收费机电','隧道机电'],			   			   
			   date: currentDate,
			   xjlxIndex:0,
			   xjlxCount:0,
			   jcsjIndex:currentDate,
			   tbsjIndex:currentDate,
			   rcxj:{
				   id:'sbxj'+new Date().getTime(),
				   xjlx:'',
				   xjzq:'',
				   jcsj:currentDate,
				   xjr:'',
				   xjms:'',
				   tbr:'',
				   tbsj:currentDate,
				   tbdw:'',
				   tbbm:'',
				   bz:'',
				   tbdwdm:'',			 
				   mx: [
						{
						  mx_bz:'' ,
						  //mx_id: '',
						  mx_jcjg: '',
						  mx_jcx: '',
						  //mx_pid: '',
						  mx_xh: ''
						}
				   ]
			   }
			   
            }
		},	
		components: {
			uniIcon,			
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
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
				this.xjlxCount +=1
				this.xjlxIndex = e.target.value
				this.rcxj.xjlx = this.xjlxList[e.target.value]
				
			},
			bindjcsjChange:function(e){
				this.jcsjIndex = e.target.value
				this.rcxj.jcsj = e.target.value
			},
			bindtbsjChange:function(e){
				this.tbsjIndex = e.target.value
				this.rcxj.tbsj = e.target.value
			},
												
			// 添加后保存
			onSave(){								
				//this.rcxj.mx=JSON.stringify(this.rcxj.mx);				
				console.log(this.rcxj)
				this.$api.addSbxjInfo(this.rcxj).then(res =>{
					if(res.data.code === 1){
						uni.showToast({
							title:'保存成功！',
							success:function(){
								 setTimeout(function () {									
// 									uni.navigateTo({
// 										url:'../../equipmentInspection/equipmentInspection'
// 									})
								  }, 100) 							
							}
						})	
						console.log(this.rcxj)
					}else{
						uni.showToast({
							title:'保存失败'
						})
					}										
				}).catch(() =>{
					uni.showToast({
						title:'保存失败'
					})
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
	
</style>

