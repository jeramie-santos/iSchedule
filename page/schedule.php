<?php
    require '../php/connect.php';
    session_start();
    
    $query = "SELECT `status` FROM `website_status` WHERE `isActive` = true;";

    $result = mysqli_query($conn, $query);

    while($row = mysqli_fetch_array($result)){
            $_SESSION['status'] = $row['status'];
    }
    
    if($_SESSION['status'] == 2 || $_SESSION['status'] == 3){
      header("Location: down.php");
    }
 ?>


<!-- TODO
AYUSIN BIRTHDATE GAWA CUSTOM FROM YOUTUBE
AYUSIN DESKTOP MODE NG SECOND FORM -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="./../css/schedule.css">
    <link rel="stylesheet" href="./../css/burger.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" type="image/x-icon" href="./../imgs/mediclogo.png">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script defer src="./../js/burger.js"></script>
    <script defer src="./../js/schedule.js"></script>
    <script defer src="./../js/barangaySelector.js"></script>
    <script defer src="./../js/calendarGenerator.js"></script>
    <title>iSchedule</title>
</head>
<body>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__logo-container btn-link" data-page="home">
                <img class="header__logo" src="./../imgs/BMC-logo.png" alt="BMC Logo">
                <h1 class="header__text-logo">iSchedule <span class="header__sub">Bulacan Medical Center</span></h1>
            </div>
            <nav class="header__nav-mobile" >
                <div class="menu-btn">
                    <div id="burget__test" class="menu-btn__burger"></div>
                </div>
                <div class="header__nav-mobile--links" id="links" style="display: none;">
                    <a class="header__dropdown-item btn-link" href="./../index.html?home"><span class="material-icons-outlined">home</span>Home</a>
                    <a class="header__dropdown-item"><span class="material-icons-outlined">calendar_month</span>Schedule An Appointment</a>
                    <a class="header__dropdown-item btn-link" href="./../index.html?announcement"><span class="material-icons-outlined">campaign</span>Announcement</a>
                    <a class="header__dropdown-item btn-link" href="./../index.html?footer"><span class="material-icons-outlined">info</span>About Us</a>
                </div>
            </nav>
            <nav class="header__nav-desktop">
                <a class="header__nav-desktop--links btn-link" href="./../index.php?home">Home</a>
                <a class="header__nav-desktop--links">Schedule An Appointment</a>
                <a class="header__nav-desktop--links btn-link" href="./../index.html?announcement"> Announcement</a>
                <a class="header__nav-desktop--links btn-link" href="./../index.html?footer">About Us</a>
            </nav> 
        </div>
    </header>
    <main>
        <div class="progression">
            <div class="mobile-label">Pumili ng Department</div>
            <div class="progression__step progression__step1 answered"><span class="progression__title initial">Pumili ng Department</span></div>
            <div class="progression__step progression__step2"><span class="progression__title">Personal na Impormasyon</span></div>
            <div class="progression__step progression__step3"><span class="progression__title">Schedule ng Appointment</span></div>
            <div class="progression__step progression__step4"><span class="progression__title">Review ng Impormasyon</span></div>
        </div>
        <div class="form-container">
            <form action="">
                <div class="form__form-parts">
                    <button type="button" class="btn btn-primary modal-launcher" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="display:none">
                        Launch static backdrop modal
                    </button>
                    <div class="form-part first">
                        <!-- kung ano pindutin na department siya magiging value ni input department
                        bawal mag proceed sa next part ng form hanggat di nakaka pili
                        naka highlight dapat yung pinili -->
                        <div style="display: none;" class="form__input-container">
                            <input type="text" name="department" id="department">
                        </div>
                        <div id="dept_0" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/dummyimg.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Ear, Nose, and Throat">ENT</span>
                        </div>
                        <div id="dept_1" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/dummyimg.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Hematology">Hematology</span>
                        </div>
                        <div id="dept_2" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/dummyimg.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Internal Medicine">Internal Medicine</span>
                        </div>
                        <div id="dept_3" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/im_clearance.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Internal Medicine Clearance">Internal Medicine Clearance</span>
                        </div>
                        <div id="dept_4" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/dummyimg.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Nephrology">Nephrology</span>
                        </div>
                        <div id="dept_5" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/neurology.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Neurology">Neurology</span>
                        </div>
                        <div id="dept_6" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/ob_new.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Obstetrics and Gynecology New">OB GYNE New</span>
                        </div>
                        <div id="dept_7" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/ob_old.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Obstetrics and Gynecology Old">OB GYNE Old</span>
                        </div>
                        <div id="dept_8" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/ob_ros.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Obstetrics and Gynecology Review of Systems">OB GYNE ROS</span>
                        </div>
                        <div id="dept_9" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/dummyimg.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Oncology">Oncology</span>
                        </div>
                        <div id="dept_10" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/dummyimg.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Pediatric Cardiology">Pediatric Cardiology</span>
                        </div>
                        <div id="dept_11" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/dummyimg.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Pediatric Clearance">Pediatric Clearance</span>
                        </div>
                        <div id="dept_12" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/dummyimg.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Pediatric General">Pediatric General</span>
                        </div>
                        <div id="dept_13" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/psychiatry_new.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Psychiatry New">Psychiatry New</span>
                        </div>
                        <div id="dept_14" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/psychiatry_old.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Psychiatry Old">Psychiatry Old</span></div>
                        <div id="dept_15" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/surgery.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Surgery">Surgery</span> <!--ENT -->
                        </div> 
                        <div id="dept_16" class="form__card">
                            <div class="form__img-container"> 
                                <img class="form__dept-img" src="./../imgs/surgery ros.png" alt="" srcset="">
                            </div>
                            <span class="form__dept-title" data-deptName="Surgery Review of Systems">Surgery ROS</span>
                        </div> 
                    </div>
                    <div class="form-part second" style="display: none;">
                        <div class="field-container">
                            <label for="firstName">Pangalan / First Name</label>
                            <input type="text" id="firstName" name="firstName" onblur="revertBorder(this.id)">
                        </div>
                        <div class="field-container">
                            <label for="middleName">Gitnang Pangalan / Middle Name</label>
                            <input type="text" id="middleName" name="middleName" onblur="revertBorder(this.id)">
                        </div>
                        <div class="field-container">
                            <label for="lastName">Apelido / Last Name</label>
                            <input type="text" id="lastName" name="lastName" onblur="revertBorder(this.id)">
                        </div>
                        <div class="field-container">
                            <label for="sex">Kasarian / Sex</label>
                            <select name="sex" id="sex" onchange="revertBorder(this.id)">
                                <option disabled="disabled" selected="selected" hidden="hidden"></option>
                                <option value="male">Lalaki / Male</option>
                                <option value="female">Babae / Female</option>
                            </select>
                        </div>
                        <div class="field-container">
                            <label for="birthdate">Petsa ng Kapanganakan / Birthdate</label>
                            <!-- <input type="date" name="birthdate" id="birthdate" onchange="revertBorder(this.id)"> -->
                            <div class="birthdate-container">
                                <select name="birthMonth" id="birthMonth" onchange="revertBorder(this.id)">
                                    <option selected="selected" disabled="disabled" hidden="hidden" value="">Buwan</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <input type="text" name="date" id="birthDate" placeholder="Araw" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  onblur="revertBorder(this.id); inputLimiterBlur(this.id, 2)" oninput="inputLimiter(this.id, 2)">
                                <input type="text" name="year" id="birthYear" placeholder="Taon" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  onblur="revertBorder(this.id);  inputLimiterBlur(this.id, 4)" oninput="inputLimiter(this.id, 4)">
                            </div>
                        </div>

                        <div class="field-container">
                            <label for="phone">Numero ng Telepono / Phone Number</label>
                            <input type="text" id="phone" name="phone" onblur="revertBorder(this.id);" oninput="filterPhoneInput(this.id)" placeholder="09XX XXX XXXX">
                        </div>
                        <div class="field-container">
                            <label for="municipality">Munisipalidad / Municipality</label>
                            <select name="municipality" id="municipality" onchange="getBarangayList(this.value)" onchange="revertBorder(this.id)">
                                <option disabled="disabled" selected="selected" hidden="hidden"></option>
                            </select>
                        </div>
                        <div class="field-container">
                            <label for="barangay">Barangay</label>
                            <select name="barangay" id="barangay" disabled="disabled" onchange="revertBorder(this.id)">
                            </select>
                        </div>
                        <div class="field-container other-container" style="display: none;" >
                            <label for="other" class="other-label">Lokasyon / Address (Other)</label>
                            <div class="address-container">
                            </div>
                        </div>
                        <div class="field-container">
                            <label for="patientType">Klase ng Pasyente / Patient Type</label>
                            <select name="patientType" id="patientType" onchange="revertBorder(this.id)">
                                <option disabled="disabled" selected="selected" hidden="hidden"></option>
                                <option value="oldPatient">Dating Pasyente / Old Patient</option>
                                <option value="newPatient">Bagong Pasyente / New Patient</option>
                            </select>
                        </div>
                        <div class="field-container caseNo-container">
                            <label for="caseNo">Case # (Optional / Kung Mayroon)</label>
                            <input type="text" name="caseNo" id="caseNo" value="">
                        </div>

                        <!-- <div class="field-container dummyElement" style="visibility: hidden;">
                        </div> -->
                    </div>
                    <div class="form-part third" style="display: none;">                                
                        <input type="text" name="scheduleDate" id="scheduleDate" style="display: none;">
                        <input type="text" name="timeSlot" id="timeSlot" style="display: none;">
                        <div class="calendar-container">
                            <div class="calendar__header">
                                <div class="calendar__btn" id="calendar__prev"><img draggable="false" class="calendar__arrow" src="./../imgs/arrow-back.png" alt="" srcset=""></div>
                                <div class="calendar__month"></div>
                                <div class="calendar__btn" id="calendar__next"><img draggable="false" class="calendar__arrow" src="./../imgs/arrow-forward.png" alt="" srcset=""></div>
                            </div>
                            <div class="calendar-row zeroRow">
                                <div class="box day">Sun</div>
                                <div class="box day">Mon</div>
                                <div class="box day">Tue</div>
                                <div class="box day">Wed</div>
                                <div class="box day">Thu</div>
                                <div class="box day">Fri</div>
                                <div class="box day">Sat</div>
                            </div>
                            <div class="calendar-row firstRow date-content">
                            </div>
                            <div class="calendar-row secondRow date-content">
                            </div>
                            <div class="calendar-row thirdRow date-content">
                            </div>
                            <div class="calendar-row fourthRow date-content">
                            </div>
                            <div class="calendar-row fifthRow date-content">
                            </div>
                            <div class="calendar-row sixthRow date-content">
                            </div>
                            <div class="calendar__color-indicator">
                                <div class="calendar__desc">
                                    <div class="green"></div>
                                    <div class="calendar__color-green">Slots Open</div>
                                </div>
                                <div class="calendar__desc">
                                    <div class="red"></div>
                                    <div class="calendar__color-red">Slots Full</div>
                                </div>
                                <div class="calendar__desc">
                                    <div class="gray"></div>
                                    <div class="calendar__color-gray">Closed</div>
                                </div>
                            </div>
                        </div>
                        <div class="calendar__info">
                            <div class="slot-container">
                                <!-- <div class="slot" id="a">
                                    <div class="time">8:00 AM - 10:00 AM</div>
                                    <div class="slotAvail">5 Slots Available</div>
                                </div>
                                <div class="slot" id="b">
                                    <div class="time">10:00 AM - 11:00 AM</div>
                                    <div class="slotAvail">7 Slots Available</div>
                                </div>
                                <div class="slot" id="c">
                                    <div class="time">1:00 PM - 2:00 PM</div>
                                    <div class="slotAvail">4 Slots Available</div>
                                </div>
                                <div class="slot" id="d">
                                    <div class="time">2:00 PM - 4:00 PM</div>
                                    <div class="slotAvail">9 Slots Available</div>
                                </div> -->

                                <div class="calendar__instruction">Pumili ng Petsa</div>
                                <!-- <div class="calendar__instruction">Select a Date</div> -->
                            </div>
                        </div>
                    </div>
                    <div class="followup-container" style="display:none">
                        <button type="button">Full slot ang araw ng <span class="followup-highlight">scheduled follow-up</span> mo? Pindutin ito.</button>
                    </div>
                    <div class="form-part fourth" style="display: none;">
                        <span>PAALALA: Suriin ng mabuti ang impormasyon at palitan kung merong maling impormasyon.</span>
                        <div class="review">
                            <div class="review-field review__schedule">
                                <div class="review__title">Schedule:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(2)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                            <div class="review-field review__dept">
                                <div class="review__title">Department:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(0)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                            <div class="review-field review__full-name">
                                <div class="review__title">Buong Pangalan:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(1)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                            <div class="review-field review__sex">
                                <div class="review__title">Kasarian:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(1)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                            <div class="review-field review__birthdate">
                                <div class="review__title">Petsa ng Kapanganakan:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(1)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                            <div class="review-field review__phone">
                                <div class="review__title">Numero ng Telepono:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(1)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                            <div class="review-field review__address">
                                <div class="review__title">Lokasyon:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(1)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                            <div class="review-field review__patient-type">
                                <div class="review__title">Klase ng Pasyente:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(1)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                            <div class="review-field review__case-no">
                                <div class="review__title">Case #:</div>
                                <div class="info-container">
                                    <div class="edit" onclick="editInformation(1)">(Edit)</div>
                                    <div class="review__input"></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>
                <!-- <input id="input" type="text">
                <div onclick="boom()" id="test"> test</div>
                <input type="submit"> -->
                <div class="form__btn-container">
                    <input class="btn btn-next" type="button" value="Next">
                    <input class="btn btn-back" type="button" value="Back">
                </div>
            </form>
        </div>
    </main>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary negative" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary positive" data-bs-dismiss="modal">Understood</button>
            </div>
        </div>
        </div>
    </div>
</body>
</html>