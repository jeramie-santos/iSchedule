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

let errorShow = true;
let isResendAvail = false;
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
    'dateOfBirth': '',
    'phone': '',
    'barangay': '',
    'municipality': '',
    'province': '',
    'typeOfPatient': '',
    'caseNo': '',
}
const departmentDesc = {
    'internal medicine': "Para sa mga isyu o kondisyon sa pangkalahatang kalusugan at mga sakit ng iba't ibang bahagi ng katawan, maaaring pumunta sa Internal Medicine Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa internal medicine ay tutulong sa inyo sa mga pagsusuri, pagsusuri, at paggamot para sa iba't ibang mga sakit at karamdaman. <br> <br>Sila ang mga espesyalistang doktor na tutulong sa iyo sa mga pagsusuri, pangangalaga, at paggamot para sa mga kondisyon tulad ng diabetes, high blood pressure, o iba pang mga sakit sa loob ng katawan.",

    'internal medicine clearance': 'Para sa mga kinakailangang clearance o pagsusuri para sa mga medikal na layunin tulad ng pre-employment o pagpaparehistro sa ibang institusyon, maaaring pumunta sa Internal Medicine Clearance Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa internal medicine ay magbibigay ng mga kinakailangang pagsusuri at evaluasyon ng inyong kalusugan para sa mga layuning ito. <br> <br>Sila ay tutulong sa inyo sa pagproseso ng inyong clearance at magbibigay ng mga rekomendasyon batay sa inyong kalagayan ng kalusugan.',
    
    'pediatric general': 'Para sa pangkalahatang pangangalaga sa mga bata at mga isyu sa kanilang kalusugan, maaaring pumunta sa Pediatric General Department ng Bulacan Medical Center.  <br> <br>Dito, ang mga espesyalistang doktor sa pediatrics ay tutulong sa inyo sa mga pagsusuri at paggamot para sa mga sakit at pangangailangan ng mga bata.  <br> <br>Sila ay may espesyalisasyon sa pag-aalaga sa mga bata at magbibigay ng komprehensibong pangangalaga upang mapanatili ang kalusugan at kagalingan ng inyong mga anak.',

    'pediatric cardiology': 'Para sa mga isyu o kondisyon sa puso ng mga bata, maaaring pumunta sa Pediatric Cardiology Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa pediatric cardiology ay tutulong sa inyo sa mga pagsusuri, pagsusuri, at paggamot para sa mga sakit o mga kondisyon sa puso ng mga bata. <br> <br>Sila ay may espesyalisasyon sa larangang ito at magbibigay ng maingat na pangangalaga upang mapanatili ang kalusugan ng puso ng inyong mga anak.',

    'pediatric clearance': 'Para sa mga kinakailangang clearance o pagsusuri para sa mga bata tulad ng pre-enrollment sa paaralan o pagpaparehistro sa ibang institusyon, maaaring pumunta sa Pediatric Clearance Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa pediatrics ay magbibigay ng mga kinakailangang pagsusuri at evaluasyon ng kalusugan ng inyong mga anak para sa mga layuning ito. <br> <br>Sila ay tutulong sa inyo sa pagproseso ng clearance at magbibigay ng mga rekomendasyon batay sa kalagayan ng kalusugan ng inyong mga anak.',

    'surgery': "Para sa mga medikal na pangangailangan na nangangailangan ng operasyon, maaaring pumunta sa Surgery Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa surgery ay tutulong sa inyo sa mga pagsusuri, evaluation, at pagpaplano ng mga medikal na procedure. <br> <br>Sila ay may malawak na kaalaman at karanasan sa iba't ibang uri ng mga operasyon at magbibigay ng maingat at maaasahang pangangalaga upang mapagaling ang inyong kalagayan.",

    'surgery ros': "Para sa pagsusuri ng mga sistema ng katawan bago sumailalim sa operasyon, maaaring pumunta sa Surgery Review of Systems Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor ay magbibigay ng kumpletong pagsusuri at evaluasyon ng iba't ibang mga sistema ng katawan upang matukoy ang kalagayan at pangangailangan bago isagawa ang operasyon. <br> <br>Ito ay mahalagang bahagi ng proseso upang masigurong ligtas at epektibo ang operasyon na inyong pinaplano.",

    'psychiatry (new)': 'Para sa mga bagong pasyente na naghahanap ng serbisyong psychiatry sa Bulacan Medical Center, maaaring pumunta sa Psychiatry Department. <br> <br>Dito, tutulungan kayo ng mga espesyalistang doktor sa larangan ng psychiatry na magbigay ng konsultasyon, pagsusuri, at paggamot para sa mga isyu ng kalusugan ng isip tulad ng depression, anxiety, o iba pang mga mental na kondisyon. <br> <br>Sila ay tutulong sa inyo sa pag-unawa sa inyong kalagayan at magbibigay ng mga kinakailangang suporta at interbensyon upang mapaunlad ang inyong mental na kalusugan.',

    'psychiatry (old)': "Para sa mga dating pasyente na nangangailangan ng serbisyong psychiatry sa Bulacan Medical Center, maaaring magpatuloy kayo sa inyong pagpunta sa Psychiatry Department. <br> <br>Dito, ang mga espesyalistang doktor sa psychiatry ay tutulong sa inyo sa patuloy na pag-aaruga at paggamot para sa inyong mga pangangailangan sa kalusugan ng isip. <br> <br>Sila ay nakakaalam na sa inyong kasaysayan at magpapatuloy na magbibigay ng mga serbisyo tulad ng pagsusuri, pagsusuri, at mga therapy session para sa pagpapanatili at pagpapabuti ng inyong mental na kalusugan.",

    'nephrology': 'Para sa mga isyu o kondisyon na nauugnay sa bato sa pantog, maaaring pumunta sa Nephrology Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa nephrology ay tutulong sa inyo sa mga pagsusuri, pagsusuri, at paggamot para sa mga sakit o mga kondisyon sa bato o bato sa pantog. Sila ay may espesyalisasyon sa larangang ito at magbibigay ng komprehensibong pangangalaga upang pangalagaan ang kalusugan ng inyong mga bato at pantog.',

    'hematology': 'Para sa mga isyu o kondisyon na nauugnay sa dugo, maaaring pumunta sa Hematology Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa hematology ay tutulong sa inyo sa mga pagsusuri, pagsusuri, at paggamot para sa mga sakit o mga kondisyon tulad ng anemia, leukemia, o iba pang mga sakit ng dugo. <br> <br>Sila ay may espesyalisasyon sa larangang ito at magbibigay ng komprehensibong pangangalaga upang pangalagaan ang kalusugan ng inyong mga dugo at sistema ng dugo.',

    'oncology': "Para sa mga isyu o kondisyon na nauugnay sa kanser, maaaring pumunta sa Oncology Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa oncology ay tutulong sa inyo sa mga pagsusuri, pagsusuri, at paggamot para sa mga uri ng kanser. <br> <br>Sila ay may espesyalisasyon sa larangang ito at magbibigay ng kumpletong pangangalaga upang labanan ang kanser, kasama na ang mga paggamot tulad ng kemoterapiya, radioterapiya, o iba pang mga pang-agham na hakbang.",

    'ob gyne (new)': 'Para sa mga bagong pasyente na naghahanap ng serbisyong obstetriya at ginekolohiya sa Bulacan Medical Center, maaaring pumunta sa OB-Gyne Department. <br> <br>Dito, tutulungan kayo ng mga espesyalistang doktor sa OB-Gyne na magbigay ng pagsusuri, konsultasyon, at pangangalaga para sa mga pangangailangan ng inyong reproductive health. <br> <br>Sila ay magbibigay ng maingat at sensitibong serbisyo upang pangalagaan ang kalusugan ng inyong reproduktibong sistema at magbigay ng impormasyon tungkol sa pangangalaga ng inyong kalusugan sa pagbubuntis, panganganak, o iba pang mga gynecological na kondisyon.',

    'ob gyne (old)': 'Para sa mga dating pasyente na nangangailangan ng serbisyong obstetriya at ginekolohiya sa Bulacan Medical Center, maaaring magpatuloy kayo sa inyong pagpunta sa OB-Gyne Department. <br> <br>Dito, ang mga espesyalistang doktor sa OB-Gyne ay tutulong sa inyo sa patuloy na pag-aaruga at pangangalaga para sa mga pangangailangan ng inyong reproductive health. <br> <br>Sila ay nakakaalam na sa inyong kasaysayan at magpapatuloy na magbibigay ng mga serbisyo tulad ng pagsusuri, konsultasyon, at pangangalaga para sa mga pangangailangan sa pagbubuntis, panganganak, o iba pang mga gynecological na kondisyon.',

    'ob gyne ros': "Para sa pagsusuri ng mga sistema ng katawan na nauugnay sa obstetriya at ginekolohiya, maaaring pumunta sa OB-Gyne Review of Systems Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor ay magbibigay ng kumpletong pagsusuri at evaluasyon ng iba't ibang mga sistema ng katawan na may kinalaman sa reproductive health. <br> <br>Ito ay mahalagang bahagi ng proseso upang masuri at matukoy ang kalagayan ng inyong reproductive system, tulad ng mga pagsusuri sa mga organo tulad ng matris at obaryo, hormonal na balanse, at iba pang mga aspeto ng pangangalaga ng kalusugan ng kababaihan.",

    'ent': 'Para sa mga isyu o kondisyon na nauugnay sa tenga, ilong, at lalamunan, maaaring pumunta sa ENT (Ears, Nose, Throat) Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa ENT ay tutulong sa inyo sa mga pagsusuri, pagsusuri, at paggamot para sa mga sakit o mga kondisyon tulad ng impeksyon sa tenga, sipon, tonsilitis, o iba pang mga problema sa tainga, ilong, at lalamunan. <br> <br>Sila ay may espesyalisasyon sa larangang ito at magbibigay ng komprehensibong pangangalaga upang pangalagaan ang kalusugan ng inyong mga tainga, ilong, at lalamunan.',

    'neurology': 'Para sa mga isyu o kondisyon na nauugnay sa sistema ng nerbiyo at utak, maaaring pumunta sa Neurology Department ng Bulacan Medical Center. <br> <br>Dito, ang mga espesyalistang doktor sa neurology ay tutulong sa inyo sa mga pagsusuri, pagsusuri, at paggamot para sa mga sakit o mga kondisyon tulad ng migraine, epilepsy, stroke, o iba pang mga problema sa utak at nerbiyo. <br> <br>Sila ay may espesyalisasyon sa larangang ito at magbibigay ng komprehensibong pangangalaga upang pangalagaan ang kalusugan ng inyong sistema ng nerbiyo at utak.',

}

