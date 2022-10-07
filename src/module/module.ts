import path from "path"
import type { Module, Context } from '@nuxt/types'

const cacheModule: Module = function(){
  this['addPlugin']({
    src: path.resolve(__dirname, "plugin.js"),
    options: {
      moduleName: "cache-tags",
    },
  })

  this.nuxt.hook("render:route", (url: string, _result: any, context: Context) => {
    if (!context.res.headersSent) {
      context.res.setHeader(
          "X-Cache-Tags",
          context.$cacheTags.getCacheTags().join(",")
      )
      context.res.setHeader(
          "X-Cache-Tags-Number",
          context.$cacheTags.getCacheTags().length
      )
    } else {
      console.error("Headers already sent:", context.res.statusCode + " " + url)
    }
  })
}

export default cacheModule;
export const meta = require('../package.json');
