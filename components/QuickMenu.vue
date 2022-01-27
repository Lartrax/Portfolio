<template>
  <div class="flex items-center flex-col mt-20 w-80 h-full">
      <h1><b>Quick links</b></h1>
    <div class="flex justify-center items-center mt-10 w-full h-14 rounded-full shadow-md">
      <nuxt-link to="/CurriculumVitae">Curriculum Vitae</nuxt-link>
    </div>
    <div class="flex justify-center items-center mt-10 w-full h-14 rounded-full shadow-md">
      <nuxt-link to="/Projects">Projects</nuxt-link>
    </div>
    <div class="flex justify-center items-center mt-10 w-full h-14 rounded-full shadow-md">
      <nuxt-link to="/Downloads">Downloads</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.font {
    font-family: 'Oxygen', sans-serif;
}
</style>
