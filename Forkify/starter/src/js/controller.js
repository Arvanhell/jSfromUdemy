import 'core-js/actual';
import * as model from './model.js'
import { MODAL_CLOSE_SEC } from './config.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';


//import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

if(module.hot) {
  module.hot.accept();
};

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1 Update results view to mark selected search result
      resultsView.update(model.getSearchResultsPage());

      // 2 Updating bookmark view 
      bookmarksView.update(model.state.bookmarks);
      
      // 3 Loading recipe
      await model.loadRecipe(id);
      
      // 4 Rendering recipe
      recipeView.render(model.state.recipe);
      
   } catch (err) {
     recipeView.renderError();
     console.error(err);
  }
};

const controlSearchResults = async function() {

  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search result
    await model.loadSearchResults(query);

    // 3) Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination button
    paginationView.render(model.state.search);

  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // Render NEW result
  resultsView.render(model.getSearchResultsPage(goToPage));

  //  Render NEW pagination button
  paginationView.render(model.state.search);

};
const controlServings = function(newServings) {
  // Update the recipe servings ( in state)
    model.updateServings(newServings)

  // Update the recipe view
   // recipeView.render(model.state.recipe);
     recipeView.update(model.state.recipe);
};

const controlAddbookmark = function() {
  // 1) Add/ remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else  model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function() {
  bookmarksView.render(model.state.bookmarks)
}

// publisher subscriber pattern
const controlAddRecipe = async function (newRecipe) {
  try {
    // Render spinner
    addRecipeView.renderSpinner();
  // Upload the new recipe data
   await model.uploadRecipe(newRecipe);
   //console.log(model.state.recipe);

   // Render recipe
   recipeView.render(model.state.recipe);

   // Success message
   addRecipeView.renderMessage();

   // Render bookmark view
   bookmarksView.render(model.state.bookmarks);

   // Change ID in URL
   window.history.pushState(null, '', `#${model.state.recipe.id}`);

   // Close form window
   setTimeout(function() {
    addRecipeView.toggleWindow();
   }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
  console.log('💥', err);
   addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddbookmark)

  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();

