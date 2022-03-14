<?php
var_dump($_POST);
$id = $_POST['id'];
$name = $_POST['text'];
$mode = $_POST['mode'];



$link = mysqli_connect('localhost','root','wekm100k!','todo');

if ($mode === "create") {
    $sql = "INSERT INTO notes (note, stats) VALUES ('$name','0')";
} elseif ($mode ==='update1') {
    $sql = "UPDATE notes SET stats = '1' WHERE id = '$id'";
}  elseif ($mode ==='update2') {
    $sql = "UPDATE notes SET stats = '0' WHERE id = '$id'";
} elseif ($mode ==='edit') {
    $sql = "UPDATE notes SET note = '0' WHERE id = '$id'";
} elseif ($mode ==='delete') {
    $sql = "DELETE FROM notes WHERE id = '$id'";
}
mysqli_query($link,$sql);

