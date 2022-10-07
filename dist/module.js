import path from 'path';

function cacheModule(moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, "plugin.js"),
    options: {
      moduleName: "cache-tags",
    },
  });

  this.nuxt.hook("render:route", (url, result, context) => {
    if (!context.res.headersSent) {
      context.res.setHeader(
        "X-Cache-Tags",
        context.cacheTags.getCacheTags().join(",")
      );
      context.res.setHeader(
        "X-Cache-Tags-Number",
        context.cacheTags.getCacheTags().length
      );
    } else {
      console.error("Headers already sent:", context.res.statusCode + " " + url);
    }
  });
}

module.exports.meta = require('../package.json');

export { cacheModule as default };
