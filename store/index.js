import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
 
 state : {
  yhcx_xlpz : {},
  addGzlxDjbh:{},
  addWxdjDjbh:{},
  addWxysDjbh:{},
  addWxfyDjbh:{},
  assignTask:{},
  wxdjBxdh:{}
 },
 
 mutations : {
  saveYhXCXLPZ : function(state, yhcx_xlpz){
   state.yhcx_xlpz = yhcx_xlpz;
  },
  addGzlx:function(state,addGzlxDjbh){
	  state.addGzlxDjbh = addGzlxDjbh;
  },
  addWxdj:function(state,addWxdjDjbh){
	  state.addWxdjDjbh = addWxdjDjbh
  },
  addWxys:function(state,addWxysDjbh){
	  state.addWxysDjbh = addWxysDjbh
  },
  addWxfy:function(state,addWxfyDjbh){
	  state.addWxfyDjbh = addWxfyDjbh
  },
  assignTask:function(state,assignTask){
  	  state.assignTask = assignTask
  },
  wxdjBxdh:function(state,wxdjBxdh){	
	  state.wxdjBxdh = wxdjBxdh
  }
 }
});
