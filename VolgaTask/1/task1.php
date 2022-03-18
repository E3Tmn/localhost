<?php
$a = 'IT WORKS!!';

$arr = [1,2,3,4,5,6,652,7,248,9,10,722];
$len = count($arr);
for ($i = 0; $i < $len; $i++){
    $value = array_shift($arr);
    array_push($arr,$value);
    if(preg_match('/2/', $value)) {
        array_push($arr,$a);
    }
}   
    
print_r($arr);