<?php 

$to = "josiahrooney@gmail.com";
$subject = "Email from " . htmlspecialchars($_POST["name"]) . " via message form on rooneydev.com";
$message = htmlspecialchars($_POST["message"]);
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "X-MSMail-Priority: High";
$headers .= "Sender: josiah@rooneydev.com";
$headers .= "From: ".htmlspecialchars($_POST["email"])."\r\n";
$headers .= "Reply-To: ".htmlspecialchars($_POST["email"])."\r\n";
$headers .= "Return-Path: ".htmlspecialchars($_POST["email"])."\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);