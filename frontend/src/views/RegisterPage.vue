<template>
  <div>
    <h2>Register</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="register">Register</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['register']),
    async register() {
      try {
        await this.register({ username: this.username, email: this.email, password: this.password });
        this.$router.push('/login');
      } catch (error) {
        this.errorMessage = 'Registration failed!';
      }
    },
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
