 var gulp = require('gulp'),
    uglify = require('gulp-uglify'), //npm install --save-dev gulp-uglify
    sass = require('gulp-ruby-sass'),
    bourbon = require('bourbon').includePaths,
    neat = require('bourbon-neat').includePaths; 

// Scripts Task
//Uglifies 
//gulp scripts
gulp.task('scripts', function(){
    //src: allows to run command on partiular directory
    //piped to uglify.  
    //dest() uglify requires you put it in a file.
    gulp.src('src/*.js')
        .pipe(uglify()
        .pipe(gulp.dest('minjs')));
});

gulp.task('styles', function(){
    //return sass('sass/**/*.scss')
    return sass('../vendors/bourbon-neat/app/assets/stylesheets/**/*.scss')
        .pipe(gulp.dest('css/d.css'));
    // old syntax
    // gulp.src('sass/**/*.scss')
    //     .pipe(sass())
    //     .pipe(gulp.dest('css/'));
});

//gulp watch
gulp.task('watch', function(){
    //watch any file with the extension of ".js" within the js folder
    //gulp.watch('**/*.js'): any file at all.
    //scripts: is what will happen after js file is changed.
    gulp.watch('src/*.js', ['scripts']); 
});

//defualt means that when i type "gulp" this is what will happen.
//  gulp.task('default', function(){
//     console.log('Hello Word');
//  });

 //defualt with an array of tasks
 gulp.task('default', ['scripts', 'styles', 'watch']);