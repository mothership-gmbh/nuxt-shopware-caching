// @ts-check

import typescript from '@rollup/plugin-typescript';


/**
 * Creates an output options object for Rollup.js.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
function createOutputOptions(options) {
    return {
        banner,
        name: '[libraryCamelCaseName]',
        exports: 'named',
        sourcemap: true,
        ...options,
    };
}

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
    input: ['./src/module.js', './src/plugin.js', './src/useCache.ts'],
    external: "vue-demi",
    output: {
        dir: 'dist'
    },
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
        }),
    ],
};

export default options;
