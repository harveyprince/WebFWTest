const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync');
const del = require('del');

const named = require('vinyl-named');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});
gulp.task('scripts', () => {
  return gulp.src('app/scripts/**/*.pack.js')
      .pipe(named())
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('.tmp/scripts'))
      .pipe(reload({stream: true}));
});
gulp.task('typescripts', () => {
    return gulp.src('app/scripts/**/*.pack.ts')
        .pipe(named())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('.tmp/scripts'))
        .pipe(reload({stream: true}));
});
gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});
gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src('app/page/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});
gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});
gulp.task('serve', ['clean', 'styles', 'scripts','typescripts', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp','app/page'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
  gulp.watch([
    'app/page/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/*.pack.js', ['scripts']);
  gulp.watch('app/scripts/**/*.ts', ['typescripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);

});
gulp.task('build', ['clean', 'styles', 'scripts','typescripts','fonts']);
