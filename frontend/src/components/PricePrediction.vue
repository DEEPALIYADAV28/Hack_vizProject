<template>
  <div class="container">
    <h2>Price Prediction</h2>
    <input v-model="crop" placeholder="Enter crop" />
    <input v-model="season" placeholder="Enter season" />
    <button @click="predictPrice" :disabled="loading">Predict</button>

    <p v-if="loading">Predicting price...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="predictedPrice" class="result">Predicted Price: ${{ predictedPrice.toFixed(2) }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PricePrediction',
  data() {
    return {
      crop: '',
      season: '',
      predictedPrice: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async predictPrice() {
      if (!this.crop || !this.season) {
        this.error = "Please enter both crop and season.";
        return;
      }
      this.error = null;
      this.predictedPrice = null;
      this.loading = true;

      try {
        const response = await axios.post('http://localhost:5000/api/market/predict', {
          crop: this.crop,
          season: this.season,
        });
        this.predictedPrice = response.data.predictedPrice;
      } catch (err) {
        this.error = "Failed to predict price. Try again later.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

input {
  width: 90%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #1abc9c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:disabled {
  background: gray;
}

.error {
  color: red;
  margin-top: 10px;
}

.result {
  font-weight: bold;
  margin-top: 10px;
  color: #27ae60;
}
</style>
