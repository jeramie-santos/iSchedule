// TODO
// LAGAY VALIDATOR SA CASENO PAG ALAM NA KUNG SPECIFICS LIKE ILANG NUMBER BA OR IF MAY SPECIAL CHARACTER OR LETRA
// LINE 273

// TO TEST FASTER TANGGALIN VALIDATOR SA NEXT BUTTON
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
const allInput = document.querySelectorAll('input');
const allSelect = document.querySelectorAll('select');

let formErrorMessage = "";

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

scheduleNav();
addLinkToLogo();
insertListenerDept();

function isLettersOnly(str) {
	return /^[A-Za-z ]*$/.test(str);
}

function isLettersNumsOnly(str) {
	return /^[A-Za-z 0-9]*$/.test(str);
}

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
    
    // 
    // FIRST NAME **************************
    // 
    patient["firstName"] = document.querySelector('#firstName').value.trim();
    // Check if firstName is Empty
    if(patient['firstName'] == ""){
        errorHandler('00', document.querySelector('#firstName').id);
        return false;
    } 
    // Check if may numero or special character si name
    if(!isLettersOnly(patient['firstName'])){
        errorHandler('01', document.querySelector('#firstName').id);
        return false;
    } 
    // Check if more than 30 characters si name or 1 character lang
    if((patient['firstName']).length > 30 || patient['firstName'].length == 1){
        errorHandler('02', document.querySelector('#firstName').id);
        return false;
    }

    // 
    // MIDDLE NAME **************************
    // 
    patient["middleName"] = document.querySelector('#middleName').value.trim();
    // Check if middleName is Empty
    if(patient['middleName'] == ""){
        errorHandler('10', document.querySelector('#middleName').id);
        return false;
    } 
    // Check if may numero or special character si middleName
    if(!isLettersOnly(patient['middleName'])){
        errorHandler('11', document.querySelector('#middleName').id);
        return false;
    } 
    // Check if more than 30 characters si middle name
    if((patient['middleName']).length > 30){
        errorHandler('12', document.querySelector('#middleName').id);
        return false;
    }
    // Check if 1 character lang
    if((patient['middleName']).length == 1){
        errorHandler('13', document.querySelector('#middleName').id);
        return false;
    }

    // 
    // LAST NAME **************************
    // 
    patient["lastName"] = document.querySelector('#lastName').value.trim();
    // Check if lastName is Empty
    if(patient['lastName'] == ""){
        errorHandler('20', document.querySelector('#lastName').id);
        return false;
    } 
    // Check if may numero or special character si lastName
    if(!isLettersOnly(patient['lastName'])){
        errorHandler('21', document.querySelector('#lastName').id);
        return false;
    } 
    // Check if more than 30 characters si lastName
    if((patient['lastName']).length > 30 || (patient['lastName']).length == 1){
        errorHandler('22', document.querySelector('#lastName').id);
        return false;
    }

    // 
    // SEX **************************
    // 
    patient["sex"] = document.querySelector('#sex').value;
    if(patient['sex'] == ''){
        errorHandler('30', document.querySelector('#sex').id);
        return false;
    }

    // 
    // BIRTHDATE **************************
    // 
    // DI KO PA SURE IF LALAGYAN KO LIMIT LANG ATLEAST 18 YEARS OLD BA OR SOMETHING ******************************************************
    patient["birthdate"] = document.querySelector('#birthdate').value;
    if(patient['birthdate'] == ''){
        errorHandler('40', document.querySelector('#birthdate').id);
        return false;
    }

    // 
    // PHONE **************************
    // 
    patient["phone"] = document.querySelector('#phone').value.replaceAll(' ', '').trim();
    if(patient["phone"] == ""){
        errorHandler('50', document.querySelector('#phone').id);
        return false;
    }
    else if(patient["phone"].length != 11){
        alert(patient["phone"].length);
        errorHandler('51', document.querySelector('#phone').id);
        return false;
    }
    else if(isNaN(patient["phone"])){
        errorHandler('52', document.querySelector('#phone').id);
        return false;
    }
    else if((patient["phone"]).charAt(0) != '0'){
        errorHandler('53', document.querySelector('#phone').id);
        return false;
    }
    
    // If hindi selected si other kay municipality get yung preset values
    if(document.querySelector('#municipality').value != 'other'){
        // 
        // MUNICIPALITY **************************
        // 
        patient["municipality"] = document.querySelector('#municipality').value;
        if(patient["municipality"] == ""){
            errorHandler('60', document.querySelector('#municipality').id);
            return false;
        }
        // 
        // BARANGAY **************************
        // 
        patient["barangay"] = document.querySelector('#barangay').value;
        if(patient["barangay"] == ""){
            errorHandler('70', document.querySelector('#barangay').id);
            return false;
        }
        // 
        // PROVINCE **************************
        // 
        patient["province"] = 'bulacan';
    }
    // if naka select si other kunin yung field na lokasyon
    else{
        // 
        // BARANGAY(OTHER) **************************
        // 
        patient['barangay'] = document.querySelector('#barangay-other').value.trim();
        if(patient['barangay'] == ''){
            errorHandler('80', document.querySelector('#barangay-other').id);
            return false;
        }
        else if(patient['barangay'] > 30){
            errorHandler('81', document.querySelector('#barangay-other').id);
            return false;
        }
        else if(!isLettersNumsOnly(patient['barangay'])){
            errorHandler('82', document.querySelector('#barangay-other').id);
            return false;
        }

        // 
        // MUNICIPALITY(OTHER) **************************
        // 
        patient['municipality'] = document.querySelector('#municipality-other').value.trim();
        if(patient['municipality'] == ''){
            errorHandler('90', document.querySelector('#municipality-other').id);
            return false;
        }
        else if(patient['municipality'] > 30){
            errorHandler('91', document.querySelector('#municipality-other').id);
            return false;
        }
        else if(!isLettersNumsOnly(patient['municipality'])){
            errorHandler('92', document.querySelector('#municipality-other').id);
            return false;
        }

        // 
        // PROVINCE(OTHER) **************************
        // 
        patient['province'] = document.querySelector('#province-other').value.trim();
        if(patient['province'] == ''){
            errorHandler('100', document.querySelector('#province-other').id);
            return false;
        }
        else if(patient['province'] > 30){
            errorHandler('101', document.querySelector('#province-other').id);
            return false;
        }
        else if(!isLettersNumsOnly(patient['province'])){
            errorHandler('102', document.querySelector('#province-other').id);
            return false;
        }
    }

    // 
    // PATIENT TYPE **************************
    // 
    patient["typeOfPatient"] = document.querySelector('#patientType').value;
    if(patient["typeOfPatient"] == ''){
        errorHandler('110', document.querySelector('#patientType').id);
        return false;
    }

    // 
    // CASE NO **************************
    // 
    if(patient["typeOfPatient"] == 'oldPatient'){
        patient["caseNo"] = document.querySelector('#caseNo').value.trim();
        if(patient['caseNo'] == ''){
            errorHandler('120', document.querySelector('#caseNo').id);
            return false;
        }
        // MAGLAGAY PA VALIDATOR DITO IF ALAM NA NATIN KUNG ILANG NUM BA NEED SA CASENO OR MAY LETRA BA ETC
    }
    else{
        patient["caseNo"] = "";
    }

    return true;
}

