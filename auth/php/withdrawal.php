<?php
    header("Access-Control-Allow-Origin: *");
    require_once "PHPMailer/PHPMailer/PHPMailer.php";
    require_once "PHPMailer/PHPMailer/SMTP.php";
    require_once "PHPMailer/PHPMailer/Exception.php";
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
        
        try{
                $data = json_decode($_POST['data']);
                $mail = new PHPMailer();
                
                $to = $data->email;  // mail of reciever
                //$callback = $data->callback;  // mail of reciever
                $subject = $data->subject;
                //$email = $data->email;
                $msg = $data->msg; //"Your otp code is 79238"; //$mesg;
                $name = $data->name;
                $body = "
                <div style='font-family: Helvetica, Arial, sans-serif; min-width: 100px;'>
                  <div style='padding: 10px 50px 20px;'>
                    <div style='border-bottom: 1px solid #eee;'>
                      <a href='' style='text-align:center; font-size: 1.4em; color: #00466a; text-decoration: none; font-weight: 600;'>
                        Withrawal OTP Verification
                      </a>
                    </div>
                    <p style='font-size: 1.1em;'>Hi {$name},</p>
                    <p>
                      Below is your one time passcode that you need to use to complete your transaction. The verification code will be valid for 30 minutes. Please do not share this code with anyone.
                    </p>
                    <h2 style='background: #00466a; margin: 0 auto; width: max-content; padding: 0 10px; color: #fff; border-radius: 4px;'>
                      {$msg}
                    </h2>
                    <p>
                        If you are having any issues with your account, please don't hesitate to contact us.
                    </p>
                    <p style='font-size: 0.9em;'>
                      Regards,<br />Alphafinservices
                    </p>
                    <hr style='border: none; border-top: 1px solid #eee;' />
                    <div style='text-align: center; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300;'>
                      <p>support@alphafinservices.com</p>
                      <p>Website: <a href='https://alphafinservices.com'>www.alphafinservices.com</a></p>
                      <p>California, USA</p>
                    </div>
                  </div>
                </div>
                ";
                
                //SMTP Settings
                $mail->isSMTP();
                // $mail->SMTPDebug = 3;  Keep It commented this is used for debugging                          
                $mail->Host = "mail.alphafinservices.com"; //"smtp.gmail.com"; //"mail.alphafinservices.com"; // SMTP address of your email
            $mail->SMTPAuth = true; //true; //false;
            $mail->Username = "test@gtsfastservice.com";
            $mail->Password = ",!!C3Z@[OM#&"; // SMTP password
            $mail->Port = 465; //587;////465; // SMTP port
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //PHPMailer::ENCRYPTION_STARTTLS; //PHPMailer::ENCRYPTION_SMTPS; // Enable SSL encryption

            // Email settings
            $mail->isHTML(true);
            $mail->setFrom("test@gtsfastservice.com", "Developer Test");
                $mail->Subject = $subject;
                $mail->Body = $body;
                $mail->addAddress($to);
                if ($mail->send()) {
                    echo json_encode('success');
                } else {
                    echo json_encode('failed');
                }
            } catch (Exception $e) {
                echo json_encode($e);
            }
      
?>