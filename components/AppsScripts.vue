<template>
  <div class="flex flex-row flex-wrap justify-start">
    <div v-for="data in tile" :key="data.id">
      <div class="shadow-pop-tl p-10 m-10 rounded-3xl h-96 md:w-96 overflow-scroll" :class="data.color">
        <div class="flex flex-row place-content-between">
          <h2>
            <b>{{ data.title }}</b>
            <br>
            Code: {{ data.type }}
          </h2>
          <div class="flex flex-col">
            <a :href="data.download" target="_blank">
              <div
                class="rounded-full p-2 px-4 bg-green-light hover:bg-green-dark inline-block shadow-pop-tl1 m-1"
              >
                Download
              </div>
            </a>
            <a :href="data.source" target="_blank">
              <div
                class="rounded-full p-2 px-4 bg-orange-light hover:bg-orange-dark inline-block shadow-pop-tl1 m-1"
              >
                Source
              </div>
            </a>
          </div>
        </div>
        <div>
          {{ data.desc1 }}
          <br />
          {{ data.desc2 }}
          <br />
          {{ data.desc3 }}
          <br />
          {{ data.desc4 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import tileData from "../static/AppsScripts.json";
export default Vue.extend({
  name: "tiles",
  data() {
    return {
      tile: tileData,
    };
  },
});
</script>

<style scoped>
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

.shadow-pop-tl1 {
  -webkit-animation: shadow-pop-tl2 cubic-bezier(0.47, 0, 0.745, 0.715) 200ms
    both;
  animation: shadow-pop-tl2 cubic-bezier(0.47, 0, 0.745, 0.715) 200ms both;
}
.shadow-pop-tl1:hover {
  -webkit-animation: shadow-pop-tl1 cubic-bezier(0.47, 0, 0.745, 0.715) 200ms
    both;
  animation: shadow-pop-tl1 cubic-bezier(0.47, 0, 0.745, 0.715) 200ms both;
}

@-webkit-keyframes shadow-pop-tl1 {
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
@keyframes shadow-pop-tl1 {
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
@-webkit-keyframes shadow-pop-tl2 {
  100% {
    -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  0% {
    -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
      -4px -4px #3e3e3e;
    box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
      -4px -4px #3e3e3e;
    -webkit-transform: translateX(4px) translateY(4px);
    transform: translateX(4px) translateY(4px);
  }
}
@keyframes shadow-pop-tl2 {
  100% {
    -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  0% {
    -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
      -4px -4px #3e3e3e;
    box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
      -4px -4px #3e3e3e;
    -webkit-transform: translateX(4px) translateY(4px);
    transform: translateX(4px) translateY(4px);
  }
}
</style>
