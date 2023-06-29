const announcementLink = document.querySelectorAll('.announcement-link');
const announcement = document.querySelector('#announcement');
const landingImg = document.querySelector('.landing-page__img');
const tutorialStep = document.querySelectorAll('.tutorial__step');
const circles = document.querySelectorAll('.circle');
let landingImgUp = false;

setInterval(()=>{
    if(!landingImgUp){
        landingImg.style.transform = "translate(0, -70px)"
    }
    else{
        landingImg.style.transform = "translate(0, +10px)"
    }
}, 2000);


try {
    setTimeout(()=>{
        let goTo = location.search.substring(1);

        if(goTo){
            let topPosition = document.getElementById(goTo).offsetTop - 100;
            if(goTo == 'home') topPosition -= 130;
            window.scrollTo({
                top: topPosition,
                left: 0,
                behavior: 'smooth',
            }); 
        }
    }, 100);
    
} catch (error) {
    alert('errur');
}

document.querySelectorAll('.btn-link').forEach((item)=>{
    item.addEventListener('click', ()=>{
        let topPosition = document.getElementById(item.dataset.page).offsetTop - 100;
        if(item.dataset.page == 'home') topPosition -= 130;
        window.scrollTo({
            top: topPosition,
            left: 0,
            behavior: 'smooth',
        }); 
    });
});



// Code A
// This Works
tutorialStep[0].addEventListener('mouseover',()=>{
    circles[0].style.transform = 'rotate(360deg)';
});

tutorialStep[0].addEventListener('mouseleave',()=>{
    circles[0].style.transform = 'rotate(0)';
});
tutorialStep[1].addEventListener('mouseover',()=>{
    circles[1].style.transform = 'rotate(360deg)';
});

tutorialStep[1].addEventListener('mouseleave',()=>{
    circles[1].style.transform = 'rotate(0)';
});
tutorialStep[2].addEventListener('mouseover',()=>{
    circles[2].style.transform = 'rotate(360deg)';
});

tutorialStep[2].addEventListener('mouseleave',()=>{
    circles[2].style.transform = 'rotate(0)';
});
tutorialStep[3].addEventListener('mouseover',()=>{
    circles[3].style.transform = 'rotate(360deg)';
});

tutorialStep[3].addEventListener('mouseleave',()=>{
    circles[3].style.transform = 'rotate(0)';
});
tutorialStep[4].addEventListener('mouseover',()=>{
    circles[4].style.transform = 'rotate(360deg)';
});

tutorialStep[4].addEventListener('mouseleave',()=>{
    circles[4].style.transform = 'rotate(0)';
});



// Code B
// Does not work
// let circleCounter = 0;
// tutorialStep.forEach((item)=>{
//     tutorialStep[circleCounter].addEventListener('mouseover',()=>{
//         circles[circleCounter].style.transform = 'rotate(360deg)';
//     });
    
//     tutorialStep[circleCounter].addEventListener('mouseleave',()=>{
//         circles[circleCounter].style.transform = 'rotate(0)';
//     });
//     circleCounter++;
// });







