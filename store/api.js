import uniRequest from 'uni-request';

const baseUrl1= 'http://192.168.10.234:8001/'; 
//const baseUrl2 = 'http://192.168.10.234:8003/';
const baseUrl2 = 'http://192.168.1.228:8003/';
//const baseUrl3 = 'http://192.168.10.234:8006/';
const baseUrl3 = 'http://192.168.1.228:8006/';   //暂用ip,后台服务发布后再还原回去
const easyMock = 'https://www.easy-mock.com/mock/5c8083a3ad2a407e46909733/yygl-app/'
uniRequest.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
uniRequest.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';
/* const defaults = {
	baseURL: baseUrl,	
	headers: {
		post: {
			'Content-Type':'application/json' //'application/json'
		}
	}
}
Object.assign(uniRequest.defaults, defaults) */

//登录请求
export const login = (params) =>{
	return uniRequest.get('/loginUserInfo',{
		params: params,
		baseURL: easyMock
		
	})
}
/* 
   日常养护-查询施工单位履约检查列表
 */
export const queryBuilderUnitList = (params) => {
	return uniRequest.get(`lyjc/getLyjcAll`, {
		params: params,
		baseURL: baseUrl2
	})
}
/* 
   日常养护-查询进场准备履约检查列表
 */
export const queryReadyAreaList = (params) => {
	return uniRequest.get(`lyjc/getJczbAll`, {
		params: params,
		baseURL: baseUrl2
	})
}
/* 
    日常养护-根据ids删除履约检查施工单位
 */
export const deleteLyjcByIds = (id) =>{
	return uniRequest.delete(`lyjc/deleteLyjc`, {
		params: {
          ids: id
       },
		baseURL: baseUrl2
	})
}
/* 
 日常养护-根据id获取履约检查施工单位详情
 */
export const getLyjcSgdwDetailByid = (id) =>{
	return uniRequest.get(`lyjc/getLyjcbByid`, {
		params: {
          id: id
       },
		baseURL: baseUrl2
	})
}
/* 
 日常养护-根据id获取履约检查进场准备详情
 */
export const getJczbById = (id) =>{
	return uniRequest.get(`lyjc/getJczbById`, {
		params: {
          id: id
       },
		baseURL: baseUrl2
	})
}
/* 
    日常养护-根据ids删除进场准备
 */
export const deleteJczbByIds = (id) =>{
	return uniRequest.delete(`lyjc/deleteJczb`, {
		params: {
          ids: id
       },
		baseURL: baseUrl2
	})
}
/* 
 日常养护-施工单位（编辑保存）
 */
export const editSgdw = (params) =>{
	return uniRequest.put(`lyjc/updateLyjc`, params,{		
		baseURL: baseUrl2
	})
}
/* 
 日常养护-施工单位（添加保存）
 */
export const addSgdw = (params) =>{
	return uniRequest.post(`lyjc/addLyjc`, params,{		
		baseURL: baseUrl2
	})
}
/* 
 日常养护-进场准备（编辑保存）
 */
export const editJczb = (params) =>{
	return uniRequest.put(`lyjc/updateJczb`, params,{		
		baseURL: baseUrl2
	})
}
/* 
 日常养护-进场准备（添加保存）
 */
export const addJczb = (params) =>{
	return uniRequest.post(`lyjc/addJczb`, params,{		
		baseURL: baseUrl2
	})
}

// 日常养护-施工单位履约检查表添加信息保存
export const saveBuilderUnitForm = (params) =>{
	return uniRequest.post(`lyjc/addLyjc`,params,{		
		baseURL: baseUrl2		
	})
}

// 日常养护-进场准备检查表添加信息保存
export const saveReadyEnterAreaForm = (params) =>{
	return uniRequest.post(`lyjc/addJczb`,params,{		 
		baseURL: baseUrl2
	})
}
/*
	日常养护--履约检查
	施工单位表单和进场准备表单所有信息  两个表单同一个接口  
*/
export const queryForm = (params) => {
	return uniRequest.get(`common/getHtxxRelatedAll`, {
		params: params,
		baseURL: baseUrl1
	})
}

