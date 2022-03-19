<?php

if (isset($_POST['data'])) {
    //extract data
    $data = json_decode($_POST['data'], true);

    //dev
    $db = new mysqli('localhost', 'root', '', 'afstuderen') or die(mysqli_error($conn));

    //release 
    //$db = new mysqli('localhost', 'i100603_laurens', '10522848', 'i100603_laureato') or die(mysqli_error($conn));

    //data

    $id = uniqid();

    $experienceKey = "experienceList";
    $experienceList = $db->real_escape_string(json_encode($data[$experienceKey]));

    $feedbackKey = "feedback";
    $feedback = $db->real_escape_string($data[$feedbackKey]);

    // echo json_encode($experienceList);
    // echo json_encode($feedback);

    $db->query("INSERT INTO zelfeffectiviteit (id, experienceList, feedback) VALUES ('$id', '$experienceList', '$feedback')") 
            or die($db->error);
}

?>

