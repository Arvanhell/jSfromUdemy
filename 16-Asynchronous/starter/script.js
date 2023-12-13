'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries'); // inject api from server 

///////////////////////////////////////
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
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function (country) {
// old school is no more in use but worth to know how to handle

     // AJAX call country 1 by name
const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    console.log(request.responseText);
    request.addEventListener('load', function() {
    //console.log(this.responseText);
const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    //get neighbour country
const [neighbour] = data.borders;

   // AJAX call country 2 but by code 
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
// one AJAX call depends on another one AJAX call
// and this way if want to get another call in another call and another in another we 
// going troug the //* CALLBACK HELL 
getCountryAndNeighbour('ireland')

// calls AJAX called paralel they appear on web page randomly. depends of loading data


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
            


//*            <----------------------------------------------------------------->
//*            |                  251. Promises and the Fetch API                |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                                |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                                |
//*            <----------------------------------------------------------------->

//*            <----------------------------------------------------------------->
//*            |                                |
//*            <----------------------------------------------------------------->