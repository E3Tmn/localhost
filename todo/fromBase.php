<?php


// $name = $_POST['text'];


$link = mysqli_connect('localhost','root','wekm100k!','todo');


$sql = "SELECT *  FROM notes";


$feedback = mysqli_query($link, $sql);

$rows = [];
while($row = $feedback->fetch_array(MYSQLI_ASSOC)) {
    $rows[] = $row;
}


echo json_encode($rows);