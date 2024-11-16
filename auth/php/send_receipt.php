<?php
header("Access-Control-Allow-Origin: *");
require_once "PHPMailer/PHPMailer/PHPMailer.php";
require_once "PHPMailer/PHPMailer/SMTP.php";
require_once "PHPMailer/PHPMailer/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    // Check if the file 'proof' is uploaded
    if (isset($_FILES['proof'])) {
        $image = $_FILES['proof'];
        $imagePath = $image['tmp_name'];
        $imageName = $image['name'];
        $fileError = $image['error'];
        
        $userName = $_POST['userName'] ?? ''; // Ensure to handle undefined index error
        $callback = $_POST['callback'] ?? ''; // Ensure to handle undefined index error
        $subject = "PROOF OF PAYMENT";
        $body = "This is the proof of payment for user: {$userName}";
        
        // Log the file upload error
        error_log("File Upload Error Code: $fileError");

        if ($fileError === UPLOAD_ERR_OK) {
            // Debugging: Log the file details
            error_log("Image Name: $imageName");
            error_log("Image Path: $imagePath");

            // Create a new PHPMailer instance
            $mail = new PHPMailer();

            $to = "kellylambeth93@gmail.com"; //"support@alphafinservices.com"; //kellylambeth93@gmail.com";  The receiver's email address

            // SMTP settings
            $mail->isSMTP();
            // $mail->SMTPDebug = 3;  // Uncomment for debugging
            $mail->Host = "mail.alphafinservices.com"; // SMTP address of your email
            $mail->SMTPAuth = false;
            $mail->Username = "info@alphafinservices.com";
            $mail->Password = ""; // SMTP password
            $mail->Port = 465; // SMTP port
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable SSL encryption

            // Email settings
            $mail->isHTML(true);
            $mail->setFrom("info@alphafinservices.com", "Alphafinservices Team");
            $mail->Subject = $subject;
            $mail->Body = $body;
            $mail->addAddress($to);

            // Attach the uploaded image
            if (is_uploaded_file($imagePath)) {
                // Debugging: Confirm the file is ready to be attached
                error_log("Attaching file: $imageName");

                $mail->addAttachment($imagePath, $imageName);
            } else {
                // Debugging: Log if the file is not valid
                error_log("File is not valid or not uploaded properly.");
                echo json_encode(['error' => 'File is not valid or not uploaded properly.']);
                exit;
            }
            
            // Send email
            if ($mail->send()) {
                header("Location: ../../dashboard.html");//echo json_encode('success');
                exit;
            } else {
                // Debugging: Log PHPMailer error
                error_log("Mailer Error: " . $mail->ErrorInfo);
                echo json_encode('failed');
            }
        } else {
            // Handle the specific upload error
            $uploadErrorMessages = [
                UPLOAD_ERR_INI_SIZE => 'The uploaded file exceeds the upload_max_filesize directive in php.ini.',
                UPLOAD_ERR_FORM_SIZE => 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form.',
                UPLOAD_ERR_PARTIAL => 'The uploaded file was only partially uploaded.',
                UPLOAD_ERR_NO_FILE => 'No file was uploaded.',
                UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder.',
                UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk.',
                UPLOAD_ERR_EXTENSION => 'A PHP extension stopped the file upload.',
            ];
            $errorMessage = isset($uploadErrorMessages[$fileError]) ? $uploadErrorMessages[$fileError] : 'Unknown error occurred during file upload.';
            error_log("File upload error: $errorMessage");
            echo json_encode(['error' => $errorMessage]);
        }
    } elseif (isset($_FILES['front_file']) && isset($_FILES['back_file'])) {
        // Check if both 'front_file' and 'back_file' are uploaded
        $front_image = $_FILES['front_file'];
        $back_image = $_FILES['back_file'];
        $front_imagePath = $front_image['tmp_name'];
        $back_imagePath = $back_image['tmp_name'];
        $front_imageName = $front_image['name'];
        $back_imageName = $back_image['name'];
        $frontfileError = $front_image['error'];
        $backfileError = $back_image['error'];
        $callback = $_POST['callback'];
        $subject = "KYC SUBMISSION";
        $body = "KYC documents submitted.";
        
        // Log the file upload errors
        error_log("Front File Upload Error Code: $frontfileError");
        error_log("Back File Upload Error Code: $backfileError");

        if ($frontfileError === UPLOAD_ERR_OK && $backfileError === UPLOAD_ERR_OK) {
            // Debugging: Log the file details
            error_log("Front Image Name: $front_imageName");
            error_log("Front Image Path: $front_imagePath");
            error_log("Back Image Name: $back_imageName");
            error_log("Back Image Path: $back_imagePath");
            
            // Create a new PHPMailer instance
            $mail = new PHPMailer();

            $to = "support@alphafinservices.com"; //kellylambeth93@gmail.com";  The receiver's email address

            // SMTP settings
            $mail->isSMTP();
            // $mail->SMTPDebug = 3;  // Uncomment for debugging
            $mail->Host = "mail.alphafinservices.com"; // SMTP address of your email
            $mail->SMTPAuth = false;
            $mail->Username = "info@alphafinservices.com";
            $mail->Password = ""; // SMTP password
            $mail->Port = 465; // SMTP port
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable SSL encryption

            // Email settings
            $mail->isHTML(true);
            $mail->setFrom("info@alphafinservices.com", "Alphafinservices Team");
            $mail->Subject = $subject;
            $mail->Body = $body;
            $mail->addAddress($to);

            // Attach the uploaded images
            if (is_uploaded_file($front_imagePath) && is_uploaded_file($back_imagePath)) {
                // Debugging: Confirm the files are ready to be attached
                error_log("Attaching front file: $front_imageName");
                error_log("Attaching back file: $back_imageName");

                $mail->addAttachment($front_imagePath, $front_imageName);
                $mail->addAttachment($back_imagePath, $back_imageName);
            }
            
            // Send email
            if ($mail->send()) {
                header("Location: ../../dashboard.html");//echo json_encode('success');
                exit;
            } else {
                header("Location: ../../dashboard.html");//echo json_encode('success');
                exit;
                // Debugging: Log PHPMailer error
                // error_log("Mailer Error: " . $mail->ErrorInfo);
                // echo json_encode('failed');
            }
        } else {
            header("Location: ../../dashboard.html");//echo json_encode('success');
                exit;
            // Handle the specific upload error
            $uploadErrorMessages = [
                UPLOAD_ERR_INI_SIZE => 'The uploaded file exceeds the upload_max_filesize directive in php.ini.',
                UPLOAD_ERR_FORM_SIZE => 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form.',
                UPLOAD_ERR_PARTIAL => 'The uploaded file was only partially uploaded.',
                UPLOAD_ERR_NO_FILE => 'No file was uploaded.',
                UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder.',
                UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk.',
                UPLOAD_ERR_EXTENSION => 'A PHP extension stopped the file upload.',
            ];
            $errorMessage = isset($uploadErrorMessages[$frontfileError]) ? $uploadErrorMessages[$frontfileError] : 'Unknown error occurred during file upload.';
            // error_log("File upload error: $errorMessage");
            // echo json_encode(['error' => $errorMessage]);
        }
    } else {
        header("Location: ../../dashboard.html");//echo json_encode('success');
                exit;
        // // Debugging: Log if no file was uploaded
        // error_log("No file was uploaded.");
        // echo json_encode(['error' => 'No file was uploaded.']);
    }
} catch (Exception $e) {
    header("Location: ../../dashboard.html");//echo json_encode('success');
                exit;
    // Debugging: Log exceptions
    // error_log("Exception: " . $e->getMessage());
    // echo json_encode(['error' => $e->getMessage()]);
}

?>
