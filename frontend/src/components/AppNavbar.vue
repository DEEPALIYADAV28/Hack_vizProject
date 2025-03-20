<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="@/assets/krishisetu-logo.png" alt="KrishiSetu Logo" class="logo">
      <span class="brand-name">KrishiSetu</span>
    </div>

    <div class="navbar-links">
      <router-link to="/market-trends">Market Trends</router-link>
      <router-link to="/price-prediction">Price Prediction</router-link>
      <router-link to="/marketplace">Marketplace</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>

    <div class="nav-icons">
      <select class="language-selector">
        <option>GB English</option>
        <option>Hindi</option>
      </select>

      <!-- WhatsApp Icon without Button Background -->
      <img src="@/assets/whatsapp-icon.png" alt="WhatsApp" class="whatsapp-icon">

      <!-- Chat Button with Golden Yellow Background -->
      <button class="chat-btn">Chat</button>

      <img src="@/assets/user-icon.png" alt="User" class="user-icon">
    </div>
  </nav>
</template>

<style scoped>
/* Navbar Styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #256D1B; /* Dark Green */
  padding: 10px 20px;
  color: white;
}

/* Left Section */
.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.brand-name {
  font-size: 20px;
  font-weight: bold;
}

/* Center Links */
.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  transition: 0.3s;
}

.navbar-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

/* Right Section (Icons & Buttons) */
.nav-icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.language-selector {
  padding: 5px;
  border-radius: 5px;
}

/* WhatsApp Icon Without Background */
.whatsapp-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

/* Chat Button with Golden Yellow */
.chat-btn {
  padding: 8px 12px;
  background-color: #FFC107; /* Golden Yellow */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: black;
}

/* User Icon */
.user-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

</style>
