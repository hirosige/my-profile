const config = require("./.contentful.json")

module.exports = {
  head: {
    title: "Hiro Site",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css"
      }
    ]
  },
  css: [
    "@css/app.css",
    "@fortawesome/fontawesome-free-webfonts",
    "@fortawesome/fontawesome-free-webfonts/css/fa-brands.css",
    "@fortawesome/fontawesome-free-webfonts/css/fa-regular.css",
    "@fortawesome/fontawesome-free-webfonts/css/fa-solid.css",
    { src: "~/node_modules/highlight.js/styles/hopscotch.css", lang: "css" }
  ],
  env: {
    key: {
      CTF_SPACE_ID: config.profile.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: config.profile.CTF_CDA_ACCESS_TOKEN,
      CTF_PERSON_ID: config.profile.CTF_PERSON_ID,
      CTF_BLOG_POST_TYPE_ID: config.profile.CTF_BLOG_POST_TYPE_ID,
      CTF_BLOG_PERSON_ID: config.blog.CTF_PERSON_ID,
      CTF_BLOG_SPACE_ID: config.blog.CTF_SPACE_ID,
      CTF_BLOG_CDA_ACCESS_TOKEN: config.blog.CTF_CDA_ACCESS_TOKEN
    }
  },
  router: {
    middleware: "i18n"
  },
  modules: ["nuxt-device-detect", "@nuxtjs/markdownit"],
  markdownit: {
    injected: true,
    use: ["markdown-it-highlightjs"]
  },
  plugins: ["~/plugins/i18n.js", "~/plugins/globponents.js"],
  loading: { color: "#3B8070" },
  build: {
    vendor: ["axios"],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })

        config.node = {
          fs: "empty"
        }

        const cssLoader = config.module.rules.find(
          loader => loader.test.toString() === "/\\.css$/"
        )
        cssLoader.use.push("postcss-loader")
      }
    }
  }
}
