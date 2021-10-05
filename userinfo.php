<?php

$con=mysqli_connect('localhost','root');

if($con){
    echo "Connection Successful";
}else{
    echo "Connection UnSuccessful";
}

$user= $_POST['user'];
$email= $_POST['email'];
$mobile= $_POST['mobile'];
$comment= $_POST['comment'];

$query="INSERT INTO `mobpsycho`.`userinfodata`(`user`,`email`,`mobile`,`comment`) 
VALUES ('$user','$email','$mobile','$comment')";

mysqli_query($con,$query);

header('location:index.php');

?>