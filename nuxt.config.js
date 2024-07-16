
export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'einvoice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',

  ],

  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

// function encode(str, key) {

//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         const charCode = str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
//         result += String.fromCharCode(charCode);
//     }
//     return btoa(result);
// }

// function
//     decode(encodedStr, key) {
//     const str = atob(encodedStr); // Giải mã Base64
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         const charCode = str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
//         result += String.fromCharCode(charCode);
//     }
//     return result;
// }


// function _0x532783(str, key) {

// let result = '';
// for (let i = 0; i < str.length; i++) {
//     const charCode = str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
//     result += String.fromCharCode(charCode);
// }
// return btoa(result);
// }

// function
// _0x294ba2(encodedStr, key) {
// const str = atob(encodedStr); // Giải mã Base64
// let result = '';
// for (let i = 0; i < str.length; i++) {
//     const charCode = str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
//     result += String.fromCharCode(charCode);
// }
// return result;
// }