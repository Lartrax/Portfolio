<template>
  <div
    class="flex flex-col xs:flex-row mx-20 w-full rounded-b-3xl h-full border-2 bg-white slide-bottom"
  >
    <div class="flex justify-center items-center">
      <button class="mx-1 p-4 text-4xl" onclick="history.back()">&lt;</button>
      <a class="mx-1 mb-5 p-4 pt-5 text-6xl" href="/">⌂</a>
      <button class="mx-1 p-4 text-4xl" onclick="history.forward()">
        &gt;
      </button>
    </div>
    <div
      class="flex flex-col justify-end items-center w-full md:flex-row mb-1 md:mb-0"
    >
      <p class="mx-1 px-4">Navbar</p>
      <p class="mx-1 px-4">Navbar</p>
      <p class="mx-1 px-4">Navbar</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.slide-bottom {
  -webkit-animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-10rem);
    transform: translateY(-10rem);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-10rem);
    transform: translateY(-10rem);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
<!--
.navbartop {
  top: -40rem;
}

@media (min-width: 500px) {
  .navbartop {
    top: -20rem;
  }
}