'use strict';




class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    cicks = 0;


    constructor(coords, distance, duration) {
           // this.date = ...
           //this.od = ...
            this.coords = coords; // [lat, lng] 
            this.distance = distance;  // in km
            this.duration = duration;  // in min
          
    }

    _setDescription() {
        // prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}

class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        // this.type = 'running';
        this.calcPace();
        this._setDescription();  // scoop chain get the access to parent class
    }
    calcPace() {
        //min /km
        this.pace = this.duration / this.distance;
        return this.pace
    }
}

class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        // this.type = 'cycling'
        this.calcSpeed();
        this._setDescription();    // scoop chain get the access to parent class
    }
    calcSpeed() {
        // km /h
        this.speed = this.distance / (this.duration / 60);
        return this.speed
    }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);
//* <------------------------------------------------------------ Application architecture 

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #map;                   // private class
    #mapZoomLevel = 13;
    #mapEvent               // private class
    #workouts = [];

     constructor() {
           
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this)); 
        inputType.addEventListener('change', this._toggleElevationField); // toggle hidden class
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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

            this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
        
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

    _hideForm() {
        // Empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
          '';
    
            form.style.display = 'none';
            form.classList.add('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000);
      }

    _toggleElevationField() { // <--- hiding form while is set to go
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        const validInput = (...inputs) => 
            inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) =>
            inputs.every( inp => inp > 0);

        e.preventDefault(); 

        //Get data from the form
            const type = inputType.value;
            const distance = +inputDistance.value;
            const duration = +inputDuration.value;
            const {lat,lng} = this.#mapEvent.latlng;
            let workout;

        // Check if data is valid
            
        // If workout running, create running object
            if (type === 'running') {
                const cadence = +inputCadence.value;

                 // Check if data is valid
                 if (
                                    //  !Number.isFinite(distance) || 
                                    //  !Number.isFinite(duration) || 
                                    //  !Number.isFinite(cadence)
                !validInput(distance, duration, cadence) ||
                !allPositive(distance, duration, cadence)
                 ) 
                 return alert('Input have to be positive numbers  📣!');

                workout = new Running([lat,lng], distance, duration, cadence);
                    
            }
        // If workout cycling, create cycling object
            if (type === 'cycling') {
                const elevation = +inputElevation.value;
                // CHECKING VALIDATION 
                if (
                !validInput(distance, duration, elevation) ||
                !allPositive(distance, duration)
                    )
                return alert('Input have to be positive numbers  📣!');

                workout = new Cycling([lat,lng], distance, duration, elevation );
            }
        // Add new object to workout array
                this.#workouts.push(workout);
                 console.log(workout);

         // Render workout on map as marker    
                this._renderWorkoutMarker(workout);
        // Render workout on list
                this._renderWorkout(workout);  
        // Hide form + clear     + Clear input fields    
                this._hideForm();    
    }
     
            //* Display marker <--------------------------------------------- display marker
    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)    // map marker position 
        .addTo(this.#map)
        .bindPopup(
           L.popup({    // methods for binding markers
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`,
        })
        
   )
        .setPopupContent(
            `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
        )
        .openPopup();
        }

        _renderWorkout(workout) {
            let html = `
              <li class="workout workout--${workout.type}" data-id="${workout.id}">
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                  <span class="workout__icon">${
                    workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
                  }</span>
                  <span class="workout__value">${workout.distance}</span>
                  <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                  <span class="workout__icon">⏱</span>
                  <span class="workout__value">${workout.duration}</span>
                  <span class="workout__unit">min</span>
                </div>
            `;
        
            if (workout.type === 'running')
              html += `
                <div class="workout__details">
                  <span class="workout__icon">⚡️</span>
                  <span class="workout__value">${workout.pace.toFixed(1)}</span>
                  <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                  <span class="workout__icon">🦶🏼</span>
                  <span class="workout__value">${workout.cadence}</span>
                  <span class="workout__unit">spm</span>
                </div>
              </li>
              `;
        
            if (workout.type === 'cycling')
              html += `
                <div class="workout__details">
                  <span class="workout__icon">⚡️</span>
                  <span class="workout__value">${workout.speed.toFixed(1)}</span>
                  <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                  <span class="workout__icon">⛰</span>
                  <span class="workout__value">${workout.elevationGain}</span>
                  <span class="workout__unit">m</span>
                </div>
              </li>
              `;
        
            form.insertAdjacentHTML('afterend', html);
          }

          _moveToPopup(e) {
            const workoutEl = e.target.closest('.workout');
            console.log(workoutEl);
            // working on moving from one popup to another on map
            // to find workout between workouts array

            if (!workoutEl) return;

            const workout = this.#workouts.find(
                work => work.id === workoutEl.dataset.id
                );
                console.log(workout);

                this.#map.setView(workout.coords, this.#mapZoomLevel, {
                    aninmate: true,
                    pan: {
                        duration: 1,
                    }
                })
               // using the public interface
               workout.click();
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

//*                     <----------------------------------------------------------------->
//*                     |                     239. Creating a New Workout                 |
//*                     <----------------------------------------------------------------->

//*                     <----------------------------------------------------------------->
//*                     |                         240. Rendering Workouts                 |
//*                     <----------------------------------------------------------------->

//*                     <----------------------------------------------------------------->
//*                     |                    241. Move to Marker On Click                 |
//*                     <----------------------------------------------------------------->

//*                     <----------------------------------------------------------------->
//*                     |                   242. Working with localStorage                |
//*                     <----------------------------------------------------------------->
