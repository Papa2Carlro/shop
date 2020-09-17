# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.

Thank for perfect starterkit [wbkd](https://github.com/wbkd/webpack-starter)


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### For create static SVG sprite

```
npm run gulp
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Nunjucks Support via [simple-nunjucks-loader](https://mozilla.github.io/nunjucks/)
* SVG Sprite Support via [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
