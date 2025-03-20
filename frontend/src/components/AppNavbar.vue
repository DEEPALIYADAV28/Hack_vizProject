<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="@/assets/krishisetu-logo.png" alt="KrishiSetu Logo" class="logo">
      <span class="brand-name">KrishiSetu</span>
    </div>

    <ul class="nav-links">
      <li><a href="#market-trends">Market Trends</a></li>
      <li><a href="#price-prediction">Price Prediction</a></li>
      <li><a href="#marketplace">Marketplace</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div class="right-section">
      <!-- Language Selector -->
      <select v-model="selectedLanguage" @change="changeLanguage" class="language-selector">
        <option value="en">🇬🇧 English</option>
        <option value="hi">🇮🇳 हिंदी</option>
      </select>

      <!-- WhatsApp Icon (No Text, Just Icon) -->
      <a href="https://wa.me/919876543210" target="_blank" class="whatsapp-icon">
        <img src="@/assets/whatsapp-icon.png" alt="WhatsApp">
      </a>

      <!-- Chatbot Button -->
      <button class="chatbot-button" @click="openChatbot">
        💬 Chat
      </button>
    </div>
  </nav>

  <!-- Modal Overlay (Clicking outside closes it) -->
  <div v-if="showLoginModal || showRegisterModal" class="modal-overlay" @click.self="closeModals">
    <div class="modal-content" @click.stop>
      <LoginPage 
        v-if="showLoginModal" 
        @close="closeModals" 
        @switchToRegister="openRegisterModal" 
      />
      
      <RegisterPage 
        v-if="showRegisterModal" 
        @close="closeModals" 
        @switchToLogin="openLoginModal" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      selectedLanguage: "en", // Default to English
    };
  },
  methods: {
    changeLanguage() {
      console.log("Language changed to:", this.selectedLanguage);
      // Here, you can integrate i18n for translations
    },
    openChatbot() {
      alert("Chatbot coming soon! 🚀");
    },
  },
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2E7D32; /* Dark Green */
  padding: 15px 20px;
  color: white;
}

/* Logo Container */
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

/* Right Section (Language, WhatsApp, Chatbot) */
.right-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Language Selector */
.language-selector {
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
}

/* WhatsApp Button */
.whatsapp-icon img {
  height: 40px;
  cursor: pointer;
}

/* Chatbot Button */
.chatbot-button {
  background-color: #FFD700; /* Golden Yellow */
  color: #2E7D32; /* Dark Green */
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.chatbot-button:hover {
  background-color: #F4C700;
}

</style>
