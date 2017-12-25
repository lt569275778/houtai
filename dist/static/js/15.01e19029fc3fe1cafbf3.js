webpackJsonp([15],{533:function(t,a,d){d(728);var s=d(198)(d(589),d(694),"data-v-c587fbd8",null);t.exports=s.exports},589:function(t,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{person:{},tableData:[],id:"",headImg:"",headHidden:!1}},props:[],mounted:function(){this.id=sessionStorage.getItem("chisId"),this.loadData()},methods:{loadData:function(){var t=this;this.$axios({method:"post",url:this.$api.chisEducationList,data:{id:this.id}}).then(function(a){(a.data.returnCode="200")?(t.tableData=a.data.tableList,t.person=a.data.tableList[0],"男"==a.data.tableList[0].sex?(t.headImg="../../../../../static/img/men.png",t.headHidden=!0):"女"==a.data.tableList[0].sex&&(t.headImg="../../../../../static/img/women.png",t.headHidden=!0)):t.$message.error(a.data.returnMsg)}).catch(function(t){console.log(t)})}}}},633:function(t,a,d){a=t.exports=d(88)(void 0),a.push([t.i,".cons_p_span[data-v-c587fbd8]{font-size:13px;color:#ff5722}.autab[data-v-c587fbd8]{width:94%;margin:0 auto;background:#f3f4f8;margin:15px auto;border-radius:5px;padding:10px 0}.autab_td1[data-v-c587fbd8]{color:#a0a0a0;text-align:right;height:40px;line-height:40px;width:9%;padding-right:1%}.cons[data-v-c587fbd8]{width:100%;border-radius:3px;background:#fff;overflow:hidden}.cons_p2[data-v-c587fbd8]{height:40px;line-height:40px;border-bottom:2px solid #5cacee;padding:0 20px;font-size:13px;margin-bottom:15px}.edtab[data-v-c587fbd8]{width:94%;margin:15px auto;border-radius:5px;padding:10px 0;border-collapse:collapse}.edtab_td1[data-v-c587fbd8]{background:#fafafa;height:40px;line-height:40px}.edtab_td1[data-v-c587fbd8],.edtab_td2[data-v-c587fbd8]{width:16%;padding:0 2%;text-align:left;border:1px solid #dcdcdc}.edtab_td3[data-v-c587fbd8]{width:20%;text-align:center;border:1px solid #dcdcdc}.edtab_td3_con[data-v-c587fbd8]{width:130px;height:150px;background:#fafafa;margin:0 auto;border:1px dashed #dbdbdb;line-height:150px;color:#999;font-size:14px}",""])},694:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,d=t._self._c||a;return d("div",[d("div",{staticClass:"crumbs"},[d("el-breadcrumb",{attrs:{separator:"/"}},[t._v("\n            当前位置：学信数据查询/详情\n        ")])],1),t._v(" "),d("div",{staticClass:"cons"},[d("p",{staticStyle:{"margin-left":"33px"}},[t.headHidden?d("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:t.headImg}}):t._e(),t._v("\n            [ "+t._s(t.person.realName)+" ]- "),d("span",{staticClass:"cons_p_span"},[t._v("实名制")])]),t._v(" "),d("table",{staticClass:"autab"},[d("tr",[d("td",{staticClass:"autab_td1"},[t._v("性别")]),t._v(" "),d("td",{staticClass:"autab_td2"},[t._v(t._s(t.person.sex))]),t._v(" "),d("td",{staticClass:"autab_td1"},[t._v("出生日期")]),t._v(" "),d("td",{staticClass:"autab_td2"},[t._v(t._s(t.person.birthday))]),t._v(" "),d("td",{staticClass:"autab_td1"},[t._v("民族")]),t._v(" "),d("td",{staticClass:"autab_td2"},[t._v(t._s(t.person.nation))]),t._v(" "),d("td",{staticClass:"autab_td1"},[t._v("身份证号")]),t._v(" "),d("td",{staticClass:"autab_td2"},[t._v(t._s(t.person.identificationNumber))])])])]),t._v(" "),d("br"),t._v(" "),d("div",t._l(t.tableData,function(a){return d("div",{staticClass:"cons"},[d("p",{staticClass:"cons_p2"},[t._v("学历信息")]),t._v(" "),d("table",{staticClass:"edtab"},[d("tr",[d("td",{staticClass:"edtab_td1"},[t._v("学校名称：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.collegeName))]),t._v(" "),d("td",{staticClass:"edtab_td1"},[t._v("学历类型：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.eduType))]),t._v(" "),d("td",{staticClass:"edtab_td3",attrs:{rowspan:"7"}},[d("div",{staticClass:"edtab_td3_con"},[d("img",{attrs:{src:a.photo}})])])]),t._v(" "),d("tr",[d("td",{staticClass:"edtab_td1"},[t._v("分院：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.branchCollege))]),t._v(" "),d("td",{staticClass:"edtab_td1"},[t._v("学制：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.eduDuration))])]),t._v(" "),d("tr",[d("td",{staticClass:"edtab_td1"},[t._v("系(所,函授站):")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.department))]),t._v(" "),d("td",{staticClass:"edtab_td1"},[t._v("层次：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.eduLevel))])]),t._v(" "),d("tr",[d("td",{staticClass:"edtab_td1"},[t._v("专业：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.majorName))]),t._v(" "),d("td",{staticClass:"edtab_td1"},[t._v("学习形式：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.studyMode))])]),t._v(" "),d("tr",[d("td",{staticClass:"edtab_td1"},[t._v("班级：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.class))]),t._v(" "),d("td",{staticClass:"edtab_td1"},[t._v("学籍状态：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.rollStatus))])]),t._v(" "),d("tr",[d("td",{staticClass:"edtab_td1"},[t._v("学号：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.stuNo))]),t._v(" "),d("td",{staticClass:"edtab_td1"},[t._v("证书编号：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.certificateNo))])]),t._v(" "),d("tr",[d("td",{staticClass:"edtab_td1"},[t._v("入学日期：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.enrollDate))]),t._v(" "),d("td",{staticClass:"edtab_td1"},[t._v("离校日期：")]),t._v(" "),d("td",{staticClass:"edtab_td2"},[t._v(t._s(a.leaveDate))])])])])}))])},staticRenderFns:[]}},728:function(t,a,d){var s=d(633);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);d(199)("496c78ae",s,!0)}});