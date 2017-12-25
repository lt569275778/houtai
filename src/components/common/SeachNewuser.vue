<template>
    <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="所属公司">
            <el-input v-model="formInline.realName" placeholder="请输入所属公司名称" size="small" class="pcs-input"></el-input>
        </el-form-item>
        <el-form-item label="部门">
            <el-input v-model="formInline.realName" placeholder="请输入所属部门名称" size="small" class="pcs-input"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名">
            <el-input v-model="formInline.realName" placeholder="请输入用户姓名" size="small" class="pcs-input"></el-input>
        </el-form-item>
        <slot name="extendCondition"></slot>
        <el-form-item>
            <el-button type="primary" size="medium" class="el-icon-search" @click="onSubmit">查询</el-button>
            <el-button type="primary" size="medium" class="el-icon-refresh" @click="reset">重置</el-button>
        </el-form-item>
        <div class="padd"></div>
        <div style="margin-top:10px;">
 <el-form-item>
            <el-button type="primary" size="medium" class="el-icon-add" @click="handleAdd">+ 添加用户</el-button>
            <el-button type="primary" size="medium" class="el-icon-delete" @click="batchRemove">删除</el-button>
        </el-form-item>

        </div>
         
    </el-form>
    <el-dialog title="添加用户" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :data="addForm" label-width="80px" ref="addForm">
				<el-form-item label="部门" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="登录名">
				  	<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="用户角色">
				  	<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
          <el-form-item label="姓名" prop="name">
				  	<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
          <el-form-item label="手机号码" prop="name">
					  <el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
          <el-form-item label="邮箱" prop="name">
					  <el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="备注">
					<el-input type="textarea" v-model="addForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button size="medium" @click.native="addFormVisible = false">取消</el-button>
				<el-button size="medium" type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      options: [],
      loading: false,
      clearable: true,
      addForm:{
        department:123,
        name:123
      },
      addFormVisible:false,
      listLoading: false,
    };
  },
  props: ["formInline"],
  methods: {  
   onSubmit() {
      this.$emit("childSubmit");
    },
   batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
    getSelectOptions() {
      this.loading = true;
      this.$axios({
        method: "post",
        url: this.$api.getChannelOption
      }).then(res => {
        if (res.data.returnCode == "200") {
          this.options = res.data.ChannelOptions;
          this.loading = false;
        }
      });
    },
    handleAdd(){
    //  console.log(123)
      this.addFormVisible=true;
   }
  },
  
};
</script>

<style scoped>
.pcs-input {
  width: 150px;
}
.pcs-select {
  width: 150px;
}
.pcs-option {
  width: 150px;
}
.padd{
    border-bottom: 1px solid #f3f3f3;
    padding-bottom:2px; 
}

</style>

