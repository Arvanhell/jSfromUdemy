class SearchView {
    #parentEl = document.querySelector('.search');

    getQuery() {
        return this.#parentEl.querySelector('.search__field').value;
    }

        // part of the publisher subscriber pattern
    addHandlerSearch(handler) {
        this.#parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}

export default new SearchView();