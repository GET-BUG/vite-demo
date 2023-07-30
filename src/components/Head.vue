<template>
    <div>
        <ElMenu class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
            <el-menu-item index="0">LOGO</el-menu-item>
            <div class="flex-grow" />
            <ElMenuItem index="/home">视频</ElMenuItem>
            <ElMenuItem index="/text">文字</ElMenuItem>
        </ElMenu>
    </div>
</template>

<script setup lang="ts">

</script>

<style  scoped>
.flex-grow {
    flex-grow: 1;
}
</style>