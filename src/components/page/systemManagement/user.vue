<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                当前位置：系统管理/用户管理
            </el-breadcrumb>
        </div>
        <div>
            <Seach-newuser :formInline="searchConditionParam" @childSubmit="loadData"></Seach-newuser>
        </div>
        <div> 
            <el-table :data="tableData" @selection-change="selsChange" border style="width: 100%;" v-loading="loading2" element-loading-text="拼命加载中" >           
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="company" label="所属部门"></el-table-column>
            <el-table-column prop="depart" label="部门"></el-table-column>
            <el-table-column prop="userName" label="登录名"></el-table-column>            
            <el-table-column prop="realName" label="姓名"></el-table-column>
            <el-table-column prop="userRole" label="用户角色"></el-table-column>       
            <el-table-column prop="phone" label="手机号"></el-table-column> 
            <el-table-column fixed="right" label="操作" >
                <template scope="scope">
                        <el-button type="primary" size="small" @click="setStore({id: scope.row.id})">查看</el-button>
                        <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>                    
                        <el-button type="danger" size="small"  @click="handleDel(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        </div>
        <!-- 新增编辑 -->
<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="部门" prop="department">
					<el-input v-model="editForm.department" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="登录名">
				  	<el-input v-model="editForm.department" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="用户角色">
				  	<el-input v-model="editForm.department" auto-complete="off"></el-input>
				</el-form-item>
          <el-form-item label="姓名" prop="name">
				  	<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
          <el-form-item label="手机号码" prop="name">
					  <el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
          <el-form-item label="邮箱" prop="name">
					  <el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="备注">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button size="medium" @click.native="editFormVisible = false">取消</el-button>
				<el-button size="medium" type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>
    <!-- 这是查看页面 -->
<el-dialog title="用户详情" :visible.sync="centerDialogVisible" center=true>
  <p style="border-bottom:1px solid #f3f3f3"></p>
  <div style="padding-top:50px;"></div>
  <span class="lleft">所属公司：佰仟金融</span>
  <span class="rright">用户角色：系统管理员</span>
  <span class="lleft">所属部门：风控部</span>
  <span class="rright">手机号码：13800138000</span>
  <span class="lleft">姓名：黄珊珊</span>
  <span class="rright">邮箱：sundy@126.com</span>
  <span class="lleft">登录名：sundy</span>
  <span class="rright">状态：启用</span>
  <span class="remarks">备注：无</span>
  <p class="bor"></p>
   <p class="time">创建时间：2017-09--01   创建人：李小明    更新时间：2017-09--01   更新人：李小明</p>
</el-dialog>
        <page :formInline="pageParam" @pageSubmit="loadData"></page>
    </div>
</template>

<script type="text/ecmascript-6">
import SeachNewuser from "../../common/SeachNewuser";
import Page from "../../common/page";
export default {
  data() {
    return {
      tableData: [],
      searchConditionParam: {},
      pageParam: {
        currentPage: 1,
        total: 0,
        pageSize: 10
      },
      loading2: false,
      editFormVisible: false,     
    	editLoading: false,
      // dialogTableVisible:false,
       centerDialogVisible: false,
      editForm: {
        id: 0,
        name: "",
        sex: -1,
        age: 0,
        birth: "",
        addr: ""
      }
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    selsChange(){
      // console.log(this.tableData)
      var _this=this;
      for(let i= 0;i<_this.tableData.length;i++){
        console.log(_this.tableData[i])
      }
    },
    handleDel: function(index, row) {
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { id: row.id };
          removeUser(para).then(res => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.getUsers();
          });
        })
        .catch(() => {});
    },
    handleEdit: function(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
    loadData() {
      this.loading2 = true;

      let param = this.searchConditionParam;

      param.pageNo = this.pageParam.currentPage;
      param.pageSize = this.pageParam.pageSize;
      this.$axios({
        method: "post",
        url: this.$api.fsFundList,
        data: param
      })
        .then(res => {
          console.log(res);
          if (res.data.returnCode == "200") {
            this.tableData = res.data.tableList;
            // console.log(tableData)
            this.pageParam.total = res.data.total;
          } else {
            this.$message.error(res.data.returnMsg);
          }
          this.loading2 = false;
        })
        .catch(rej => {
          console.log(rej);
          this.loading2 = false;
        });
    },
    setStore(obj) {
      this.centerDialogVisible = true,
      sessionStorage.setItem("fundId", obj.id);
      console.log(obj.id);
    }
  },
  components: {
    Page,
    SeachNewuser
  }
};
</script>

<style scoped>
.remarks{
  width: 100%;
   padding-left: 90px;
  box-sizing: border-box;
}
.time{
  margin-top: 20px;
   padding-left: 50px;
  
}
.bor{
  padding-top: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #f3f3f3;
}
.block {
  margin-top: 20px;
  width: 100%;
}
.block .r_btn {
  float: left;
  width: 90px;
}
.block .r_page {
  float: right;
}
.el-button {
  padding: 7px 2px;
  /* width: 30px;
        height: 30px; */
  float: left;
}
.dialog-footer{
float: right;
}
.lleft{
  display: block;
  width: 50%;
  float: left;
  line-height: 40px;
  padding-left: 90px;
  box-sizing: border-box;
}
.rright{
  display: block;
  float: right;
  width: 50%;
  line-height: 40px;
    padding-left: 80px;
  box-sizing: border-box;
}
</style>

