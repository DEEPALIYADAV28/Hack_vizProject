<template>
  <div class="overlay">
    <div class="login-box">
      <button class="close-btn" @click="$emit('close')">✖</button>
      <h2>Welcome Back!</h2>
      <p>Please log in to continue</p>

      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" placeholder="Enter your email" required />
        <input type="password" v-model="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <p>Don't have an account? <span @click="$emit('switchToRegister')">Sign up</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.email === "test@test.com" && this.password === "password") {
        localStorage.setItem("user", this.email);
        this.$emit("close");
        this.$router.push("/");
      } else {
        this.errorMessage = "Invalid email or password!";
      }
    },
  },
};
</script>

<style scoped>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}


.login-box {
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  width: 350px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  width: 100%;
  padding: 10px;
  background: #2e7d32;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1b5e20;
}

.error {
  color: red;
}

span {
  color: #2e7d32;
  cursor: pointer;
  text-decoration: underline;
}
</style>
