<template>
  <div
    class="flex flex-col xs:flex-row mx-20 w-full rounded-b-3xl h-full border-2 border-black bg-white slide-bottom blurry"
  >
    <div class="flex justify-center items-center h-1/2 xs:h-auto">
      <button class="mx-1 p-4 text-4xl blur" onclick="history.back()">
        &lt;
      </button>
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
@media (min-width: 770px) {
  .blurry {
    opacity: 0.05;
    transition: opacity 0.1s;
  }

  .blurry:hover {
    opacity: 1;
  }
}

.slide-bottom {
  -webkit-animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    200ms both;
  animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms both;
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
