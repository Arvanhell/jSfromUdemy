'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

 if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);                  // success callback
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`); //* coords live google map
       
    const coords = [latitude, longitude];
    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

}, function(){
    alert ('Could not get your position')   // error callback
});






//*                     <----------------------------------------------------------------->
//*                     |                      230. Project Overview                      |
//*                     <----------------------------------------------------------------->


//*                     <----------------------------------------------------------------->
//*                     |               231. How to Plan a Web Project                    |
//*                     <----------------------------------------------------------------->

//*                     <----------------------------------------------------------------->
//*                     |               232. Using the Geolocation API                    |
//*                     <----------------------------------------------------------------->


//*                     <----------------------------------------------------------------->
//*                     |        233. Displaying a Map Using Leaflet Library              |
//*                     <----------------------------------------------------------------->


/*
Leaflet an opensource JavaScript library for mobile-friendly onteractive maps
leafletjs.com
*/