setInterval(()=>{
    errorShow = true;
},3000)

scheduleNav();
addLinkToLogo();
insertListenerDept();

function goBlack(id){
    document.getElementById(id).style.color = 'black';
}

function checkNum(id){
    let element = document.getElementById(id);
    let val = element.value;
    let newVal = '';

    if(val.length != 0){
        if(isNaN(val[val.length-1])){
            newVal = val.substring(0, val.length-1);
            element.value = newVal;
        }
    }    
}

function openModalDepartment(title, body){
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    let modalCloseBtn = document.querySelector('.btn-close');
    let negativeBtn = document.querySelector('.negative');
    let positiveBtn = document.querySelector('.positive');
    let modalHeader = document.querySelector('.modal-header');
    let modalFooter = document.querySelector('.modal-footer');
    let modal = document.querySelector('.modal-dialog');

    modalHeader.style.display = 'flex';
    modalFooter.style.display = 'flex';
    modal.classList.add('modal-lg');
    modalTitle.style.color = 'unset';
    // modalCloseBtn.style.display = 'none';
    positiveBtn.style.display = 'none';

    modalTitle.innerHTML = title;
    modalBody.innerHTML = body;
    modalBody.style.fontSize = '1.3rem';
    modalLauncher.click();

}

function openModalUserError(title, body){
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    let modalCloseBtn = document.querySelector('.btn-close');
    let negativeBtn = document.querySelector('.negative');
    let positiveBtn = document.querySelector('.positive');
    let modalHeader = document.querySelector('.modal-header');
    let modalFooter = document.querySelector('.modal-footer');
    let modal = document.querySelector('.modal-dialog');

    modalHeader.style.display = 'flex';
    modalFooter.style.display = 'flex';
    modal.classList.remove('modal-lg');
    
    positiveBtn.style.display = 'none';
    // modalCloseBtn.style.display = 'none';

    modalTitle.style.color = "red";
    modalTitle.innerHTML = title;
    modalBody.innerHTML = body;
    modalBody.style.fontSize = '1.3rem';

    modalLauncher.click();
}

