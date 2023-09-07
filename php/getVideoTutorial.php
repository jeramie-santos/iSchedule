<?php

    $deviceType = null;

    foreach($_POST as $res){
        $deviceType = $res;
    }

    require "connect.php";

    $query = "SELECT link FROM `video_tutorials` WHERE vidType = '$deviceType'";
    $result = mysqli_query($conn,$query);
	$count = mysqli_num_rows($result);

    while($row = mysqli_fetch_array($result)){
        echo $row['link'];
    }
    
?>