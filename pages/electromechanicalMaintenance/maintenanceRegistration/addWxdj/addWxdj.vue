<!-- <template>
	<sub-page :title="title" :btnName="btnName" @onBtnClick="onSave">
		<view slot="content" style="width:100%;height:100%;">
			<view class="subPage--content">
				<view class="subPage--content--wrap">
					<view class="content--wrap_form">
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">单据编号</text>
							</view>
							<view class="content--wrap_form_li_right">							
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.djbh"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报修单号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.bxdh"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">设备名称</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" :value="sbmcIndex" @change="bindsbmcChange" :range="sbmcList">
									<view class="uni-input">{{sbmcList[sbmcIndex]}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">规格型号</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.ggxh"/>
							</view>
						</view>						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报障日期</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="bzrqIndex" :start="startDate" :end="endDate" @change="bindbzrqChange">
									<view class="uni-input">{{bzrqIndex}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">报告人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.bgr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">现场维修人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.xcwxr"/>						
							</view>
						</view>
						
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">现场情况描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.xcqkms"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修结果描述</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.wxjgms"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">维修结果确认</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.wxjgqr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">确认人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.qrr"/>						
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">确认时间</text>
							</view>
							<view class="content--wrap_form_li_right">
								<picker class="text2" mode="date" :value="qrsjIndex" :start="startDate" :end="endDate" @change="bindqrsjChange">
									<view class="uni-input">{{qrsjIndex}}</view>
								</picker> 							 
								<uni-icon class="icon" type="arrowright" size="20"></uni-icon>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">备注</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.bz"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报人</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.tbr"/>
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
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.tbdw"/>
							</view>
						</view>
						<view class="content--wrap_form_li">
							<view class="content--wrap_form_li_left">
								<text class="text1">填报部门</text>
							</view>
							<view class="content--wrap_form_li_right">
								<input class="text2 input" type="text" placeholder="请填写" v-model="wxdj.tbbm"/>
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
			   title:'添加维修登记单',
			   btnName:'保存',
			   date: currentDate,			  			  
			   sbmcIndex:0,
			   bzrqIndex:currentDate,
			   qrsjIndex:currentDate,
			   tbsjIndex:currentDate,			   
			   sbmcList:[],
			   wxdj:{
				   djbh:'wxdj'+new Date().getTime(),
				   bxdh:'bxdh'+new Date().getTime(),				  
				   sbmc:'',
				   ggxh:'',
				   bzrq:'',
				   bgr:'',
				   xcwxr:'',
				   xcqkms:'',
				   wxjgms:'',
				   wxjgqr:'',
				   qrr:'',
				   qrsj:'',				   				   
				   bz:'',
				   tbr:'',
				   tbsj:'',
				   tbdw:'',
				   tbbm:''				  			   				   
			   }
			  
            }
		},		
		mounted(){
			this.getSbmc()
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
			goBack(){
				uni.navigateBack()	
			},			
			
			bindbzrqChange: function(e) {
				this.bzrqIndex = e.target.value
				this.wxdj.bzrq = e.target.value				
			},
			bindqrsjChange: function(e) {
				this.qrsjIndex = e.target.value
				this.wxdj.qrsj = e.target.value				
			},	
			bindtbsjChange: function(e) {
				this.tbsjIndex = e.target.value
				this.wxdj.tbsj = e.target.value				
			},	
			bindsbmcChange:function(e) {				
				this.sbmcIndex = e.target.value
				this.wxdj.sbmc = this.sbmcList[e.target.value]				
			},
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
			// 获取设备名称
			getSbmc(){				
				this.$api.getSbmc().then(res =>{
					if(res.data.code === 1){
						let ressbinfo = []
						ressbinfo = res.data.data						
						ressbinfo.forEach((mc) =>{
							this.sbmcList.push(mc.sbmc)
						})
						console.log(this.sbmcList)
					}
				}).catch(e =>{
					
				})				
			},											
			// 添加后保存
			onSave(){				
				this.$api.addWxdj(this.wxdj).then(res =>{
					console.log(this.wxdj)
					if(res.data.code === 1){
						uni.showToast({
							title:'保存成功！'
						})
					}else{
						uni.showToast({
							title:'保存失败！'
						})
					}
				}).catch(() =>{
					uni.showToast({
						title:'保存失败！'
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



 -->