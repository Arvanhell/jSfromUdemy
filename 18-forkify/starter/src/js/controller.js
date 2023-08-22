import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
    module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return; // if not id then return 
    recipeView.renderSpinner(); 

    //1 Loading recipe
     await model.loadRecipe(id);

    //2 Rendering recipe
     recipeView.render(model.state.recipe);      // rendering all results
    
    } catch (err) {
     recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    
    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render result
    // resultsView.render(model.state.search.results);  // all results
    resultsView.render(model.getSearchResultsPage());  
    // result only set per page within config.js for pagination features

    // 4) Render initial pagination button
    paginationView.render(model.state.search);

  } catch (err) {
    console.log(err);
  }
};


const controlPagination = function (goToPage) {
 // 1) Render new result
    resultsView.render(model.getSearchResultsPage(goToPage));  

  // 2) Render NEW pagination buttons
    paginationView.render(model.state.search);
};

////////////////////////////////////////////fl flowchart part 2
const controlServings = function(newServings){
  // Update the recipe servings (in state)
  model.updateSerrvings(newServings);
  // Update the recipe view
  recipeView.render(model.state.recipe);
}
////////////////////////////////////////////fl flowchart part 2

const init = function (){
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings); // flowchart part 2
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}
init();




