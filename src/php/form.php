<?php

$email_to       = "Info@peakconstruction.us";
$email_to_2     = "Info@peakconstruction.us";
$email_from     = "peakconstruction.us";
$email_subject  = "Email from peakconstruction.us";
$date = new DateTime('now', new DateTimeZone('America/Los_Angeles') );

$name = $_POST['name'];
$phone = $_POST['phone'];

if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

function clean_string($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"",$string);
}

$email_message = "Email from peakconstruction.us:\n\n";
$email_message .= "Name: ".clean_string($name)."\n";
$email_message .= "Phone: ".clean_string($phone)."\n";

$headers = 'From: '.$email_from."\r\n";
$headers .= 'Reply-To: '.$email."\r\n";
//$headers .= 'Reply-To: '.$email_from."\r\n";

$headers .= 'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
// @mail($email_to_2, $email_subject, $email_message, $headers);

// Save to file
$file = 'data.txt';
$current = file_get_contents($file);
$current .= $name.';'.$phone.';'.$email.';'.$date->format('Y-m-d H:i:s').';'.PHP_EOL;
file_put_contents($file, $current);