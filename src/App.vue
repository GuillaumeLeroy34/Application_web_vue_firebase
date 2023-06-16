<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import BarreNav from './components/BarreNav.vue';

</script>

<template>

  <div class="barreNav"><BarreNav></BarreNav></div>

  <div class="routerview">
      <router-view></router-view>
  </div>
</template>

<style scoped>


.barreNav{
  top: 0;
  overflow-y: "hidden";
  width: 100%;
  position: fixed;
  margin-top: 10px;
  z-index: 2;
}

.routerview{
  
  z-index: 1;
  margin-top: 100px;
}
</style>
