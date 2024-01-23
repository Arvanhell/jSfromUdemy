//* 
//  * Setting project by npm init 
//  * adding parcel by instal into project by npm i parcel -D
//  * 
//  * CREATING path to icons adding markup for recipe and setting  igredients in proper container
//*
        //recipeContainer.innerHTML = '';                           
        //recipeContainer.insertAdjacentHTML('afterbegin', markup )
/*

import icons from 'url:../img/icons.svg';
console.log(icons);
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    // 1 Loading recipe
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
    const data = await res.json();

    if (!res.ok) throw new Error (`${data.message} (${res.status})`)
      let { recipe } = data.data; // data reci[e as our object
        recipe = {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients,
        };
        console.log(recipe);

        // Rendering recipe
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
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${recipe.ingredients.map(ing => { 
              // an array will contain this markup coresponding to ingredients
              // by join we create big string containing the ingredients
              return `
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${ing.quantity}</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${ing.unit}</span>
                  ${ing.description}
                </div>
              </li>
              `;
            }).join('')}
            


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
      `;
        recipeContainer.innerHTML = '';                           
        recipeContainer.insertAdjacentHTML('afterbegin', markup )

   } catch (err) {
    alert (err)
  }
};
showRecipe();
 

*/
//* ----------------------------------------------------------------------
//* importing icons  
// * rendering spinner in controler file
//* ----------------------------------------------------------------------
/*
const renderSpinner =  function(parentEl) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}
*/
//* ----------------------------------------------------------------------
//* adding regenerator-runtime and core-js and importing them in file controler.js
//* ----------------------------------------------------------------------
// i got FAULTY  msg segmentation fault npm start
/*
npm i core-js regenerator-runtime

import 'core-js/stable';
import 'regenerator-runtime';
*/
//* ----------------------------------------------------------------------
//* listening for  hashchange events
//* ----------------------------------------------------------------------
// window.addEventListener('hashchange', showRecipe) 
// showRecipe is our function wherre hashchange is 
// when we changing our search object into another but we actualy need to get the recipe ID from rthe hash
// by adding 
// const id = window.location.hash.slice(1);
// now we can simply add into our url where our id matching the adress when hash change
// const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

//* ----------------------------------------------------------------------
//* listening for the load events
//* ----------------------------------------------------------------------

// window.addEventListener('load', showRecipe)

//* ----------------------------------------------------------------------
//* instead of both separately we can create loop forEach
//* ----------------------------------------------------------------------

// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe)) 

//* ----------------------------------------------------------------------
//* adding guard clausule if no id hash change simply return
//* ----------------------------------------------------------------------

// if (!id) return

//*
//*
//*

//* from here going to be MVC refactoring 
//* ----------------------------------------------------------------------
//* ----------------------------------------------------------------------

//* creating new file model.js within js/model.js folder and refactoring 
/*
this function is not going to return anything all it will do is to change our state object. Which is contain recipe and into which controler will then grab and take the recipe out of there.

export const state = {
    recipe: {},
};

export const loadRecipe = async function(id) {
try{

    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error (`${data.message} (${res.status})`)
      const { recipe } = data.data; // data reci[e as our object
        state.recipe = {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients,
        };
        console.log(state.recipe);
    } catch (err) {
        alert (err);
    }
};

------------------------------ ------------------------------ ------------------------------
adding within controller file import  
    import * as model from './model.js'

and also calling function
// 1 Loading recipe
     await model.loadRecipe(id);
    const  { recipe }= model.state
*/



//* creating new folder view  withim js/view folder for all files related to Views
    // inside folder view creating new file 
        //* recipeView.js

/*
import icons from 'url:../../img/icons.svg';
import {Fraction} from "fractional";
class recipeView {
    #parentElement = document.querySelector('.recipe');
    #data;

    render (data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear;                         
        this.#parentElement.insertAdjacentHTML('afterbegin', markup )
    }

    #clear() {
        this.#parentElement.innerHTML = '';
    };

    renderSpinner =  function() {
        const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `;
        this.#parentElement.innerHTML = '';
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
      };

    #generateMarkup() {
        return  `
        <figure class="recipe__fig">
          <img src="${this.#data.image}" alt="${this.#data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this.#data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this.#data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this.#data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this.#data.ingredients.map().join('')}
            


        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this.#data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this.#data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
      `;
       
    }

    #generateMarkupIngredient (ing)   { 
            
        return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${ing.unit}</span>
            ${ing.description}
          </div>
        </li>
        `;
      }
}

export default new recipeView();
*/

// importing and caling in controler
//  import recipeView from './views/recipeView.js';
 //       ------------------------------ ------------------------------ ------------------------------        
 //  // 2 Rendering recipe
 //        recipeView.render(model.state.recipe);

