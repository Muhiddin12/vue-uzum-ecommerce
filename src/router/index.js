import { createRouter, createWebHistory } from "vue-router";
import Devs from "../components/Devs.vue";
import Basket from "../views/Basket.vue";
import Products from "../views/Products.vue";
import DevDetails from "../components/DevDetails.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: Products,
  },
  {
    path: "/basket",
    name: "basket",
    component: Basket,
  },
  {
    path: "/devs",
    name: "devs",
    component: Devs,
  },
  {
    // bu projectda props bilan id berish ko'rsatilgan
    path: "/devs/:id",
    name: "devDetails",
    component: DevDetails,
    props: true,
  },
  {
    // redirect degani poiskga all-devs deb yozsa ham devs componentga jo'natadi
    path: "/all-devs",
    redirect: "/devs",
  },
  {
    // bu yerda RegExp (/:catchAll(.*)) ishlatilgan deyilgan videodarsda
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
