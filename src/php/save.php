<?php

if (isset($_POST['data'])) {
    //extract data
    $data = json_decode($_POST['data'], true);

    //dev
    $db = new mysqli('localhost', 'root', '', 'dmp') or die(mysqli_error($conn));

    //release 
    //$db = new mysqli('localhost', 'i100603_laurens', '10522848', 'i100603_laureato') or die(mysqli_error($conn));

    //data

    $id = uniqid();

    $valuationKey = "valuationList";
    $valuationList = $db->real_escape_string(json_encode($data[$valuationKey]));

    $experienceKey = "experienceList";
    $experienceList = $db->real_escape_string(json_encode($data[$experienceKey]));

    $personalStrengthKey = "personalStrengthList";
    $personalStrengthList = $db->real_escape_string(json_encode($data[$personalStrengthKey]));

    $feedbackKey = "feedback";
    $feedback = $db->real_escape_string($data[$feedbackKey]);

    // echo json_encode($valuationList);
    // echo json_encode($experienceList);
    // echo json_encode($personalStrengthList);
    // echo json_encode($feedback);

    $db->query("INSERT INTO experiment1 (id, valuationList, experienceList, personalStrengthList, feedback) VALUES ('$id', '$valuationList', '$experienceList', '$personalStrengthList', '$feedback')") 
            or die($db->error);
}

?>

