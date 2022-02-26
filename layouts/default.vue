<template>
  <v-app id="top" class="app">
    <div>
      <!--<Background />-->
      <div
        class="flex justify-center w-full h-48 xs:h-20 items-center md:fixed z-20"
      >
        <Navbar />
      </div>
      <div class="flex justify-center w-full z-0">
        <Nuxt class="mt-20 md:mt-40" />
      </div>
      <div class="fixed w-full bottom-1">
        <ToTop />
      </div>
    </div>
  </v-app>
</template>

<style>
.app {
  font-family: "Oxygen", sans-serif;
}

p,
a,
svg,
div,
h1 {
  color: #212121;
  fill: #212121;
}

/* width */
::-webkit-scrollbar {
  width: 0mm;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: transparent;
}
</style>
