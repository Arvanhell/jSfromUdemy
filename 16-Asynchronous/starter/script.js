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
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      <p class="country__row"><span>🌇</span>${data.capital}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html)
    // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    //countriesContainer.style.opacity = 1;
};
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
    const getJSON = function(url, errorMsg = 'Something went wrong') {
         return fetch(url).then(
             response => {if(!response.ok)
        throw new Error(`Country not found (${response.status})`);

    return response.json()}
    );
  }

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

const whereAmI = function(lat,lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
    })
    //console.log(res);
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
        if (!res.ok)
            throw new Error(`Country not found (${res.status})`);
            return res.json();
    })
    .then(data => renderCountry(data))
    .catch(err => console.error(`${err.message} 💥`));

};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);



//*            <----------------------------------------------------------------->
//*            |                                |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                                |
//*            <----------------------------------------------------------------->
