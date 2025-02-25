<?php
session_start();
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and bind
    $hashed_input = hash("sha256", $password);
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $hashed_input);

    // Execute the statement
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $_SESSION['username'] = $username;
        header("Location: user_dashboard.php"); // Redirect to admin dashboard
    } else {
        echo "Invalid username or password";
    }


    // Debugging
    echo "Debug: Username - " . $username . "<br>";
    echo "Debug: Hashed Input - " . $hashed_input . "<br>";

    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        echo "Debug: Stored Hash - " . $row["password"] . "<br>";
    } else {
        echo "Debug: Username not found.";
    }
    exit();

    $stmt->close();
    $conn->close();
}
?>