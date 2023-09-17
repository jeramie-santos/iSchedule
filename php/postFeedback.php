<?php
    require 'connect.php';
    session_start();

    $requestPayload = file_get_contents("php://input");
    $object = json_decode($requestPayload);

    $convertedSpeChar = htmlspecialchars($object->content);

    $query = "INSERT INTO `feedback`(`rate`, `feedbackContent`) VALUES ('$object->rate','$convertedSpeChar')";

    if(mysqli_query($conn, $query)){
        $_SESSION['fbSubmittedToday'] = true;
        echo 1;
    }
?>