import path from 'path';

var cacheModule = function () {
    this['addPlugin']({
        src: path.resolve(__dirname, "plugin.js"),
        options: {
            moduleName: "cache-tags"
        }
    });
    this.nuxt.hook("render:route", function (url, _result, context) {
        if (!context.res.headersSent) {
            context.res.setHeader("X-Cache-Tags", context.$cacheTags.getCacheTags().join(","));
            context.res.setHeader("X-Cache-Tags-Number", context.$cacheTags.getCacheTags().length);
        }
        else {
            console.error("Headers already sent:", context.res.statusCode + " " + url);
        }
    });
};
var meta = require('../../package.json');

export { cacheModule as default, meta };
