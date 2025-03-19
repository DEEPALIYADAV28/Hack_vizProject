<template>
  <div class="container">
    <h1>Welcome to Farmer Market System</h1>
    <p>Get real-time market trends and connect with buyers directly.</p>
    <router-link to="/market" class="cta-button">Explore Market Trends</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

h1 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  color: #555;
  font-size: 18px;
  margin-bottom: 20px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: #27ae60;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #219150;
}
</style>
