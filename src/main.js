import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from "vue";
import { Form } from "vant";
Vue.use(Form)
createApp(App).use(store).use(router).mount('#app')
