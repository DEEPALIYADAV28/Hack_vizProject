<template>
  <div class="homepage">
    <!-- Hero Section -->
    <div class="hero-section">
      <img src="@/assets/farmer-ai-background.jpg" alt="Farmer using AI" class="background-image" />
      <div class="overlay"></div>
      
      <!-- Content: Video (Left) + Text (Right) -->
      <div class="content">
        <!-- Video Container -->
        <div class="video-container">
          <video controls :src="currentVideo" class="intro-video"></video>
          <div class="video-controls">
            <button @click="setLanguage('en')">English</button>
            <button @click="setLanguage('hi')">हिन्दी</button>
          </div>
        </div>

        <!-- Text Content -->
        <div class="quote-container">
          <h2>Empowering Farmers with Technology</h2>
          <p>Leverage AI-driven insights for better market decisions and enhanced profitability.</p>
          <button class="cta-button">Get Started</button>
        </div>
      </div>
    </div>
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
/* Hero Section */
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Full height */
  display: flex;
  align-items: center;
  padding: 0; /* Remove extra gap */
  margin-top: -10px; /* Fix navbar gap */
}

/* Background Image */
.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
}

/* Overlay */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

/* Main Content */
.content {
  position: relative;
  z-index: 1;
  display: flex;
  width: 90%;
  max-width: 1200px;
  align-items: center;
}

/* Video Section */
.video-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align to left */
}

.intro-video {
    width: 50%; /* Adjust width */
    height: auto; /* Maintain aspect ratio */
    max-height: 300px; /* Set max height */
    object-fit: cover; /* Crop if necessary */
}

/* Video Buttons */
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

/* Text Section */
.quote-container {
  flex: 1;
  text-align: left;
  color: white;
}

.quote-container h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.quote-container p {
  font-size: 18px;
  margin-bottom: 20px;
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
