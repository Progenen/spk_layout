const { src, dest, watch, series, parallel } = require('gulp');
const browserSync  = require('browser-sync');
const sass         = require('gulp-sass');
const cleanCSS     = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename       = require("gulp-rename");
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');
const del          = require('del');
const fileinclude  = require('gulp-file-include');
const webpack      = require('webpack');
const webpackStream = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const webp = require('gulp-webp');
const uglify = require('gulp-uglify');


const isDevelopment = process.env.NODE_ENV == 'development' ? true : false; // Check work mode | Смотрим какой режим разработки выбран
const dir = isDevelopment ? 'dist' : 'build'; // Output folder dev = dist, prod = build | Папка с конечными файлами если dev то папка будет dist, если prod то build

// Launch app on localhost | Запускаем приложение на локальном хостинге
function browsersync () {
    browserSync.init({
        server: {
            baseDir: dir
        }
    });
}

// Оптимизация стилей | Optimizing styles
function style () {
    return src('src/sass/**/*.+(scss|sass)')
        .pipe(gulpIf(isDevelopment, sourcemaps.init())) // Инициализация source-maps (Работает только в режиме разработки) | Source-maps initialization (Only works in development mode)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // From sass to css
        .pipe(rename({suffix: '.min', prefix: ''})) // Добавление суффикса min к style.css | Adding min suffix to style.css
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true})) // Автоматическая расстановка кроссбраузерных префиксов | Automatic placement of cross-browser prefixes
        .pipe(cleanCSS({compatibility: 'ie8'})) //
        .pipe(gulpIf(isDevelopment, sourcemaps.write())) // Запись source-maps (Работает только в режиме разработки) | Source-maps entry (Only works in development mode)
        .pipe(dest(dir + "/css")) // Избавляемся от мусора c cleanCSS | Getting rid of garbage with cleanCSS
        .pipe(browserSync.stream()) // Наблюдаем за измениями в стилях | Watching Style Changes
}

// Просто перенос html файлов | Just transferring html files
function html () {
    return src('src/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(dir + '/'))
}

// Сборка JS модулей с помощью webpack | Building JS modules using webpack
function scripts () {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'src/JS/libs/**.js',
        'src/JS/**/*.js'
    ])

    // Настраиваем webpack в зависимости от режима разработки | Configuring webpack depending on the development mode
    .pipe(webpackStream({
        mode: isDevelopment ? 'development' : 'production',
        entry: './src/JS/index.js',
        output: {
            filename: 'bundle.js',
            path: __dirname + '/JS'
        },
        watch: isDevelopment,

        devtool: isDevelopment ? 'source-map' : false,

        // Подключаем библиотеки которые не поддерживают модульную систему | We connect libraries that do not support the modular system
        plugins: [
            new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
            })
        ],

        module: {
            rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', {
                    corejs: 3,
                    useBuiltIns: "usage"
                    }]]
                }
                }
            }
            ]
        }
    }))

    .pipe(dest(dir + '/JS/'))
}

// Наблюдаем за всеми изменениями (gulp-watch) | Watch all changes (gulp-watch)
function startWatch () {
    watch(['src/sass/**/*.+(scss|sass)'], style);
    watch(['src/JS/**/*.js', '!src/**/*.min.js'], scripts);
    watch(['src/*.html'], html);
    watch(['src/*.html']).on('change', browserSync.reload);
    watch(['src/images/**/*'], images);
    watch(['src/fonts/**/*'], fonts);
}


// Оптимизация и конвертация картинок в webp | Optimization and conversion of images to webp
function images () {
    return src('src/images/**/*')
        .pipe(newer(dir + '/images'))
        .pipe(webp())
        .pipe(gulpIf(!isDevelopment, imagemin())) // Оптимизируем картинки если режим разработки prod | We optimize pictures if the prod mode
        .pipe(dest(dir + '/images/'))
}

// Удаление картинок в выходной папке, если те удалены в входящей | Deleting pictures in the output folder, if they were deleted in the input
function cleanImg () {
    return del(dir + '/images/**/*', {force: true})
}

// Удаление шрифтов в выходной папке, если те удалены в входящей | Deleting fonts in the output folder, if they were deleted in the input
function cleanFonts () {
    return del(dir + '/fonts/**/*', {force: true})
}


// Просто перенос шрифтов | Just transferring fonts
function fonts () {
    console.log(dir);
    return src('src/fonts/**/*')
        .pipe(dest(dir + '/fonts/'))
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.style = style;
exports.html = html;
exports.cleanImg = cleanImg;
exports.cleanFonts = cleanFonts;
exports.fonts = fonts;

exports.default = parallel(style, html, scripts, fonts, cleanFonts, images, cleanImg, browsersync, startWatch);

