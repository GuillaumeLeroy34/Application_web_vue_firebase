<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BarreNav from './components/BarreNav.vue';

</script>

<template>


  <body>
    <div class="barreNav">
      <BarreNav></BarreNav>
    </div>

    <div class="routerview">
      <router-view></router-view>
    </div>
  </body>
</template>

<style scoped>
.barreNav {
  top: 0;
  overflow-y: "hidden";
  width: 100%;
  position: fixed;
  margin-top: 10px;
  z-index: 1;
}

.routerview {

  z-index: 30;
  margin-top: 100px;
}
</style>
