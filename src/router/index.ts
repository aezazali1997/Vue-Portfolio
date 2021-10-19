import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Home = () => import("@/views/Home/Home.vue");
const About = () => import("@/views/About/About.vue");
const Portolio = () => import("@/views/Portfolio/Portfolio.vue");
const Contact = () => import("@/views/Contact/Contact.vue");
const Project = () => import("@/views/Project/Project.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Project",
    component: Project,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portolio,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
