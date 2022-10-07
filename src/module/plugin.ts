import type {Plugin} from '@nuxt/types';

interface Cache {
    tags: string[],
}

interface CacheTagApi {
    addCacheTag: (tag: string) => void,
    getCacheTags: () => string[],
    cache: Cache
}

declare module '@nuxt/types' {
    interface Context {
        $cacheTags: CacheTagApi
    }
}

const plugin: Plugin = ({app}, inject) => {
    const cache = {
        tags: <string[]>[],
    }

    const addCacheTag = (tag: string) => {
        if (!cache.tags.includes(tag)) {
            cache.tags.push(tag)
        }
    }
    const getCacheTags = () => cache.tags

    const cacheTags : CacheTagApi = {addCacheTag, getCacheTags, cache}
    if (process.server) {
        app['context'].ssrContext.$cacheTags = cacheTags
    }

    inject("cacheTags", cacheTags)
}

export default plugin;
