import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.mjs',
            format: 'es',

            // This disables the warning "Mixing named and default exports"
            exports: 'named',
        },
        {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
        },
    ],
    plugins: [
        typescript({ exclude: '**/__tests__/**/*' }),
        copy({
            targets: [{ src: 'src/skeleton.css', dest: 'dist' }],
        }),
    ],
}
