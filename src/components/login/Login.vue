<template>
<div class="login-wrap">
    <div class="ms-title">个人增信后台管理系统</div>
    <div class="ms-login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <div class="login-btn">
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </div>
            <div style="margin-top: 10px;"></div>
            <!--<div style="float: left;margin-top: 10px;" @click="showRegister">
                <a href="javascript:" style="font-size:13px;line-height:30px;color:#999;">注册账号？</a>
            </div>-->
        </el-form>
    </div>
    <v-register ref="registerAdmin"></v-register>
    <v-wechat-login ref="wechatLogin"></v-wechat-login>

    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

</div>
</template>

<script>
import VRegister from './Register.vue';
import VWechatLogin from './WechatLogin.vue';
export default {
    components: {
        VRegister,
        VWechatLogin
    },
    created() {

        //this.$websocket.send(123456);
        //console.log(this.$store.state.menuData);
    },
    data: function() {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [{
                    required: true,
                    message: '账号不能为空',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '密码不能为空',
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        showRegister() {
            this.$refs.registerAdmin.registerForm.modal = true;
        },
        /** 账号登录 */
        submitForm(formName) {
            const self = this;
            self.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios({
                        method:"post",
                        url:this.$api.getBackgroundUser,
                        data:this.ruleForm
                    }).then(res => {
                        let result =res.data;
                        if(result.code == "200"){
                            self.$router.push('/readme');
                            sessionStorage.setItem("userInfo",result.userInfo);
                        }
                        else if(result.code == "10001"){
                            this.$message({
                                message:result.msg,
                                type:"error"
                            })
                        }else if(result.code == "500"){
                            this.$message({
                                message:result.msg,
                                type:"error"
                            })
                        }else {
                            this.$message({
                                message:result.msg,
                                type:"error"
                            })
                        }
                    }).catch(rej =>{
                        this.$message({
                            message:result.msg,
                            type:"error"
                        })
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.ms-title {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;
}

.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: 180px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
}

.login-btn {
    text-align: center;
}

.login-btn button {
    width: 100%;
    height: 36px;
}
</style>
