login <template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <label>Email:</label>
      <input type="email" v-model="email" required />

      <label>Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>

    <p>Don't have an account? <router-link to="/register">Sign Up</router-link></p>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      console.log("Logging in with:", this.email, this.password);
      alert("Login functionality coming soon!");
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 350px;
  margin: 50px auto;
  padding: 25px;
  text-align: center;
  background: #F5F5DC; /* Soft White */
  border-radius: 10px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2E7D32; /* Dark Green */
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  color: #2E7D32;
}

input {
  padding: 10px;
  margin-top: 5px;
  border: 2px solid #2E7D32;
  border-radius: 5px;
}

button {
  padding: 10px;
  background: #1E88E5; /* Blue */
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 16px;
}

button:hover {
  background: #1565C0;
}

p {
  margin-top: 15px;
  font-size: 14px;
}

a {
  color: #FFD700; /* Golden Yellow */
  font-weight: bold;
}
</style>