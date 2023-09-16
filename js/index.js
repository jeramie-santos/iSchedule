const announcementLink = document.querySelectorAll('.announcement-link');
const announcement = document.querySelector('#announcement');
const landingImg = document.querySelector('.landing-page__img');
const tutorialStep = document.querySelectorAll('.tutorial__step');
const circles = document.querySelectorAll('.circle');
let formErrorMessage = '';

// ALSO CALL THIS FUNCTION WHEN ANNOUNCEMENT SEE MORE IS CLICKED
// NAKIKITA LANG YUNG SEE MORE BUTTON IF THERE IS MORE THAN 4 ANNOUNCEMENT NA SA DATABASE
// addAOSToAnnouncement(); no need na kasi tawagin to pag generate

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
    alert('error');
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

function initialize(){
    feedbackStars();
    getAnnouncement();
    getTutorialVid();
}

function getTutorialVid(){
    let deviceType = null;
    const videoTutorial = document.querySelector('#tutorial__video');

    if (window.innerWidth < window.innerHeight) {
        // User is on a mobile device (adjust the threshold as needed)
        deviceType = 'mobile';
    } 
    else {
        // User is on a desktop device
        deviceType = 'desktop';
    }
    
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                videoTutorial.removeAttribute('src');
                videoTutorial.setAttribute('src', xhr.responseText);
            }
        }
    }

    xhr.open("POST", "./php/getVideoTutorial.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("deviceType=" + deviceType);
}

