const { series, parallel } = require("gulp");

const svgSprite = require("./gulp/svg-sprite.js");

const build = series(parallel(svgSprite.build));

exports.default = build;