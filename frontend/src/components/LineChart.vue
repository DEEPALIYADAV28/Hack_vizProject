<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from "chart.js/auto";
  
  export default {
    props: ["chartData"],
    mounted() {
      new Chart(this.$refs.chartCanvas, {
        type: "line",
        data: this.chartData,
      });
    },
  };
  </script>
  