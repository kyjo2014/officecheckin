var gulp = require('gulp')
var git = require('gulp-git')

gulp.task('autoCommit', function () {

})

gulp.task('default', function () {
    gulp.watch('app.js', function (event) {
        // console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        let smallthing = 'smallchange'
        console.log(event)
        gulp.src('app.js')
            .pipe(git.commit(smallthing))

        
    });
})
