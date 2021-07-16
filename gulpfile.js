const {src, dest, parallel, series, watch} = require('gulp'),
      del = require('del'),
      sass = require('gulp-sass')(require('sass')),
      autoprefixer = require('gulp-autoprefixer'),
      notify = require('gulp-notify'),
      sourcemaps = require('gulp-sourcemaps');
      browserSync = require('browser-sync').create(),
      cheerio = require('gulp-cheerio'),
      svgmin = require('gulp-svgmin'),
      replace = require('gulp-replace'),
      svgSprite = require('gulp-svg-sprite'),
      webpack = require('webpack-stream'),
      rename = require('gulp-rename'),
      ttf2woff = require('gulp-ttf2woff'),
      ttf2woff2 = require('gulp-ttf2woff2'),
      tiny = require('gulp-tinypng-compress'),
      gcmq = require('gulp-group-css-media-queries')


const dist = './dist/'
// const dist = './../../Server/OSPanel/domains/oxem-test/'

const clean = () => {
    return del([dist])
}

const styles = () => {
    return src(['./src/assets/sass/**/*.sass', './src/assets/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', notify.onError()))
    .pipe(autoprefixer({
        cascade: false,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(dist + './assets/css/'))
    .pipe(browserSync.stream());
}

const stylesQuery = () => {
    return src('./dist/assets/css/style.min.css')
    .pipe(gcmq())
    .pipe(dest(dist + './assets/css/'));
    
}

exports.stylesQuery = stylesQuery;

const copyHtml = () => {
    return src('./src/**/*.html')
    .pipe(dest(dist))
    .pipe(browserSync.stream());
}

const copyImg = () => {
    return src('./src/assets/img/*.{jpg,jpeg,webp,svg,png,ico,webmanifest,xml}')
    .pipe(dest(dist + 'assets/img'))
}

const copyWebp = () => {
    return src('./src/assets/img/webp/*.webp')
    .pipe(dest(dist + 'assets/img/webp'))
}
const copyFavicons = () => {
    return src('./src/assets/img/favicons/*.{svg,png,ico,webmanifest,xml}')
    .pipe(dest(dist + 'assets/img/favicons'))
}


const copyFonts = () => {
    src('./src/assets/fonts/**/*.ttf')
        .pipe(ttf2woff2())
        .pipe(dest(dist + 'assets/fonts/'));

    return src('./src/assets/fonts/**/*.ttf')
    .pipe(ttf2woff())
    .pipe(dest(dist + 'assets/fonts/'));
    
}



const resources = () => {
    return src('./src/assets/resources/**')
    .pipe(dest(dist + 'assets/resources/'))
    
}

const svgSprites = () => {
    return src('src/assets/img/svg/*.svg')     
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(dest(dist + 'assets/img'));
}

const scripts = () => {
    return src('./src/js/main.js')
    .pipe(webpack({
        mode: 'development',
        output: {
            filename: 'script.js'
        },
        watch: false,
        devtool: "source-map",
        module: {
            rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', {
                                debug: true,
                                corejs: {
                                    version: 3,
                                    proposals: true
                                },
                                useBuiltIns: "usage"
                            }]]
                        }
                    }
                }]
        },
    }))
    .on('error', function (err) {
        console.error('WEBPACK ERROR', err);
        this.emit('end'); // Don't stop the rest of the task
    })
    .pipe(dest(dist + 'js'))
}


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        port: 4000
    });

    watch('./src/assets/sass/**/*.{sass, scss}', styles);
    watch('./src/**/*.html', copyHtml);
    watch('./src/assets/img/webp/*.webp', copyWebp);
    watch('./src/assets/img/favicons/*.{svg,png,ico,webmanifest,xml}', copyFavicons);
    watch('./src/assets/img/**/*.{jpg,jpeg,png,ico,webmanifest,xml}', copyImg);
    watch('./src/assets/fonts/**/*.*', copyFonts);
    watch('./src/assets/img/svg/*.svg', svgSprites);
    watch('./src/js/**/*.js', scripts);
}

exports.styles = styles;
exports.copyHtml = copyHtml;
exports.watchFiles = watchFiles;
exports.clean = clean;
exports.copyFonts = copyFonts;
exports.copyImg = copyImg;



exports.default = series(clean, parallel(copyHtml, scripts, copyImg, copyWebp, copyFavicons, copyFonts, resources, svgSprites), styles, watchFiles);

const stylesBuild = () => {
    return src(['./src/assets/sass/**/*.sass', './src/assets/sass/**/*.scss'])
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', notify.onError()))
    .pipe(autoprefixer({
        cascade: false,
    }))
    .pipe(gcmq())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(dest(dist + './assets/css/'))
    .pipe(browserSync.stream());

}


const copySvgForBuild = () => {
    return src('./src/assets/img/*.svg')
    .pipe(dest(dist + 'assets/img'))
}


const tinypng = () => {
    // return src('./src/assets/img/*.{jpg,jpeg,png')
    return src(['./src/assets/img/**.jpg', './src/assets/img/**.png', './src/assets/img/**.jpeg'])
    .pipe(tiny({
        key: 'BQR7Cjv4gGyTy4yKj79zn4XdH137jlyy',
        log: true
    }))
    .pipe(dest(dist + './assets/img'))
}

exports.tinypng = tinypng;

const scriptsBuild = () => {
    return src('./src/js/main.js')
    .pipe(webpack({
        mode: 'production',
        output: {
            filename: 'script.js'
        },
        watch: false,
        module: {
            rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', {
                                debug: true,
                                corejs: {
                                    version: 3,
                                    proposals: true
                                },
                                useBuiltIns: "usage"
                            }]]
                        }
                    }
                }]
        },
    }))
    .on('error', function (err) {
        console.error('WEBPACK ERROR', err);
        this.emit('end'); // Don't stop the rest of the task
    })
    .pipe(dest(dist + 'js'))
}

const minSvgSprites = () => {
    return src('src/assets/img/svg/*.svg')
    .pipe(svgmin({
        js2svg: {
            pretty: true
        }
    }))
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: "../sprite.svg"
            }
        }
    }))
    .pipe(dest(dist + 'assets/img'));
}

exports.minSvgSprites = minSvgSprites;

exports.build = series(clean, parallel(copyHtml, copyFonts, scriptsBuild, copyWebp, copyFavicons, resources, minSvgSprites), stylesBuild, tinypng, copySvgForBuild);
