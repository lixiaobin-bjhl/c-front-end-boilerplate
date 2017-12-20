<template>
    <header class="header">
        <ul class="clearfix">
            <li class="logo">
                <nuxt-link to="/">
                    <img class="logo" style="height: 40px;" src="~/assets/img/logo.svg">
                </nuxt-link>
            </li>
            <li class="btn-group">
                <ul>
                    <li>
                        <nuxt-link to="/register">
                            <el-button size="small" round plain type="primary">注册</el-button> 
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/login">
                            <el-button size="small" round>登录</el-button> 
                        </nuxt-link>
                    </li>
                </ul>
            </li> 
            <li class="search">
               <el-input 
                    placeholder="搜索课程" 
                    size="small"
                    suffix-icon="el-icon-search"></el-input> 
            </li> 
        </ul>
    </header>
</template>

<style lang="scss">
    .header {
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        background: #FFF;
        height: 40px;
        margin: auto;
        padding: 10px 0;
        position: relative;
        .logo {
            float: left;
            margin-left: 20px;
        }
        .search {
            float: right;
            margin-right: 10px;
        }
        .btn-group {
            float: right;
            li {
                float: left;
                margin: 0 10px;
            }
        }
    }
</style>