const esbuild = require('esbuild')
const sveltePreprocess = require('svelte-preprocess')
const sveltePlugin = require('esbuild-svelte') // esbuild plugin svelte
const autoprefixer = require('autoprefixer')
const postCssPlugin = require('esbuild-plugin-postcss2').default
const tailwindcss = require('tailwindcss')
const liveServer = require('live-server') // dev server

function showUsage() {
  console.log('USAGE')
  console.log('node esbuild.js watch') // build and serve dev files
  console.log('node esbuild.js dev') // build dev files
  console.log('node esbuild.js prod') // build for production
  process.exit(0)
}

if (process.argv.length < 3) {
  showUsage()
}

if (!['dev', 'watch', 'prod'].includes(process.argv[2])) {
  showUsage()
}

// production mode, or not
const production = process.argv[2] === 'prod'

// esbuild watch in dev mode to rebuild out files
let watch = false
if (process.argv[2] === 'watch') {
  watch = {
    onRebuild(error) {
      if (error) console.error('esbuild: Watch build failed:', error.getMessage())
      else console.log('esbuild: Watch build succeeded')
    }
  }
  liveServer.start({
    port: 8080, // Set the server port. Defaults to 8080.
    root: './public', // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    logLevel: 2 // 0 = errors only, 1 = some, 2 = lots
  })
}

// esbuild build options, see: https://esbuild.github.io/api/#build-api
const options = {
  entryPoints: ['./src/main.ts'],
  bundle: true,
  watch,
  format: 'iife',
  target: 'es6',
  minify: production,
  sourcemap: false,
  outfile: './public/build/bundle.js', // and bundle.css
  pure: production ? ['console.log', 'console.time', 'console.timeEnd'] : [],
  legalComments: 'none',
  plugins: [
    sveltePlugin({ preprocess: sveltePreprocess() }),
    postCssPlugin({
      plugins: [autoprefixer, tailwindcss]
    })
  ]
}

// esbuild dev + prod
esbuild.build(options).catch((err) => {
  console.error(err)
  process.exit(1)
})
