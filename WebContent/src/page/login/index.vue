<template>
    <div>
        <el-row type='flex' justify='center'>
            <el-col :span="7">
                <div class='login-title'>欢迎使用JDocument文档管理工具</div>
                <el-form :model="loginInfo" ref="loginInfo" label-width="100px" class="demo-dynamic">
                    <el-form-item prop="username" label="账户" :rules="[
                          { required: true, message: '请输入账户', trigger: 'blur' }
                        ]">
                        <el-input v-model="loginInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop='password' :rules="{
                          required: true, message: '密码不能为空', trigger: 'blur'
                        }">
                        <el-input v-model="loginInfo.password"></el-input>
                    </el-form-item>
                    <div class='login-tips'>
                        <router-link to='/forgetPassword'>
                            <el-button type="text">忘记密码</el-button>
                        </router-link>             
                        <router-link to='/register'>
                            <el-button type="text">立刻注册</el-button>
                        </router-link>               
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginInfo')">提交</el-button>
                        <el-button @click="resetForm('loginInfo')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginInfo: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('Submit成功提交');
                } else {
                    console.log('错误的Submit提交');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style>
.login-title {
    font-size: 20px;
    padding: 43px 0;
    text-align: center;
}
.login-tips{
    text-align:right;
}
</style>
