const gulp = require('gulp');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync');
gulp.task('default', function() {
  return gulp.src('app/scripts/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});
gulp.task('serve', ['default'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist','app/page'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

});
