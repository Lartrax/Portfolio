<template></template>

<script lang="ts">
import Vue from 'vue';
import tileData from '../static/tiles.json';
export default Vue.extend({
  name: "tiles",
  data() {
    return {
      tile: tileData,
    };
  },
});
</script>

<style></style>
