const { src, dest } = require("gulp");
const
    svgSprite = require("gulp-svg-sprite"),
    replace = require("gulp-replace"),
    cheerio = require("gulp-cheerio"),
    svgmin = require("gulp-svgmin");

function svgSpriteBuild() {
    return src("./static/icons/*.svg")
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $("[fill]").removeAttr("fill");
                $("[stroke]").removeAttr("stroke");
                $("[style]").removeAttr("style");
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace("&gt;", ">"))
        .pipe(svgSprite({
            svg: {
                xmlDeclaration: false
            },
            mode: {
                symbol: {
                    sprite: "../_icons-sprite.njk"
                }
            }
        }))
        .pipe(dest("./src/templates/includes"));
}

module.exports = {
    build: svgSpriteBuild
};