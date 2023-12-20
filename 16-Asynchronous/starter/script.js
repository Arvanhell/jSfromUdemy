'use strict';



const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries'); // inject api from server 

const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} ${data.demonym} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0, 1].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      <p class="country__row"><span>🌇</span>${data.capital}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(
        response => {if(!response.ok)
   throw new Error(`Country not found (${response.status})`);

return response.json()}
);
}
/*
const getCountryAndNeighbour = function (country) {
//* old school is no more in use but worth to know how to handle

     //* AJAX call country 1 by name
const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    console.log(request.responseText);
    request.addEventListener('load', function() {
    //*console.log(this.responseText);
const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    //*get neighbour country
const [neighbour] = data.borders;

   //* AJAX call country 2 but by code 
const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

   if(!neighbour) return;

   request2.addEventListener('load', function(){
        const data2 = JSON.parse(this.responseText);
        console.log(data2);

        renderCountry(data2, 'neighbour')
   })
}); 
};

//* one AJAX call depends on another one AJAX call
//* and this way if want to get another call in another call and another in another we 
//* going troug the //* CALLBACK HELL 
getCountryAndNeighbour('ireland')

//* calls AJAX called paralel they appear on web page randomly. depends of loading data
*/

//*            <----------------------------------------------------------------->
//*            |                        244. Section Intro                       |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                        245. Section Roadmap                     |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |            246. Asynchronous JavaScript, AJAX and APIs          |
//*            <----------------------------------------------------------------->


   

//*  AJAX   Asonchrynous JavaScript And XML:
//   Allows us to communicate with remote web servers in an //* asynchronous way.
//   With AJAX calls, we can //* request data from web servers dynamically.


//* Client ( e.g browser) ------------- request (asking fir some data) ---->  WEB Sever
//* Client ( e.g browser) <------------ Response (sending data back)   ---->  WEB Server

//* API Aplication Prograning Interface:
// 👉Piece of software that cna be used by another piece of software, in order to allow 
    //* aplication to talk each other. 
    //( very high level of abstraction)

// 👉  There are many types of APIs in web development:
        //* DOM API
        //* Geolocation API 
        //* Own Class API
        //* 'Online' API
// 👉  'Online' API    Aplication  running on a sever, that receioves rerquest for data, and send data back as respomse;
// 👉 We cam build our own web APIs ( requires back-end development, e.g. with node.js)
//    or use //* 3rd-party APIs
                            // ther is an API for everything we lookinmg for,
                            // if was created before is egsist
            // 👉 Weather data, Data about countries, floght data currency conversion data
            //    Apis for sending email or SMS, google Maps
            //   and milliond of possibilities....
//* XML data format is no more in use but name for AJAX are stay 


//  now more popular data format is //* JSON data format

//  The base URL of the API used throughout this section has changed as bellow
// https://countries-api-836d.onrender.com/countries/

 
//*            <----------------------------------------------------------------->
//*            |            248. Our First AJAX Call: XMLHttpRequest             |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |   249. [OPTIONAL] How the Web Works: Requests and Responses     |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                250. Welcome to Callback Hell                    |
//*            <----------------------------------------------------------------->

/*
            setTimeout(() => {
                console.log('1 second gone');
                setTimeout(() => {
                    console.log('2 second gone');
                    setTimeout(() => {
                        console.log('3 second gone');
                        setTimeout(() => {
                            console.log('4 second gone');
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
            
*/


//*            <----------------------------------------------------------------->
//*            |                  251. Promises and the Fetch API                |
//*            <----------------------------------------------------------------->


//const request = new XMLHttpRequest();
//request.open('GET', `https://restcountries.com/v2/name/${country}`);
//request.send();

            //const request = fetch('https://restcountries.com/v2/name/ireland');
            //console.log(request); 
            /*
            Promise {<pending>}
            [[Prototype]]: Promise
            [[PromiseState]]: "fulfilled"
            [[PromiseResult]]: Response
            */

            // const getCountryData = function(country) {
            //     fetch(`https://restcountries.com/v2/name/${country}`)
            //     .then(function (response) {
            //         //console.log(response);
            //         return response.json();
            //     })
            //     .then (function(data) {
            //         console.log(data);
            //         renderCountry(data[0])
            //     });
            // };
            


    // const getCountryData = function (country) {
    //                 // country 1
    //             fetch(`https://restcountries.com/v2/name/${country}`)
    //             .then(
    //                 response => {
    //                     console.log(response);
    //                         if(!response.ok)
    //                         throw new Error(`Country not found (${response.status})`)
    //                     return response.json()
    //                 })
    //             .then(data => {
    //                 renderCountry(data[0]);
    //                 const neighbour = data[0].borders[0];

    //                 if (!neighbour) return;

    //                 //country 2
    //              return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    //             })
    //             .then(response => {
    //                  if (!response.ok)
    //                  throw new Error (`Country not found (${response.status})`);

    //                  return response.json()
    //             })
    //             .then(data => renderCountry(data, 'neighbour'))
    //             .catch(err =>  {
    //                 console.error(`${err}  📣😈`);
    //                 renderError(`Something went wrong,  ${err} 📣😈, please try again.`)
    //             })
    //             .finally(() => {
    //                 // method to use no matter it promise was resolved or not 
    //                 countriesContainer.style.opacity = 1;
    //             })
    //         };

