<template>
  <ElRow >
    <ElCol  v-for="o in o1" :key="o" :span="5">
      <el-card :body-style="{ padding: '0px' }">
        <MyVideo class = "image" video="src/assets/mov_bbb.mp4" poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"/>
        <div style="padding: 20px">
          <div class="bottom">
            <el-button text class="button">ok</el-button>
          </div>
        </div>
      </el-card>
    </ElCol>
  </ElRow>
      
</template>

<script setup lang="ts">
import MyVideo from '@/components/MyVideo.vue'
import { ElCol, ElRow } from 'element-plus';
import { ref } from 'vue';

var o1 = [1,2,3,4,5,6,7,8,9,0]
ref(o1)


</script>

<style scoped>
.el-col{
  margin: 0 0 50px 50px;
}
.el-card{
    width: 400px;
    height: auto;
}
.bottom {
 
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
  
}

.image {
  max-width: 100%;
  height: auto;
}
</style>