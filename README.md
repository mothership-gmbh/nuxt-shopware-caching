# nuxt-shopware-caching
Nuxt-Module, that provides a system to set shopware cache-tags for later use in e.g. a full-page cache.  
This module is meant to be used together with the [companion bundle for Shopware](https://github.com/mothership-gmbh/headless-shopware-varnish-cache)

# Installation
- Yarn: `yarn add mothership-gmbh/nuxt-shopware-caching` (currently directly from GitHub-repo)

# Usage
## Add the module
Add the module in your `nuxt.config.js`:
```js
{
    modules: [
        "@mothership-gmbh/nuxt-shopware-caching/module"
    ]
}
```

## Use the composable in your vue components

```js
import { useCache } from "@mothership-gmbh/nuxt-shopware-caching"

export default {
    setup(props) {
        const {addProductCacheTag} = useCache();
        addProductCacheTag(props.productId);
    }
}
```
The module will then aggregate all cache tags on the page and attach them in a comma-separated list to the HTTP 
response as a `X-Cache-Tags`-header.
Example HTTP-Response header: 
```
X-Cache-Tags: topbar-route,base-navigation,navigation-route-e41d381d990346bebff2a736b7b12c5c,cms-page-da2ad0281b4d4fc4ae7c6f3a68700e59,product-5b5e2f24dced46cdba488c01b9c12130,product-1c150aab458940c28a30202abc404b96
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
