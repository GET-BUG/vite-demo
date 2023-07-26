<template>
    <el-row>
    <el-col
      v-for="(o) in o1"
      :key="o"
      :span="8"
    >
      <el-card :body-style="{ padding: '0px' }">
        <MyVideo class = "image" video="@/assets/mov_bbb.mp4" cover=""/>
        <div style="padding: 20px">
          <div class="bottom">
            <el-button text class="button">{{o}}</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import MyVideo from '@/components/MyVideo.vue'
import { ref } from 'vue';

var o1 = ["1","2","3"]
ref(o1)


</script>

<style scoped>

.el-card{
    height: 400px;
    width: 300px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
  
}

.image {
  width: 100%;
  display: block;
}
</style>