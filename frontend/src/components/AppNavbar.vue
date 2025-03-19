<template>
  <nav>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/market">Market Trends</router-link>
    <router-link to="/buyers">Buyers</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 1rem;
  background-color: #2c3e50;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

router-link {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background 0.3s;
}

router-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.router-link-active {
  background: #1abc9c;
  color: white;
}
</style>
