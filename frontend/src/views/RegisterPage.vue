register <template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignup">
      <label>Name:</label>
      <input type="text" v-model="name" required />

      <label>Email:</label>
      <input type="email" v-model="email" required />

      <label>Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Sign Up</button>
    </form>

    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSignup() {
      console.log("Signing up with:", this.name, this.email, this.password);
      alert("Signup functionality coming soon!");
    },
  },
};
</script>

<style scoped>
.signup-container {
  width: 300px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2E7D32;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background: #FFD700;
  color: #2E7D32;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: #FFC107;
}
</style>