import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

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
        typescript({ exclude: '**/__tests__/**/*' }),
        copy({
            targets: [{ src: 'src/skeleton.css', dest: 'dist' }],
        }),
    ],
}
