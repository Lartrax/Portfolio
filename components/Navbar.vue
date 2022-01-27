<template>
  <div class="flex flex-col xs:flex-row mx-20 w-full rounded-b-3xl h-full shadow bg-white">
    <div class="flex justify-center items-center">
      <button class="mx-1 p-4 text-4xl" onclick="history.back()">&lt;</button>
      <a class="mx-1 p-4 pt-5 text-3xl" href="/">LE</a>
      <button class="mx-1 p-4 text-4xl" onclick="history.forward()">&gt;</button>
    </div>
    <div class="flex flex-col justify-end items-center w-full md:flex-row mb-1 md:mb-0">
      <p class="mx-1 px-4">Navbar</p>
      <p class="mx-1 px-4">Navbar</p>
      <p class="mx-1 px-4">Navbar</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>