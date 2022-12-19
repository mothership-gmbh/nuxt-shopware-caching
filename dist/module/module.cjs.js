'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

var cacheModule = function () {
    var options = this.options['nuxtShopwareCaching'];
    this['addPlugin']({
        src: path__default["default"].resolve(__dirname, 'plugin.js'),
        options: {
            moduleName: 'cache-tags'
        }
    });
    this.nuxt.hook('render:route', function (url, _result, context) {
        if (!context.res.headersSent) {
            if (options === null || options === void 0 ? void 0 : options.useXKey) {
                context.res.setHeader('xkey', context.$cacheTags.getCacheTags().join(" "));
            }
            else {
                context.res.setHeader('X-Cache-Tags', context.$cacheTags.getCacheTags().join(","));
                context.res.setHeader('X-Cache-Tags-Number', context.$cacheTags.getCacheTags().length);
            }
        }
        else {
            console.error('Headers already sent:', context.res.statusCode + ' ' + url);
        }
    });
};
var meta = require('../../package.json');

exports["default"] = cacheModule;
exports.meta = meta;
