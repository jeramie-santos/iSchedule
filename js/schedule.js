let stepStatus = 0;
const back = document.querySelector('.btn-back');
const next = document.querySelector('.btn-next');
const forms = document.querySelectorAll('.form-part');
const progression = document.querySelectorAll('.progression__step');
const logo = document.querySelector('.header__logo-container');

logo.addEventListener('click', ()=>{
    window.location.href = './../index.html';
});


// let favoritemovie = "Shrek";
// sessionStorage.setItem("favoriteMovie", favoritemovie);
// var favoritemovie = sessionStorage.getItem("favoriteMovie");
// alert(favoritemovie);


back.addEventListener('click', ()=>{
    if(stepStatus > 0) {
        progression[stepStatus].classList.remove('answered');
        stepStatus--;
    }
    proceed();
});

next.addEventListener('click', ()=>{
    if(stepStatus < 3) stepStatus++;
    proceed();
});

function proceed(){
    forms.forEach((item)=>{
        item.style.display = 'none'
    });

    // progression.forEach((item)=>{
    //     item.classList.remove('active');
    // });

    progression[stepStatus].classList.add('answered');
    forms[stepStatus].style.display = 'flex';
    
}