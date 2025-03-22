<template>
  <div class="modal-overlay">
    <div class="register-box">
      <button class="close-btn" @click="$emit('close')">✖</button>
      <h2>Create Your Account</h2>
      <p>Join us today and explore amazing features</p>

      <form @submit.prevent="handleSignup">
        <input type="text" v-model="name" placeholder="Enter your name" required />
        <input type="email" v-model="email" placeholder="Enter your email" required />
        <input type="password" v-model="password" placeholder="Enter your password" required />
        <button type="submit">Sign Up</button>
      </form>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <p>
        Already have an account? 
        <span class="switch-link" @click="$emit('switchToLogin')">Login</span>
      </p>
    </div>
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
      errorMessage: "",
    };
  },
  methods: {
    async handleSignup() {
      try {
       
        localStorage.setItem("user", this.email);
        alert("Registration successful!");
        this.$emit("close"); 
      } catch (error) {
        this.errorMessage = "Registration failed! Try again.";
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

input {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #256D1B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.switch-link {
  color: #256D1B;
  cursor: pointer;
  text-decoration: underline;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
