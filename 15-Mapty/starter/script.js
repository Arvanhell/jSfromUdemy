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

let map, mapEvent;  // <------ global 

 if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);                  // success callback
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`); //* coords live google map
       
    const coords = [latitude, longitude];
    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

   //* handling click on map <--------------------------------- handling click on map
   
       map.on('click', function(mapE){
        mapEvent = mapE;   // <------------ global variable set for scope only to this function
        form.classList.remove('hidden');
        inputDistance.focus(); // first immediatly we can typing in this field
       });

}, 
function(){
    alert ('Could not get your position')   // error callback
    }
);

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
// Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

    //* Display marker <--------------------------------------------- display marker
// console.log(mapEvent); // mouse event on click
        const {lat,lng} = mapEvent.latlng
         L.marker([lat, lng])    // map marker position 
         .addTo(map)
         .bindPopup(L.popup({    // methods for binding markers
            maxWidth: 250,
            minWidth: 100,
            autoclose: false,
            closeOnClick: false,
            className: 'running-popup',

         })
    )
         .setPopupContent('Workout')    // name of poping marker
         .openPopup();
})
// toggle hidden class once a time 
inputType.addEventListener('change', function() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
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

//*                     <----------------------------------------------------------------->
//*                     |                 234. Displaying a Map Marker                    |
//*                     <----------------------------------------------------------------->


//*                     <----------------------------------------------------------------->
//*                     |              235. Rendering Workout Input Form                  |
//*                     <----------------------------------------------------------------->

//*                     <----------------------------------------------------------------->
//*                     |                    236. Project architecture                    |
//*                     <----------------------------------------------------------------->

//*                     <----------------------------------------------------------------->
//*                     |           237. Refactoring for Project Architecture             |
//*                     <----------------------------------------------------------------->

