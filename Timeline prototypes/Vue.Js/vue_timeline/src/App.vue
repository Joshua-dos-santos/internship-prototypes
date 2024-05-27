<!-- src/App.vue -->
<template>
  <div id="app">
    <TimelineComponent />
  </div>
</template>

<script>
import TimelineComponent from "./components/TimelineComponent.vue";

export default {
  name: "App",
  components: {
    TimelineComponent,
  },
};
</script>

<style>
/* Add your global styles here */
</style>
