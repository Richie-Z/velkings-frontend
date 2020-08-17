import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Dashboard from "./views/Dashboard.vue";
import Bus from "./views/Bus.vue";
import AddBus from "./views/AddBus.vue"
import Driver from "./views/Driver.vue";
import AddDriver from "./views/AddDriver.vue"
import Order from "./views/Order.vue"
import AddOrder from "./views/AddOrder.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {guestOnly:true}
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {guestOnly:true}
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { authOnly:true }
  },
  {
    path: "/bus",
    name: "Bus",
    component: Bus
  },
  {
    path: "/add/bus",
    name: "AddBus",
    component: AddBus
  },
  {
    path: "/driver",
    name: "Driver",
    component: Driver
  },
  {
    path: "/add/driver",
    name: "AddDriver",
    component: AddDriver
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: { authOnly:true }
  }
  ,
  {
    path: "/add/order",
    name: "AddOrder",
    component: AddOrder,
    meta: { authOnly:true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function isLoggedIn(){
  return localStorage.getItem('auth')
}
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: '/dashboard',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    } // make sure to always call next()!
  }else {
    next()
  }
})

export default router;
