<template>
  <v-app class="app">
    <div>
      <Background />
      <div class="flex justify-center w-full h-56 xs:h-20 items-center fixed">
        <Navbar />
      </div>
      <div class="flex justify-center w-full h-full">
        <Nuxt class="mt-48 xs:mt-40" />
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
  width: 2.5mm;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3e3e3e;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(20, 20, 20, 50%);
}
</style>
