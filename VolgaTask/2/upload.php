<?php

$path = $_FILES['identity_id']['tmp_name'];

$row = 1;
if (($handle = fopen($path, "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        file_put_contents("upload/$row.$data[0]", $data[1]);
        $row++;
    }
    fclose($handle);
}
