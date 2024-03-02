<template>
 <div>
  <nav>
   <header class="z-40 p-4 text-gray-100 bg-zinc-800/[0.9] backdrop-blur-sm shadow-2xl fixed top-0 left-0 right-0">
    <div class="mx-8 my-auto flex justify-between content-center">
     <div class="flex">
      <Image src="/sat-logo.png" class="h-auto w-20 my-auto mr-6" />
      <h2 class="my-auto font-pops text-xl hidden lg:inline">
       <i class="font-bold not-italic text-primary-600">S</i>arc<i class="font-bold not-italic text-primary-600">A</i>ce<i class="font-bold not-italic text-primary-600">T</i>ic
      </h2>
     </div>
     <div class="hidden md:inline">
      <Button class="mr-4" :pt="headerButton">Home</Button>
      <Button class="mx-4" :pt="headerButton">About</Button>
      <Button v-ripple class="ml-4 p-ripple" :pt="headerButton">Blog</Button>
     </div>
     <div class="hidden md:flex">
      <Divider layout="vertical" />
      <Button class="mx-3" icon="pi pi-moon"></Button>
      <Button class="ml-3" icon="pi pi-github"></Button>
     </div>
     <Button
      icon="pi pi-bars"
      :pt="menuHeaderButton"
      @click="headerSidebar = true"></Button>
     
    </div>
    <Sidebar
      v-model:visible="headerSidebar"
      :pt="{ root: 'w-72 overscroll-none overflow-scroll', content: '!p-0' }"
      :pt-options="{ mergeProps: true }">
      <template #header>
       <h2 class="text-xl">Menu</h2>
      </template>
      <Divider class="!my-0 !mb-6" />
      <div class="w-full">
       <h3 class="font-pops font-medium text-xl mb-6 ml-4">NAVIGATION</h3>
       <ul class="flex flex-col">
        <li
         class="flex py-4 transition ease-in-out duration-300 hover:dark:bg-surface-900 hover:dark:text-primary-500">
         <i class="pi pi-home my-auto ml-5 mr-8"></i>
         <p class="text-lg">Home</p>
        </li>
        <li
         class="flex py-4 transition ease-in-out duration-300 hover:dark:bg-surface-900 hover:dark:text-primary-500">
         <i class="pi pi-info my-auto ml-5 mr-8"></i>
         <p class="text-lg">About</p>
        </li>
        <li
         class="flex py-4 transition ease-in-out duration-300 hover:dark:bg-surface-900 hover:dark:text-primary-500">
         <i class="pi pi-book my-auto ml-5 mr-8"></i>
         <p class="text-lg">Blog</p>
        </li>
       </ul>
       <h3 class="font-pops font-medium text-xl mb-6 mt-4 ml-4">
        MISCELLANEOUS
       </h3>
       <Button
        class="mx-3 mb-5 w-56"
        label="Light Mode"
        icon="pi pi-moon"></Button>
       <Button
        class="ml-3 w-56"
        label="Github Repository"
        icon="pi pi-github"></Button>
      </div>
     </Sidebar>
   </header>
  </nav>
 </div>
</template>

<script setup>
import { ref } from "vue";

const headerSidebar = ref(false);
const headerButton = ref({
 root: "headerButton",
});
const menuHeaderButton = ref({
 root:
  "bg-transparent transition hover:bg-zinc-900 p-2 text-slate-200 my-auto md:hidden rounded-full",
});
</script>

<style scoped>
.headerButton {
 @apply text-base px-5 py-3 hover:bg-zinc-950 rounded-md font-pops transition;
}
</style>
