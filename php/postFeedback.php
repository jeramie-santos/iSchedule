<?php
    require 'connect.php';

    $requestPayload = file_get_contents("php://input");
    $object = json_decode($requestPayload);

    $convertedSpeChar = htmlspecialchars($object->content);

    $query = "INSERT INTO `feedbacks`(`rate`, `feedbackContent`) VALUES ('$object->rate','$convertedSpeChar')";

    if(mysqli_query($conn, $query)){
            // Set session cookie attributes
        session_set_cookie_params([
            'lifetime' => 1,  // Session expires when the browser is closed
            'path' => '/',
            'domain' => '',
            'secure' => true,  // Only send cookies over HTTPS
            'httponly' => true,  // Prevent JavaScript access to the cookie
            'samesite' => 'Strict',  // Improve CSRF protection
        ]);
        ini_set('session.gc_maxlifetime', 86400);
        session_set_cookie_params(86400);

        session_start();
        $_SESSION['fbSubmittedToday'] = true;
        // required to para mapagana yung expiration nung session
        session_regenerate_id(true);
        echo 1;
    }
?>