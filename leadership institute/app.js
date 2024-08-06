var menu = document.getElementsByClassName('header__desktop');
const hamburger = document.getElementsByClassName('hamburger')
const header = document.getElementsByClassName('header__mobile')
const header__wrapper = document.getElementsByClassName('header__wrapper')


  const openmenu =() => {
    menu[0].classList.toggle('active')
    if(menu[0].className.includes('active')){
        hamburger[0].src = '/assets/cancel__icon.svg'
    }
    else{
        hamburger[0].src = '/assets/hamburger.svg'
    }

  }

window.addEventListener('scroll', (e)=> {
    if(window.scrollY > 0){
        header[0].classList.add('header__bar')
        header__wrapper[0].classList.add('header__bar')
    }
    else{
        header[0].classList.remove('header__bar')
        header__wrapper[0].classList.remove('header__bar')

    }
  
}
)