/* 
 日常养护-养护巡查-线路配置(巡查路线)
 */
export const queryYhXcRoadSet = (params) => {
	return uniRequest.get(`common/getLd`, {
		params: params,
		baseURL: baseUrl1
	})
}
/* 
 日常养护-养护巡查-线路配置(巡查方向和类型)
 */
export const queryYhXcfxLx = (params) => {
	return uniRequest.get(`common/getMjxx`, {
		params: params,
		baseURL: baseUrl1
	})
}
/* 
 日常养护-养护巡查-保存线路配置
 */
export const saveRoadSetting = (params) => {
	return uniRequest.post(`appRcyh/insertPZ`,params,{		 
		baseURL: baseUrl2
	})
}

/**
 * 日常养护-养护巡查-根据登录用户id获取月度计划列表
 */
export const getYhjhByRyid = (params) => {
	return uniRequest.get('appRcyh/getYhjhByRyid',{
		params: params,
		baseURL: baseUrl2
	})
}

/**
 * 日常养护-养护巡查-根据月度计划id查询其所属合同的子目列表
 */
export const getZmxxByYdjhID = (params) => {
	return uniRequest.get('rcyhXxrw/getZmxxByYdjhID',{
		params: params,
		baseURL: baseUrl2
	})
}

/**
 * 日常养护-养护巡查-上报事件保存的接口（单条病害登记）
 */
export const saveReportEvent = (params) => {
	return uniRequest.post('appRcyh/insertSj',params,{		
		baseURL: baseUrl2
	})
}

/**
 * 日常养护-小修任务-查询养护任务单已处理列表数据
 */
export const getYICHULIyhList = (params) => {
	return uniRequest.get('rcyhXxrw/getYICHULIyhList',{
		params: params,
		baseURL: baseUrl2
	})
}
/**
 * 日常养护-小修任务-查询养护任务单未处理列表数据
 */
export const getWEICHULIyhList = (params) => {
	return uniRequest.get('rcyhXxrw/getWEICHULIyhList',{
		params: params,
		baseURL: baseUrl2
	})
}
/**
 * 日常养护-小修任务-查询清扫任务单 已处理 列表数据
 */
export const getYICHULIqsList = (params) => {
	return uniRequest.get(`rcyhXxrw/getYICHULIqsList`,{
		params: params,
		baseURL: baseUrl2
	})
}
/**
 * 日常养护-小修任务-查询清扫任务单 未处理 列表数据
 */
export const getWEICHULIqsList = (params) => {
	return uniRequest.get(`rcyhXxrw/getWEICHULIqsList`,{
		params: params,
		baseURL: baseUrl2
	})
}
/**
 * 日常养护-小修任务-查询维修施工照片记录列表数据
 */
export const getWxsgzpjl = (params) => {
	return uniRequest.get(`rcyhXxrw/getWxsgzpjl`,{
		params: params,
		baseURL: baseUrl2
	})
}
/* 
 日常养护-日常清扫-(配置页面)
 */
export const dailyCleanSet = (params) => {
	return uniRequest.get(`common/getMjxx`, {
		params: params,
		baseURL: baseUrl1
	})
}
/* 
 日常养护-日常清扫-(判断是否配置成功)
 */
export const isConfig = (params) => {
// 	return uniRequest.get(``, {
// 		params: params,
// 		baseURL: baseUrl1
// 	})
     return new Promise().resolve()
}
/* 
 日常养护-日常清扫-(点击配置后先根据人员id查询，查询后再选择配置项保存)
 */
export const queryRcqsPz = (params) => {
   return uniRequest.get(`rcyh/rcqs/getRcqsPz`, {
		params: params,
		baseURL: baseUrl2
	})
     
}
/* 
 日常养护-日常清扫-(配置保存接口)
 */
export const saveRcqsPZ = (params) => {
    return uniRequest.post(`rcyh/rcqs/insertRcqsPZ`, params,{		
		baseURL: baseUrl2
	})
   
}