function errorHandler(code, id){
    // 
    // FIRST NAME **************************
    // 
    if(code == '00') {
        formErrorMessage = 'Ang pangalan ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if (code == '01') {
        formErrorMessage = 'Ang pangalan ay di maaring magkaroon ng numero o special characters.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if (code == '02'){
        formErrorMessage = 'Ang pangalan ay di maaring magkaroon lamang ng isang(1) letra o higit sa tatlongpung(30) letra.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // MIDDLE NAME **************************
    // 
    else if(code == '10'){
        formErrorMessage = 'Ang gitnang pangalan ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '11'){
        formErrorMessage = 'Ang gitnang pangalan ay di maaring magkaroon ng numero o special characters.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '12'){
        formErrorMessage = 'Ang gitnang pangalan ay di maaring magkaroon ng higit sa tatlongpung(30) letra.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '13'){
        formErrorMessage = 'Ang gitnang pangalan ay di maaring middle initial lamang kailangan ito ay kompleto.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // LAST NAME **************************
    // 
    else if(code == '20') {
        formErrorMessage = 'Ang apelido ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '21') {
        formErrorMessage = 'Ang apelido ay di maaring magkaroon ng numero o special characters.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '22'){
        formErrorMessage = 'Ang apelido ay di maaring magkaroon lamang ng isang(1) letra o higit sa tatlongpung(30) letra.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // SEX **************************
    // 
    else if(code == '30'){
        formErrorMessage = 'Ang kasarian ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // BIRTHDATE **************************
    // 
    else if(code == '40'){
        formErrorMessage = 'Ang araw ng kapanganakan ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // PHONE **************************
    // 
    else if(code == '50'){
        formErrorMessage = 'Ang numero ng telepono ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '51'){
        formErrorMessage = 'Ang numero ng telepono ay kailangan labingisa(11) lamang. Halimbawa: 09XX XXX XXXX';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '52'){
        formErrorMessage = 'Ang numero ng telepono ay di maaring magkaroon ng letra o special character.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '53'){
        formErrorMessage = 'Ang numero ng telepono ay kailangang mag simula sa "0". Halimbawa: 09XX XXX XXXX.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // MUNICIPALITY **************************
    // 
    else if(code == '60'){
        formErrorMessage = 'Ang munisipalidad ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // BARANGAY **************************
    // 
    else if(code == '70'){
        formErrorMessage = 'Ang barangay ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // BARANGAY(OTHER) **************************
    // 
    else if(code == '80'){
        formErrorMessage = 'Ang barangay ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '81'){
        formErrorMessage = 'Ang barangay ay di maaring magkaroon ng higit sa tatlongpung(30) letra.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '82'){
        formErrorMessage = 'Ang barangay ay di maaring magkaroon ng special characters.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // MUNICIPALITY(OTHER) **************************
    // 
    else if(code == '90'){
        formErrorMessage = 'Ang munisipalidad ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '91'){
        formErrorMessage = 'Ang munisipalidad ay di maaring magkaroon ng higit sa tatlongpung(30) letra.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '92'){
        formErrorMessage = 'Ang munisipalidad ay di maaring magkaroon ng special characters.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // PROVINCE(OTHER) **************************
    // 
    else if(code == '100'){
        formErrorMessage = 'Ang probinsya ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '101'){
        formErrorMessage = 'Ang probinsya ay di maaring magkaroon ng higit sa tatlongpung(30) letra.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '102'){
        formErrorMessage = 'Ang probinsya ay di maaring magkaroon ng special characters.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // PATIENT TYPE **************************
    // 
    else if(code == '110'){
        formErrorMessage = 'Ang klase ng pasyente ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // CASE NO **************************
    // 
    else if(code == '120'){
        formErrorMessage = 'Ang case number ay di maaring walang laman.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
}

function scheduleNav(){

    back.addEventListener('click', ()=>{
        // Resets all border. Inshort tinatanggal lahat ng red border after ma click ni next
        revertAllBorder();
        if(stepStatus > 0) {
            progression[stepStatus].classList.remove('answered');
            progressionTitle[stepStatus].classList.remove('active');
            stepStatus--;
        }
        proceed();
    });
    
    next.addEventListener('click', ()=>{
        // Resets all border. Inshort tinatanggal lahat ng red border after ma click ni next
        revertAllBorder();

        // Used to increment index for multiform parts
        if(stepStatus < 4) stepStatus++;
        
        if(stepStatus == 1){
            proceed();
            // if(grabFirstForm()){
            //     proceed();
            // }else{
            //     alert('please choose a department');
            //     stepStatus--;
            // }
        }
        else if(stepStatus == 2){
            proceed();
            // if(grabSecondForm()){
            //     proceed();
            // }else{
            //     alert(formErrorMessage);
            //     stepStatus--;
            // }
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
        temp.setAttribute('onblur', 'revertBorder(this.id)');
        temp.classList.add('caseNo');

        caseNo.appendChild(temp);

        caseNo.style.display = 'flex';
    }
    else{
        try {
            document.getElementById('caseNo').remove();
            caseNo.style.display = 'none';
        } catch (error) {
            caseNo.style.display = 'none';
        }  
    }
}

function revertBorder(id){
    document.getElementById(id).style.borderColor = 'rgb(186, 182, 182)';
}

function revertAllBorder(){
    allInput.forEach((item)=>{
        item.style.borderColor = 'rgb(186, 182, 182)';
    });
    allSelect.forEach((item)=>{
        item.style.borderColor = 'rgb(186, 182, 182)';
    });
}

