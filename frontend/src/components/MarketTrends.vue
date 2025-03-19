<template>
  <div class="container">
    <h2>Market Trends</h2>
    <p v-if="loading">Loading market trends...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <ul v-if="trends.length">
      <li v-for="trend in trends" :key="trend._id">
        <strong>{{ trend.crop }}</strong> - ${{ trend.price.toFixed(2) }}
        <span class="date">({{ formatDate(trend.date) }})</span>
      </li>
    </ul>
    <p v-else-if="!loading && !error">No market trends available.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MarketTrends',
  data() {
    return {
      trends: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/market/trends');
      this.trends = response.data;
    } catch (err) {
      this.error = 'Failed to fetch market trends. Please try again later.';
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #fff;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.date {
  font-size: 0.9em;
  color: #666;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
