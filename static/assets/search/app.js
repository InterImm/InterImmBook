/* global instantsearch algoliasearch */



  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
    }),
    instantsearch.widgets.clearRefinements({
      container: '#clear-refinements',
    }),
    instantsearch.widgets.refinementList({
      container: '#cat-list',
      attribute: 'permalink',
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: `
          <div>
            <div class="hit-name">
              <a href="{{permalink}}">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</a>
            </div>
            <div class="hit-description">
              {{#helpers.highlight}}{ "attribute": "summary" }{{/helpers.highlight}}
            </div>
            <div class="hit-price">{{tags}}</div>
          </div>
        `,
      },
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
    }),
  ]);

  search.start();
