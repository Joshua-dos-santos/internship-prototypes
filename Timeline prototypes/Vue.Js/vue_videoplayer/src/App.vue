<template>
  <video-player :options="videoOptions" />
</template>

<script>
import VideoPlayer from "./components/HelloWorld.vue";
import "video.js/dist/video-js.css";

export default {
  name: "App",
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "/video.mp4",
            type: "video/mp4",
          },
        ],
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
