import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import { terser } from "rollup-plugin-terser"
const formats = ['amd', 'cjs', 'iife', 'umd', 'esm']

const output = formats.map((format) => {
    const result = {
        file: `dist/semantic-regexp.${format}.js`,
        format,
        name: 'SemanticRegExp',
    }
    console.log(format, result);
    return result
})

export default {
    input: 'src/index.ts',
    output,
    plugins: [resolve(), commonjs(), ts({
        useTsconfigDeclarationDir:true,
    }), terser()]
}
