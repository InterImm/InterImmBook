require(["gitbook"], function(gitbook) {
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$','$'], ['\\(','\\)']],
            displayMath: [ ["$$","$$"], ["\\[","\\]"] ],            
            processEscapes: true
        }
    });


    gitbook.events.bind("page.change", function() {
        MathJax.Hub.Typeset()
    });
});
