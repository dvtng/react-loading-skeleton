import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  external: ['react'],
  output: [
    {
      dir: 'dist',
      format: 'es',

      // This disables the warning "Mixing named and default exports"
      exports: 'named',

      /**
       * This is required to prevent the error:
       *
       * Can't import the named export 'useContext' from non EcmaScript
       * module (only default export is available)
       *
       * This error occurred in a Webpack 4 app (Create React App). We can
       * hopefully remove the `interop` key if React decides to publish an
       * ES module and/or Webpack 4 usage declines.
       *
       * -----
       *
       * Here is the Rollup documentation on `defaultOnly`:
       *
       * Named imports are forbidden. If such an import is encountered,
       * Rollup throws an error even in es and system formats. That way it
       * is ensures that the es version of the code is able to import
       * non-builtin CommonJS modules in Node correctly.
       */
      interop: 'defaultOnly',
      /**
       * This is required to prevent the error:
       *
       * TypeError: createContext only works in Client Components.
       * Add the "use client" directive at the top of the file to use it.
       *
       * -----
       *
       * Here is the Rollup documentation on `banner`:
       * A string to prepend/append to the bundle. You can also
       * supply a function that returns a Promise that resolves
       * to a string to generate it asynchronously
       *
       * (Note: banner and footer options will not
       * break sourcemaps).
       */
      banner: "'use client';",
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',
      banner: "'use client';",
    },
  ],
  plugins: [
    typescript({ exclude: ['**/__tests__/**/*', '**/__stories__/**/*'] }),
    copy({
      targets: [{ src: 'src/skeleton.css', dest: 'dist' }],
    }),
  ],
};
