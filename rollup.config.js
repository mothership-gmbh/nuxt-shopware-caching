// @ts-check
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

/**
 * @type {import('rollup').RollupOptions}
 */
const options = [
    {
        input: './src/module/module.ts',
        output: [
            {
                file: 'dist/module/module.cjs.js',
                format: 'cjs'
            },
            {
                file: 'dist/module/module.mjs',
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
        input: './src/module/plugin.ts',
        output: [
            {
                file: 'dist/module/plugin.js',
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
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.mjs',
                format: 'esm'
            },
            {
                file: 'dist/index.cjs.js',
                format: 'cjs'
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
