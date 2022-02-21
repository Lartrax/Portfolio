<template>
  <div>
    <div v-for="data in tile" :key="data.id" class="flex flex-col">
      <div class="shadow-pop-tl p-10 m-10 rounded-3xl" :class="data.color">
        <h2>{{ data.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import tileData from "../static/tiles.json";
export default Vue.extend({
  name: "tiles",
  data() {
    return {
      tile: tileData,
    };
  },
});
</script>

<style>
.shadow-pop-tl {
  -webkit-animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715)
    400ms both;
  animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715) 400ms both;
}
@-webkit-keyframes shadow-pop-tl {
  0% {
    -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
      -4px -4px #3e3e3e;
    box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
      -4px -4px #3e3e3e;
    -webkit-transform: translateX(4px) translateY(4px);
    transform: translateX(4px) translateY(4px);
  }
}
@keyframes shadow-pop-tl {
  0% {
    -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
      -4px -4px #3e3e3e;
    box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
      -4px -4px #3e3e3e;
    -webkit-transform: translateX(4px) translateY(4px);
    transform: translateX(4px) translateY(4px);
  }
}
</style>