/* 
 日常养护-日常清扫-(结束清扫)
 */
export const insertRcqs = (params) => {
	return uniRequest.post(`rcyh/rcqs/insertRcqs`, params,{		
		baseURL: baseUrl2
	})
}
/* 
 日常养护-绿化养护-(结束养护)
 */
export const insertLhyh = (params) => {
	return uniRequest.post(`rcyh/lhyh/insertLhyh`, params,{		
		baseURL: baseUrl2
	})
}
/* 
 机电维修-设备巡检（查询全部列表）
 */
export const getSbxjAllList = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getRcxjList`, {
		params: params,
		baseURL: baseUrl3
	})
}
/* 
 机电维修-设备巡检（根据单据编号id获取日常巡检）
 */
export const getSbxjInfoById = (id) =>{
	return uniRequest.get(`jdwh/xjwx/getRcxjInfoById`, {
		params: {
          id: id
       },
		baseURL: baseUrl3
	})
}
/* 
 机电维修-设备巡检（根据单据编号id删除日常巡检列表项）
 */
export const deleteSbxjInfoByIds = (id) =>{
	return uniRequest.delete(`jdwh/xjwx/delRcxjByIds`, {
		params: {
          ids: id
       },
		baseURL: baseUrl3
	})
}
/* 
 机电维修-设备巡检（编辑日常巡检列表项）
 */
export const editSbxj = (params) =>{

	return uniRequest.put(`jdwh/xjwx/editRcxj`, params,{		
		baseURL: baseUrl3
	})
}
/* 
 机电维修-设备巡检（添加日常巡检列表项）
 */
export const addSbxjInfo = (params) =>{
	return uniRequest.post(`jdwh/xjwx/addRcxj`, params,{		
		baseURL: baseUrl3
	})
}
// /* 
//  机电维修-设备巡检（获取巡检类型）
//  */
// export const getJdwxXjlx = (params) =>{
// 	return uniRequest.get(`jdwh/xjwx/getXjType`, {
// 		params: params,
// 		baseURL: baseUrl3
// 	})
// }
/* 
 机电维修-故障报修（查询全部列表）
 */
export const getGzbxAllList = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getGzbxList`, {
		params: params,
		baseURL: baseUrl3
	})
}
/* 
 机电维修-故障报修（删除）
 */
export const delGzbxByDjbhs = (id) =>{
	return uniRequest.delete(`jdwh/xjwx/delGzbxByDjbhs`, {
		params: {
			djbhs:id
		},
		baseURL: baseUrl3
	})
}
 // 机电维修-故障报修（通过单据编号获取信息）
 
export const getGzbxInfoByIDjbh = (id) =>{
	return uniRequest.get(`jdwh/xjwx/getGzbxInfoByIDjbh`, {
		params: {
			djbh:id
		},
		baseURL: baseUrl3
	})
}
 // 机电维修-故障报修（编辑保存）
export const editGzbx = (params) =>{
	return uniRequest.put(`jdwh/xjwx/editGzbx`,params, {		 
		baseURL: baseUrl3
	})
}
 // 机电维修-故障报修（获取设备名称）
export const getSbmc = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getSbInfo`, {
		params: params,
		baseURL: baseUrl3
	})
}
// 机电维修-故障报修（添加保存）
export const addGzbx = (params) =>{
	return uniRequest.post(`jdwh/xjwx/addGzbx`, params,{		
		baseURL: baseUrl3
	})
}
 // 机电维修-维修任务单（获取维修任务单列表）
export const getWxrwdList = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getWxrwdList`, {
		params: params,
		baseURL: baseUrl3
	})
}
// 维修任务单勾选后点击维修登记进去根据报修单号获取保修单信息
export const getBxdInfo = (djbh) =>{
	return uniRequest.get(`jdwh/xjwx/getBxdInfo`, {
		params: {
			bxdh:djbh
		},
		baseURL: baseUrl3
	})
}
 // 机电维修-任务派发（获取未分配任务单列表）
