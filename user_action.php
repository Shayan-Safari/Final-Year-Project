<?php
session_start();
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $formType = $_POST['form_type'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($formType == 'register') {
        $email = $_POST['email'];
        $confirmPassword = $_POST['confirm_password'];

        if ($password !== $confirmPassword) {
            echo "Passwords do not match.";
            exit();
        }

        // Check if the username or email already exists
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
        $stmt->bind_param("ss", $username, $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            echo "Username or email already exists.";
            $stmt->close();
            $conn->close();
            exit();
        }

        $stmt->close();

        // Hash the password using sha256
        $hashedPassword = hash("sha256", $password);

        // Insert the user into the database
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $hashedPassword);

        if ($stmt->execute()) {
            echo "Registration successful!";
            header("Location: userlogin.html"); // Redirect to login page after registration
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } elseif ($formType == 'login') {
        // Hash the input password using sha256
        $hashed_input = hash("sha256", $password);

        // Prepare and bind
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? AND password = ?");
        $stmt->bind_param("ss", $username, $hashed_input);

        // Execute the statement
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $_SESSION['username'] = $username;
            $stmt->bind_result($userId);
            $stmt->fetch();
            $_SESSION['user_id'] = $userId;
            header("Location: user_dashboard.php"); // Redirect to user dashboard
            exit();
        } else {
            echo "Invalid username or password";
        }

        $stmt->close();
    }

    $conn->close();
}
?>