<template>
  <div>
    <h1>Drop database [TestPageData.json]</h1>
    <div class="h-12 w-24 bg-blue-light" @click="toggel"></div>
    <div></div>
    <div v-if="this.dropping">
      <div v-for="group in makeGroups" :key="group.id" class="mb-5">
        <h3>
          <b>{{ group.title }}</b>
        </h3>
        <h3>ID: {{ group.id }}</h3>
        <h3>Child of: {{ group.childof }}</h3>
      </div>
    </div>
  </div>
</template>
<style></style>

<script lang="ts">
import Vue from "vue";
import groupData from "../static/TestPageData.json";
export default Vue.extend({
  data() {
    return {
      groupData: {
        id: Number,
        childof: String,
        title: String
      },
      dropping: false,
    };
  },
  computed: {
    makeGroups() {
      return groupData;
    },
  },
  methods: {
    toggel() {
      this.dropping = !this.dropping;
    },
  },
});
</script>
