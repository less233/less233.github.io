'use strict'
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
var connect = require('connect')
var serveStatic = require('serve-static')

const spinner = ora(
  'building for ' + process.env.env_config + ' environment...'
)
spinner.start()

rm(path.join(path.resolve(__dirname, '../dist'), 'static'), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    )

    if (stats.hasErrors()) {
      console.log(chalk.red(' Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan(' Build complete.\n'))
    console.log(
      chalk.yellow(
        ' Tip: built files are meant to be served over an HTTP server.\n' +
          " Opening index.html over file:// won't work.\n"
      )
    )

    if (process.env.npm_config_preview) {
      const port = 8000
      const app = connect()

      app.use(
        '/',
        serveStatic('./dist', {
          index: ['index.html', '/']
        })
      )

      app.listen(port, function() {
        console.log(
          chalk.green(`> Listening at  http://localhost:${port}${basePath}`)
        )
      })
    }
  })
})
