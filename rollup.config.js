import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

const banner = {
    banner() {
        return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository.url} @license ${pkg.license} */`;
    }
}
const plugins = [typescript(), tslint(), json(), nodeResolve(), commonjs(), banner];


const umd_out_base = { format: 'umd', name: 'hikerNice', exports: 'named' };

export default {
    input: 'index.ts',
    output: [{
        ...umd_out_base,
        file: 'dist/hiker-nice.js',
    }, {
        ...umd_out_base,
        file: 'dist/hiker-nice.min.js',
        plugins: [terser()]
    }],
    plugins: plugins
};