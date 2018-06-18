var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var config = {
	sass: 'assets/sass/style.scss',
	css_path: 'dist/css-maps',
	img: 'assets/img/**/*.+(png|jpg|gif|svg)',
	img_path: 'dist/img',
};

// compile and minify main sass file
gulp.task('sass', function () {
	return gulp.src(config.sass)
		.pipe(sourcemaps.init())
		.pipe(sass.sync())
		.pipe(minifyCss({
			specialComments: 1,
			format: 'keep-breaks'
		}))
		.pipe(sourcemaps.write(config.css_path)) // output maps to css source maps folder
		.pipe(gulp.dest('./')); // output css file to root dir of theme
});

// setup a watch task for images/scripts/sass - compile sass and move fonts before init
gulp.task('watch', function () {
	gulp.watch('assets/sass/**/*.scss', ['sass']);
	console.log('Watching...');
});

// the defaul task to be run when using gulp command
gulp.task('default', function (callback) {
	runSequence('sass',  'watch');
});
