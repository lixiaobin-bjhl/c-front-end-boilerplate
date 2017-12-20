<template>
    <div class="login container">
        <el-row class="login-row" type="flex" justify="center">
            <el-col :xs="{span: 14, offset: 5}" :sm="{span: 10, offset: 7}" :lg="{span: 6, offset: 9}">
                <el-card>
                    <h1>账号登录</h1>
                    <el-form :model="form" :rules="rules" ref="form" @keyup.enter.native='!loading && login()'>
                        <el-form-item prop="name">
                            <el-col :span="24">
                                <el-input v-model.trim="form.name" placeholder="手机号"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-col :span="24">
                                <el-input v-model.trim="form.password" type="password" placeholder="密码"></el-input>
                            </el-col>
                        </el-form-item>
                        <!-- <el-form-item prop="captcha">
                                <el-col :span="12">
                                    <el-input v-model="form.captcha" placeholder="验证码"></el-input>
                                </el-col>
                                <el-col :offset="1" :span="11" ref="captcha">
                                    <div v-html="captchaSvg" @click='refreshCaptcha' class="captcha"></div>
                                </el-col>
                            </el-form-item> -->
                        <el-row>
                            <el-col :span="24">
                                <el-button type="primary" class="login-btn" :loading="loading" @click="login">登录</el-button>
                            </el-col>
                        </el-row>
                        <div class="forget">
                            <nuxt-link to="/forget">忘记密码</nuxt-link>
                        </div> 
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
            return {
                loading: false,
                rules: {
                    name: [{
                        required: true,
                        message: '请输入账号'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码'
                    }]
                },
                form: {
                    name: '',
                    password: ''
                }
            };
        },
        methods: {
            login() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        get('/login.json')
                            .then(() => {
                                this.loading = false;
                            }, ()=> {
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