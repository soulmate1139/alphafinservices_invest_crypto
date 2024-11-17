<?php
header("Access-Control-Allow-Origin: *");
require_once "PHPMailer/PHPMailer/PHPMailer.php";
require_once "PHPMailer/PHPMailer/SMTP.php";
require_once "PHPMailer/PHPMailer/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

    // PRODUCTION
    // $smtp_host = 'mail.gtsfastservice.com';
    // $smtp_auth = true;
    // $smtp_user_name = 'test@gtsfastservice.com';
    // $smtp_pass_word = ',!!C3Z@[OM#&';
    // $smtp_port = 465;
    // $smtp_secure = PHPMailer::ENCRYPTION_SMTPS;
    // $from_email = 'test@gtsfastservice.com';
    // $prefix_test_or_not = 'TEST DEVELOPER : '

    //  DEVELOPMENT
    $smtp_host = 'mail.gtsfastservice.com';
    $smtp_auth = true;
    $smtp_user_name = 'test@gtsfastservice.com';
    $smtp_pass_word = 'DFGUHIJO6572453*';
    $smtp_port = 587;
    $smtp_secure = PHPMailer::ENCRYPTION_STARTTLS;
    $from_email = 'test@gtsfastservice.com';
    $prefix_test_or_not = 'TEST DEVELOPER : '
?>