'use strict';

var plugin = function (_a, inject) {
    var app = _a.app;
    var cache = {
        tags: []
    };
    var addCacheTag = function (tag) {
        if (!cache.tags.includes(tag)) {
            cache.tags.push(tag);
        }
    };
    var getCacheTags = function () { return cache.tags; };
    var cacheTags = { addCacheTag: addCacheTag, getCacheTags: getCacheTags, cache: cache };
    if (process.server) {
        app['context'].ssrContext.$cacheTags = cacheTags;
    }
    inject("cacheTags", cacheTags);
};

module.exports = plugin;
