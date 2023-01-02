import { fileURLToPath } from 'url'
import { defineNuxtModule, createResolver, addImportsDir, installModule } from '@nuxt/kit'

export interface ModuleOptions {
  useXKey?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-shopware-caching',
    configKey: 'nuxtShopwareCaching',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    useXKey: false
  },
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addImportsDir(resolve(runtimeDir, 'composables'))

    // automatically install the dependency-module
    await installModule('nuxt-cache-keys', {
      cacheKeyHeader: options.useXKey ? 'xkey' : 'X-Cache-Tags',
      cacheKeySeparator: options.useXKey ? ' ' : ','
    })
  }
})
