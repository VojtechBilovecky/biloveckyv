<?php
// Kontrola odeslani
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ziska info
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Ukaze zapsane info
    echo "<h2>Thank you, $name!</h2>";
    echo "<p>Your email: $email</p>";
    echo "<p>Your message: $message</p>";
}
?>