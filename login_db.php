<?php
session_start();
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and bind
    $hashed_input = hash("sha256", $password);
    $stmt = $conn->prepare("SELECT id FROM admin WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $hashed_input);

    // Execute the statement
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $_SESSION['username'] = $username;
        header("Location: admin_dashboard.php"); // Redirect to admin dashboard
    } else {
        echo "Invalid username or password";
    }

    $stmt->close();
    $conn->close();
}
?>