export const getWFPrw = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getWFPrw`, {
		params: params,
		baseURL: baseUrl3
	})
}
// 机电维修-任务派发（获取已分配任务单列表）
export const getYFPrw = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getYFPrw`, {
		params: params,
		baseURL: baseUrl3
	})
}
 // 机电维修-任务派发（获取维修人员信息）
export const getfpWxrwd = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getWxzrrInfo`, {
		params: params,
		baseURL: baseUrl3
	})
}
 // 机电维修-任务派发（保存分配后的维修人员）
export const savefpWxrwd = (params) =>{
	return uniRequest.put(`jdwh/xjwx/fpWxrwd?wxrid=`+params.wxrid+'&fpry='+params.fpry+'&djbh='+params.djbh, {	
		//params:params,
		baseURL: baseUrl3
	})
}
 // 机电维修-维修登记（查询列表）
export const getWxdjList = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getWxdjList`, {
		params:params,
		baseURL: baseUrl3
	})
}
/* 
 机电维修-维修登记（删除）
 */
export const delWxdjByDjbhs = (id) =>{
	return uniRequest.delete(`jdwh/xjwx/delWxdjByDjbhs`, {
		params: {
			djbhs:id
		},
		baseURL: baseUrl3
	})
}
 // 机电维修-维修登记（通过单据编号获取信息）
 
export const getWxdjInfoByID = (id) =>{
	return uniRequest.get(`jdwh/xjwx/getWxdjInfoByIDjbh`, {
		params: {
			djbh:id
		},
		baseURL: baseUrl3
	})
}
 // 机电维修-维修登记（编辑保存）
export const editWxdj = (params) =>{
	return uniRequest.put(`jdwh/xjwx/editWxdj`,params, {		 
		baseURL: baseUrl3
	})
}
// 机电维修-维修登记（添加保存）
export const addWxdj = (params) =>{
	return uniRequest.post(`jdwh/xjwx/addWxdj`, params,{		
		baseURL: baseUrl3
	})
}
 // 机电维修-维修验收（查询列表）
export const getWxysList = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getWxysList`, {
		params:params,
		baseURL: baseUrl3
	})
}
// 机电维修-维修验收（获取报修单）
export const getwxysDjBxdInfo = (bxdh) =>{
	return uniRequest.get(`jdwh/xjwx/getDjBxdInfo`, {
		params: {
			bxdh:bxdh
		},
		baseURL: baseUrl3
	})
}
 // 机电维修-维修验收（通过单据编号获取信息）
 
export const getWxysInfoByID = (id) =>{
	return uniRequest.get(`jdwh/xjwx/getWxysInfoByIDjbh`, {
		params: {
			djbh:id
		},
		baseURL: baseUrl3
	})
}
 // 机电维修-维修验收（编辑保存）
export const editWxys = (params) =>{
	return uniRequest.put(`jdwh/xjwx/editWxys`,params, {		
		baseURL: baseUrl3
	})
}
/* 
 机电维修-维修验收（删除）
 */
export const delWxysByDjbhs = (id) =>{
	return uniRequest.delete(`jdwh/xjwx/delWxysByDjbhs`, {
		params: {
			djbhs:id
		},
		baseURL: baseUrl3
	})
}
// 机电维修-维修验收（添加保存）
export const addWxys = (params) =>{
	return uniRequest.post(`jdwh/xjwx/addWxys`, params,{		
		baseURL: baseUrl3
	})
}
 // 机电维修-维修验收（获取报修单信息）
 
export const getDjBxdInfo = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getDjBxdInfo`, params,{		
		baseURL: baseUrl3
	})
}
// 机电维修-维修费用（查询列表）
export const getWxfyList = (params) =>{
	return uniRequest.get(`jdwh/xjwx/getWxfyList`, {
		params:params,
		baseURL: baseUrl3
	})
}
// 机电维修-获取对方单位
export const getDfdwInfo = (dfdwid) =>{
	return uniRequest.get(`jdwh/xjwx/getDfdwInfo`, {
		dfdwid:dfdwid,
		baseURL: baseUrl3
	})
}
// 机电维修-维修费用（通过单据编号获取信息）
 
