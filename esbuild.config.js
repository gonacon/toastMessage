const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'cjs',
    minify: true,
    minifyIdentifiers: true,
    minifyWhitespace: true,
    outdir: 'dist',
}).catch(() => process.exit(1));
