<template>
  <div class="buyers-container">
    <h1 class="title">🤝 Connect with Verified Buyers</h1>

    <!-- Hero Section -->
    <div class="hero-section">
      <h2>Find the Right Buyer for Your Crops!</h2>
      <p>Sell your agricultural produce directly to retailers, wholesalers, and exporters.</p>
      <button class="register-btn">Register as a Seller</button>
    </div>

    <!-- Categories Section -->
    <div class="categories">
      <h2>📌 Buyer Categories</h2>
      <div class="category-cards">
        <div class="category-card">
          <h3>Retail Buyers</h3>
          <p>Sell directly to grocery stores and small businesses.</p>
        </div>
        <div class="category-card">
          <h3>Wholesale Buyers</h3>
          <p>Connect with bulk buyers for large transactions.</p>
        </div>
        <div class="category-card">
          <h3>Exporters</h3>
          <p>Expand your reach by selling to international buyers.</p>
        </div>
      </div>
    </div>

    <!-- Featured Buyers -->
    <div class="featured-buyers">
      <h2>🌟 Featured Buyers</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Category</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(buyer, index) in buyers" :key="index">
            <td>{{ buyer.company }}</td>
            <td>{{ buyer.category }}</td>
            <td><a :href="'tel:' + buyer.phone">📞 {{ buyer.phone }}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyersPage",
  data() {
    return {
      buyers: [
        { company: "Fresh Farm Traders", category: "Retail", phone: "+91 98765 43210" },
        { company: "Agro Bulk Wholesalers", category: "Wholesale", phone: "+91 87654 32109" },
        { company: "Global Export Pvt Ltd", category: "Exporters", phone: "+91 76543 21098" },
      ],
    };
  },
};
</script>

<style scoped>
/* General Styling */
.buyers-container {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

.title {
  font-size: 28px;
  color: #256D1B;
  margin-bottom: 20px;
}

/* Hero Section */
.hero-section {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.hero-section h2 {
  font-size: 24px;
  color: #256D1B;
}

.hero-section p {
  font-size: 16px;
  margin: 10px 0;
}

.register-btn {
  background: #FF9800;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.register-btn:hover {
  background: #E68900;
}

/* Buyer Categories */
.categories {
  margin-bottom: 30px;
}

.category-cards {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.category-card {
  background: #F5F5F5;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  width: 30%;
}

.category-card h3 {
  font-size: 18px;
  color: #256D1B;
}

.category-card p {
  font-size: 14px;
}

/* Featured Buyers Table */
.featured-buyers table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.featured-buyers th, .featured-buyers td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.featured-buyers th {
  background: #256D1B;
  color: white;
}

.featured-buyers a {
  color: #FF9800;
  text-decoration: none;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
  .category-cards {
    flex-direction: column;
  }
  
  .category-card {
    width: 100%;
  }
}
</style>
