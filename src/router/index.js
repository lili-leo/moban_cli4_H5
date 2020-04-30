import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
  // {
  //   path: '/me',
  //   name: 'Me',
  //   component: Me,
  //   children: [
  //     {
  //       path: 'collection',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
  //       name: 'Collection',
  //       component: Collection
  //     },
  //     {
  //       path: 'trace',
  //       name: 'Trace',
  //       component: Trace
  //     }
  //   ]
  // }

];

const router = new VueRouter({
  mode:"hash",
  routes
});

export default router;
