export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  mode: 'spa',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  publicRuntimeConfig: {
    previewUrl:
      process.env.PREVIEW_URL ||
      'https://core.staging.becookies.tech/script.js',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  // <script id="becookies.tech-scripts" async="" src="https://core.staging.becookies.tech/script.js" data-preview="true" data-id="7cb94940-6e0d-11eb-99c1-bbb73faf0e4b" charset="utf-8"></script>
  // <meta name="google-site-verification" content="KWM5elXl5PN_X_Fk5XDQCItMMe5qHYvFJkbZUaDbRqg" />
  // <script id="becookies.tech-scripts" src="https://core.becookies.tech/script.js" data-id="cdf46500-7007-11eb-b393-31e9f2611317" charset="utf-8"></script>
  // <script id="becookies.tech-scripts" src="https://core.becookies.tech/script.js" data-id="0c7bbe50-a2a2-11eb-a94b-a512dc6b7fed" charset="utf-8"></script>
  head: {
    title: 'clinic thasung',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/style/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios',
    '@/plugins/api',
    '@/plugins/base-component',
    '@/plugins/select',
    '@/plugins/toggle',
    '@/plugins/modal',
    '@/plugins/model',
    '@/plugins/notification',
  ],

  loading: false,

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:
      process.env.NODE_ENV == 'production'
        ? '/'
        : process.env.API || 'https://thasung.herokuapp.com',
    credentials: true,
    proxy: true, //process.env.NODE_ENV !== 'production',
  },

  proxy: {
    '/api': {
      target: process.env.API || 'https://thasung.herokuapp.com',
      pathRewrite: { '^/api': '/api' },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
