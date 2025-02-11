<?php
session_start();
include 'db_connect.php'; // Include your database connection file

if (!isset($_SESSION['user_id'])) {
    header("Location: userlogin.html");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userId = $_SESSION['user_id'];
    $newsId = $_POST['news_id'];

    // Insert the favorite news into the database
    $stmt = $conn->prepare("INSERT INTO favorites (user_id, news_id) VALUES (?, ?)");
    $stmt->bind_param("ii", $userId, $newsId);

    if ($stmt->execute()) {
        echo "News saved as favorite!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>