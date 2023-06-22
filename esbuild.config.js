const { build } = require('esbuild');
const fs = require('fs-extra');

// dist 폴더 삭제 및 생성
fs.emptyDirSync('dist');

build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    minifyIdentifiers: true,
    minifyWhitespace: true,
    sourcemap: true,
    format: 'esm', // 첫 번째 번들 형식 ES 모듈
    outfile: 'dist/index.min.js', // 압축된 파일명
}).then(() => {
    build({
        entryPoints: ['src/index.ts'],
        bundle: true,
        minify: true,
        minifyIdentifiers: true,
        minifyWhitespace: true,
        sourcemap: true,
        format: 'cjs', // 두 번째 번들 형식
        outfile: 'dist/index.min.cjs', // CommonJS 파일명
    });
}).catch(() => process.exit(1));
