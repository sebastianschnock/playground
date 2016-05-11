# meinespielzeugkiste-frontend-test

This is the work result for the frontend-developer test for meinespielzeugkiste.

## Technical notes

### General stuff
I choose using vanilla html, javascript and css with no frameworks, preprocessors etc. I think this fits the scope of the problem. For a bigger project I would have chosen at least a css preprocessor like Sass together with something like libsass/node-sass with a task runner like gulp.

### Browser compability
Since I didn't have a target browser I assume at least IE10. I opted to not use any browser prefixes in the css, for a serious project I would use a mixin library for that.

### BEM
I use the BEM notation for components in html and css, where '__' defines an element and '--' a modifier.

### Css files
For the sake of clarity I moved the css reset/normalize to a separate file. Of course, in production you would use some kind of merging and minifying of css files.

### Image files
In production mode I would merge the images to one sprite sheet to reduce the number of get requests.

## Funny notes
I think I found exactly the same icons you used on http://www.flaticon.com :)

## Not funny notes
I'm totally unhappy with the background image for the how-to section. I doesn't move and scale right, and I think to implement the designs properly I would need to split the image. I took the image from your website, but it doesn't really match the one that is needed for this task (eg the bottom part of the image is way smaller than in the task description).
