import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'




const app = createApp(App);
app.use(router).use(store).use(ElementPlus).use(VideoPlayer);
app.mount('#app')