function openModalOTP(){
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    let modalCloseBtn = document.querySelector('.btn-close');
    let negativeBtn = document.querySelector('.negative');
    let positiveBtn = document.querySelector('.positive');
    let modal = document.querySelector('.modal-dialog');
    let modalItself = document.querySelector('.modal');
    let modalHeader = document.querySelector('.modal-header');
    let modalFooter = document.querySelector('.modal-footer');
    
    modal.classList.add('modal-lg');
    modalHeader.style.display = 'none';
    modalFooter.style.display = 'none';
    modalTitle.style.color = 'unset';
    modalBody.style.minHeight = '400px';

    let htmlCode = '<div class="OTP-container"><div class="textInfo-container"><span class="mainText">Ibigay ang iyong One-Time Password upang i-confirm ang iyong appointment.</span><span class="subText">Ang One-Time Password ay sinend sa numero ng teleponong <span class="phoneDisplay">09XX XXX XXXX</span></span></div><div class="OTP-body"><div class="OTP-field"><input type="text" name="OTP1" id="OTP1" oninput="inputLimiter(this.id, 5)" onblur="inputLimiterBlur(this.id, 5)"><button class="resend-btn">Re-Send</button></div><div class="error-msg"></div></div><button class="OTP-btn">Submit</button></div>'
    modalBody.innerHTML = htmlCode;
    document.querySelector('.phoneDisplay').innerHTML = patient['phone'];
    document.querySelector('.OTP-btn').addEventListener('click', ()=>{
        checkOTP();
    });
    modalLauncher.click();
    resetCD();

    document.querySelector('.resend-btn').addEventListener('click', ()=>{
        if(isResendAvail){
            resendOTP();
            resetCD();
            isResendAvail = false;
        } 
    });
}

