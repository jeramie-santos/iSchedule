let stepStatus = 0;
const back = document.querySelector('.btn-back');
const next = document.querySelector('.btn-next');
const forms = document.querySelectorAll('.form-part');
const progression = document.querySelectorAll('.progression__step');
const progressionTitle = document.querySelectorAll('.progression__title');
const logo = document.querySelector('.header__logo-container');
const mobileLabel = document.querySelector('.mobile-label');
const caseNo = document.querySelector('.caseNo-container');
const patientType = document.querySelector('#patientType');
const deptCards = document.querySelectorAll('.form__card');

const patient = {
    'department': '',
    'schedule': '',
    'firstName': '',
    'middleName': '',
    'lastName': '',
    'sex': '',
    'birthdate': '',
    'phone': '',
    'barangay': '',
    'municipality': '',
    'province': '',
    'typeOfPatient': '',
    'caseNo': '',
}

createScheduleNav();
addLinkToLogo();
insertListenerDept();

function insertListenerDept(){
    deptCards.forEach((item)=>{
        item.addEventListener('click', ()=>{
            deptCards.forEach((itemRemove)=>{
                itemRemove.classList.remove('dept__selected');
            });
            document.querySelector('#department').value = item.querySelector('.form__dept-title').innerHTML;
            item.classList.add('dept__selected');

            // lagay modal info
            alert('Labas modal na may info nung department');
        });
    });
}

function addLinkToLogo(){
    logo.addEventListener('click', ()=>{
        window.location.href = './../index.html';
    });
}

function grabFirstForm(){

    // nilalagay laman ni input field department kay patient[department] then returns true pero 
    // if empty return true ibigsabihin di mag proceed next form
    patient["department"] = document.querySelector('#department').value;
    if(patient['department'] != "") return true;
    else return false;
}

function grabSecondForm(){
    
    patient["firstName"] = document.querySelector('#firstName').value;
    
    // Bali ang mangyayari is top to bottom checking ng input fields sa unang makitang error yun muna sasabihin kay user then pag nag submit ulit
    // first match ulit pakita
    // bigyan code mga error para malinis tingnan
    if(patient['firstName'] == "") errorHandler('1');


    patient["middleName"] = document.querySelector('#middleName').value;
    patient["lastName"] = document.querySelector('#lastName').value;
    patient["sex"] = document.querySelector('#sex').value;
    patient["birthdate"] = document.querySelector('#birthdate').value;

    // Lagyan validator para masure na phone
    let phoneTemp = document.querySelector('#phone').value;
    phoneTemp = phoneTemp.replaceAll(' ', '');

    if(phoneTemp.length != 11 && !isNaN(phoneTemp)){
        alert('invalid phone pakita modal chuchu');
    }else{
        patient["phone"] = phoneTemp;
    }
     
    if(document.querySelector('#municipality').value != 'other'){
        patient["barangay"] = document.querySelector('#barangay').value;
        patient["municipality"] = document.querySelector('#municipality').value;
        patient["province"] = 'Bulacan';
    }
    else{
        // If others young selected kay municipality
        let other = document.querySelector('#other').value;
        other = other.split(", ");
        patient["barangay"] = other[0];
        patient["municipality"] = other[1];
        patient["province"] = other[2];
    }
    
    patient["typeOfPatient"] = document.querySelector('#patientType').value;

    if(patient["typeOfPatient"] == 'oldPatient'){
        patient["caseNo"] = document.querySelector('#caseNo').value;
    }
    else{
        patient["caseNo"] = "";
    }

    if(patient['firstName'] != "" && patient['middleName'] != "" && patient['lastName']
    && patient['sex'] != "" && patient['birthdate'] != "" && patient['phone'] != "" && patient['barangay'] != ""
    && patient['municipaliyu'] != "" && patient['province'] != "" && patient['typeOfPatient'] != ""){
        if(patient[typeOfPatient] == 'newPatient'){
            return true
        }
        else{
            if(patient['caseNo'] != ""){
                return true
            }
            else{
                return false
            }
        }
    }    
}

function errorHandler(code){
    // eto example ng mangyayari
    if(code == '1'){
        alert('First Name is Empty!');
    }
}


