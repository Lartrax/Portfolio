<template>
  <div class="flex items-center flex-col mt-48 xs:mt-40 w-80 h-full">
    <h1><b>Quick links</b></h1>
    <nuxt-link to="/CurriculumVitae">
      <div
        class="flex justify-center items-center mb-5 mt-10 px-5 w-full h-14 rounded-full shadow-md"
      >
        Curriculum Vitae
      </div>
    </nuxt-link>
    <nuxt-link to="/Projects">
      <div
        class="flex justify-center items-center my-5 px-5 w-full h-14 rounded-full shadow-md"
      >
        Projects
      </div>
    </nuxt-link>
    <nuxt-link to="/Downloads">
      <div
        class="flex justify-center items-center my-5 px-5 w-full h-14 rounded-full shadow-md"
      >
        Downloads
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.font {
  font-family: "Oxygen", sans-serif;
}
</style>
