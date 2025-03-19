<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="login">Login</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      try {
        await this.login({ email: this.email, password: this.password });
        this.$router.push('/');
      } catch (error) {
        this.errorMessage = 'Invalid email or password!';
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
