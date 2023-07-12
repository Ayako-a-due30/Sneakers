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

const swiper = new Swiper(".swiper",{});