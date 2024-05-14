// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@pinia/nuxt" ,"nuxt-icon" , "@nuxtjs/google-fonts", "@formkit/auto-animate"],
  devtools: { enabled: true },
  app: {
    head: {
    bodyAttrs: {
        class: "transition-all bg-slate-100 dark:bg-neutral-900 font-sans"
      }
    },
  },
  css: ['~/assets/css/main.css'],
    postcss: {
      plugins:{
        tailwindcss:{},
        autoprefixer: {}
      }
    },
    googleFonts: {
      display: "swap",
      families: {
        Jost: true
      }
    }
})