const { build } = require('esbuild');

build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: 'es2015',
    outfile: './dist/bundle.js',
}).catch(() => process.exit(1));
