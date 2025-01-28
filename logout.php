// logout.php
<?php
session_start();
session_destroy(); // Destroy the session
header("Location: adminpage.html"); // Redirect to login page
exit();
?>