/*
    const getCountryData = function (country) {
        // country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, 
    'Country not found')    

    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
     
        if (!neighbour) throw new Error ('No neighbour found!');

        //country 2
     return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
         'Country not found'
         );
    })
    
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err =>  {
        console.error(`${err}  📣😈`);
        renderError(`Something went wrong, ${err.message}. Try again.`);
    })
    .finally(() => {
        // method to use no matter if promise was resolved or not 
        countriesContainer.style.opacity = 1;
    });
};

            btn.addEventListener('click', function (){
                getCountryData('australia');
            })
          

*/

//*            <----------------------------------------------------------------->
//*            |                      252. Consuming Promises                    |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                      253. Chaining Promises                     |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                  254. Handling Rejected Promises                |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                   255. Throwing Errors Manually                 |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                      256. Codding Challenge 1                   |
//*            <----------------------------------------------------------------->

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY on GPS coords.
For that, you will use a second API to geocode coords.

Here are the tasks:

Part 1.
1. Create a function which takes as inputs a latitude value (lat) and longitude value (lng), 
(these are GPS coords, examples are bellow).
2. Do 'revverse geocoding' of the provided coordinates. Reverse geocoding means to convert
 coords to a meaningful location, like a city and country name. Use this API to reverse 
 geocoding: https:geocode.xyz/api.
The AJAX call will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to ger the data.
 Do NOT use the getJson function we created, that is cheating
3. Once you have the data, take a look at it in the console to see all the attributes that you 
received about the provided location. Then, using this data, log a message like this to the 
console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the conssole.
5. This API allows you to make only 3 request per sevond. If you reload fast, you will get 
this error with code 403. This is an error with the requet. Remember, fetch() does NOT reject
 the promise in this case. So create an error to reject the promise yourself, with a 
 meaningful error message.

 Part 2.

 6. NOw it's time to use the received data to render a country. So take the relevant
  attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

Test Coords:
1: 52.508, 13.381 (lat, lng)
2: 19.037, 72.873
3: -33.933, 18.474

*/

// const whereAmI = function(lat,lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//         if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);

//         return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//         if (!res.ok)
//             throw new Error(`Country not found (${res.status})`);
//             return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));

// };
// because we can take three request in second not always the code is rendered. 
//whereAmI(52.508, 13.381);
//whereAmI(19.037, 72.873);
//whereAmI(-33.933, 18.474);
// and we getting the error from console


//*            <----------------------------------------------------------------->
//*            |        257. Asynchronous Behind the Scenes: The Event Loop      |
//*            <----------------------------------------------------------------->
    /*
    Js Runtime in the browser ( any browser safari chrome ect.) - 
        //*'Container which inckudes all the pieces necessary to execute Js code

    Js Engine
        //* Heart of runtime ( Heap , call stack)

        Heap 
        //* where object are stored in memory
        Call Stack
        //* Where code is actually executed ---> Only one thread of execution.
        //* no multitasking


        WEB APIs 
        //* APIs provided to the engine ( DOM , timers, fetch API )

        Callback Queue ( click, timer, data ....))
        //* Ready to be- executed callback functions (comin from event)

        Event Loop 
        //* sends callbacks from queue to call stack

        //*
        Concurency model //* How Js handles multiple tasks happening in the same time
        //*
    */

        //*--------    ----------------------------------



//*            <----------------------------------------------------------------->
//*            |                258. The Event Loop in Practice                  |
//*            <----------------------------------------------------------------->



    //     console.log('test start');  // 1 because id in global 
    //     setTimeout(() => console.log(`0 sec timer`), 0); // 4 last 
    //     Promise.resolve(`Resolved promise1`).then(res => 
    //     console.log(res)); // 3 micro- task queue will be executed first before 0 sec timer 

    //     Promise.resolve(`Resolved promise 2`).then( res => {
          

            
    //     console.log(res);
    //  })
    //     console.log(`test end`); // 2 as in global but is second in the queue


        /*
        1  test start
        2  test end
        3  Resolved promise 1
        4  Resolved promise 2
        5  0 sec timer
        */


