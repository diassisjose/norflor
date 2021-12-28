const webpack = require("webpack");
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Norflor Empreendimentos Agrícolas",
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "A Norflor Empreendimentos Agrícolas S.A. tem sede administrativa em Montes Claros e florestas de eucalipto no Norte de Minas Gerais, entre os municípios de Grão Mogol, Padre Carvalho e Josenópolis.",
        name: "Norflor Empreendimentos Agrícolas S.A.",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      }
    ],
    script: [
      {
        src: "https://unpkg.com/vue-tel-input"
      },
      {
        src: "https://code.jquery.com/jquery-3.4.1.slim.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css", "aos/dist/aos.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/aos.js", mode: "client" },
    { src: "~/plugins/vuelidate.js"},
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "bootstrap-vue/nuxt",
    "nuxt-lazy-load",
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: false["@nuxtjs/svg"] // Or `bvCSS: false`
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
};
