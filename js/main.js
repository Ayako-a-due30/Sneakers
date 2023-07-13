//FEATURE-------------------------------------
// fadein-------------------------------------
const showImg = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.style.opacity = '1';
        target.style.transform = 'translate(0, 0)';
      }
    });
  };

  const imgObserver = new IntersectionObserver(showImg);

  const images = document.querySelectorAll('.fadein');
  images.forEach((image) => {
    imgObserver.observe(image);
  });


// TOGGLE BUTTON MENU-------------------------
const hamburgerMenu = document.getElementById('hamburger-menu');
const navi = document.getElementById('navi');
const mask = document.getElementById('mask');
const siteTitle = document.getElementById('site-title');

hamburgerMenu.addEventListener('click',()=> {
    hamburgerMenu.classList.toggle('active');
    siteTitle.classList.toggle('active');
    mask.classList.toggle('active');
    navi.classList.toggle('active');
});
mask.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle('active');
    siteTitle.classList.toggle('active');
    mask.classList.toggle('active');
    navi.classList.toggle('active');
})
//PICK UP(SWIPER)-----------------------------
const swiper = new Swiper(".swiper",{
  slidesPerView:1.5,
  spaceBetween:10,
  centeredSlides:true,
  loop: true,
  breakpoints:{
    960:{
      spaceBetween:10,
      slidesPerView:5,
      centeredSlides:true,
      loop: true,
    }
  }
},
);
