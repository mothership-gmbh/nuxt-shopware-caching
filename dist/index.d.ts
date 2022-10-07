declare const _default: {
    useCache: () => {
        addCacheTag: (tag: string) => void;
        addProductCacheTag: (productId: string) => void;
        addProductListingCacheTag: (productId: string) => void;
        addCategoryCacheTag: (categoryId: string) => void;
        addNavigationRouteCacheTag: (categoryId: string) => void;
        addBaseNavigationCacheTag: () => void;
        addCmsPageCacheTag: (cmsPageId: string) => void;
        addLandingPageCacheTag: (landingPageId: string) => void;
    };
};
export default _default;
