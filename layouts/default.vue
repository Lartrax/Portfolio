<template>
  <v-app class="app">
    <div>
      <div class="flex justify-center w-full h-20 items-center sticky">
        <Navbar />
      </div>
      <div class="flex justify-center w-full h-screen">
        <Nuxt />
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.app {
  font-family: "Oxygen", sans-serif;
}
</style>
