<?php
require 'path/to/PHPMailer/PHPMailerAutoload.php';

// Retrieve the click data sent from the client
$target = $_POST['target'];
$timestamp = $_POST['timestamp'];
$x = $_POST['x'];
$y = $_POST['y'];

// Concatenate the click data
$clickData = $target . ',' . $timestamp . ',' . $x . ',' . $y . "\n";

// Define the file path and name for the click data text file
$filePath = 'click_data.txt';

// Append the click data to the file
file_put_contents($filePath, $clickData, FILE_APPEND);

// Create a new PHPMailer instance
$mail = new PHPMailer;

// Configure SMTP settings for sending email
$mail->isSMTP();
$mail->Host = 'smtp.example.com';  // Specify your SMTP server
$mail->Port = 587;  // Specify the SMTP port
$mail->SMTPAuth = true;
$mail->Username = 'your-email@example.com';  // Your SMTP username
$mail->Password = 'your-email-password';  // Your SMTP password

// Set the sender and recipient email addresses
$mail->setFrom('your-email@example.com', 'Your Name');
$mail->addAddress('recipient@example.com', 'Recipient Name');

// Set email subject and body
$mail->Subject = 'Click Data';
$mail->Body = 'Please find attached the click data file.';

// Attach the click data file
$mail->addAttachment($filePath);

// Send the email
if (!$mail->send()) {
    echo 'Email could not be sent. Error: ' . $mail->ErrorInfo;
} else {
    echo 'Email sent successfully.';
}

// Remove the click data file after sending the email
unlink($filePath);
?>
