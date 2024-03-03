<template>
 <div class="dark:bg-zinc-800 dark:text-gray-200 p-4 min-h-screen text-center">
  <div class="flex justify-center mb-4 mt-10">
   <Image class="w-32 h-auto" src="/MarchSweat.png" />
  </div>
  <h2 class="text-4xl uppercase font-pops mt-4">Uh oh...</h2>
  <p>It seems you've encountered an error...</p>
  <h1 class="font-pops text-5xl font-semibold mt-10">
   {{ error.statusCode }}
  </h1>
  <h3 class="font-pops text-3xl my-3">{{ error.message }}</h3>
  <NuxtLink to="/">
   <Button class="!focus:ring-0" label="Take me back home!" link />
  </NuxtLink>
 </div>
</template>

<script setup>
const props = defineProps({
 error: Object,
 required: true,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped></style>
