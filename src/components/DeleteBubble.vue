<template>
    <el-popconfirm
            confirmButtonText='好的'
            cancelButtonText='不用了'
            icon="el-icon-info"
            iconColor="red"
            title="您确定删除吗？"
    >
        <template #reference>
            <el-button style="margin-left: 2px" type="danger" size="mini">删除</el-button>
        </template>
    </el-popconfirm>
</template>

<script>
    export default {
        name: "DeleteBubble",
        data() {
            return {
                centerDialogVisible: false,
            }
        }
    }
</script>

<style scoped>

</style>