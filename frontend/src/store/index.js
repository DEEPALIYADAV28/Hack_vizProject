import { createStore } from "vuex";

export default createStore({
  state: {
    user: localStorage.getItem("user") || null, // Store user info
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", user);
    },
    LOGOUT(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        // Mock API (Replace with real API request)
        if (email === "test@example.com" && password === "password123") {
          commit("SET_USER", email);
          resolve();
        } else {
          reject("Invalid email or password!");
        }
      });
    },

    register({ commit }, { name, email, password }) {
      return new Promise((resolve, reject) => {
        // Mock API (Replace with real API request)
        if (email && password && name) {
          commit("SET_USER", email);
          resolve();
        } else {
          reject("Registration failed! Please check your details.");
        }
      });
    },

    logout({ commit }) {
      commit("LOGOUT");
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user, // Check if user is logged in
    getUser: (state) => state.user,
  },
});
