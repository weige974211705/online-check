<template>
    <div id="courseAdd">
        <span>添加课程</span>
        <el-button style="float: right; padding: 8px 10px"
                   @click="resetForm" type="primary">清空/重置
        </el-button>
        <el-form label-position="top" label-width="80px">
            <el-form-item label="课程号：course_id">
                <el-input v-model="ruleForm.course_id"></el-input>
            </el-form-item>
            <el-form-item label="课程名称: course_name">
                <el-input v-model="ruleForm.course_name"></el-input>
            </el-form-item>
            <el-form-item label="课程类别：course_type">
                <el-input v-model="ruleForm.course_type"></el-input>
            </el-form-item>
            <el-form-item label="任课教师：course_teacher">
                <el-input v-model="ruleForm.course_teacher"></el-input>
            </el-form-item>
        </el-form>
        <el-button class="underBtn" style="float: left; padding: 8px 20px"
                   @click="resetForm" type="success">添加
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "CourseAdd",
        data() {
            return {
                ruleForm: {
                    course_id: '',
                    course_name: '',
                    course_type: '',
                    course_teacher: '',
                },
            }
        },
        methods: {
            resetForm() {
                this.ruleForm = {
                    course_id: '',
                    course_name: '',
                    course_type: '',
                    course_teacher: '',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #courseAdd {
        margin: 30px 30px 100px 30px;

        span {
            display: block;
            font-size: 35px;
            margin-bottom: 20px;
        }

        .underBtn {
            margin-bottom: 50px;
        }
    }
</style>