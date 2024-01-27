import View from "./View.js";
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
   _parentElement = document.querySelector('.upload');

   _window = document.querySelector('.add-recipe-window')
   _overlay = document.querySelector('.overlay')
   _btnOpen = document.querySelector('.nav__btn--add-recipe')
   _btnClose = document.querySelector('.btn--close-modal')

   constructor () {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
   }

   toggleWindow(){
    this._overlay.classList.toggle('hidden')
    this._window.classList.toggle('hidden')
   }

   _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this))
    };
   
    _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this))
    this._overlay.addEventListener('click', this.toggleWindow.bind(this))
    };
   //------
    addHandlerUpload() {
     this._parentElement.addEventListener('submit', function(e){
     e.preventDefault();
     // creating data for setting form to uplaod, contain all value we need to add
     // we neeed to add this process in to model
     const data = [...new FormData(this)]; 
     console.log(data);
     });   
    }

   _generateMarkup() {}
  
};

export default new AddRecipeView();