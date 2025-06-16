document.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.forEach(el => {
        if (typeof clickMenu[el] === 'function') {
            clickMenu[el]();
        };
    });
});

const clickMenu = {

    'menu': document.querySelector('.menu'),
    'modal':document.querySelector('.modal'),

    toggle() {
        if (this.menu.classList.contains('menu--open') || this.menu.classList.contains('menu--close')) {
            this.menu.classList.toggle('menu--close');
            this.menu.classList.toggle('menu--open');
            this.modal.classList.toggle('modal--open');
            this.modal.classList.toggle('modal--close')
        } else {
            this.menu.classList.toggle('menu--open');
            this.modal.classList.toggle('modal--open');
        };
    },

    'button--type--menu': function () {this.toggle()},

    'button--type--close': function () { this.toggle()},

    'modal--open' : function () { this.toggle()}

}