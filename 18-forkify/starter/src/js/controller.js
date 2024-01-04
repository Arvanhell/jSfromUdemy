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

//*  ------------------------------------------------------
//*                 289. Loading Recipe from API
//*  ------------------------------------------------------



//*  ------------------------------------------------------
//*          
//*  ------------------------------------------------------

//*  ------------------------------------------------------
//*           
//*  ------------------------------------------------------
