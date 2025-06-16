document.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.forEach(el => {
        if (typeof clickMenu[el] === 'function') {
            clickMenu[el]();
        };

    })
});

const clickMenu = {

    'menu': document.querySelector('.menu'),
    'modal':document.querySelector('.modal'),

    toggle() {
        this.menu.classList.toggle('menu--open');
        this.menu.classList.toggle('menu--close');
        // this.modal.classList.toggle('modal--open');
        // this.modal.classList.toggle('modal--close');
    },

    'button--type--menu': function () {this.toggle()},

    'button--type--close': function () { this.toggle()},

    'modal--open' : function () { this.toggle()}

}