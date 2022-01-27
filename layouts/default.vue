<template>
  <v-app class="app">
    <div>
      <div class="flex justify-center w-full xs:h-20 h-40 items-center fixed">
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
