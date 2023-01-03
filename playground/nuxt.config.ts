import { defineNuxtConfig } from 'nuxt/config'
import Bla from '..'

export default defineNuxtConfig({
  modules: [
    Bla
  ],
  nuxtShopwareCaching: {
    useXKey: true
  }
})