//*            <----------------------------------------------------------------->
//*            |                  259. Building a simple promise                 |
//*            <----------------------------------------------------------------->

     const lotteryPromise =  new Promise(function(resolve, reject){

        console.log('Lottery draw is happening 🔮');
        setTimeout(function() {
            if(Math.random() >= 0.5) {
                //future value of executing promise
                resolve('You WIN 💰'); 
            } else {
                reject('You lost your money 💩');
            } 
     }, 2000)
                  // this is how we encapsulate any asynchronous behaviour in to a Promise
        });
        
        lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))


        // consuming the Promise

       //*     --------->    Promisifying setTimeout   <----------
      /* 
      //*     const wait = function(seconds) {
      //*     return new Promise(function(resolve){
      //*      setTimeout(resolve, seconds * 1000);
      //*      });
      //*    };

    //*    wait(1)
    //*    .then(() => {
    //*    console.log('1 second passed');
    //*    return wait(1);
    //*    })
    //*    .then(() => {
    //*    console.log('2 second passed');
    //*    return wait(1);
    //*    })
    //*    .then(() => {
    //*    console.log('3 second passed');
    //*    return wait(1);
    //*     })
    //*    .then(() => {
        console.log('4 second passed');
    //*  })
    */
//* We can do as above instead of as bellow Callback Hell.... ✔️
       /*
            setTimeout(() => {
                console.log('1 second gone');
                setTimeout(() => {
                    console.log('2 second gone');
                    setTimeout(() => {
                        console.log('3 second gone');
                        setTimeout(() => {
                            console.log('4 second gone');
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
       */

            Promise.resolve('abc').then(x => console.log(x));
            Promise.reject('abc').then(x => console.error(x));

//*            <----------------------------------------------------------------->
//*            |              260. Promisifying the Geolocation API              |
//*            <----------------------------------------------------------------->

          

                const getPosition = function () {
                    return new Promise(function (resolve, reject) {
                        // navigator.geolocation.getCurrentPosition(
                        //     position => resolve(position), // succes callback function
                        //     err => reject(err)          // error callback function
                        // );
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });
                };

// getPosition().then(pos => console.log(pos));
/*

    const whereAmI = function() {
        getPosition()
    .then(pos =>{
           const { latitude: lat, longitude: lng } = pos.coords;

           return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        }) // dont use semicolon before .then
            
    .then(res => {
                if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
    })  // dont use semicolon before .then
    .then(data => {
        //console.log(data);
        //console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })  // dont use semicolon before .then
    .then(res => {
        if (!res.ok)
            throw new Error(`Country not found (${res.status})`);
            return res.json();
    })  // dont use semicolon before .then
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));

};

btn.addEventListener('click', whereAmI);
*/

//*            <----------------------------------------------------------------->
//*            |                     261. Coding Challenge #2                    |
//*            <----------------------------------------------------------------->

/*
//* Coding Challenge #2

Build the image landing functionality that I just showed you on the screen.

Tasks are not super-description this time, so that you can figure out some stuff on your own.
Pretend you're working on your own.

Part 1.
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img)) 
and sets the .src attribute to the provided img path. When the image is done loading, 
append it to the DOM element with the 'images' class, and resolve the promise. 
The fulfilled value should be the image element itself. In case there is an error loading 
the image ('error' event), reject the promise.
//*---
const imgContainer = document.querySelector('.images')

const createImage = function (imgPath) {
    return new Promisr (function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function(){
            reject(new Error('Image not found'))
        })
    });
};
//*---
*/
/*
If this part is too tricky for you, just watch the first part of the solution.

Part 2.
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds usung the wait function
    we create earlier.
4. After the image has passed, hide the curent image (set display to 'none'), and load 
    a second ( HINT: use the image element returned by the createIMage promise to hide 
    the current omage. You will need a global variable for that):
5. After the second image has loaded, pause execution for 2 second agaim;
6. After the 2 second have passed, hide the current image.

TD : Images in the img folder. Test the error handler by passing a wrong image path. 
        Set the network speed to 'fast 3g' inthe dev tools Network tab, otherwise images
        load to fast.
*/
const wait = function(seconds) {
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000);
    });
   };

const imgContainer = document.querySelector('.images')

const createImage = function (imgPath) {
    return new Promise (function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function(){
            reject(new Error('Image not found'));
        });
    });
};

// createImage('img/img-1.jpgd').then(img => { 
    //Error: Image not found at HTMLImageElement <anonymous> 
    let currentImg;

    createImage('img/img-1.jpg')
    .then(img => { 
        currentImg = img;
        console.log('Img 1 loaded');
        return wait(3)
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Img 2 loaded');
        return wait(3)
    })
    .then(() =>{
        currentImg.style.display = 'none';
    })
    .catch(err => console.log(err));

//*            <----------------------------------------------------------------->
//*            |             262. Consuming Promises with Async/Await            |
//*            <----------------------------------------------------------------->

    const whereAmI = async function(country) {
        await fetch(`https://restcountries.com/v2/name/${data.country}`);
    // await is for stop code execution oft his function untill promise will be fulfilled
    }


//*            <----------------------------------------------------------------->
//*            |              260. Promisifying the Geolocation API              |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |              260. Promisifying the Geolocation API              |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |              260. Promisifying the Geolocation API              |
//*            <----------------------------------------------------------------->
