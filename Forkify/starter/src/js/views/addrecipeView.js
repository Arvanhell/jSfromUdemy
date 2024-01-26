import View from "./View.js";
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
   _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  

 // add constructor method
    constructor() {
        super();   // only after we call super then we can use -this kayword
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    // toogle  hide/ show bind  -this keyword
    toogleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

 // add handlers to listening smurfs :)
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toogleWindow.bind(this));
  }
  
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toogleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
 } 
   _generateMarkup() {}
               
  }


export default new AddRecipeView();