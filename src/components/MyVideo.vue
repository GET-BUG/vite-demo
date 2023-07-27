<template>
  <div>
    <vue3VideoPlay class="video" v-bind="options" :poster="props.poster" />
  </div>
</template>
  
<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps(['video','poster'])
console.log(props.video)
const options = reactive({
  width: "100%", //播放器宽度
  height: "auto", //播放器高度
  color: "#409eff", //主题色
  title: "小兔子", //视频名称
  src: props.video, //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
</script>

<style scoped>
  .video{
      max-width: 100%;
      height: auto;
  }
</style>
  
  