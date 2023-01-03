# nuxt-shopware-caching
Nuxt-Module, that provides a system to set shopware cache-tags for later use in e.g. a full-page cache.  
This module is meant to be used together with the [companion bundle for Shopware](https://github.com/mothership-gmbh/headless-shopware-varnish-cache)

# Installation
- NPM: `npm install @mothership-gmbh/nuxt-shopware-caching`
- pnpm: `pnpm install @mothership-gmbh/nuxt-shopware-caching`
- Yarn: `yarn add @mothership-gmbh/nuxt-shopware-caching`

# Usage
## Add the module
Add the module in your `nuxt.config.js`:
```js
{
    modules: [
        "@mothership-gmbh/nuxt-shopware-caching"
    ],
        
    nuxtShopwareCaching: {
        useXKey: true // Optional: set to true if you intend to use Varnish xkey 
    }
}
```

## Use the composable in your vue components

```vue
<script setup>
  const {addProductCacheTag} = useCache();
  addProductCacheTag('1234');
</script>
```
The module will then aggregate all cache tags on the page and attach them
- in a comma-separated list to the HTTP response as a `X-Cache-Tags`-header
- in a space-separated list to the HTTP response as a `xkey`-header (if you provided the option in your nuxt config).

Example HTTP-Response headers:
```
X-Cache-Tags: topbar-route,base-navigation,navigation-route-e41d381d990346bebff2a736b7b12c5c,cms-page-da2ad0281b4d4fc4ae7c6f3a68700e59,product-5b5e2f24dced46cdba488c01b9c12130,product-1c150aab458940c28a30202abc404b96
```
or
```
X-Cache-Tags: topbar-route base-navigation navigation-route-e41d381d990346bebff2a736b7b12c5c cms-page-da2ad0281b4d4fc4ae7c6f3a68700e59 product-5b5e2f24dced46cdba488c01b9c12130 product-1c150aab458940c28a30202abc404b96
```

## Reference
### composable useCache
```typescript
export declare const useCache: () => {
    addCacheTag: (tag: string) => void;
    addProductCacheTag: (productId: string) => void;
    addProductListingCacheTag: (productId: string) => void;
    addCategoryCacheTag: (categoryId: string) => void;
    addNavigationRouteCacheTag: (categoryId: string) => void;
    addBaseNavigationCacheTag: () => void;
    addCmsPageCacheTag: (cmsPageId: string) => void;
    addLandingPageCacheTag: (landingPageId: string) => void;
};
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
