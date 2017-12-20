<template>
    <div class="login container">
        <el-row class="login-row" type="flex" justify="center">
            <el-col :xs="{span: 14, offset: 5}" :sm="{span: 10, offset: 7}" :lg="{span: 6, offset: 9}">
                <el-card>
                    <h1>忘记密码</h1>
                    <el-form :model="form" :rules="rules" ref="form" @keyup.enter.native='!logging && register()'>
                        <el-form-item prop="phone">
                            <el-col :span="24">
                                <el-input v-model.trim="form.phone" :maxlength="11" placeholder="手机号"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item prop="code">
                            <el-col :span="18">
                                <el-input v-model.trim="form.code" :maxlength="6" placeholder="输入验证码"></el-input>
                            </el-col>
                            <el-col :offset="1" :span="5" ref="captcha">
                                <el-button type="text">获取验证码</el-button>
                            </el-col>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-col :span="24">
                                <el-input v-model.trim="form.password" :maxlength="30" type="password" placeholder="设置新密码"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item prop="confirmPassword">
                            <el-col :span="24">
                                <el-input v-model.trim="form.confirmPassword" :maxlength="30" type="password" placeholder="确认新密码"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-row>
                            <el-col :span="24">
                                <el-button type="primary" class="login-btn" :loading="logging" @click="register">重设密码</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {
        post,
        get
    } from '../common/service';
    export default {
        data() {
            var checkConfirmPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请确认新密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                logging: false,
                rules: {
                    confirmPassword: [
                        {
                            required: true,
                            message: '请确认新密码'
                        },
                        { 
                            validator: checkConfirmPassword, 
                            trigger: 'blur' 
                        }
                    ],
                    password: [{
                        required: true,
                        message: '请设置密码'
                    }],
                    phone: [{
                        required: true,
                        message: '请输入手机号'
                    }],
                    code: [{
                        required: true,
                        message: '请输入验证码'
                    }]
                },
                form: {
                    confirmPassword: '',
                    phone: '',
                    code: '',
                    password: ''
                }
            };
        },
        methods: {
            register() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        get('/login.json')
                            .then(() => {
                                this.loading = false;
                            }, () => {
                                this.loading = false;
                            });
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>