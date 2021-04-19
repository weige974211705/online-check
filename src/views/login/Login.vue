<template>
    <div id="login">
        <el-container>
            <el-card class="box-card">
                <!--头部-->
                <div class="card-title">
                    <div class="title-picture block">
                        <img src="../../assets/login/title-picture.png"></img>
                    </div>
                    <span>Online examination management system</span>
                    <br>
                    <span>课 程 考 核 管 理 系 统</span>
                </div>

                <!--备注-->
                <div class="card-wel">
                    <span>欢迎回来，请您登录使用！</span>
                </div>

                <!--输入-->
                <div class="card-input">
                    <el-form ref="form" label-width="80px" :rules="rules">
                        <div v-if="!showForget">
                            <el-form-item label="账号" prop="username">
                                <el-input v-model="username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="password" show-password></el-input>
                            </el-form-item>
                        </div>
                        <div v-else>
                            <el-form-item label="手机号" prop="phone">
                                <el-input v-model="phone" maxlength="11"></el-input>
                            </el-form-item>

                        </div>
                    </el-form>
                </div>

                <!--选择-->
                <div class="card-other">
                    <el-row>
                        <el-col :span="12">
                            <div class="checkRemember">
                                <el-checkbox v-model="checked">记住密码</el-checkbox>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="forgetPassword">
                                <el-button v-if="!showForget" @click="showForget = !showForget">忘记密码
                                </el-button>
                                <el-button v-else @click="showForget = !showForget">返回登录</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <!--登录-->
                <div class="cart-login">
                    <el-button type="success" v-if="!showForget">登录</el-button>
                    <el-button type="success" v-else>忘记密码</el-button>
                </div>
            </el-card>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                checked: false,
                username: '',
                password: '',
                phone: '',
                showForget: false,
                rules: {
                    phone: [
                        {required: true, message: '请输入手机号码！', trigger: 'blur'},
                        {type: 'number', min: 11, max: 11, trigger: 'blur'},
                    ],
                    username: [
                        {required: true, message: '请输入账号！', trigger: 'blur'},
                        {min: 3, max: 11, trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码！', trigger: 'blur'},
                        {min: 3, max: 11, trigger: 'blur'},
                    ]
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    #login {
        position: relative;
        background: greenyellow;

        .el-container {
            opacity: 1;
            width: 100vw;
            height: 100vh;
            background-image: url("../../assets/login/login-bgimg.jpg");
            background-repeat: repeat-x;
            background-size: 100% 100%;

            .box-card {
                position: absolute;
                transform: translate(-50%, -50%);
                left: 50%;
                top: 50%;
                width: 450px;

                .card-title {
                    -webkit-user-select: none;
                    user-select: none;
                    padding-bottom: 18px;
                    border-bottom: 1px solid #DCDFE6;
                    text-align: center;

                    span {
                        font-size: 20px;
                        font-weight: bold;

                    }

                    .title-picture {
                        margin-bottom: 30px;
                    }
                }

                .card-wel {
                    margin-top: 30px;
                    font-size: 15px;
                    color: #afb6c6;
                    -webkit-user-select: none;
                    user-select: none;
                    text-align: center;
                }

                .card-input {
                    margin-top: 30px;
                }

                .card-other {
                    margin-top: 40px;
                    height: 40px;
                    align-items: center;

                    .checkRemember {
                        text-align: center;
                        font-size: 16px;
                        line-height: 40px;
                    }

                    .forgetPassword {
                        .el-button {
                            border: 0px;
                        }
                    }
                }

                .cart-login {
                    height: 40px;
                    text-align: center;
                    margin-top: 40px;

                    .el-button {
                        border-radius: 40px;
                    }
                }
            }
        }
    }
</style>