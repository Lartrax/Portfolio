<template>
  <v-app class="app">
    <div>
      <div class="flex justify-center w-full h-40 xs:h-20 items-center fixed">
        <Navbar />
      </div>
      <div class="flex justify-center w-full h-full">
        <Nuxt class="mt-48 xs:mt-40" />
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.app {
  font-family: "Oxygen", sans-serif;
}
</style>