//* added npm i fractional 
/*
changed line of code within recipeView creating 

<div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
*/

 //       ------------------------------ ------------------------------ 

 //* Helpers and configutations Files

 //* creating new file config.js within js folder 
 //     js/config.js
// in this file will be added all constant never changes variables 
/* 
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
*/
// and then import them into model file
// import { API_URL } from './config.js';

//* creating new file helpers.js within js folder
    // js/helpers.js
// in this file will be added all helping functions and throwing new errors, timeout if there any delay
/*
import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const getJSON = async function(url) {
    try {
    const res = await Promise.race (fetch(url), timeout(TIMEOUT_SEC));
    const data = await res.json();

    if (!res.ok) throw new Error (`${data.message} (${res.status})`)
    return data;
  } catch (err){    
    throw err;
  }
}
*/
//* adding new constant to config and to export 
    // export const TIMEOU_SEC = 10; 
    //* and import from im helpers.js
        // import { TIMEOU_SEC } from "./config";


//*--------------------------------------------------------------
//*--------------------------------------------------------------
    //* Event handlers publisher subscriber patterns in MVC structure

// In the bublisher Subscriber pattern we have a publisher which is some code 
// that knows when to react. And in this case that's going to be the 
// addHandlerRender function because it will contain the addEventListener method
// and publisher doesnt know yet that subscriber even exist ,subscriber is in the controler 
//that the view cannot access.
    /*
    So the solution is that we can now subscribe to the publisher
    by passing into subscriber function as an argument.
    Now in practise, that means that as soon as the program loads,
    the init function is called which in turn immediately calls
    the addHandlerRender function from the view.
    And that is possible, remeber, because the controler does in fact 
    import both the view and the model, right?
    */
//-----
/*
//* taking from controler.js and implementing into recipeView as

  addHandlerRender(handler) {
      ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler))   // instead controlRecipes
    }
//* implementing in controler instead 
    const init = function () {
        recipeView.addHandlerRender(controlRecipes);
        };
i   nit();
 */
//*--------------------------------------------------------------
//*--------------------------------------------------------------
//* Implementing Error and Success msg
/*
rendering new method error and markup within file recipeView.js

 renderError (message = this.#errorMessage) {
      const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
          `
          this.#clear();
          this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    } 
*/
//* adding rendering error in control.js in catch block
    //  recipeView.renderError(;
//* adding throw err; into catch block in model.js
    // throw.err
//* adding method in recipeView 
    // #errorMessage = `We could not find that recipe. Please try another one!`;

//*--------------------------------------------------------------
//  Searching funcionality Implementing Search Results - Part 1
//*--------------------------------------------------------------

// into model.js adding search method fpr query
/*

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`)
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
        return {
            id: rec.id,
            title: rec.title,
            publisher: rec.publisher,
            image: rec.image_url,
        };
    }); 
    console.log(state.search.result);
  } catch {
    console.log(`${err}💥💥💥💥`);
    throw err;
  }
};
loadSearchResults('pizza');



---------  this will return new array with the new object and we store it into search within const state object
---------
---------------------------------
export const state = {
    recipe: {},
    search: {
        query: '',
        result: [],
    },
};

---------------------------------
----------------------------------
*/

//* Adding new file searchView.js into view/searchView.js 
/*
//* adding into search method handler and submit functionality 
class SearchView {
  _parentEl = document.querySelector('.search')

  getQuery(){
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
}

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler){
    this._parentEl.addEventListener('submit', function(e) {
        e.preventDefault();
        handler();
    })
  };
}

export default new SearchView();

-------

importing into controler --> import searchView from './views/searchView.js';
and adding to try block 

 const query = searchView.getQuery();
 and guard claus 
 if (!query) return
----
within const init = function () {
    searchView.addHandlerSearch(controlSearchResults);
}
init();
 */

//*-------------------------------------------------------------
// Searching funcionality Implementing Search Results - Part 1
//*-------------------------------------------------------------

//* creating new file resultsView and View.js within view folder 
    // view/resultsView.js
    // view/View.js  // this fiolder will be parrent class for other view
/*
taking  from searchView to separate and clean code and inputed into

export default class View {

    _data;
    render (data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();                         
        this._parentElement.insertAdjacentHTML('afterbegin', markup )
    }

     _clear() {
        this._parentElement.innerHTML = '';
    };

    renderSpinner =  function() {
        const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      };
    
    renderError (message = this._errorMessage) {
      const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
          `
          this._clear();
          this._parentElement.insertAdjacentHTML('afterbegin', markup);
    } 

    renderMessage (message = this._message) {
      const markup = `
          <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
          `
          this._clear();
          this._parentElement.insertAdjacentHTML('afterbegin', markup);
    } 
}


//* changing clausule within resultView
'''
import View from './View.js';

import icons from 'url:../../img/icons.svg';
import {Fraction} from "fractional";

class recipeView  extends View {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = `We could not find that recipe. Please try another one!`;
    _message = ``;


'''

*/