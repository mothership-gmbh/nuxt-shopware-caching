'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vueDemi = require('vue-demi');

var useCache = function () {
    var vm = vueDemi.getCurrentInstance();
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

exports.useCache = useCache;
