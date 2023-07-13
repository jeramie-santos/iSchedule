const announcementLink = document.querySelectorAll('.announcement-link');
const announcement = document.querySelector('#announcement');
const landingImg = document.querySelector('.landing-page__img');
const tutorialStep = document.querySelectorAll('.tutorial__step');
const circles = document.querySelectorAll('.circle');


// ALSO CALL THIS FUNCTION WHEN ANNOUNCEMENT SEE MORE IS CLICKED
addAOSToAnnouncement();

//Initializes AOS
AOS.init();
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


tutorialStep.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        circles[index].style.transform = 'rotate(360deg)';
    });

    item.addEventListener('mouseleave', () => {
        circles[index].style.transform = 'rotate(0deg)';
    });
});

function addAOSToAnnouncement(){
    let announcementOdd = document.querySelectorAll('.announcement__content:nth-child(odd)');
    let announcementEven = document.querySelectorAll('.announcement__content:nth-child(even)');

    // data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
    announcementOdd.forEach((item)=>{
        item.setAttribute('data-aos', 'fade-right');
        item.setAttribute('data-aos-duration', '1000');
        item.setAttribute('data-aos-delay', '200');
    });

    announcementEven.forEach((item)=>{
        item.setAttribute('data-aos', 'fade-left');
        item.setAttribute('data-aos-duration', '1000');
        item.setAttribute('data-aos-delay', '200');
    });
}





