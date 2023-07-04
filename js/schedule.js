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
const modalLauncher = document.querySelector('.modal-launcher');

let formErrorMessage = "";
let birthdateDisplay = "";
let scheduleDateDisplay = "";

const patient = {
    'department': '',
    'scheduleDate': '',
    'timeSlot': '',
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
const departmentDesc = {
    'internal medicine': 'Kung ikaw ay may mga pangkaraniwang karamdaman tulad ng lagnat, ubo, sakit sa tiyan, o iba pang mga sintomas na pangkalahatan, maaaring magpunta ka sa Internal Medicine Department ng Bulacan Medical Center.<br> <br>Dito ay tutugunan ng mga espesyalistang doktor ang mga pangkaraniwang kondisyon at magbibigay ng pagsusuri at lunas para sa mga pangunahing mga sakit ng katawan.',

    'internal medicine clearance': 'Kung ikaw ay nangangailangan ng Internal Medicine Clearance para sa mga medikal na kahilingan tulad ng operasyon, pagsusuri, o iba pang mga proseso, maaaring magpunta ka sa Internal Medicine Clearance Department ng Bulacan Medical Center. <br> <br>Dito ay tutulungan ka ng mga espesyalistang doktor na magbigay ng kaukulang pagsusuri at pagpapatunay ng iyong kalusugan bago magsagawa ng mga medikal na hakbang.',
    
    'pediatric general': 'Kung ikaw ay maghahanap ng serbisyo para sa mga batang pasyente, maaaring magpunta ka sa Pediatric General Department ng Bulacan Medical Center. <br> <br>Dito ay tutugunan ng mga espesyalistang doktor ang mga pangangailangan ng mga bata tulad ng pangkalahatang pangangalaga sa kalusugan, pagbibigay ng bakuna, pagtukoy at paggamot sa mga sakit ng mga bata, pati na rin ang pagbibigay ng payo at gabay sa mga magulang tungkol sa pangangalaga sa kanilang mga anak.',

    'pediatric cardiology': 'Kung ikaw ay may mga alalahanin o pangangailangan para sa puso at mga sakit sa puso ng iyong anak, maaaring magpunta ka sa Pediatric Cardiology Department ng Bulacan Medical Center. <br> <br>Dito ay tutulungan ka ng mga espesyalistang doktor na magbigay ng eksperisyang pangkardiyolohiya para sa mga batang pasyente. Sila ang magbibigay ng pagsusuri, pagdiagnose, at mga rekomendasyon na may kaugnayan sa kalusugan ng puso ng iyong anak, upang maalagaan at mapanatiling malusog ang kanyang puso.',

    'pediatric clearance': 'Kung ikaw ay nangangailangan ng Pediatric Clearance para sa mga medikal na kahilingan ng iyong anak tulad ng pagpapasok sa paaralan, paglahok sa mga aktibidad, o iba pang mga pangangailangan, maaaring magpunta ka sa Pediatric Clearance Department ng Bulacan Medical Center. <br> <br>Dito ay tutulungan ka ng mga espesyalistang doktor na magbigay ng pagsusuri at pagpapatunay ng kalusugan ng iyong anak bago siya makapagpatuloy sa mga aktibidad na kinakailangan ng kanyang edad at kalusugan.',

    'surgery': 'Kung ikaw ay nangangailangan ng operasyon o may mga medikal na pangangailangan na nangangailangan ng interbensyon sa pamamagitan ng operasyon, maaaring magpunta ka sa Surgery Department ng Bulacan Medical Center. <br> <br>Dito ay tutugunan ng mga espesyalistang doktor ang mga medikal na kaso na nangangailangan ng mga operasyon tulad ng pag-alis ng mga bukol, pagtunaw ng mga bato sa bato, o iba pang mga medikal na pangangailangan na nangangailangan ng kahusayan sa larangan ng pag-operahan.',

    'surgery ros': 'Kung ikaw ay nangangailangan ng pagsusuri ng iyong sistema sa katawan bago sumailalim sa operasyon, maaaring magpunta ka sa Surgery Review of System Department ng Bulacan Medical Center. Dito ay tutulungan ka ng mga espesyalistang doktor na suriin ang iyong mga organo at sistema sa katawan upang masiguro ang kalusugan at kakayahang magpatuloy sa isang operasyon. <br> <br>Sila ang magbibigay ng komprehensibong pagsusuri ng mga kondisyon na maaaring makaapekto sa iyong pagbubuting laban sa isang operasyon.',

    'psychiatry (new)': 'Kung ikaw ay isang bagong pasyente na naghahanap ng mga serbisyong pang-psikiyatriya sa Bulacan Medical Center, maaari kang pumunta sa Psychiatry Department. Dito ay tutulungan ka ng mga espesyalistang doktor na may kaalaman sa larangan ng sikolohiya at psychiatry. <br> <br>Sila ay magbibigay ng mga pagsusuri at mga rekomendasyon upang matugunan ang iyong mga pangangailangan sa kalusugan ng pag-iisip. Maaari kang makipag-ugnayan sa kanila upang magsimula sa isang bagong hakbang tungo sa iyong emosyonal na kagalingan at kalusugan.',

    'psychiatry (old)': 'Kung ikaw ay isang dating pasyente na nangangailangan ng mga serbisyo pang-psikiyatriya sa Bulacan Medical Center, maaari kang magpatuloy sa pagpunta sa Psychiatry Department. Ang mga espesyalistang doktor dito ay nakakasama mo na at may kaalaman tungkol sa iyong kasaysayan ng kalusugan ng pag-iisip. <br> <br>Sila ay magpapatuloy na magbigay ng mga pagsusuri, pagsubaybay, at mga rekomendasyon upang patuloy na maalagaan at mapaunlad ang iyong emosyonal na kalusugan. Maaari kang magtuloy sa iyong pag-uusap at pagtanggap ng serbisyo mula sa kanilang mga eksperto upang magpatuloy sa proseso ng iyong paggaling.',

    'nephrology': 'Kung ikaw ay may mga isyu o mga karamdaman sa bato o bato-bato, maaaring magpunta ka sa Nephrology Department ng Bulacan Medical Center. Dito ay tutulungan ka ng mga espesyalistang doktor na may kaalaman at kasanayan sa larangan ng nephrology. <br> <br>Sila ang magbibigay ng mga pagsusuri at mga rekomendasyon para sa mga kondisyon at sakit ng bato, tulad ng kidney stones, chronic kidney disease, o iba pang mga sakit na may kaugnayan sa bato. Sila ay magsisilbi bilang gabay at tagapag-alaga upang pangalagaan ang kalusugan ng iyong mga bato at magbigay ng mga kinakailangang lunas at pangangalaga.',

    'hematology': 'Kung ikaw ay may mga alalahanin o mga kondisyon na nauugnay sa dugo, maaaring magpunta ka sa Hematology Department ng Bulacan Medical Center. Dito ay tutulungan ka ng mga espesyalistang doktor na may sapat na kaalaman sa larangan ng hematology. Sila ang magbibigay ng mga pagsusuri, at mga rekomendasyon para sa mga sakit at mga kondisyon tulad ng anemia, leukemia, pagbabara ng mga dugo, o iba pang mga dugo-related na mga isyu. <br> <br>Sila ay magiging kasama mo sa proseso ng pangangalaga at paggamot upang pangalagaan ang kalusugan ng iyong dugo at maabot ang pinakamahusay na kalagayan ng iyong kalusugan.',

    'oncology': "Kung ikaw ay mayroong mga pangangailangan o mga kondisyon na nauugnay sa kanser, maaaring magpunta ka sa Oncology Department ng Bulacan Medical Center. Dito ay tutulungan ka ng mga espesyalistang doktor na may kasanayan sa larangan ng onkolyo. <br> <br>Sila ang magbibigay ng mga pagsusuri, at mga rekomendasyon para sa mga kondisyon na may kaugnayan sa kanser, tulad ng pag-iimbestiga at paggamot sa iba't ibang uri ng kanser. Sila ay magiging kasama mo sa buong proseso ng pag-aaruga, paggaling, at pangangalaga upang matugunan ang iyong mga pangangailangan at maabot ang pinakamahusay na kalusugan sa gitna ng laban sa kanser.",

    'ob gyne (new)': 'Kung ikaw ay isang bagong pasyente na naghahanap ng mga serbisyo sa larangan ng Obstetrics and Gynecology (OB-Gyne) sa Bulacan Medical Center, maaari kang pumunta sa OB-Gyne Department. Dito, matutulungan ka ng mga espesyalistang doktor na may kaalaman sa pangangalaga sa buntis, pangangalaga sa reproductive health ng kababaihan, at iba pang mga isyu na nauugnay sa ob-gyne. <br> <br>Sila ay magbibigay ng mga pagsusuri, payo, at pag-aaruga upang matugunan ang iyong mga pangangailangan bilang isang bagong pasyente. Maaaring makipag-ugnayan ka sa kanila upang mag-appoint ng isang konsultasyon at magsimula sa pagkalinga sa iyong reproductive health at pangangalaga sa buntis, kung kinakailangan.',

    'ob gyne (old)': 'Kung ikaw ay isang dating pasyente na nangangailangan ng mga serbisyo sa larangan ng Obstetrics and Gynecology (OB-Gyne) sa Bulacan Medical Center, maaari kang magpatuloy sa pagpunta sa OB-Gyne Department. Ang mga espesyalistang doktor dito ay nakakasama mo na at may kaalaman tungkol sa iyong kasaysayan ng pangangalaga sa buntis, reproductive health, at iba pang mga isyu sa ob-gyne. <br> <br>Sila ay magpapatuloy na magbibigay ng mga pagsusuri, payo, at pag-aaruga upang patuloy na maalagaan at mapaunlad ang iyong reproductive health. Maaari kang magtuloy sa iyong regular na mga konsultasyon at pagtanggap ng serbisyo mula sa kanilang mga eksperto upang magpatuloy sa pangangalaga sa iyong reproductive health at pangangalaga sa buntis, kung kinakailangan.',

    'ob gyne ros': 'Kung ikaw ay nangangailangan ng pagsusuri ng iyong reproductive system bago sumailalim sa pagkonsulta sa Obstetrics and Gynecology (OB-Gyne) Department ng Bulacan Medical Center, maaaring magpunta ka sa OB-Gyne Review of System Department. Dito ay tutulungan ka ng mga espesyalistang doktor na suriin ang iyong reproductive system at mga kondisyon na may kaugnayan dito. <br> <br>Sila ang magbibigay ng komprehensibong pagsusuri ng iyong reproductive health upang matukoy ang kalagayan at pangangailangan ng iyong reproductive system bago magsimula sa isang konsultasyon o iba pang mga medikal na hakbang.',

    'ent': 'Kung ikaw ay may mga isyu o mga kondisyon na nauugnay sa tainga, ilong, o lalamunan, maaaring magpunta ka sa Ear, Nose, and Throat (ENT) Department ng Bulacan Medical Center. Dito ay tutulungan ka ng mga espesyalistang doktor na may kaalaman at kasanayan sa larangan ng ENT. Sila ang magbibigay ng mga pagsusuri at mga rekomendasyon para sa mga kondisyon tulad ng impeksyon sa tainga, allergic rhinitis, tonsilitis, o iba pang mga isyu sa tainga, ilong, o lalamunan. <br> <br>Sila ay magiging kasama mo sa proseso ng pangangalaga at paggamot upang pangalagaan ang kalusugan ng iyong ENT system at maabot ang pinakamahusay na kalagayan ng iyong kalusugan.',

    'neurology': 'Kung ikaw ay may mga alalahanin o mga kondisyon na nauugnay sa utak, sistema ng nerbiyos, o mga sakit na neurolohiya, maaaring magpunta ka sa Neurology Department ng Bulacan Medical Center. Dito ay tutulungan ka ng mga espesyalistang doktor na may sapat na kaalaman at kasanayan sa larangan ng neurolohiya. Sila ang magbibigay ng mga pagsusuri at mga rekomendasyon para sa mga kondisyon tulad ng migraine, epilepsy, stroke, o iba pang mga sakit ng utak at sistema ng nerbiyos. <br> <br>Sila ay magsisilbi bilang gabay at tagapag-alaga upang pangalagaan ang kalusugan ng iyong utak at sistema ng nerbiyos, at magbigay ng mga kinakailangang paggamot at pangangalaga upang mapanatiling malusog ang iyong kalusugan.',

}

scheduleNav();
addLinkToLogo();
insertListenerDept();

function openModalDepartment(title, body){
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    let modalCloseBtn = document.querySelector('.btn-close');
    let negativeBtn = document.querySelector('.negative');
    let positiveBtn = document.querySelector('.positive');

    modalCloseBtn.style.display = 'none';
    positiveBtn.style.display = 'none';

    modalTitle.innerHTML = title;
    modalBody.innerHTML = body;
    modalLauncher.click();
}

function openModalUserError(body){
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    let modalCloseBtn = document.querySelector('.btn-close');
    let negativeBtn = document.querySelector('.negative');
    let positiveBtn = document.querySelector('.positive');


    positiveBtn.style.display = 'none';

    modalTitle.innerHTML = 'Invalid Input';
    modalBody.innerHTML = body;
    modalBody.style.fontSize = '1.1rem';

    modalLauncher.click();
}

function isLettersOnly(str) {
	return /^[A-Za-z ]*$/.test(str);
}

function isLettersNumsOnly(str) {
	return /^[A-Za-z 0-9]*$/.test(str);
}

function insertListenerDept(){
    deptCards.forEach((item, index)=>{
        item.addEventListener('click', ()=>{
            deptCards.forEach((itemRemove)=>{
                itemRemove.classList.remove('dept__selected');
            });
            document.querySelector('#department').value = item.querySelector('.form__dept-title').getAttribute('data-deptName');
            item.classList.add('dept__selected');

            temp = item.querySelector('.form__dept-title').innerHTML.toLowerCase();

            // lagay modal info
            openModalDepartment(document.querySelector('#department').value, '[THIS IS TEMPORARY INFO] ' +departmentDesc[temp]);
        });
    });
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

function addLinkToLogo(){
    logo.addEventListener('click', ()=>{
        window.location.href = './../index.html';
    });
}

function htmlDateConverter(str){
    str = str.split('-');
    tempYear = str[0];
    tempMonth = str[1];
    tempDate = str[2]
    
    birthdateDisplay = `${months[tempMonth-1]} ${tempDate}, ${tempYear}`;
}

// Ginagawang html date format yung Month Date, Year
function htmlDateUnconvert(str){
    str = str.replaceAll(',', '').split(' ');
    tempMonth = '';

    months.forEach((item, index)=>{
        if(item == str[0]){
            tempMonth = index+1;
            tempMonth = tempMonth.toString();
            if(tempMonth.length == 1) tempMonth = '0' + tempMonth;
        }
    });

    str[1] = str[1].toString();
    str[2] = str[2].toString();
    
    if(str[1].length == 1) str[1] = '0'+str[1];
    
    scheduleDateDisplay = str[2] + '-' + tempMonth + '-' + str[1];
}

function grabFirstForm(){

    // nilalagay laman ni input field department kay patient[department] then returns true pero 
    // if empty return true ibigsabihin di mag proceed next form
    patient["department"] = document.querySelector('#department').value.toLowerCase();
    if(patient['department'] == ""){
        errorHandler('150', document.querySelector('#department').id);
        return false;
    } 
    else return true;
}

function grabSecondForm(){
    
    // 
    // FIRST NAME **************************
    // 
    patient["firstName"] = document.querySelector('#firstName').value.trim().toLowerCase();
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
    patient["middleName"] = document.querySelector('#middleName').value.trim().toLowerCase();
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
    patient["lastName"] = document.querySelector('#lastName').value.trim().toLowerCase();
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
    patient['phone'] = document.querySelector('#phone').value.replaceAll(' ', '').trim();
    if(patient["phone"] == ""){
        errorHandler('50', document.querySelector('#phone').id);
        return false;
    }
    else if(patient["phone"].length != 11){
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

    // Inserts spaces to phone num
    patient['phone'] = properPhoneNum(patient['phone']);

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
        patient['barangay'] = document.querySelector('#barangay-other').value.trim().toLowerCase();
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
        patient['municipality'] = document.querySelector('#municipality-other').value.trim().toLowerCase();
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
        patient['province'] = document.querySelector('#province-other').value.trim().toLowerCase();
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

function grabThirdForm(){

    // 
    // SCHEDULE DATE **************************
    // 
    htmlDateUnconvert(document.querySelector('#scheduleDate').value)
    patient['scheduleDate'] = scheduleDateDisplay;
    if(patient["scheduleDate"] == ''){
        errorHandler('130', document.querySelector('#scheduleDate').id);
        return false;
    }

    // 
    // TIME SLOT **************************
    // 
    patient["timeSlot"] = document.querySelector('#timeSlot').value;
    if(patient["timeSlot"] == ''){
        errorHandler('140', document.querySelector('#timeSlot').id);
        return false;
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
        formErrorMessage = 'Ang gitnang pangalan ay kailangang kumpleto at di maaring magkaroon ng numero o special characters.';
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
    // 
    // SCHEDULE DATE **************************
    // 
    else if(code == '130'){
        formErrorMessage = 'Pumili ng petsa ng appointment.';
        errorHighlight = document.getElementById(id);
    }
    // 
    // TIME SLOT **************************
    // 
    else if(code == '140'){
        formErrorMessage = 'Pumili ng oras ng appointment.';
        errorHighlight = document.getElementById(id);
    }
    // 
    // DEPARTMENT **************************
    // 
    else if(code == '150'){
        formErrorMessage = 'Pumili ng department.';
    }
}

// lipat si form and undo yung answered and active classes sa progression
function editInformation(num){
    stepStatus = num;
    
    for(i = 0; i <=3; i++){
        progression[i].classList.remove('answered');
        progressionTitle[i].classList.remove('active');
    }

    for(i = 0; i <=num; i++){
        progression[i].classList.add('answered');
        progressionTitle[i].classList.add('active');
    }

    if(stepStatus == 0) mobileLabel.innerHTML = 'Pumili ng Department';
    else if(stepStatus == 1){
        mobileLabel.innerHTML = 'Personal na Impormasyon';
    }
    else if(stepStatus == 2){
        mobileLabel.innerHTML = 'Schedule ng Appointment';
    } 
    else if(stepStatus == 3){
        mobileLabel.innerHTML = 'Review ng Impormasyon';
    }
    
    proceed();

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
            // proceed();
            if(grabFirstForm()){
                proceed();
            }else{
                openModalUserError(formErrorMessage);
                stepStatus--;
            }
        }
        else if(stepStatus == 2){
            // proceed();
            if(grabSecondForm()){
                proceed();
            }else{
                openModalUserError(formErrorMessage);
                stepStatus--;
            }
        }
        else if(stepStatus == 3){
            // proceed();
            if(grabThirdForm()){
                proceed();
            }else{
                alert(formErrorMessage);
                stepStatus--;
            }
            grabPatient();
        }
        else if(stepStatus == 4){
            alert('show OTP');
        }
    });
}

function grabPatient(){
    console.table(patient);
    let reviewFields = document.querySelectorAll('.review-field');
    reviewFields.forEach((item, index)=>{
        switch(index){
            case 0:
                item.querySelector('.review__input').innerHTML = `${document.querySelector('#scheduleDate').value} (${selectedSlot})`;
                break;
            case 1:
                // Turn string to proper form then removed comma from function
                let dept = capitalFirstLetter(patient['department'])
                let removedCommaDept = "";

                for(i = 0; i < dept.length; i++){
                    if(dept[i] != ',') removedCommaDept += dept[i];
                }

                item.querySelector('.review__input').innerHTML = removedCommaDept;
                break;
            case 2:
                // Turn string to proper form then removed comma from function
                let fullName = capitalFirstLetter(`${patient['firstName']} ${patient['middleName']} ${patient['lastName']}`)
                let removedCommaName = "";

                for(i = 0; i < fullName.length; i++){
                    if(fullName[i] != ',') removedCommaName += fullName[i];
                }

                item.querySelector('.review__input').innerHTML = removedCommaName;
                break;
            case 3:
                item.querySelector('.review__input').innerHTML = patient['sex'].charAt(0).toUpperCase() + patient['sex'].substring(1);
                break;
            case 4:
                // inserts converted value to birthdateDisplay which is Month date, year
                htmlDateConverter(patient['birthdate']);
                item.querySelector('.review__input').innerHTML = birthdateDisplay;
                break;   
            case 5:
                item.querySelector('.review__input').innerHTML = patient['phone'];
                break; 
            case 6:
                // Turn string to proper form
                let tempAddress = capitalFirstLetter(`${patient['barangay']} ${patient['municipality']} ${patient['province']}`)
                item.querySelector('.review__input').innerHTML = tempAddress;
                break;
            case 7:
                if(patient['typeOfPatient'] == 'oldPatient') item.querySelector('.review__input').innerHTML = 'Dating Pasyente';
                else item.querySelector('.review__input').innerHTML = 'Bagong Pasyente';
                break;
            case 8:
                document.querySelector('.review__case-no').querySelector('.edit').style.display = 'block';
                if(patient['caseNo'] == '') document.querySelector('.review__case-no').querySelector('.edit').style.display = 'none';
                item.querySelector('.review__input').innerHTML = patient['caseNo'];
                break;
        }
        
    });
}

function capitalFirstLetter(str){
    str = str.split(' ');
    let newStr = [];

    str.forEach((item)=>{
        newStr.push(item.charAt(0).toUpperCase() + item.substring(1));
    });

    return newStr.join(', ');
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
    } 
    else if(stepStatus == 3){
        mobileLabel.innerHTML = 'Review ng Impormasyon';
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
