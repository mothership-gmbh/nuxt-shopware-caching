// @ts-check
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

/**
 * @type {import('rollup').RollupOptions}
 */
const options = [
    {
        input: './src/module.ts',
        output: [
            {
                file: 'dist/module.cjs.js',
                format: 'cjs'
            },
            {
                file: 'dist/module.mjs',
                format: 'esm'
            }
        ],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
            }),
        ],
    },
    {
        input: './src/plugin.ts',
        output: [
            {
                file: 'dist/plugin.js',
                format: 'cjs'
            }
        ],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
            }),
        ],
    },
    {
        input: './src/useCache.ts',
        output: [
            {
                file: 'dist/useCache.mjs',
                format: 'esm'
            }
        ],
        external: "vue-demi",
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
            }),
        ],
    }
]

export default options;
