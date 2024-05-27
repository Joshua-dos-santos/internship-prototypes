<template>
  <div>
    <h1>Timeline Example</h1>
    <div class="timer">{{ formattedTime }}</div>
    <Timeline :value="events" class="timeline">
      <template #content="data">
        <div
          :class="{
            'event-item': true,
            completed: isEventCompleted(data.item),
          }"
          style="border: 1px solid #ced4da; border-radius: 5px"
        >
          <div>{{ data.item.title }}</div>
          <div>{{ data.item.time }}</div>
        </div>
      </template>
    </Timeline>
  </div>
</template>

<script>
import Timeline from "primevue/timeline";

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      events: [
        { title: "Event 1", time: "10:00:00" },
        { title: "Event 2", time: "11:00:00" },
        { title: "Event 3", time: "13:34:35" },
      ],
      currentTime: new Date(),
    };
  },
  computed: {
    formattedTime() {
      return this.currentTime.toLocaleTimeString();
    },
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    },
    isEventCompleted(event) {
      const eventTime = new Date();
      const [hours, minutes, seconds] = event.time.split(":");
      eventTime.setHours(hours, minutes, seconds);
      return eventTime < this.currentTime;
    },
  },
};
</script>

<style scoped>
.event-item {
  color: black;
}

.completed {
  background-color: lightgreen;
}
</style>
