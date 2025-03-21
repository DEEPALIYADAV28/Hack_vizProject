<template>
  <div class="homepage">
    <!-- Hero Section -->
    <div class="hero-section">
      <img src="@/assets/farmer-ai-background.jpg" alt="Farmer using AI" class="background-image" />
      <div class="overlay"></div>
      
      <!-- Content: Video (Left) + Text (Right) -->
      <div class="content">
        <div class="video-container">
          <video controls :src="currentVideo" class="intro-video"></video>
          <div class="video-controls">
            <button @click="setLanguage('en')">English</button>
            <button @click="setLanguage('hi')">हिन्दी</button>
          </div>
        </div>
        <div class="quote-container">
          <h2>Empowering Farmers with Technology</h2>
          <p>Leverage AI-driven insights for better market decisions and enhanced profitability.</p>
          <button class="cta-button">Get Started</button>
        </div>
      </div>
    </div>

    <!-- About Us Section -->
    <section class="about-us">
      <h2>About KrishiSetu</h2>
      <p>Connecting farmers with real-time data, AI insights, and profitable markets.</p>
    
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Why Choose KrishiSetu?</h2>
      <div class="feature-list">
        <div class="feature">
          <h3>AI-Driven Predictions</h3>
          <p>Accurate price forecasting to help farmers sell at the best rates.</p>
        </div>
        <div class="feature">
          <h3>Direct Market Access</h3>
          <p>Eliminate middlemen and connect with genuine buyers.</p>
        </div>
        <div class="feature">
          <h3>Weather & Crop Insights</h3>
          <p>Real-time weather predictions and crop suggestions.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Farmers Say</h2>
      <p>"KrishiSetu changed how I sell my crops! The price prediction tool is amazing!" - Ramesh Kumar</p>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <h2>Join KrishiSetu Today</h2>
      <button class="cta-button">Sign Up Now</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: {
        en: require('@/assets/intro-english.mp4'),
        hi: require('@/assets/intro-hindi.mp4')
      },
      currentVideo: require('@/assets/intro-english.mp4')
    };
  },
  methods: {
    setLanguage(lang) {
      this.currentVideo = this.videos[lang];
    }
  }
};
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: -10px;
}
.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.content {
  position: relative;
  z-index: 1;
  display: flex;
  width: 90%;
  max-width: 1200px;
  align-items: center;
}
.video-container {
  flex: 1;
}
.intro-video {
  width: 50%;
  max-height: 300px;
  object-fit: cover;
}
.video-controls {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.video-controls button {
  padding: 8px 12px;
  background: #FFC107;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.quote-container {
  flex: 1;
  text-align: left;
  color: white;
}
.about-us, .features, .testimonials, .cta {
  padding: 50px;
  text-align: center;
  background: #f8f9fa;
  margin-top: 20px;
}
.features .feature-list {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.cta-button {
  padding: 12px 20px;
  background: #1E88E5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}
</style>