<template>
  <div class="home-container">
    <h1>Welcome to the Farmers Market System</h1>
    <p>Get real-time market trends and price predictions.</p>
    <router-link to="/market" class="button">View Market Trends</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 50px;
}

.button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
