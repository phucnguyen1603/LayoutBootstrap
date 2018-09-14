var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync');


gulp.task('sass',function(){
	return gulp.src(['./src/scss/**/*.scss','node_modules/bootstrap/scss/bootstrap.scss','node_modules/animate.css/animate.css'])
	.pipe(sass())
	.pipe(gulp.dest('./src/css'))
	.pipe(bs.stream());
})

gulp.task('js',function(){
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/popper.min.js','node_modules/wow.js/dist/wow.min.js'])
	.pipe(gulp.dest('./src/js/'))
	.pipe(bs.stream());
})

gulp.task ('watch',['sass'],function(){
	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','./src/scss/**/*.scss'],['sass']);
})

gulp.task('font',function() {
	return gulp.src('node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest('./src/fonts'));
})
gulp.task('fa',function() {
	return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
	.pipe(gulp.dest('./src/css'));
})
gulp.task('default',['js','watch','font', 'fa']);