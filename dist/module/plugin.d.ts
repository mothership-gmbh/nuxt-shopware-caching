import type { Plugin } from '@nuxt/types';
interface Cache {
    tags: string[];
}
interface CacheTagApi {
    addCacheTag: (tag: string) => void;
    getCacheTags: () => string[];
    cache: Cache;
}
declare module '@nuxt/types' {
    interface Context {
        $cacheTags: CacheTagApi;
    }
}
declare const plugin: Plugin;
export default plugin;
