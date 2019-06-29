import Vue from "vue";
import Router from "vue-router";
import Log from "./views/Log.vue";
import admin_login from "./components/admin/login.vue";
import admin_signin from "./components/admin/signin.vue";
import Home from "./views/Home.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }, {
      path: "/home",
      name: "home",
      component: Home
    },{
      path: "/log",
      name: "log",
      component:Log,
      children: [
        { path: "/admin/login", name: 'admin_login', component: admin_login},
        { path: "/admin/signin", name: 'admin_signin', component: admin_signin}
      ]
    }
  ]
});