export const getWxfyInfoByIDjbh = (id) =>{
	return uniRequest.get(`jdwh/xjwx/getWxfyInfoByIDjbh`, {
		params: {
			djbh:id
		},
		baseURL: baseUrl3
	})
}
// 机电维修-维修费用（编辑保存）
export const editWxfy = (params) =>{
	return uniRequest.put(`jdwh/xjwx/editWxfy`,params, {		
		baseURL: baseUrl3
	})
}
/* 
 机电维修-维修费用（删除）
 */
export const delWxfyByDjbhs = (id) =>{
	return uniRequest.delete(`jdwh/xjwx/delWxfyByDjbhs`, {
		params: {
			djbhs:id
		},
		baseURL: baseUrl3
	})
}
// 机电维修-维修费用（添加保存）
export const addWxfy = (params) =>{
	return uniRequest.post(`jdwh/xjwx/addWxfy`, params,{		
		baseURL: baseUrl3
	})
}

// 机电维修-备件管理（查询列表）
export const getLysqList = (params) =>{
	return uniRequest.get(`jdwh/bjgl/getLysqList`, {
		params:params,
		baseURL: baseUrl3
	})
}
// 机电维修-备件管理（通过单据编号获取信息）
 
export const getLysqInfoByDjbh = (id) =>{
	return uniRequest.get(`jdwh/bjgl/getLysqInfoByDjbh`, {
		params: {
			djbh:id
		},
		baseURL: baseUrl3
	})
}
/* 
 机电维修-备件管理（删除）
 */
export const delLysqBydjbhs = (id) =>{
	return uniRequest.delete(`jdwh/bjgl/delLysqBydjbhs`, {
		params: {
			djbhs:id
		},
		baseURL: baseUrl3
	})
}
// 机电维修-备件管理（编辑保存）
export const editLysq = (params) =>{
	return uniRequest.put(`jdwh/bjgl/editLysq`,params, {		
		baseURL: baseUrl3
	})
}
// 机电维修-备件管理（添加保存）
export const addLysq = (params) =>{
	return uniRequest.post(`jdwh/bjgl/addLysq`, params,{		
		baseURL: baseUrl3
	})
}
// 机电维修-备件管理（获取备件信息）
export const getBjLyInfo = (params) =>{
	return uniRequest.get(`jdwh/bjgl/getBjLyInfo`, {
		params:params,
		baseURL: baseUrl3
	})
}
// 机电维修-废件入库（查询列表）
export const getFjrkList = (params) =>{
	return uniRequest.get(`jdwh/bjgl/getFjrkList`, {
		params:params,
		baseURL: baseUrl3
	})
}
// 机电维修-废件入库（通过单据编号获取信息）
 
export const getFjrkInfoByDjbh = (id) =>{
	return uniRequest.get(`jdwh/bjgl/getFjrkInfoByDjbh`, {
		params: {
			djbh:id
		},
		baseURL: baseUrl3
	})
}
/* 
 机电维修-废件入库（删除）
 */
export const delFjrkBydjbhs = (id) =>{
	return uniRequest.delete(`jdwh/bjgl/delFjrkBydjbhs`, {
		params: {
			djbhs:id
		},
		baseURL: baseUrl3
	})
}
// 机电维修-废件入库（编辑保存）
export const editFjrk = (params) =>{
	return uniRequest.put(`jdwh/bjgl/editFjrk`, params, {		
		baseURL: baseUrl3
	})
}
// 机电维修-废件入库（添加保存）
export const addFjrk = (params) =>{
	return uniRequest.post(`jdwh/bjgl/addFjrk`, params,{		
		baseURL: baseUrl3
	})
}
// 机电维修-废件入库（获取维修单信息） 
export const getWxdhInfByDw = (wxdjbh) =>{
	return uniRequest.get(`jdwh/bjgl/getWxdhInfByDw`, {
		params: {
			wxdjbh:wxdjbh
		},
		baseURL: baseUrl3
	})
}