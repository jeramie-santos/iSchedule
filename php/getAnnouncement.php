<?php 
    require "connect.php";
    
    $query = "SELECT * FROM `announcements` ORDER BY annDateTime DESC LIMIT 20";
    $result = mysqli_query($conn,$query);
	$count = mysqli_num_rows($result);

    class announcement {
        public $title;
        public $body;
        public $datePosted;
        public $timePosted;
    }

    $allAnnouncement = array();

    if($count > 0){

        while($row = mysqli_fetch_array($result)){
            $tempObj = new announcement();

            $tempObj->title = $row['annTitle'];
            $tempObj->body = $row['annBody'];

            $seperatedDateTime = seperateDateTime($row['annDateTime']);

            $tempObj->datePosted = dateConverter($seperatedDateTime[0]);

            $tempObj->timePosted = timeConverter($seperatedDateTime[1]);

            array_push($allAnnouncement, $tempObj);

            // echo $row['annTitle'];
        }

        echo json_encode($allAnnouncement);
    }
    else{
        echo "<span id='emptyAnn'>Kasalukuyang walang announcement!</span>";
    }

    // $test = new announcement();

    //  $test->title = 'sample title';
    //  $test->body = 'sample body';
    //  $test->datetime = 'sample datetime';

    // echo json_encode($test);

    function seperateDateTime($datetime){
        $delimiter = ' ';
        return $seperated = explode($delimiter, $datetime);
    }

    function dateConverter($date){
        $delimiter = '-';
        $seperated = explode($delimiter, $date);

        $monthNames = array("January", "February", "March","April", "May", "June","July", "August", "September","October", "November", "December"); 

        $year = $seperated[0];
        $month = $seperated[1]-1;
        $day = $seperated[2];

        return "{$monthNames[$month]} {$day}, {$year}";
    }

    // 13:00
    function timeConverter($time){
        $delimiter = ':';
        $seperated = explode($delimiter, $time);

        if((int)$seperated[0] >= 12){
            if((int)$seperated[0] > 12){
                $seperated[0] = (int)$seperated[0] - 12;
            }
            
            return "{$seperated[0]}:{$seperated[1]} PM";
        }
        else{
            return "{$seperated[0]}:{$seperated[1]} AM";
        }

        
    }
?>