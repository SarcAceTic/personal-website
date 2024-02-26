<template>
 <div>
  <nav>
   <header class="p-4 text-gray-100 bg-zinc-900 shadow-2xl">
    <div class="mx-8 my-auto flex justify-between content-center">
     <h2 class="my-auto font-pops text-xl">
      <i class="font-bold not-italic text-primary-600">S</i>arc<i class="font-bold not-italic text-primary-600">A</i>ce<i class="font-bold not-italic text-primary-600">T</i>ic
     </h2>
     <div>
      <Button class="mr-4" :pt="headerButton">Home</Button>
      <Button class="mx-4" :pt="headerButton">About</Button>
      <Button class="ml-4" :pt="headerButton">Blog</Button>
     </div>
     <div class="flex">
        <Divider layout="vertical" />
        <Button class="mx-3" icon="pi pi-moon"></Button>
        <Button class="ml-3" icon="pi pi-github"></Button>
    </div>
    </div>
   </header>
  </nav>
 </div>
</template>

<script setup>
import "primeicons/primeicons.css";
import { ref } from "vue";

const headerButton = ref({
 root: "headerButton",
});
</script>

<style scoped>
.headerButton {
 @apply text-base px-5 py-3 hover:bg-zinc-950 rounded-md font-pops transition;
}
</style>
