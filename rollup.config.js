import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';

const banner = {
    banner() {
        return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository.url} @license ${pkg.license} */`;
    }
}
const plugins = [typescript(), tslint(), nodeResolve(), commonjs(), banner];


const umd_out_base = { format: 'umd', name: 'hikerNice', exports: 'named' };

export default {
    input: 'index.ts',
    output: {
        ...umd_out_base,
        file: 'dist/hiker-nice.js',
    },
    plugins: plugins
};