const headerDivTypeLogo = document.querySelector('.header__div--type--logo');

headerDivTypeLogo.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.forEach(el => {
        if (typeof clickElement[el] === 'function') {
            clickElement[el]();
        };
    });
});

const clickElement = {

    'menu': document.querySelector('.menu'),
    
    'header__button--type--menu': function () { this.menu.classList.toggle('menu--open')}

}