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
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
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
//console.log("Test");

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



//*  ------------------------------------------------------
//*          
//*  ------------------------------------------------------

//*  ------------------------------------------------------
//*           
//*  ------------------------------------------------------
