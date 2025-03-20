<template>
  <div id="app">
    <AppNavbar />
    <router-view></router-view> <!-- Renders the correct page based on route -->
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";

export default {
  components: {
    AppNavbar,
  },
};
</script>
