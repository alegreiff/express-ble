<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = "alegreiff@gmail.com";
  $subject = "New Contact Form Submission";
  $headers = "From: $email";
  
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message";
  
  mail($to, $subject, $email_content, $headers);
  
  header("Location: /thank-you");
  exit();
}