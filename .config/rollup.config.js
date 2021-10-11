import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import React from 'react'
import replace from '@rollup/plugin-replace'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.mjs',
            format: 'es',
        },
        {
            dir: 'dist',
            format: 'cjs',
        },
    ],
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment: true,
        }),
        typescript({ exclude: ['**/__tests__/**/*', '**/stories/**/*'] }),
        copy({
            targets: [{ src: 'src/skeleton.css', dest: 'dist' }],
        }),
        commonjs({
            namedExports: {
                react: Object.keys(React),
            },
        }),
        resolve(),
    ],
}