function addAOSToAnnouncement(){
    let announcementOdd = document.querySelectorAll('.announcement__content:nth-child(odd)');
    let announcementEven = document.querySelectorAll('.announcement__content:nth-child(even)');

    // data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
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

function submitTrack(){
    let val = document.querySelector('#phone-number').value;

    const modalLauncher = document.querySelector('.modal-launcher');
        modalLauncher.click();
        const modalTitle = document.querySelector('.modal-title');
        const modalBody = document.querySelector('.modal-body');
        const modalPositive = document.querySelector('.positive');
        modalBody.style.fontSize = '1.3rem';
        modalPositive.style.display = 'none';

    if(evaluatePhoneNum(val)){
        let phoneNum = properPhoneNum(val);

        checkExistingAppointment(phoneNum);
        modalTitle.innerHTML =  "Active Appointment";
        modalTitle.style.color = 'unset';
        modalBody.innerHTML = "Ikaw ay walang kasalukuyang active appointment.";
        // modalBody.innerHTML = "July 21, 2023 (1:00 PM - 2:00 PM) @ Pediatric Cardiology";
    }
    else{
        modalTitle.innerHTML =  "Invalid Input";
        modalTitle.style.color = 'red';
        modalBody.innerHTML = formErrorMessage;
    }
    
    properPhoneNum(val)
}

function checkExistingAppointment(phone){
    // Icheck if meron appointment yung num na yun 
}

function evaluatePhoneNum(val){
    let phoneInput = val.replaceAll(' ', '').trim();
    if(phoneInput == ""){
        errorHandler('50');
        return false;
    }
    else if(phoneInput.length != 11){
        errorHandler('51');
        return false;
    }
    else if(isNaN(phoneInput)){
        errorHandler('52');
        return false;
    }
    else if((phoneInput).charAt(0) != '0'){
        errorHandler('53');
        return false;
    }

    return true;
}

function filterPhoneInput(id){
    let element = document.getElementById(id);
    let newVal = "";

    for(i =0; i< element.value.length; i++){

        if(!isNaN(element.value[i])){
            newVal+= element.value[i];
        }
    };
    element.value = newVal;
}

function properPhoneNum(num){
    // Adds space to phone num
    let proper ='';
    for(i = 0; i < num.length; i++){
        proper +=num[i];
        if(i == 3 || i == 6) proper+=' ';
    }
    return proper;
}

function errorHandler(code,){
    // 
    // PHONE **************************
    // 
    if(code == '50'){
        formErrorMessage = 'Ang numero ng telepono ay kailangan sagutan.';
    }
    else if(code == '51'){
        formErrorMessage = 'Ang numero ng telepono ay kailangan labingisa(11). Halimbawa: 09XX XXX XXXX';
    }
    else if(code == '52'){
        formErrorMessage = 'Ang numero ng telepono ay di maaring magkaroon ng letra o special character.';
    }
    else if(code == '53'){
        formErrorMessage = 'Ang numero ng telepono ay kailangang mag simula sa "0". Halimbawa: 09XX XXX XXXX.';
    }
}

function feedbackStars(){
    const stars = document.querySelectorAll('.star');

    stars.forEach((item, index)=>{
        if(index == 0){
            item.addEventListener('mouseover', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.5';
                }
            })
            item.addEventListener('mouseout', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.3';
                }
            })
            item.addEventListener('click', ()=>{
                stars[0].setAttribute('data-status', 'enabled');
                stars[1].setAttribute('data-status', 'disabled');
                stars[2].setAttribute('data-status', 'disabled');
                stars[3].setAttribute('data-status', 'disabled');
                stars[4].setAttribute('data-status', 'disabled');

                stars[0].style.opacity = '1';
                stars[1].style.opacity = '0.3';
                stars[2].style.opacity = '0.3';
                stars[3].style.opacity = '0.3';
                stars[4].style.opacity = '0.3';

                document.querySelector('#fbRating').value = '1';
            })
        }
        if(index == 1){
            item.addEventListener('mouseover', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.5';
                }
                if(stars[1].getAttribute('data-status') == 'disabled'){
                    stars[1].style.opacity = '0.5';
                }
            })
            item.addEventListener('mouseout', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.3';
                }
                if(stars[1].getAttribute('data-status') == 'disabled'){
                    stars[1].style.opacity = '0.3';
                }
            })
            item.addEventListener('click', ()=>{
                stars[0].setAttribute('data-status', 'enabled');
                stars[1].setAttribute('data-status', 'enabled');
                stars[2].setAttribute('data-status', 'disabled');
                stars[3].setAttribute('data-status', 'disabled');
                stars[4].setAttribute('data-status', 'disabled');

                stars[0].style.opacity = '1';
                stars[1].style.opacity = '1';
                stars[2].style.opacity = '0.3';
                stars[3].style.opacity = '0.3';
                stars[4].style.opacity = '0.3';

                document.querySelector('#fbRating').value = '2';
            })
        }
        if(index == 2){
            item.addEventListener('mouseover', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.5';
                }
                if(stars[1].getAttribute('data-status') == 'disabled'){
                    stars[1].style.opacity = '0.5';
                }
                if(stars[2].getAttribute('data-status') == 'disabled'){
                    stars[2].style.opacity = '0.5';
                }
            })
            item.addEventListener('mouseout', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.3';
                }
                if(stars[1].getAttribute('data-status') == 'disabled'){
                    stars[1].style.opacity = '0.3';
                }
                if(stars[2].getAttribute('data-status') == 'disabled'){
                    stars[2].style.opacity = '0.3';
                }
            })
            item.addEventListener('click', ()=>{
                stars[0].setAttribute('data-status', 'enabled');
                stars[1].setAttribute('data-status', 'enabled');
                stars[2].setAttribute('data-status', 'enabled');
                stars[3].setAttribute('data-status', 'disabled');
                stars[4].setAttribute('data-status', 'disabled');

                stars[0].style.opacity = '1';
                stars[1].style.opacity = '1';
                stars[2].style.opacity = '1';
                stars[3].style.opacity = '0.3';
                stars[4].style.opacity = '0.3';

                document.querySelector('#fbRating').value = '3';
            })
        }
        else if(index == 3){
            item.addEventListener('mouseover', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.5';
                }
                if(stars[1].getAttribute('data-status') == 'disabled'){
                    stars[1].style.opacity = '0.5';
                }
                if(stars[2].getAttribute('data-status') == 'disabled'){
                    stars[2].style.opacity = '0.5';
                }
                if(stars[3].getAttribute('data-status') == 'disabled'){
                    stars[3].style.opacity = '0.5';
                }
            })
            item.addEventListener('mouseout', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.3';
                }
                if(stars[1].getAttribute('data-status') == 'disabled'){
                    stars[1].style.opacity = '0.3';
                }
                if(stars[2].getAttribute('data-status') == 'disabled'){
                    stars[2].style.opacity = '0.3';
                }
                if(stars[3].getAttribute('data-status') == 'disabled'){
                    stars[3].style.opacity = '0.3';
                }
            })
            item.addEventListener('click', ()=>{
                stars[0].setAttribute('data-status', 'enabled');
                stars[1].setAttribute('data-status', 'enabled');
                stars[2].setAttribute('data-status', 'enabled');
                stars[3].setAttribute('data-status', 'enabled');
                stars[4].setAttribute('data-status', 'disabled');

                stars[0].style.opacity = '1';
                stars[1].style.opacity = '1';
                stars[2].style.opacity = '1';
                stars[3].style.opacity = '1';
                stars[4].style.opacity = '0.3';

                document.querySelector('#fbRating').value = '4';
            })
        }
        else if(index == 4){
            item.addEventListener('mouseover', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.5';
                }
                if(stars[1].getAttribute('data-status') == 'disabled'){
                    stars[1].style.opacity = '0.5';
                }
                if(stars[2].getAttribute('data-status') == 'disabled'){
                    stars[2].style.opacity = '0.5';
                }
                if(stars[3].getAttribute('data-status') == 'disabled'){
                    stars[3].style.opacity = '0.5';
                }
                if(stars[4].getAttribute('data-status') == 'disabled'){
                    stars[4].style.opacity = '0.5';
                }
            })
            item.addEventListener('mouseout', ()=>{
                if(stars[0].getAttribute('data-status') == 'disabled'){
                    stars[0].style.opacity = '0.3';
                }
                if(stars[1].getAttribute('data-status') == 'disabled'){
                    stars[1].style.opacity = '0.3';
                }
                if(stars[2].getAttribute('data-status') == 'disabled'){
                    stars[2].style.opacity = '0.3';
                }
                if(stars[3].getAttribute('data-status') == 'disabled'){
                    stars[3].style.opacity = '0.3';
                }
                if(stars[4].getAttribute('data-status') == 'disabled'){
                    stars[4].style.opacity = '0.3';
                }
            })
            item.addEventListener('click', ()=>{
                stars[0].setAttribute('data-status', 'enabled');
                stars[1].setAttribute('data-status', 'enabled');
                stars[2].setAttribute('data-status', 'enabled');
                stars[3].setAttribute('data-status', 'enabled');
                stars[4].setAttribute('data-status', 'enabled');

                stars[0].style.opacity = '1';
                stars[1].style.opacity = '1';
                stars[2].style.opacity = '1';
                stars[3].style.opacity = '1';
                stars[4].style.opacity = '1';

                document.querySelector('#fbRating').value = '5';
            })
        }
    });
}

