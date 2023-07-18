const announcementLink = document.querySelectorAll('.announcement-link');
const announcement = document.querySelector('#announcement');
const landingImg = document.querySelector('.landing-page__img');
const tutorialStep = document.querySelectorAll('.tutorial__step');
const circles = document.querySelectorAll('.circle');
let formErrorMessage = '';

// ALSO CALL THIS FUNCTION WHEN ANNOUNCEMENT SEE MORE IS CLICKED
// NAKIKITA LANG YUNG SEE MORE BUTTON IF THERE IS MORE THAN 4 ANNOUNCEMENT NA SA DATABASE
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

