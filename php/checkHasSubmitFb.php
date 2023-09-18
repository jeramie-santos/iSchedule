<?php
    session_start();

    if(isset($_SESSION['fbSubmittedToday'])){
        echo 1;
    }
    else{
        echo 0;
    }

?>