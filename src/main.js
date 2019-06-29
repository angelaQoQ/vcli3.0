import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入axios
import axios from 'axios'
// 为了再子组件中使用，将axios配置到Vue原型对象上,在 main.js 中添加了这两行代码之后，就能直接在组件的 methods 中使用 $http命令
axios.defaults.baseURL = "127.0.0.1:3000"
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
