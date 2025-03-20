<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="@/assets/krishisetu-logo.png" alt="KrishiSetu Logo" class="logo">
      <span class="brand-name">KrishiSetu</span>
    </div>

    <ul class="nav-links">
      <li><router-link to="/market-trends">Market Trends</router-link></li>
      <li><router-link to="/price-prediction">Price Prediction</router-link></li>
      <li><router-link to="/marketplace">Marketplace</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>

    <div class="nav-icons">
      <select v-model="selectedLanguage" @change="changeLanguage" class="language-selector">
        <option value="en">🇬🇧 English</option>
        <option value="hi">🇮🇳 हिंदी</option>
      </select>

      <a href="https://wa.me/919876543210" target="_blank">
        <img src="@/assets/whatsapp-icon.png" alt="WhatsApp" class="whatsapp-icon">
      </a>

      <button class="chat-btn" @click="openChatbot">💬 Chat</button>

      <img src="@/assets/user-icon.png" alt="User" class="user-icon" @click="toggleLoginModal" />
    </div>
  </nav>

  <!-- Modal Overlay -->
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
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';

export default {
  name: "AppNavbar",
  components: {
    LoginPage,
    RegisterPage,
  },
  data() {
    return {
      selectedLanguage: "en",
      showLoginModal: false,
      showRegisterModal: false,
    };
  },
  methods: {
    changeLanguage() {
      console.log("Language changed to:", this.selectedLanguage);
    },
    openChatbot() {
      alert("Chatbot coming soon! 🚀");
    },
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
      this.showRegisterModal = false;
    },
    openRegisterModal() {
      this.showRegisterModal = true;
      this.showLoginModal = false;
    },
    openLoginModal() {
      this.showLoginModal = true;
      this.showRegisterModal = false;
    },
    closeModals() {
      this.showLoginModal = false;
      this.showRegisterModal = false;
    }
  }
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #256D1B;
  padding: 10px 20px;
  color: white;
}

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

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  transition: 0.3s;
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.whatsapp-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.chat-btn {
  padding: 8px 12px;
  background-color: #FFC107;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.user-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 350px;
}
</style>