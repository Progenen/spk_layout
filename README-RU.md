# gulp-build

<h2>Описание</h2>

gulp-build это сборка для вёрстки статичных сайтов. Gulp-build основан на gulp и webpack.<br/>
Если вы хотите узнать лишь о том как начать разработку с помощью gulp-build советую остановится на данной документации, если <br>
же вы хотите знать о том как протекают процессы рекомендую также ознакомится с файлом gulpfile.js, там уже расставлены комментарии которые помогут вам сориентироваться

<h2>Работа со сброкий</h2>

<h3>Development mode</h3>
Что бы запустить сборку в режиме разработки пропишите в консоли:

```
npm start
```

<h3>Production mode</h3>
Что бы запустить сборку в режиме продакшена пропишите в консоли:

```
npm run build
```

<h2>Задачи сборки</h2>

<ul>
  <li>Минификация картинок без потери качества, конвертация их в webp</li>
  <li>Конвертация sass в css и его минификация</li>
  <li>Автоматичекая расстановка кроссбраузерных префиков</li>
  <li>Сборка JS модулей с помощью wepback, добавление полифилов и минификация</li>
  <li>Создания source-map для JS и CSS файлов (только в режиме разработки)</li>
</ul>
  
<h2>Зависимотси и библиотеки</h2>

<h3>Библиотеки</h3>

<ul>
  <li>bootstrap(default)</li>
</ul>

<h3>Зависимости</h3>

Зависимости в package.json

```
"dependencies": {
    "@babel/polyfill": "^7.12.1",
    "core-js": "^3.17.2",
    "es6-promise": "^4.2.8",
    "jquery": "^3.6.0",
    "nodelist-foreach-polyfill": "^1.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.15.4",
    "@babel/core": "^7.15.5",
    "@babel/preset-env": "^7.15.4",
    "babel-loader": "^8.2.2",
    "browser-sync": "^2.26.14",
    "clean-css": "^5.1.0",
    "cross-env": "^7.0.3",
    "del": "^6.0.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^7.0.1",
    "gulp-clean-css": "^4.3.0",
    "gulp-cli": "^2.3.0",
    "gulp-file-include": "^2.3.0",
    "gulp-group-css-media-queries": "^1.2.2",
    "gulp-if": "^3.0.0",
    "gulp-imagemin": "^7.1.0",
    "gulp-newer": "^1.4.0",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.1.0",
    "gulp-sass-glob": "^1.1.0",
    "gulp-sourcemaps": "^3.0.0",
    "gulp-uglify": "^3.0.2",
    "gulp-webp": "^4.0.1",
    "webpack": "^5.52.0",
    "webpack-cli": "^4.8.0",
    "webpack-stream": "^7.0.0"
  },
```

<h2>Версии</h2>
npm: 8.1.2 <br/>
node: 14.18.1


