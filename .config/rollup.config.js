import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

export default {
    input: 'src/index.ts',
    external: ['react'],
    output: [
        {
            file: 'dist/index.mjs',
            format: 'es',

            // This disables the warning "Mixing named and default exports"
            exports: 'named',

            /**
             * This is required to prevent the error:
             *
             * Can't import the named export 'useContext' from non EcmaScript
             * module (only default export is available)
             *
             * Here is the Rollup documentation on `defaultOnly`:
             *
             * Named imports are forbidden. If such an import is encountered,
             * Rollup throws an error even in es and system formats. That way it
             * is ensures that the es version of the code is able to import
             * non-builtin CommonJS modules in Node correctly.
             */
            interop: 'defaultOnly',
        },
        {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
        },
    ],
    plugins: [
        typescript({ exclude: ['**/__tests__/**/*', '**/__stories__/**/*'] }),
        copy({
            targets: [{ src: 'src/skeleton.css', dest: 'dist' }],
        }),
    ],
}