function filterPhoneInput(id){
    let element = document.getElementById(id);
    element.value = element.value.replace(/^[A-Za-z]*$/, "");
}

// If 5 na yung length ni OTP input mag blur siya para di niya maexceed yung 5 na input
function inputLimiter(id, max){
    let element = document.getElementById(id);
    if (element.value.length > max){
        element.value = element.value.slice(0, -1);
        // alert('test');
    }

    element.value = element.value.replace(/\D+/g, '');
}

// If konwari nag copypaste si user tapos nag blur tanggalin yung sobra
function inputLimiterBlur(id, max){
    let element = document.getElementById(id);
    let newVal = "";
    if(element.value.length > max){
        for(i=0; i < max; i++){
            newVal += element.value[i];
        }
        element.value = newVal;
    }
}

function checkOTP(){
    let error = document.querySelector('.error-msg');

    // DITO NAKALAGAY YUNG CHECKING TAPOS IF MALI BAGSAK DITO SA BABA
    

    // Pag mali input ni user ere labas
    // second time na mali mag shake si error msg
    if(error.innerHTML != ""){
        error.classList.add('error-animate');
        setTimeout(()=>{
            error.classList.remove('error-animate');
        },500);
    }
    error.innerHTML = 'Mali ang iyong ibinigay na OTP.';
}

function sendOTP(){
    // magsend otp

    openModalOTP();
}

function resendOTP(){
    // di na magopen panibago modal kaya nakahiwalay tong function na to
}

