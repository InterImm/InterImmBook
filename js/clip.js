/*
 * clipboard for hugo
 */

(function(document, Clipboard) {

    var $codes = document.querySelectorAll('pre');

    function addCopy(element) {
        var copy = document.createElement("button");
        copy.className = "copy button is-pulled-right";
        copy.textContent = "copy";
        element.append(copy);
    }

    for (var i = 0, len = $codes.length; i < len; i++) {
        addCopy($codes[i]);
    }


    new Clipboard('.copy', {
        target: function(trigger) {
            return trigger.previousElementSibling;
        }
    });
})(document, Clipboard);