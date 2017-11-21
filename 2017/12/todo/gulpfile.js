//gulpfile.js

var gulp = require('gulp');
var uglify  = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function(cb) {
  // place code for your default task here
  // console.log('default')//
  var src = [
    'js/lib/config.js',
    'js/src/util.js',
    'js/src/TodoModel.js',
    'js/src/TodoCollection.js',
    'js/src/TodoView.js',
    'js/src/tmpl.js',
    'js/main.js'
  ];
  
  // pump([
  //       gulp.src(src),
  //       uglify(),
  //       gulp.dest('build')
  //   ],
  //   cb
  // );
  return gulp.src(src)
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('build'));
  

});