var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

gulp
	// Copy bootstrap to css folder
	.task('copy', function () {
    	gulp
    		.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        	.pipe(gulp.dest('./public/css/'))
    })
	//sass to css
	gulp.task('sass', function(){
		return gulp
			.src('./public/sass/styles.sass')
			.pipe(sass())
			.pipe(gulp.dest('./public/css/'))
	})
	//minify js
	gulp.task('minjs', function() {
		return gulp
			.src('./public/js/script.js')
    		.pipe(uglify()) 
			.pipe(rename({
				suffix: '.min'
			}))
    		.pipe(gulp.dest('./public/js/'));
	})
	//minify css
	gulp.task('mincss', function() {
		return gulp
			.src('./public/css/styles.css')
    		.pipe(cssnano()) 
			.pipe(rename({
				suffix: '.min'
			}))
    		.pipe(gulp.dest('./public/css/'));
    })

	// Build the application
	.task('default', ['copy','sass','minjs','mincss'])
	//.task('default', ['copy','minjs','mincss'])