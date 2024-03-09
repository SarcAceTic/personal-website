<template>
 <div>
  <section class="mx-6">
   <div class="flex justify-center mb-4">
    <Image class="w-32 h-auto" src="/StelleWatermelon.png" />
   </div>
   <h2 class="font-pops uppercase text-3xl text-center">My Projects</h2>
   <Divider class="my-4" />
   <p class="mb-10">
    These are what I've done so far as a web developer. And these project
    accomplishments will only continue to grow!
   </p>
   <h3 class="font-pops uppercase my-4 mb-6 text-2xl text-center">
    Featured Project
   </h3>
   <div
    class="bg-gradient-to-r from-blue-500 to-purple-500 rounded p-1 align-middle">
    <Card class="!bg-zinc-800">
     <div></div>
     <template #header>
      <Image src="/PersonalWebsite.png" />
     </template>
     <template #title>
      <h4 class="lg:mx-10 font-pops text-xl font-light text-center">
       Personal Website
      </h4>
      <p class="lg:mx-10 text-gray-400 font-normal text-base text-center">
       Made on 25th Feb 2024
      </p>

      <Divider class="lg:!w-5/6 !mx-auto" />
     </template>
     <template #content>
      <p class="-mt-4 lg:w-5/6 mx-auto">
       It's the same website you're in! This is the first project I made with
       Nuxt and Tailwind! So I find it special in my heart, and also because
       it's obviously my main website. And it's the first time I also ever got
       to work on CMS and backend stuff!
      </p>
     </template>
    </Card>
   </div>
   <Divider class="my-6" />

   <Carousel
    class="sm:hidden"
    :value="projects"
    circular
    :numVisible="1"
    :numScroll="1">
    <template #item="p">
     <div class="bg-purple-500 rounded my-8 p-1 mx-2 align-middle">
      <Card class="!bg-zinc-800">
       <template #header>
        <Image :src="p.data.image" />
       </template>
       <template #title>
        <h4 class="font-pops text-xl font-light text-center">
         {{ p.data.name }}
        </h4>
        <p class="text-gray-400 font-normal text-base text-center">
         Made on {{ p.data.date }}
        </p>
        <Divider class="-mb-4" />
       </template>
       <template #content>
        <Button
         v-if="p.data.link"
         :pt="{
          root: 'mb-2 rounded p-1 transition dark:hover:bg-zinc-900',
          label: 'text-purple-500',
         }"
         icon="pi pi-eye"
         label="Preview"></Button>
        <div v-else class="flex flex-row mb-2">
         <span class="pi pi-eye-slash" />
         <p class="ml-2">No preview</p>
        </div>

        <p class="line-clamp-4 md:line-clamp-6` md:h-36">
         {{ p.data.description }}
        </p>
       </template>
      </Card>
     </div>
    </template>
   </Carousel>
   <div class="sm:grid hidden gap-2 grid-cols-2 md:gap-x-6 2xl:grid-cols-3">
    <div
     v-for="p in projects"
     class="bg-purple-500 rounded my-8 p-1 mx-2 align-middle">
     <Card class="!bg-zinc-800">
      <template #header>
       <Image :src="p.image" />
      </template>
      <template #title>
       <h4 class="font-pops text-xl font-light text-center">
        {{ p.name }}
       </h4>
       <p class="text-gray-400 font-normal text-base text-center">
        Made on {{ p.date }}
       </p>
       <Divider class="-mb-4" />
      </template>
      <template #content>
       <NuxtLink v-if="p.link" :to="p.link" target="_blank"><Button
        :pt="{
         root: 'mb-2 rounded p-1 transition dark:hover:bg-zinc-900',
         label: 'text-purple-500',
        }"
        icon="pi pi-eye"
        label="Preview"></Button></NuxtLink>
       <div v-else class="flex flex-row mb-2">
        <span class="pi pi-eye-slash" />
        <p class="ml-2">No preview</p>
       </div>

       <p class="line-clamp-4 md:line-clamp-6 md:h-36">
        {{ p.description }}
       </p>
      </template>
     </Card>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup>
import { ref } from "vue";

const projects = [
 {
  name: "Smile Web",
  image: "/SmileBurger.png",
  description:
   "This project is the very first beginner project that I've made. Pure CSS, HTML, and Vue.JS put to work and dedication. It's based off of a food company from the Yakuza series called the 'Smile Burger'. I didn't know what I was doing... but I'd say I still did good!",
  date: "28nd May 2023",
  link: null,
  glink: "https://github.com/SarcAceTic/smile-web.git",
 },
 {
  name: "Pricing Project",
  image: "/PricingProject.png",
  description:
   "This is the second but smallest beginner project that I've made, and it was all inspired by Frontend Mentor! This was made with pure Vue.js, and it was a pretty fun thing to do!",
  date: "18th Nov 2023",
  link: "https://sarcsprice.vercel.app",
  glink: "https://github.com/SarcAceTic/pricing-project.git",
 },
 {
  name: "MAL Redesign",
  image: "/MALRedesign.png",
  description:
   "This project was made with more experience, and it's the FIRST project that I've used a UI library with, and it's Vuetify! I was pretty satisfied with it, but it wasn't FULLY responsive yet, I was still focusing on UI. This was my attempt on redesigning myanimelist.net... but I discontinued it.",
  date: "23rd Nov 2023",
  link: "https://mal-redesign.vercel.app",
  glink: "https://github.com/SarcAceTic/mal-redesign.git",
 },
 {
  name: "VNDB Redesign",
  image: "/VNDB-Redesign.png",
  description:
   "This was my attempt on vndb.com redesign... And I only managed to do like half of the landing page... And I stopped the project. Yep. I got too stressed.",
  date: "27th Nov 2023",
  link: null,
  glink: "https://github.com/SarcAceTic/vndb-redesign.git",
 },
 {
  name: "Strawb Portfolio",
  image: "/StrawbPortfolio.png",
  description:
   "An artist portfolio I've made for my friend. And oh my god, it's such a HUGE improvement from my last projects. Huge improvement spike. This was the first site I did for a fully responsive one. It's amazing.",
  date: "13th Dec 2023",
  link: "https://strawb-portfolio.vercel.app/",
  glink: "https://github.com/SarcAceTic/strawb-portfolio.git",
 },
 {
  name: "Sarc Portfolio",
  image: "/SarcPortfolio.png",
  description:
   "This was my own Portfolio. I wasn't too proud with it, it lacked some animations and all that, but it's pretty solid I'd say! Though it's now gone has no preview because it's been replaced by this website... Oops.",
  date: "3rd Dec 2023",
  link: "https://sarcacetic.vercel.app",
  glink: "https://github.com/SarcAceTic/personal-portfolio.git",
 },
];
</script>

<style scoped></style>
