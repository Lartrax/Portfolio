<template>
  <div class="flex items-center flex-col w-80 h-full">
    <h1><b>Quick links</b></h1>
    <nuxt-link to="/CurriculumVitae">
      <div
        class="flex justify-center items-center mb-5 mt-10 px-5 w-full h-14 rounded-full bg-orange-light hover:bg-orange-dark shadow-pop-tl1"
      >
        Curriculum Vitae
      </div>
    </nuxt-link>
    <nuxt-link to="/Projects">
      <div
        class="flex justify-center items-center my-5 px-5 w-full h-14 rounded-full bg-green-light hover:bg-green-dark shadow-pop-tl2"
      >
        Projects
      </div>
    </nuxt-link>
    <nuxt-link to="/Downloads">
      <div
        class="flex justify-center items-center my-5 px-5 w-full h-14 rounded-full bg-blue-light hover:bg-blue-dark shadow-pop-tl3"
      >
        Downloads
      </div>
    </nuxt-link>
    <nuxt-link to="/AboutMe">
      <div
        class="flex justify-center items-center my-5 px-5 w-full h-14 rounded-full bg-yellow-light hover:bg-yellow-dark shadow-pop-tl4"
      >
        About me
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shadow-pop-tl1 {
  -webkit-animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715)
    400ms both;
  animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715) 400ms both;
}
.shadow-pop-tl2 {
  -webkit-animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715)
    500ms both;
  animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715) 500ms both;
}
.shadow-pop-tl3 {
  -webkit-animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715)
    600ms both;
  animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715) 600ms both;
}
.shadow-pop-tl4 {
  -webkit-animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715)
    700ms both;
  animation: shadow-pop-tl 200ms cubic-bezier(0.47, 0, 0.745, 0.715) 700ms both;
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