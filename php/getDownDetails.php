<?php
    session_start();
    require 'connect.php';

    class webStatus{
        public $status;
        public $title;
        public $message;
    }

    $query = "SELECT `status`, `message`, `title` FROM `website_status` WHERE `isActive` = true";

    $result = mysqli_query($conn, $query);
    
    $obj = new webStatus();

    while($row = mysqli_fetch_array($result)){
        $obj->status = $row['status'];
        $obj->title = $row['title'];
        $obj->message = $row['message'];
    }

    echo json_encode($obj);
?>