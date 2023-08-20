import  View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        // event delegation method (searching for the closest button elements itself)
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
           if(!btn) return;

            const goToPage = +btn.dataset.goto; // converted into number (+)

            handler(goToPage);
        });
    }


    _generateMarkup() {
       
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        //  rounded the resulting number of elements per page if more than set per page = number received pages
        console.log(numPages);
        // variables for pages are set in model.js //js.59
//* last to do custom data atribute =>  add data atributes for searching within each button lead us to elements contain some data as requested in example( data-goto="${curPage + 1}")
        // Page 1, and there are other pages
        if(curPage === 1 && numPages > 1) {
            return `
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page  ${curPage + 1}</span>
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>`
            } 

        // Last page
        if(curPage === numPages && numPages > 1) {
            return `
                <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>
          `;
            }

        // Other page
        if(curPage < numPages) {           
            return `
                <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
               
            </button>
          `;
            }

         // Page 1, there NO other pages
                return '';
    }
}

export default new PaginationView();