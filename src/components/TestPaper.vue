<template>
    <div>
        <el-collapse v-for="d in props.data" :key="d.id">
            <el-collapse-item name={{d.id}}>
                <template #title>
                {{ d.title }}
                </template>

                <div v-for="child in d.child">
                    <div class="title">{{ child }}</div>
                    <div class="content">
                        1234
                    </div>
                    <hr />
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['data'])

</script>

<style scoped>
.el-collapse-item__header{
    padding: 0 0 0 10px;
}
.title {
    font-weight: bold;
    font-size: 16px;
}

</style>