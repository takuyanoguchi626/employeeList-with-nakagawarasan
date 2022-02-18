import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // // パスが登録されていない場合はログイン画面へ(LoginAdmin.vueを作成したらコメントを外してください)
  // {
  //   path: "*",
  //   component: () => import("../components/LoginAdmin.vue"),
  // },
  {
    path: "/logoutAdmin",
    component: () => import("../views/LogoutAdmin.vue"),
  },
  {
    path: "/employeeDetail/:id",
    component: () => import("../views/EmployeeDetail.vue"),
  },
  {
    path: "/employeeList",
    component: () => import("../views/EmployeeList.vue"),
  },
  {
    path: "/loginAdmin",
    component: () => import("../views/LoginAdmin.vue"),
  },
  {
    path: "/registerAdmin",
    component: () => import("../views/RegisterAdmin.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