function getAnnouncement(){
    const container = document.querySelector('.announcement__content-container');
    const seeMoreBtn = document.querySelector('.announcement__button--see-more');
    let annCtr = 4;
    let xhr = new XMLHttpRequest();
    let rightAOS = 'data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"';
    let leftAOS = 'data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"';
    let aos = null;

    let announcements = [];

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                try {
                    let arrayOfObjects = JSON.parse(xhr.responseText);

                    arrayOfObjects.forEach((item, index)=>{
                        
                        let title = item.title;
                        let body = item.body;
                        let datePosted = item.datePosted;
                        let timePosted = item.timePosted;
                        
                        if(index % 2 == 0) aos = rightAOS;
                        else aos = leftAOS;

                        let htmlTemplate =`
                            <div class="announcement__content" ${aos}>
                                <div class="announcement__news-header">
                                <h3 class="announcement__news-title">${title}</h3>
                                <div class="announcement__news-metadata">
                                    <div class="announcement__news-datetime">${datePosted} @ ${timePosted}</div>
                                </div>
                                </div>
                                <div class="announcement__news-body">${body}</div>
                            </div>
                        `;

                        announcements.push(htmlTemplate)
                    })


                    announcements.forEach((item, index)=>{
                        if(index < 5){
                            container.innerHTML += item;
                        }
                    });

                    // let annContent = document.querySelectorAll('.announcement__content');

                    // console.table(annContent)

                    // annContent.forEach((item, index)=>{
                    //     if(index >= 5){
                    //         console.log(annContent)
                    //     }
                    // })

                    seeMoreBtn.addEventListener('click', ()=>{
                        annCtr++;

                        if(annCtr < 20 && annCtr < announcements.length){
                            container.innerHTML += announcements[annCtr];
                        }
                        if(annCtr == announcements.length-1){
                            seeMoreBtn.innerHTML = 'No Announcements Left...'
                        }
                        
                    })

                } catch (error) {
                    container.innerHTML = xhr.responseText;
                }
            }
        }     
    }

    xhr.open('GET', './php/getAnnouncement.php', true);
    xhr.send();
}


