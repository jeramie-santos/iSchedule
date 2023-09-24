<?php
    require 'connect.php';
    session_start();
    
    $query = "SELECT `status` FROM `website_status` WHERE `isActive` = true;";

    $result = mysqli_query($conn, $query);

    while($row = mysqli_fetch_array($result)){
        $_SESSION['status'] = $row['status'];
    }

    if($_SESSION['status'] == 2){
        echo 2;
    }
    else if($_SESSION['status'] == 3){
        echo 3;
    }
?>