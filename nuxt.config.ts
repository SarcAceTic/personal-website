// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 app: {
  head: {
   title: "SarcAceTic",
   link: [
    { rel: "stylesheet", href: "/node_modules/primeicons/primeicons.css" },
    {
     rel: "stylesheet",
     type: "text/css",
     href:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
    },
   ],
  },
 },
 devtools: { enabled: true },
 modules: ["@nuxtjs/color-mode", "nuxt-primevue"],
 css: ["~/assets/css/main.css"],
 srcDir: "./src",
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
 primevue: {
  options: {
  //  ripple: true,
   unstyled: true,
  },
  importPT: { from: "~/presets/lara/" },
 },
 colorMode: {
  classSuffix: "",
 },
});
