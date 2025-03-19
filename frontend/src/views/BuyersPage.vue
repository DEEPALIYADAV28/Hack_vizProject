<template>
  <div>
    <h2>Buyers List</h2>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="loading">Loading buyers...</p>
    <ul v-if="buyers.length">
      <li v-for="buyer in buyers" :key="buyer._id">
        {{ buyer.name }} - {{ buyer.contact }} ({{ buyer.location }})
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Buyers',
  data() {
    return {
      buyers: [],
      loading: true,
      errorMessage: '',
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/buyers');
      this.buyers = response.data;
    } catch (error) {
      this.errorMessage = 'Failed to fetch buyers. Please try again later.';
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
