<?php
    // Set session cookie attributes
    session_set_cookie_params([
        'lifetime' => 0,  // Session expires when the browser is closed
        'path' => '/',
        'domain' => '',
        'secure' => true,  // Only send cookies over HTTPS
        'httponly' => true,  // Prevent JavaScript access to the cookie
        'samesite' => 'Strict',  // Improve CSRF protection
    ]);
    ini_set('session.gc_maxlifetime', 86400);
    session_set_cookie_params(86400);


    session_start();

    if(isset($_SESSION['fbSubmittedToday'])){
        // required to para mapagana yung expiration nung session
        session_regenerate_id(true);
        echo 1;
    }
    else{
        echo 0;
    }

?>