<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import BarreNav from './components/BarreNav.vue';


</script>

<template>
  
  <div class="barreNav"><BarreNav></BarreNav></div>

  <div class="routerview">
      <!-- <router-view></router-view> -->
  </div>
</template>

<style scoped>


.barreNav{
  top: 0;
  
  overflow-y: "hidden";
  height: 100%;
  width: 100%;
  position: fixed;
  margin-top: 10px;
}

.routerview{
  margin-top: 100px;
}
</style>