function resetCD(){
    let time = 30;
    let resend = document.querySelector('.resend-btn');
    resend.classList.add('cd');
    resend.innerHTML = time + 's';

    let timer = setInterval(()=>{
        time--;
        resend.innerHTML = time + 's';
        
        if(time == 0){
            time = 30;
            clearInterval(timer);
            resend.innerHTML = 'Re-send';
            isResendAvail = true;
            resend.classList.remove('cd');
        }
    },1000);
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
            openModalDepartment(document.querySelector('#department').value, '[TEMPORARY TEXT] ' +departmentDesc[temp]);
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
    try {
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
    } catch (error) {
        
    }
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

    // DI KO PA SURE IF LALAGYAN KO LIMIT LANG ATLEAST 18 YEARS OLD BA OR SOMETHING ******************************************************
    // 
    // BIRTHMONTH **************************
    // 
    let birthMonth = document.querySelector('#birthMonth').value;
    if(birthMonth == ''){
        errorHandler('40', document.querySelector('#birthMonth').id);
        return false;
    }

    // 
    // BIRTHDATE **************************
    // 
    let birthDate = document.querySelector('#birthDate').value.trim();
    if(birthDate == ''){
        errorHandler('41', document.querySelector('#birthDate').id);
        return false;
    }
    else if(birthDate.length > 2){
        errorHandler('42', document.querySelector('#birthDate').id);
        return false;
    }
    else if(isNaN(birthDate)){
        errorHandler('43', document.querySelector('#birthDate').id);
        return false;
    }
    else if(birthDate > 31 || birthDate < 1){
        errorHandler('44', document.querySelector('#birthDate').id);
        return false;
    }
    if(birthDate.length == 1){
        temp = '0' + birthDate;
        birthDate = temp;
    }

    // 
    // BIRTHYEAR **************************
    // 
    let checkDate = new Date();
    let birthYear = document.querySelector('#birthYear').value.trim();
    if(birthYear == ''){
        errorHandler('45', document.querySelector('#birthYear').id);
        return false;
    }
    else if(birthYear.length != 4 ||isNaN(birthYear)){
        errorHandler('46', document.querySelector('#birthYear').id);
        return false;
    }
    else if(birthYear < 1900 || birthYear > checkDate.getFullYear()){
        errorHandler('47', document.querySelector('#birthYear').id);
        return false;
    }
    patient['dateOfBirth'] = `${birthYear}-${birthMonth}-${birthDate}`;
    
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
    if(document.querySelector('#scheduleDate').value == ''){
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

    console.log(patient["timeSlot"]);
    console.log(patient['scheduleDate']);
    return true;
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
                htmlDateConverter(patient['dateOfBirth']);
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
        formErrorMessage = 'Ang gitnang pangalan ay kailangan sagutan.';
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
        formErrorMessage = 'Ang apelido ay kailangan sagutan.';
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
        formErrorMessage = 'Ang kasarian ay kailangan sagutan.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // BIRTHDATE **************************
    // 
    else if(code == '40'){
        formErrorMessage = 'Ang buwan ng petsa ng kapanganakan ay kailangan sagutan.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '41'){
        formErrorMessage = 'Ang araw ng petsa ng kapanganakan ay kailangan sagutan.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '42'){
        formErrorMessage = 'Ang araw ng petsa ng kapanganakan ay di angkop.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '43'){
        formErrorMessage = 'Ang araw ng petsa ng kapanganakan ay maari lamang maging numero.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '44'){
        formErrorMessage = 'Ang araw ng petsa ng kapanganakan ay maari lamang maging isa(1) hanggang tatlongput-isa(31).';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '45'){
        formErrorMessage = 'Ang taon ng petsa ng kapanganakan ay kailangan sagutan.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '46'){
        formErrorMessage = 'Ang taon ng petsa ng kapanganakan ay hindi angkop.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    else if(code == '47'){
        formErrorMessage = 'Ang taon ng petsa ng kapanganakan ay hindi angkop.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // PHONE **************************
    // 
    else if(code == '50'){
        formErrorMessage = 'Ang numero ng telepono ay kailangan sagutan.';
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
        formErrorMessage = 'Ang munisipalidad ay kailangan sagutan.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // BARANGAY **************************
    // 
    else if(code == '70'){
        formErrorMessage = 'Ang barangay ay kailangan sagutan.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // BARANGAY(OTHER) **************************
    // 
    else if(code == '80'){
        formErrorMessage = 'Ang barangay ay kailangan sagutan.';
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
        formErrorMessage = 'Ang munisipalidad ay kailangan sagutan.';
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
        formErrorMessage = 'Ang probinsya ay kailangan sagutan.';
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
        formErrorMessage = 'Ang klase ng pasyente ay kailangan sagutan.';
        errorHighlight = document.getElementById(id);
        errorHighlight.style.borderColor = 'red';
    }
    // 
    // CASE NO **************************
    // 
    else if(code == '120'){
        formErrorMessage = 'Ang case number ay kailangan sagutan.';
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
                openModalUserError('Invalid Input',formErrorMessage);
                stepStatus--;
            }
        }
        else if(stepStatus == 2){
            // proceed();
            if(grabSecondForm()){
                proceed();
            }else{
                openModalUserError('Invalid Input', formErrorMessage);
                stepStatus--;
            }
        }
        else if(stepStatus == 3){
            // proceed();
            if(grabThirdForm()){
                proceed();
            }else{
                openModalUserError('Invalid Input', formErrorMessage);
                stepStatus--;
            }
            grabPatient();
        }
        else if(stepStatus == 4){
            sendOTP();
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

    if(stepStatus == 0){
        mobileLabel.innerHTML ='Pumili ng Department';
        document.querySelector('.first').scrollTo(0,0); 
    } 
    else if(stepStatus == 1){
        mobileLabel.innerHTML = 'Personal na Impormasyon';
        document.querySelector('.second').scrollTo(0,0); 
    }
    else if(stepStatus == 2){
        mobileLabel.innerHTML = 'Schedule ng Appointment';
        document.querySelector('.third').scrollTo(0,0); 
    } 
    else if(stepStatus == 3){
        mobileLabel.innerHTML = 'Review ng Impormasyon';
    }
}

function capitalFirstLetter(str){
    str = str.split(' ');
    let newStr = [];

    str.forEach((item)=>{
        newStr.push(item.charAt(0).toUpperCase() + item.substring(1));
    });

    return newStr.join(', ');
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

    if(id == 'birthMonth'){
        goBlack(id);
    }
}

function revertAllBorder(){
    allInput.forEach((item)=>{
        item.style.borderColor = 'rgb(186, 182, 182)';
    });
    allSelect.forEach((item)=>{
        item.style.borderColor = 'rgb(186, 182, 182)';
    });
}
