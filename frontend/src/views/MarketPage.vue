<template>
  <div>
    <h2>Market Information</h2>
    <MarketTrends />
    <PricePrediction />
  </div>
</template>

<script>
import MarketTrends from '../components/MarketTrends.vue';
import PricePrediction from '../components/PricePrediction.vue';

export default {
  name: 'MarketPage',
  components: { MarketTrends, PricePrediction },
};
</script>
