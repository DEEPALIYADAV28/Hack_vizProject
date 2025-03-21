<template>
  <div class="price-prediction">
    <h1 class="title">📈 Price Prediction</h1>
    <p class="subtitle">Get AI-powered price predictions for various crops based on market trends.</p>

    <div class="prediction-form">
      <label for="crop">Select Crop:</label>
      <select v-model="selectedCrop">
        <option v-for="crop in crops" :key="crop" :value="crop">{{ crop }}</option>
      </select>

      <label for="region">Select Region:</label>
      <select v-model="selectedRegion">
        <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
      </select>

      <button class="predict-btn" @click="predictPrice">Predict Price</button>
    </div>

    <div v-if="loading" class="loading">🔄 Predicting...</div>

    <div v-if="predictedPrice" class="prediction-result">
      <h2>Predicted Price:</h2>
      <p>📌 Expected Price for <strong>{{ selectedCrop }}</strong> in <strong>{{ selectedRegion }}</strong>:</p>
      <p class="price">₹{{ predictedPrice }} / quintal</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricePrediction",
  data() {
    return {
      selectedCrop: "",
      selectedRegion: "",
      predictedPrice: null,
      loading: false,
      crops: ["Wheat", "Rice", "Tomato", "Potato", "Onion", "Soybean"],
      regions: ["Punjab", "Maharashtra", "West Bengal", "Uttar Pradesh", "Gujarat"],
    };
  },
  methods: {
    async predictPrice() {
      if (!this.selectedCrop || !this.selectedRegion) {
        alert("Please select both crop and region.");
        return;
      }
      
      this.loading = true;
      this.predictedPrice = null;

      // Simulating API call with timeout
      setTimeout(() => {
        this.predictedPrice = Math.floor(Math.random() * 2000) + 1500; // Mock price range
        this.loading = false;
      }, 1500);
    }
  }
};
</script>

<style scoped>
.price-prediction {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

.title {
  font-size: 28px;
  color: #256D1B;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.prediction-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

select {
  padding: 8px;
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.predict-btn {
  background: #256D1B;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.predict-btn:hover {
  background: #1b4e13;
}

.loading {
  font-size: 18px;
  color: #FF9800;
  margin-top: 15px;
}

.prediction-result {
  margin-top: 20px;
  background: #F5F5F5;
  padding: 15px;
  border-radius: 10px;
}

.price {
  font-size: 22px;
  font-weight: bold;
  color: #FF5722;
}
</style>
