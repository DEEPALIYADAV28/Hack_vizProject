import { createRouter, createWebHistory } from 'vue-router';

// Lazy load components
const Home = () => import('../views/HomePage.vue');
const Login = () => import('../views/LoginPage.vue');
const Register = () => import('../views/RegisterPage.vue');
const MarketTrends = () => import('../views/MarketPage.vue');
const Buyers = () => import('../views/BuyersPage.vue');
const PricePrediction = () => import('../views/PricePrediction.vue');
const NotFound = () => import('../views/NotFound.vue'); // 404 Page

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/market', component: MarketTrends },
  { path: '/buyers', component: Buyers },
  { path: '/predict', component: PricePrediction },
  { path: '/:pathMatch(.*)*', component: NotFound }, // Catch all unknown routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
