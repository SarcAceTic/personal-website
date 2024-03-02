<template>
 <div>
  <section class="mx-2">
    <h2 class="font-pops text-3xl uppercase mb-4">Not So FAQ</h2>
   <Accordion :multiple="true">
    <AccordionTab :pt="faqAccordion" v-for="f in faqs">
     <template #header>
      <h3 class="text-pops">{{ f.header }}</h3>
     </template>
     <p>{{ f.answer }}</p>
    </AccordionTab>
   </Accordion>
  </section>
 </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = [
 {
  header: "How did you start programming?",
  answer:
   "I started right around when I was 10 years old, when I only had a phone, and a dream. I used to make Discord bots with said phone as projects, until I got a laptop at 23rd of August 2022.",
 },
 {
  header: "What the hell does your name mean?",
  answer: "My name came from the word 'Sarcastic'. I tweaked some stuff, and I made 3 names out of one. Sarc, because I just liked the sound of it. Ace, because I had a favorite character whose name was Ace, and Tic because I used to love Tic-Tac-Toe."
 },
 {
  header: "Why are you so chronically online?",
  answer:
   "I grew up with the internet, and it has been stuck with me ever since. It's like the internet is my second dad now. It taught me a lot of useful things, and it helped me mature in a way.",
 },
 {
  header: "Why do you talk like an old man? You're only a teenager!",
  answer:
   "Well... I talk formally most of the time because it's easy to understand for other people, and it's a pretty quick and easy solution on preventing misunderstandings, especially in the digital world, atleast for me.",
 },
 {
  header: "Are you willing to teach me stuff too?",
  answer:
   "Yes, sure, just reach me out on Discord, and you can DM me whenever, although, I could be busy and not respond that much.",
 },
 {
  header: "How are you doing?",
  answer: "I don't know. I don't know how I feel most of the time.",
 },
 {
  header: "What's up with your addiction of ranting?!",
  answer:
   "It's fun. It's very fun to rant about the most ridiculous and out of pocket stuff you could ever imagine, and I won't stop doing it.",
 },
];
const faqAccordion = ref({
 headerAction:
  "dark:bg-transparent dark:hover:text-current dark:hover:bg-zinc-800 font-pops border-x-0 border-t-0 border-b flex flex-row-reverse justify-between",
 content: "!bg-transparent border-none p-4",
 root: "mb-6",
});
</script>

<style scoped></style>
