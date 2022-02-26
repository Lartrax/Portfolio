<template>
  <div class="w-full m-20">
    <h1 class="text-3xl ml-10"><b>Downloads</b></h1>
    <div class="flex flex-col md:flex-row justify-between content-between text-lg">
      <div class="flex flex-col w-auto">
        <h2 class="ml-10">Apps/scripts</h2>
        <div>
          <AppsScripts />
        </div>
      </div>
      <div class="flex flex-col w-auto">
        <h2 class="ml-10">Various 3D</h2>
        <div>
          <Various3D />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
