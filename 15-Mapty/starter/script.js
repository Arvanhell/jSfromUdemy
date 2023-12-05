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

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);

    constructor(coords, distance, duration) {
           // this.date = ...
           //this.od = ...
            this.coords = coords; // [lat, lng] 
            this.distance = distance;  // in km
            this.duration = duration;  // in min
    }
}

class Running extends Workout {
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }
    calcPace() {
        //min /km
        this.pace = this.duration / this.distance;
        return this.pace
    }
}

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }
    calcSpeed() {
        // km /h
        this.speed = this.distance / (this.duration / 60);
        return this.speed
    }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1, cycling1);
//* -----------------------------------
// Application architecture 
class App {
    #map;                   // private class
    #mapEvent               // private class
     constructor() {
            this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this)); 
        inputType.addEventListener('change', this._toggleElevationField); // toggle hidden class
     }

    _getPosition() {
        if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),    // bind --> this <-- keyword 
        function () {
            alert ('Could not get your position')   // error callback
        }
    );
}
     _loadMap(position) {
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            console.log(`https://www.google.pt/maps/@${latitude},${longitude}`); 
            //* coords live google map
               
            const coords = [latitude, longitude];

            this.#map = L.map('map').setView(coords, 13);
        
            L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
        
           //* handling click on map <--------------------------------- handling click on map
           
               this.#map.on('click', this._showForm.bind(this));
        }
     _showForm(mapE) {
        this.#mapEvent = mapE;   // <---- global variable set for scope only to this function
        form.classList.remove('hidden');
        inputDistance.focus(); // <---- first immediatly we can typing in this field
    }
    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        e.preventDefault(); 
        // Clear input fields
            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        
            //* Display marker <--------------------------------------------- display marker
                const {lat,lng} = this.#mapEvent.latlng
                 L.marker([lat, lng])    // map marker position 
                 .addTo(this.#map)
                 .bindPopup(
                    L.popup({    // methods for binding markers
                    maxWidth: 250, minWidth: 100, autoclose: false, closeOnClick: false,className: 'running-popup',
                 })
            )
                 .setPopupContent('Workout')    // name of poping marker
                 .openPopup();
    }
}

const app = new App();






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

//*                     <----------------------------------------------------------------->
//*                     |          238. Managing Workout Data: Creating Classes           |
//*                     <----------------------------------------------------------------->