import { createStore } from 'vuex';
import authService from '../services/auth';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null, // Load user from storage
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user)); // Store in localStorage
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
      authService.logout(); // Remove token
    },
  },
  actions: {
    async login({ commit }, userData) {
      try {
        const user = await authService.login(userData);
        commit('setUser', user);
        return user;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
  },
});
