class Menu {
    constructor() {
        this.header = document.querySelector('.header')
        this.btn = document.querySelector('.header__content-toggleAbout')
        this.toggle = document.querySelector('.header__content-toggle')

        this.header.addEventListener('click', (e) => {
            if(e.target.classList.contains('header__content-toggleAbout')) {
               this.toggle.classList.add('active')
            }else if(e.target.classList.contains('header')){
              this.toggle.classList.remove('active')
            }
        })
    }
}

export default Menu;