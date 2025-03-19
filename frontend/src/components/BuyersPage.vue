<template>
  <div class="buyer-list">
    <h2>Buyers</h2>
    <div v-if="loading">Loading buyers...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <ul v-else>
      <li v-for="buyer in buyers" :key="buyer._id">
        <strong>{{ buyer.name }}</strong> - {{ buyer.contact }} ({{ buyer.location }})
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BuyerList',
  data() {
    return {
      buyers: [],
      loading: false,
      error: null,
    };
  },
  async created() {
    this.loading = true;
    try {
      const response = await axios.get('http://localhost:5000/api/buyers');
      this.buyers = response.data;
    } catch (err) {
      this.error = 'Failed to fetch buyers. Please try again later.';
      console.error(err);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.buyer-list {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border-bottom: none;
}

.error {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>
