// search and content filtering functions

function buildSearchTool($node){

  // create element div, class of search-tool, containing a form,
    // form, id of search-tool, with default or requested attributes
      // an input text field, an input submit button
        // responds enter text and hit enter, responds to enter text and click button with mouse
        // or enter text and tap on button using touch screen
  // TODO: provide API to change textContent and attributes of search tools elements

  const searchTool = document.createElement('div');
  searchTool.setAttribute('class', 'search-tool');

  const searchForm = document.createElement('form');
  searchForm.setAttribute('id', 'search-tool');
  searchTool.append(searchForm);

  const searchInput =  document.createElement('input');
  searchInput.setAttribute('id', 'searchInput');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search ...');

  const searchButton =  document.createElement('input');
  searchButton.setAttribute('id', 'searchButton');
  searchButton.setAttribute('type', 'submit');
  searchButton.setAttribute('value', 'submit');
  searchButton.setAttribute('name', 'Search');

  searchForm.append(searchInput);
  searchForm.append(searchButton);

  return searchTool; // return complete search tool

}

function appendSearchTool($node) {
  // call buildSearchTool and append to parent of $node, before (or above) $node

  $node.parent()[0].firstElementChild.append( buildSearchTool() );

}

function runSearchTool($node, searchInput){

  appendSearchTool($node)  // add search tool (yes, it's a form )

  document.getElementById('search-tool').addEventListener('submit', function(e) {
    // on submit, capture text typed into search input field
    e.preventDefault();

    let $searchResults = document.createElement('ul');
    let searchParam = $('#search-tool input')[0].value.toLowerCase();
    console.log(`search paramater entered: ${searchParam}`);

    if (searchParam){
      hideItems($node);  // hide all, adds style='display:none;' attribute
      $('.pagination').remove('*'); // remove paginaiton links

      for (let i = 0; i < $node.children('li').length; i++) {
      // iterate through each of $node's elements
        if ( $node.children('li')[i].textContent.toLowerCase().includes(searchParam) ) {
        // if any of the element's tags include the word or phrase "seachParam"
          $node.children('li')[i].setAttribute('style','');
          // removes the style attribute
        }
      }

      // let resultsToShow = $searchResults.children().length;
      // let pagesNeeded = math.ceil(resultsToShow/10);

      // $node.append(appendPageLinks($node));
      // show the search results with pagelinks
      document.querySelector('#searchInput').setAttribute('placeholder', 'submit empty search to reset....');

    } else {
      app.js
    }



    });

  }
