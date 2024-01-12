import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';

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
    // resultsView.render(model.state.search.results);  
    // all results
    
       resultsView.render(model.getSearchResultsPage());  
       // result only set per page within config.js for pagination features
  } catch (err) {
    console.log(err);
  }
};

const init = function (){
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();

//*  ------------------------------------------------------
//*                     285.Section intro
//*  ------------------------------------------------------


//*  ------------------------------------------------------
//*                   286. Section roadmap
//*  ------------------------------------------------------


//*  ------------------------------------------------------
//*             287. Project Overview and Planning (I)
//*  ------------------------------------------------------


//*  ------------------------------------------------------
//*           288. Latest Code Updates (Parcel v2 and more)
//*  ------------------------------------------------------

  // npm init
  // npm i parcel@2 -D
  // npm start
  // npm instal sass

//*  ------------------------------------------------------
//*                 289. Loading Recipe from API
//*  ------------------------------------------------------

/*
const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40'
      );
    const data = await res.json()
    
    if(!res.ok) throw new Error(`${data.message} (${res.status}`);

    console.log(res, data);
    let {recipe} = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image:recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };
    console.log(recipe);
    } catch (err) {
    alert (err);
  }
};
showRecipe()
*/

//*  ------------------------------------------------------
//*          290. Rendering the Recipe.
//*  ------------------------------------------------------
// Importing icons 
/*
// import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../img/icons.svg'; // Parcel 2
*/


/*
const markup = `
 <figure class="recipe__fig">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
            <h1 class="recipe__title">
              <span>${recipe.title}</span>
            </h1>
          </figure>

          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="src/img/icons.svg#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="src/img/icons.svg#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
              <span class="recipe__info-text">servings</span>

              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="src/img/icons.svg#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="src/img/icons.svg#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>

            <div class="recipe__user-generated">
              <svg>
                <use href="src/img/icons.svg#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round">
              <svg class="">
                <use href="src/img/icons.svg#icon-bookmark-fill"></use>
              </svg>
            </button>
          </div>

          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="src/img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">1000</div>
                <div class="recipe__description">
                  <span class="recipe__unit">g</span>
                  pasta
                </div>
              </li>

              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="src/img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">0.5</div>
                <div class="recipe__description">
                  <span class="recipe__unit">cup</span>
                  ricotta cheese
                </div>
              </li>
            </ul>
          </div>

          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${recipe.sourceUrl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="src/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
        `
        recipeContainer.innerHTML = ''; // cleaning if none 
      recipeContainer.insertAdjacentHTML('afterbegin', markup)
*/
//*  ------------------------------------------------------
//*         291. Listening For load and hashchange Events
//*  ------------------------------------------------------

/*
const id = window.location.hash.slice(1);

    //1 Loading recipe
    renderSpiner(recipeContainer); // rendering spinner
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      ```...     ...```

      ['hashchange', load].forEach(ev => window.addEventListener(ev, showRecipe))
//       window.addEventListener('hashchange', showRecipe);
//       window.addEventListener('load', showRecipe);
// */

//*  ------------------------------------------------------
//*               292. The MVC Architecture
//*  ------------------------------------------------------


//*  ------------------------------------------------------
//*               293. Refactoring for MVC
//*  ------------------------------------------------------

// refactoring to the Model Controller View within files 
// model.js - controller.js - recipeView.js

//*  ------------------------------------------------------
//*            294. Helpers and Configuration Files  
//*  ------------------------------------------------------

//*  ---------------------------------------------------------
//*   295.Event handler  in MVC: Publisher-Subscriber Pattern
//*  ---------------------------------------------------------

//*  ---------------------------------------------------------
//*       296. Implementing Error and Success Messages
//*  ---------------------------------------------------------

//*  ---------------------------------------------------------
//*           297. Implementing Search Results - Part 1
//*  ---------------------------------------------------------

//*  ---------------------------------------------------------
//*           298. Implementing Search Results - Part 2
//*  ---------------------------------------------------------

//*  ---------------------------------------------------------
//*           299. Implementing Pagination - Part 1
//*  ---------------------------------------------------------


//*  ---------------------------------------------------------
//*           300. Implementing Pagination - Part 2
//*  ---------------------------------------------------------

//*  ---------------------------------------------------------
//*                   301. Project Planning II
//*  ---------------------------------------------------------



