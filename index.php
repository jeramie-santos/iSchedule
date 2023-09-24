<!-- Library Used:
*AOS
*Bootstrap(sa admin level gagamitin none sa user lvl)
 -->

 <?php
    require './php/connect.php';
    session_start();
    
    $query = "SELECT `status` FROM `website_status` WHERE `isActive` = true;";

    $result = mysqli_query($conn, $query);

    while($row = mysqli_fetch_array($result)){
            $_SESSION['status'] = $row['status'];
    }
    
    if($_SESSION['status'] == 2){
      header("Location: ./page/down.php");
    }
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="./imgs/mediclogo.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Burger -->
    <link rel="stylesheet" href="./css/burger.css">
    <!-- AOS -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <!-- Bootstrap -->
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <!-- AOS -->
    <script defer src="https://unpkg.com/aos@next/dist/aos.js"></script>
    </script>
    <!-- Burger -->
    <script defer src="./js/burger.js"></script>
    <script defer src="./js/index.js"></script>
    <title>iSchedule</title>
</head>
<body onload="initialize()">
    <header class="header">
        <div class="header__wrapper">
            <div class="header__logo-container btn-link" data-page="home">
                <img class="header__logo" src="./imgs/BMC-logo.png" alt="BMC Logo">
                <h1 class="header__text-logo">iSchedule <span class="header__sub">Bulacan Medical Center</span></h1>
            </div>
            <nav class="header__nav-mobile" >
                <div class="menu-btn">
                    <div class="menu-btn__burger"></div>
                </div>
                <div class="header__nav-mobile--links" id="links" style="display: none;">
                    <button class="header__dropdown-item btn-link" data-page="home"><span class="material-icons-outlined">home</span>Home</button>
                    <button class="header__dropdown-item btn-link" onClick="parent.location='./page/schedule.php'"><span class="material-icons-outlined">calendar_month</span>Schedule An Appointment</button>
                    <button class="header__dropdown-item btn-link" data-page="announcement"><span class="material-icons-outlined">campaign</span>Announcement</button>
                    <button class="header__dropdown-item btn-link" data-page="footer"><span class="material-icons-outlined">info</span>About Us</button>
                </div>
            </nav>
            <nav class="header__nav-desktop">
                <button class="header__nav-desktop--links btn-link" data-page="home">Home</button>
                <button class="header__nav-desktop--links btn-link" onClick="parent.location='./page/schedule.php'">Schedule An Appointment</button>
                <button class="header__nav-desktop--links btn-link" data-page="announcement">Announcement</button>
                <button class="header__nav-desktop--links btn-link" data-page="footer">About Us</button>
            </nav> 
        </div>
    </header>
    <!-- <div class="spacer"></div> -->
    <main>
          <section id="home" class="landing-page">
            <div class="landing-page__img-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"><img draggable="false" class="landing-page__img" src="./imgs/mediclogo.png" alt="wecare logo" srcset="">
            </div>
            <div class="landing-page__content" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
              <h2 class="landing-page__title">Creating Appointments Made Easy</h2>
              <div class="landing-page__text">Welcome to <span class="highlight">Bulacan Medical Center</span>'s OPD appointment scheduling website! We are delighted to introduce a hassle-free way for you to schedule your healthcare appointments conveniently with just a few clicks.</div>
              <div class="landing-page__buttons">
                <button class="btn btn-how btn-link" data-page="tutorial">Paano Mag Pa-Schedule?</button>
                <button class="btn btn-now" onClick="parent.location='./page/schedule.html'">Mag Pa-Schedule Ngayon</button>
              </div>
            </div>
            <!-- possible ibahin yung wave svg and make it more responsive pero optional pa 
            kasi goods na naman -->
            <div class="landing-page__wave">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
              </svg>
            </div>
          </section>
          <!-- Lagyan limit makikita na characters sa body tapos merong see more pag kinclick ma reveal yung the rest ng body -->
          <section id="announcement" class="announcement" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div class="announcement__header">
              <img class="announcement__logo" src="./imgs/loudspeaker.png" alt="">
              <h2 class="announcement__title">Announcements</h2>
            </div>
            <div class="announcement__content-container">
            </div>
            <button class="announcement__button--see-more">See More...</button>
            <!-- <div class="news-card">

            </div>
            <div class="news-card"></div>
            <div class="news-card"></div>
            <div class="news-card"></div>
            <div class="news-card"></div> -->
            
          </section>
          <section id="benefit" class="benefit">
            <div class="benefit__header">
                Why Use iSchedule?
            </div>
            <div class="benefit__card-container">
              <div class="benefit__card">
                <div class="benefit__title">Convenience</div>
                <div class="benefit__content">
                  iSchedule ay nag-aalok sa mga pasyente ng isang user-friendly na platform na nagpapadali ng proseso ng pag-book ng mga appointment sa Bulacan Medical Center. Sa ilang simpleng click lang, madali para sa mga pasyente na mag-schedule ng kanilang mga appointment
                </div>
              </div>
            <div class="benefit__card">
                <div class="benefit__title">Real-Time Availability</div>
                <div class="benefit__content">
                  Sa pamamagitan ng iSchedule, maaaring tingnan ng mga pasyente ang mga available na schedule at pumili ng pinakasakto na oras ng appointment. Magkakaroon ng mas malaking kontrol at katapatan ang mga pasyente sa kanilang mga appointment sa kalusugan.
                </div>
              </div>
              <div class="benefit__card">
                <div class="benefit__title">
                    Round-the-Clock Access
                </div>
                <div class="benefit__content">
                  iSchedule ay accessible sa lahat ng oras. Ang patuloy na accessibility ay nagtitiyak na ang mga pasyente ay makakapag-secure ng mga appointment sa kanilang pinipiling oras, na nagbibigay-daan sa iba't ibang mga schedule.
                </div>
              </div>
            </div>
          </section>
          <section id="tutorial" class="tutorial" >
              <div class="tutorial__header"  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                Paano Mag Schedule ng Appointment?
              </div>
              <div class="tutorial__content">
                <div class="tutorial__video-container" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                  <iframe id="tutorial__video" loading="lazy" width="100%" height="100%"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="tutorial__procedure">
                  <div class="tutorial__steps">
                    <div class="line" data-aos="fade-up" data-aos-duration="500"  data-aos-delay="2000" data-aos-anchor=".tutorial__step1"></div>
                    <!-- On hover sa tutorial step maexecute dapat yung hover effect din sa circle(yungm rotate360) -->
                    <div class="tutorial__circle-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                      <div class="circle step1">1</div>
                      <div class="tutorial__step tutorial__step1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit sapiente repellendus asperiores iure, vero saepe incidunt natus accusamus nostrum blanditiis nisi voluptate alias neque a, sunt velit exercitationem placeat?</div>
                    </div>
                    <div class="tutorial__circle-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" data-aos-anchor=".tutorial__step1">
                      <div class="circle step2">2</div>
                      <div class="tutorial__step tutorial__step2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit sapiente repellendus asperiores iure, vero saepe incidunt natus accusamus nostrum blanditiis nisi voluptate alias neque a, sunt velit exercitationem placeat?</div>
                    </div>
                    <div class="tutorial__circle-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600" data-aos-anchor=".tutorial__step1">
                      <div class="circle step3">3</div>
                      <div class="tutorial__step tutorial__step3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit sapiente repellendus asperiores iure, vero saepe incidunt natus accusamus nostrum blanditiis nisi voluptate alias neque a, sunt velit exercitationem placeat?</div>
                    </div>
                    <div class="tutorial__circle-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800" data-aos-anchor=".tutorial__step1">
                      <div class="circle step4">4</div>
                      <div class="tutorial__step tutorial__step4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit sapiente repellendus asperiores iure, vero saepe incidunt natus accusamus nostrum blanditiis nisi voluptate alias neque a, sunt velit exercitationem placeat?</div>
                    </div>
                    <div class="tutorial__circle-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" data-aos-anchor=".tutorial__step1">
                      <div class="circle step5">5</div>
                      <div class="tutorial__step tutorial__step5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit sapiente repellendus asperiores iure, vero saepe incidunt natus accusamus nostrum blanditiis nisi voluptate alias neque a, sunt velit exercitationem placeat?</div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <div class="track__wrapper"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <section class="track">
              <div class="track__header">
                <h1><span class="track-highlight">Tingnan</span> o <span class="track-highlight">i-Cancel</span> ang Iyong Active Appointment</h1>
              </div>
              <div class="track__form">
                <input class="track__input" type="text" placeholder="09XX XXX XXXX" id="phone-number" oninput="filterPhoneInput(this.id)">
                <button class="track__submit" onclick="submitTrack()">Submit</button>
              </div>
              <div class="track__instruction">
                Ibigay ang ginamit mong numero ng telepono sa iyong pag gawa ng appointment.
              </div>
            </section>
          </div>
          <div class="feedback__wrapper" style="display: none;">
            <section class="feedback">
              <h1>Kamusta ang iyong experience sa iSchedule?</h1>
              <h2>Sabihin mo samin</h2>
              <div class="feedback__star-container">
                <input type="text" name="fbRating" id="fbRating" value="" style="display: none;" >
                <span class="material-icons-outlined star star1" data-status="disabled">star</span>
                <span class="material-icons-outlined star star2" data-status="disabled">star</span>
                <span class="material-icons-outlined star star3" data-status="disabled">star</span>
                <span class="material-icons-outlined star star4" data-status="disabled">star</span>
                <span class="material-icons-outlined star star5" data-status="disabled">star</span>
              </div>                                                                                                                                                                                                      
              <textarea placeholder="Maaring ipaliwanag dito ang iyong karanasan..." id="feedbackInput" cols="30" rows="5" onblur="inputLimiterBlur(this.id, 500); statusMsgCounter(this.id, 'feedbackCtr', 500);" oninput="inputLimiter(this.id, 500); statusMsgCounter(this.id, 'feedbackCtr', 500);"></textarea>
              <div class="feedback__ctr-container">
                <span class="feedback__ctr" id="feedbackCtr">200</span>
              </div>
              <div class="error-container">
                <span class="msg" id="test"></span>
              </div>
              <button id="feedbackSubmit">Send</button>
            </section>
          </div>
    </main>
    <footer id="footer">
        <section  class="about">
          <div class="about__header">About Us</div>
          <div class="about__content">
            <p class="about__p">Ang Bulacan Medical Center ay isang kilalang institusyon sa pangangalaga sa kalusugan sa Bulacan at iba pang lugar. Kami ay nagbibigay ng kumpletong at de-kalidad na serbisyo medikal simula noong taong 2008. 
            
            <br class="about__mobile-break"><br class="about__mobile-break">
              
            Layunin namin na maging sentro ng kalusugan sa rehiyon at magbigay ng magandang karanasan sa mga pasyente sa pamamagitan ng mga espesyalidad medikal, modernong pasilidad, at mataas na pamantayan ng pangangalaga.</p>
            
            <p class="about__p">Ipinagtatanggol namin ang kaligtasan ng mga pasyente at nagsasagawa ng mga programa sa edukasyon sa kalusugan. Kami ay tumutulong sa mga komunidad sa pamamagitan ng mga programa sa edukasyon sa kalusugan, pag-iwas sa sakit, at iba pang mga layunin. 
              
            <br class="about__mobile-break"><br class="about__mobile-break">

            Salamat sa pagtitiwala sa Bulacan Medical Center, kung saan inuuna namin ang inyong kalusugan at gumagawa ng positibong pagbabago sa inyong buhay.</p>
          </div>
        </section>
        <section class="contact">
          <div class="contact__social contact__social-facebook"><a target="_blank" href="https://www.facebook.com/BMCOPDKonsulta"> <img class="contact__img" src="./imgs/fblogo.png" alt="Facebook Logo" draggable="false"> Facebook</a></div>
          <div class="contact__social contact__social-landline"><img class="contact__img" src="./imgs/phonelogo.png" alt="Phone Logo" srcset="" draggable="false">(044)-482-4207</div>
        </section>
        <div class="back-top btn-link" data-page="home">Back to Top</div>
    </footer>
    <button type="button" class="btn btn-primary modal-launcher" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="display:none">
      Launch static backdrop modal
    </button>
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