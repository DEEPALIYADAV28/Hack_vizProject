<template>
  <div class="market-trends">
    <h1 class="title">📊 Market Trends</h1>

    <div v-if="loading" class="loading">Loading market data...</div>
    
    <div v-else>
      <div class="market-summary">
        <h2>Latest Market Prices</h2>
        <table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Region</th>
              <th>Price (₹/quintal)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in marketData" :key="index">
              <td>{{ item.crop }}</td>
              <td>{{ item.region }}</td>
              <td>₹{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="chart-container">
        <h2>Price Trends</h2>
        <line-chart :chart-data="chartData" />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";

export default {
  name: "MarketPage",
  components: {
    LineChart,
  },
  data() {
    return {
      loading: true,
      marketData: [],
      chartData: null,
    };
  },
  async created() {
    try {
      setTimeout(() => {
        this.marketData = [
          { crop: "Wheat", region: "Punjab", price: 2500 },
          { crop: "Rice", region: "West Bengal", price: 3200 },
          { crop: "Tomato", region: "Maharashtra", price: 1800 },
          { crop: "Potato", region: "Uttar Pradesh", price: 1500 },
        ];
        this.chartData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Average Price (₹/quintal)",
              data: [2400, 2600, 2800, 3000, 3200],
              borderColor: "#FF9800",
              backgroundColor: "rgba(255,152,0,0.2)",
            },
          ],
        };
        this.loading = false;
      }, 1000);
    } catch (error) {
      console.error("Error fetching market data:", error);
    }
  },
};
</script>

<style scoped>
.market-trends {
  max-width: 900px;
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
  margin-bottom: 15px;
}

.market-summary {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

table th {
  background-color: #256D1B;
  color: white;
}

.chart-container {
  margin-top: 30px;
  padding: 15px;
  background: #F5F5F5;
  border-radius: 10px;
}

.loading {
  font-size: 18px;
  color: #FF9800;
}
</style>
