export default ({ app }, inject) => {
  const cache = {
    tags: [],
  }

  const addCacheTag = (tag) => {
    if (!cache.tags.includes(tag)) {
      cache.tags.push(tag)
    }
  }
  const getCacheTags = () => cache.tags

  const cacheTags = { addCacheTag, getCacheTags, cache }
  if (process.server) {
    app.context.ssrContext.cacheTags = cacheTags
  }

  inject("cacheTags", cacheTags)
}
