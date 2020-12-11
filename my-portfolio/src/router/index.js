import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Project1 from "../views/Project1.vue";
import Project2 from "../views/Project2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/project-1",
    name: "Project1",
    component: Project1
  },
  {
    path: "/project-2",
    name: "Project2",
    component: Project2
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
