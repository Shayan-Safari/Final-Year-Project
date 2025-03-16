// logout.php
//<//?php
//session_start();
//session_destroy(); // Destroy the session
//header("Location: adminpage.html"); // Redirect to login page
//exit();
//?>

//<//?php
//session_start();
//session_destroy();
//header("Location: userlogin.html");
//exit();
//?>

// logout.php
<?php
session_start(); // Start the session

if (isset($_SESSION['username'])) { // Check if the admin session exists
    session_destroy(); // Destroy the session for admin
    header("Location: adminpage.html"); // Redirect to admin login page
    exit();
} elseif (isset($_SESSION['user'])) { // Check if there's a user session
    session_destroy(); // Destroy the session for regular user
    header("Location: userlogin.html"); // Redirect to user login page
    exit();
} else {
    // If neither an admin nor user is logged in, just redirect to a generic login page or home
    header("Location: homepage.html"); // Redirect to a homepage or generic login page
    exit();
}
?>