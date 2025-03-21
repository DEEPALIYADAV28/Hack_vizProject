import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import MarketPage from '@/views/MarketPage.vue';
import NotFound from '@/views/NotFound.vue';
import BuyersPage from '@/views/BuyersPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import PricePrediction from '@/views/PricePrediction.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/market', component: MarketPage },
  { path: '/buyers', component: BuyersPage },
  { path: '/contact', component: ContactPage },
  { path: '/price-prediction', component: PricePrediction },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
