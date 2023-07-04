const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.header__nav-mobile--links');
const burger = document.querySelector('.menu-btn__burger');
let menuOpen = false;

burger.addEventListener('click', () => {

  if(!menuOpen) {
    menuBtn.classList.add('open');
    links.style = "display:flex";
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('open');
    links.style.display = "none";
    menuOpen = false;
  }

}); 

document.onclick = (event) => {
    if((event.target.className != "menu-btn__burger" && event.target.className != "dropdown-item")){
      menuBtn.classList.remove('open');
      links.style.display = "none";
      menuOpen = false;
  }
}


  

  
