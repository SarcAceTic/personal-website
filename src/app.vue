<template>
 <NuxtLayout>
  <NuxtPage class="dark:bg-zinc-900 flex-1 p-4 dark:text-gray-200 pt-20" />
 </NuxtLayout>
</template>

<script setup>
import "./primeicons/primeicons.css";
useHead({
 link: [
  {
   rel: "icon",
   type: "image/png",
   href: "/sat-favicon.png",
  },
 ],
});

const colorMode = useColorMode();
</script>