function createScheduleNav(){
    back.addEventListener('click', ()=>{
        if(stepStatus > 0) {
            progression[stepStatus].classList.remove('answered');
            progressionTitle[stepStatus].classList.remove('active');
            stepStatus--;
        }
        proceed();
    });
    
    next.addEventListener('click', ()=>{
        // Used to increment index for multiform parts
        if(stepStatus < 4) stepStatus++;
        
        if(stepStatus == 1){
            if(grabFirstForm()){
                proceed();
            }else{
                alert('please choose a department');
                stepStatus--;
            }
        }
        else if(stepStatus == 2){
            if(grabSecondForm()){
                proceed();
            }else{
                alert('show ano mali');
                stepStatus--;
            }
        }
        else if(stepStatus == 3){
            alert('getting form 3 data');
            proceed();
        }
        else if(stepStatus == 4){
            alert('show OTP');
        }
    });
}

function proceed(){
    forms.forEach((item)=>{
        item.style.display = 'none'
    });

    progression[stepStatus].classList.add('answered');

    if(stepStatus == 0 || stepStatus == 1) forms[stepStatus].style.display = 'grid';
    else forms[stepStatus].style.display = 'flex';
    progressionTitle[stepStatus].classList.add('active');

    if(stepStatus == 0) mobileLabel.innerHTML = 'Pumili ng Department';
    else if(stepStatus == 1){
        mobileLabel.innerHTML = 'Personal na Impormasyon';
    }
    else if(stepStatus == 2){
        mobileLabel.innerHTML = 'Schedule ng Appointment';
        next.value = 'Next'
    } 
    else if(stepStatus == 3){
        mobileLabel.innerHTML = 'Review ng Impormasyon';
        next.value = 'gawing showOTPModal() na yung function nitong button '
    }
}

function removeOTPModal(){
}

function showOTPModal(){
}

function getPatientType(type) {
    if(type == 'oldPatient'){
        caseOn = true;

        let temp = document.createElement('input');
        temp.setAttribute('type', 'text');
        temp.setAttribute('name', 'caseNo');
        temp.setAttribute('id', 'caseNo');
        temp.classList.add('caseNo');
        caseNo.appendChild(temp);

        caseNo.style.display = 'flex';

        // Manipulates dummyElement depends if pantay or hindi yung num of columns sa .second
        // if(otherOn && !dummyOn){
        //     document.querySelector('.dummyElement').style.display = 'flex';
        //     dummyOn = true;
        // }
        // else if(!otherOn && dummyOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }

        // if(dummyOn && !otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }
        // else if(!dummyOn && otherOn){
        //     document.querySelector('.dummyElement').style.display = 'flex';
        //     dummyOn = true;
        // }
        // else if(!dummyOn && !otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }
        // else if(dummyOn && otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }

        // if(caseOn && !otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }
        // else if(!caseOn && otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }
        // else if(!caseOn && !otherOn){
        //     document.querySelector('.dummyElement').style.display = 'flex';
        //     dummyOn = true;
        // }
        // else if(caseOn && otherOn){
        //     document.querySelector('.dummyElement').style.display = 'flex';
        //     dummyOn = none;
        // }

        // Manipulates dummyElement depends if pantay or hindi yung num of columns sa .second
        // caseOn = true;
        
    }
    else{
        try {

            // Manipulates dummyElement depends if pantay or hindi yung num of columns sa .second
            document.getElementById('caseNo').remove();
            caseNo.style.display = 'none';

            // if(dummyOn && !otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = true;
            // }
            // else if(!dummyOn && otherOn){
            //     document.querySelector('.dummyElement').style.display = 'none';
            //     dummyOn = false;
            // }
            // else if(!dummyOn && !otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = true;
            // }
            // else if(dummyOn && otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = true;
            // }
            // else if(caseOn && !otherOn){
            //     document.querySelector('.dummyElement').style.display = 'none';
            //     dummyOn = false;
            // }
            // else if(!caseOn && otherOn){
            //     document.querySelector('.dummyElement').style.display = 'none';
            //     dummyOn = false;
            // }
            // else if(!caseOn && !otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = true;
            // }
            // else if(caseOn && otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = none;
            // }

            // Manipulates dummyElement depends if pantay or hindi yung num of columns sa .second
            // caseOn = false;

        } catch (error) {
            
        }  
    }
}

