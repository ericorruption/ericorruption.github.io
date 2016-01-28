var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch(['_site/**']).on('change', browserSync.reload);
});
