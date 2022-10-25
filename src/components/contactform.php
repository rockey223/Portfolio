<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$mesg = $_POST['message'];

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8";


$subject .= "Mail from Contact form";
$to = "technihax@gmail.com";
$message = "Name: " . $name .
            "<br> Email:" . $email . 
            "<br> Message:" . $mesg;

            if(mail($to,$subject,$message,$headers)){
                echo "success";
           }
        
        else{
            echo "error";
        }

?>