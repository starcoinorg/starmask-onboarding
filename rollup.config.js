import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = [
  {
    external: ['bowser'],
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/starmask-onboarding.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/starmask-onboarding.es.js',
        format: 'es',
      },
    ],
    plugins: [
      typescript(),
    ],
  }, {
    input: 'src/index.ts',
    output: [{
      file: 'dist/starmask-onboarding.bundle.js',
      format: 'iife',
      name: 'StarMaskOnboarding',
    }],
    plugins: [
      typescript(),
      resolve(),
      commonjs({
        namedExports: {
          'bowser': ['parse'],
        },
      }),
    ],
  }];

export default config;
