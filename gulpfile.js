var gulp = require("gulp");
var auto = require("gulp-autoprefixer")
var sass = require("gulp-sass");
var clean = require("gulp-clean-css");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify")
var server = require("gulp-webserver")
gulp.task("devSass", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(auto({
            browsers: ['last 2 versions'],
        }))
        .pipe(clean())
        .pipe(gulp.dest("./src/css"))

})
gulp.task('devJs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./src/libs'))
})
gulp.task("devServer", function() {
    return gulp.src("src")
        .pipe(server())
})
gulp.task("watch", function() {
    return gulp.watch("./src/scss/*.scss", gulp.series("devSass"))
})