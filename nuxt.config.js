import createSitemapRoutes from "./utils/createSitemap";
import { create } from "./utils/feeds";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TFD Blog",
    htmlAttrs: {
      lang: "kh",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  server: {
    host: "0.0.0.0",
    port: 7000,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/country-flag.js", mode: "client" },
    { src: "~/plugins/animxyz.js", mode: "client" },
    { src: "~/plugins/vue-scroll-indicator.js", mode: "client" },
    { src: "~/plugins/vee-validate.js", mode: "client" },
    { src: "~/plugins/vue-infinite-loading.js", mode: "client" },
    { src: "~/plugins/vuex-persist.client.js", mode: "client" },
    { src: "~/plugins/v-lazy-image.js", mode: "client" },
    { src: "~/plugins/vue-vimeo.js" },
    { src: "~/plugins/moment.js" },
    { src: "~/plugins/i18n.js" },
    { src: "~/plugins/axios.js" },
  ],
  serverMiddleware: ["~/api/recaptcha"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
    "@nuxt/image",
    "@nuxtjs/google-analytics",
    "@nuxtjs/device",
  ],
  image: {
    domains: ["tfdevs.com"],
    unsplash: {
      baseURL: "https://images.unsplash.com",
    },
  },
  publicRuntimeConfig: {
    WEB_URL: process.env.WEB_URL,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
    "google-adsense": {
      id: process.env.GOOGLE_ADSENSE_ID,
      test: process.env.GOOGLE_ADSENSE_TEST_MODE === "true",
      analyticsUacct: process.env.GOOGLE_ADSENSE_ID,
    },
    FORMSPREE: process.env.FORMSPREE,
    NODE_ENV: process.env.NODE_ENV,
    INSTAGRAM_URL: process.env.INSTAGRAM_URL,
    FACEBOOK_URL: process.env.FACEBOOK_URL,
    TELEGRAM_URL: process.env.TELEGRAM_URL,
    GITHUB_URL: process.env.GITHUB_URL,
    YOUTUBE_URL: process.env.YOUTUBE_URL,
    SITE_TITLE: process.env.SITE_TITLE,
    EMAIL: process.env.EMAIL,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    GOOGLE_ADSENSE_SLOT: process.env.GOOGLE_ADSENSE_SLOT,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    REPO: process.env.REPO,
    REPO_ID: process.env.REPO_ID,
    REPO_CAT_ID: process.env.REPO_CAT_ID,
    baseURL: process.env.BASE_URL || "http://localhost:80",
    webURL: process.env.WEB_URL || "http://localhost:3000",
    nodeEnv: process.env.NODE_ENV || "development",
    GEETEST_ID_SIGN_UP: process.env.GEETEST_ID_SIGN_UP,
    GEETEST_KEY_SIGN_UP: process.env.GEETEST_KEY_SIGN_UP,
    GEETEST_ID_RESET: process.env.GEETEST_ID_RESET,
    GEETEST_KEY_RESET: process.env.GEETEST_KEY_RESET,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/feed",
    "nuxt-i18n",
    "vue-social-sharing/nuxt",
    "cookie-universal-nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxtjs/auth-next",
    [
      "nuxt-youtube-subscribe-module",
      {
        tag: "YoutubeSubscribeButton",
      },
    ],
    [
      "@nuxtjs/google-adsense",
      {
        id: process.env.GOOGLE_ADSENSE_ID,
      },
    ],
    // "cookie-universal-nuxt",
  ],
  // Feed Configuration
  feed: [
    {
      path: "/feed.xml",
      create,
      cacheTime: 1000 * 60 * 15,
      type: "rss2",
      data: ["kh/project", "xml"],
    },
  ],
  // Sitemap Config
  sitemap: {
    hostname: process.env.WEB_URL,
    gzip: true,
    routes: createSitemapRoutes,
  },
  // motion options
  moment: {
    timezone: true,
    defaultTimezone: "Asia/Phnom_Penh",
    defaultLocale: "km",
    locales: ["km"],
  },
  // i18n options
  i18n: {
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        dir: "ltr",
        moment: "en",
      },
      {
        code: "km",
        iso: "kh-KH",
        file: "kh-KH.js",
        dir: "ltr",
        moment: "km",
      },
    ],
    defaultLocale: "km",
    fallbackLocale: "km",
    // rootRedirect: "kh",
    // strategy: "prefix",
    noPrefixDefaultLocale: true,
    lazy: true,
    loadLanguagesAsync: true,
    langDir: "locales/",
    vueI18n: {
      fallbackLocale: "km",
      messages: {
        "en-US": require("./locales/en-US"),
        "kh-KH": require("./locales/kh-KH"),
      },
    },
  },

  /**
   * Toast Config
   */
  toast: {
    className: "rounded-lg text-base mx-auto mt-24 p-4 shadow-lg",
    position: "top-center",
  },

  // Nuxt Axios
  axios: {
    proxy: true,
    baseURL: process.env.BASE_URL || "http://localhost:80",
    // proxyHeaders: false,
    credentials: true,
  },
  proxy: {
    "/v1/": {
      target: `${process.env.BASE_URL}/v1`,
      pathRewrite: { "^/v1/": "" },
    },
    "/api/": {
      target: `${process.env.WEB_URL}/api`,
    },
  },
  // Nuxt Auth Plugin
  auth: {
    redirect: {
      login: "/",
      logout: "/",
      callback: false,
      home: false,
    },
    rewriteRedirects: false,
    strategies: {
      local: {
        token: {
          property: "accessToken",
          required: true,
          type: "bearer",
        },
        user: {
          property: "false",
          autoFetch: false,
        },
        endpoints: {
          login: {
            url: "v1/auth/login",
            method: "post",
          },
          logout: false,
          user: { url: "v1/auth/me", method: "get" },
        },
      },
    },
  },

  // GA Setting
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    disabled: true,
    checkDuplicatedScript: true,
    debug: {
      enabled: process.env.NODE_ENV !== "release",
      sendHitTask: true,
    },
    autoTracking: {
      screenview: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["vue-vimeo-player"],
    // Add exception
    transpile: ["vee-validate/dist/rules"],
    html: {
      minify: {
        collapseWhitespace: true, // as @dario30186 mentioned
        removeComments: true, // 👈 add this line
      },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
