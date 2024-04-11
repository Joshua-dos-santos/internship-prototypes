<template>
  <div>
    <div id="table-container" style="height: 400px; overflow-y: auto">
      <table>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody id="table-body" ref="tableBody">
          <!-- Clusterize will populate this tbody -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Clusterize from "clusterize.js";

export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.renderTable();
  },
  methods: {
    renderTable() {
      const clusterize = new Clusterize({
        rows: [],
        scrollId: "table-container",
        contentId: "table-body",
      });
      this.updateRows(clusterize);
    },
    updateRows(clusterize) {
      clusterize.update(
        this.rows.map((row) => {
          return `<tr>${this.headers
            .map((header) => `<td>${row[header]}</td>`)
            .join("")}</tr>`;
        })
      );
    },
  },
  watch: {
    rows() {
      this.updateRows(this.$refs.tableBody.clusterize);
    },
  },
};
</script>

<style scoped>
/* Add your custom CSS styles here */
</style>
