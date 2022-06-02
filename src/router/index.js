import { createRouter, createWebHistory } from "vue-router";
import CountryList from "../views/CountryList.vue";
import About from "../views/AboutView.vue";
import Services from "../views/ServiceView.vue";
import Options from "../views/OptionsView.vue";

const routes = [
  {
    path: "/",
    name: "CountryList",
    component: CountryList,
  },
  {
    path: "/Services",
    name: "Services",
    component: Services,
  },
  {
    path: "/Options",
    name: "Options",
    component: Options,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
