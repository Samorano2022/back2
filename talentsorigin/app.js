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




// scroll effect
let cards = 
document.querySelectorAll(".card");
let stackArea =
document.querySelector(".stack-area");

function rotateCards() {
  let angle = 0;
  cards.forEach((card) => {
    if (card.classList.contains("active")) {
      card.style.transform = 'translate(-50%, -100vh) rotate(-0deg)';
    } else {
      card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      angle = angle - 1;
    }
  });
}
rotateCards();

window.addEventListener("scroll", () => {
  let proportion =
  stackArea.getBoundingClientRect().top /
  window.innerHeight;
  if (proportion <= 0){
    let n = cards.length;
    let index = Math.ceil((proportion * n) /
    2);
    index = Math.abs(index) - 1;
    for (let i = 0; i < n; i++){
      if (i <= index) {
        cards[i].classList.add("active");
      } else {
        cards[i].classList.remove("active");
      }
    }
    rotateCards();
  }
});


/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


/*------------------------------
Init ScrollSmoother
------------------------------*/
const scrollerSmoother = ScrollSmoother.create({
  content: '#content',
  wrapper: '#wrapper',
  smooth: true,
  effects: false,
  normalizeScroll: true
})

const tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.accordions',
      pin: true,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      ease: 'linear',
    }
})

tl.to('.accordion .text', {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: .5,
})
tl.to('.accordion', {
  marginBottom: -15,
  stagger: .5,
}, '<')


