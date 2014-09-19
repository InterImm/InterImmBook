var katex = require("katex");
var cheerio = require("cheerio");

module.exports = {
    book: {
        assets: "./static",
        js: [],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        css: [
            "katex.min.css"
        ]
    },
    hooks: {
        page: function(page) {
            for (var i in page.sections) {
                section = page.sections[i];
                if ( section.type != "normal" ) continue;

                var $ = cheerio.load(section.content);
                $("script").each(function() {
                    // Check is math
                    var type = $(this).attr("type") || "";
                    if (type.indexOf("math/tex") < 0) return;

                    var math = $(this).html();
                    $(this).replaceWith(katex.renderToString(math));
                });

                // Replace by transform
                section.content = $.html();
            }

            return page;
        }
    }
};
