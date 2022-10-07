import {getCurrentInstance} from "vue-demi"

export const useCache = () => {
    const vm = getCurrentInstance()
    //@ts-ignore
    const context = (vm.proxy.$nuxt || vm.proxy.$options).context

    const addCacheTag = (tag: string) => {
        context.$cacheTags.addCacheTag(tag)
    }

    const addProductCacheTag = (productId: string) => {
        addCacheTag("product-" + productId)
    }

    const addProductListingCacheTag = (productId: string) => {
        addCacheTag("product-listing-route-" + productId)
    }

    const addCategoryCacheTag = (categoryId: string) => {
        addCacheTag("category-route-" + categoryId)
    }

    const addNavigationRouteCacheTag = (categoryId: string) => {
        addCacheTag("navigation-route-" + categoryId)
    }

    const addBaseNavigationCacheTag = () => {
        addCacheTag("base-navigation")
    }

    const addCmsPageCacheTag = (cmsPageId: string) => {
        addCacheTag("cms-page-" + cmsPageId)
    }

    const addLandingPageCacheTag = (landingPageId: string) => {
        addCacheTag("landing-page-route-" + landingPageId)
    }

    return {
        addCacheTag,
        addProductCacheTag,
        addProductListingCacheTag,
        addCategoryCacheTag,
        addNavigationRouteCacheTag,
        addBaseNavigationCacheTag,
        addCmsPageCacheTag,
        addLandingPageCacheTag,
    }
}
