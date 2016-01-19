<?php
//header('Content-Type: text/html; charset= utf-8');
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->setLanguage('ru', '/language');
//$mail->isSMTP();     /* !!!! ДЛЯ БОЯ */
$mail->isMAIL();     /* !!!! ДЛЯ ЛОКАЛЬНОГО ТЕСТИРОВАНИЯ */
$mail->CharSet = "utf-8";                                 // Set mailer to use SMTP
//$mail->Host = 'smtp.timeweb.ru';  /* !!!! ДЛЯ БОЯ */
$mail->Host = 'localhost';     /* !!!! ДЛЯ ЛОКАЛЬНОГО ТЕСТИРОВАНИЯ */
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'noreply@drovavozim.ru';                 // SMTP username
$mail->Password = '@noreply';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->From = 'noreply@drovavozim.ru';
$mail->FromName = 'drovavozim.ru';
$mail->addAddress('transfer@ro.ru', 'Заявка с сайта');     // Add a recipient
$mail->addBCC('admin26@yandex.ru');

$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Заявка с сайта drovavozim.ru';

$txt = "<h2>Заявка с сайта drovavozim.ru</h2>";
$txt .= "<hr>";
$txt .= "Имя : ".$_POST['inputName'];
$txt .= "<br>";
$txt .= "Телефон : ".$_POST['phone'];
$txt .= "<br>";
$txt .= "Описание : ".$_POST['inputComment'];
$txt .= "<br>";
$txt .= "<hr>";
$txt .= "IP адрес : ".$_SERVER['REMOTE_ADDR'];
$mail->Body = $txt;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}