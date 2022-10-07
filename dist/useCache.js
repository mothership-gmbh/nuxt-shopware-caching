import { getCurrentInstance } from 'vue-demi';

var useCache = function () {
    var vm = getCurrentInstance();
    //@ts-ignore
    var context = (vm.proxy.$nuxt || vm.proxy.$options).context;
    var addCacheTag = function (tag) {
        context.$cacheTags.addCacheTag(tag);
    };
    var addProductCacheTag = function (productId) {
        addCacheTag("product-" + productId);
    };
    var addProductListingCacheTag = function (productId) {
        addCacheTag("product-listing-route-" + productId);
    };
    var addCategoryCacheTag = function (categoryId) {
        addCacheTag("category-route-" + categoryId);
    };
    var addNavigationRouteCacheTag = function (categoryId) {
        addCacheTag("navigation-route-" + categoryId);
    };
    var addBaseNavigationCacheTag = function () {
        addCacheTag("base-navigation");
    };
    var addCmsPageCacheTag = function (cmsPageId) {
        addCacheTag("cms-page-" + cmsPageId);
    };
    var addLandingPageCacheTag = function (landingPageId) {
        addCacheTag("landing-page-route-" + landingPageId);
    };
    return {
        addCacheTag: addCacheTag,
        addProductCacheTag: addProductCacheTag,
        addProductListingCacheTag: addProductListingCacheTag,
        addCategoryCacheTag: addCategoryCacheTag,
        addNavigationRouteCacheTag: addNavigationRouteCacheTag,
        addBaseNavigationCacheTag: addBaseNavigationCacheTag,
        addCmsPageCacheTag: addCmsPageCacheTag,
        addLandingPageCacheTag: addLandingPageCacheTag
    };
};

export { useCache };
