const { src, dest } = require('gulp');
const filter = require("gulp-filter");
const rename = require('gulp-rename');
const changed = require("gulp-changed");
const dutil = require("./utils/doc-util");

module.exports = {

  // Copy documentation to /dist directory
  copyDocs() {
    const docs = ["README.md", "LICENSE.md", "CONTRIBUTING.md"];
    dutil.logMessage("copyDocs", "Copying documentation to /dist");
    return src(docs).pipe(dest("dist"));
  },

  // Copy theme settings files to /dist directory
  copyTheme() {
    dutil.logMessage("copyTheme", "Copying theme settings files to /dist/theme");
    return src('packages/uswds-core/src/theme/*.scss')
      .pipe(dest('dist/theme'));
  },

  // Copy Sass stylesheets to /dist directory
  // TODO: Do we want to copy to the scss any more?
  copySass() {
    dutil.logMessage("copySass", "Copying Sass stylesheets to /dist/scss");
    return src('src/**/**/*.scss')
      .pipe(dest('dist/scss'));
  },

  // Copy images to /dist directory
  copyImages() {
    dutil.logMessage("copyImages", "Copying images to /dist/img");
    return src(['packages/**/src/img/**/*{png,jpg,gif,webp,svg,ico}'])
    .pipe(
      // use only the part of the path specific to the package img dir
      rename((path) => {
        path.dirname = path.dirname.replace(/[a-z-]+?\/src\/img/i, "");
        return path;
      })
    )
    .pipe(dest('dist/img'));
  },

  // Copy fonts to /dist directory
  copyFonts() {
    dutil.logMessage("copyFonts", "Copying fonts to /dist/fonts");
    return src('packages/uswds-core/src/assets/fonts/**/*')
      .pipe(dest('dist/fonts'));
  }
};