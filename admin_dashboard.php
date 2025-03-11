<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: adminpage.html"); // Redirect to login page if not logged in
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            display: flex;
            background-color: #f4f4f4;
            background-image: url("images/wallpaper6.jpg"); /* Set the background image */
            font-family: Arial, sans-serif;
        }
        .sidebar {
            width: 200px;
            height: 100vh;
            background-color: #333;
            color: white;
            padding: 15px;
            position: fixed;
        }
        .sidebar a {
            color: white;
            text-decoration: none;
            display: block;
            padding: 10px;
        }
        .sidebar a:hover {
            background-color: #575757;
        }
        .content {
            margin-left: 220px;
            padding: 20px;
            width: calc(100% - 220px);
        }
    </style>
</head>

<body>
    <div class="sidebar">
        <h2>Admin Menu</h2>
        <a href="view_users.php">View Users</a>
        <a href="add_news.php">Add News</a>
        <a href="edit_news.php">Edit News</a>
        <a href="delete_news.php">Delete News</a>
        <a href="logout.php">Logout</a>
    </div>
    <div class="content">
        <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1>
        <p>This is the admin dashboard where you can manage content.</p>
        <!-- Add more admin functionalities here -->
    </div>
</body>

</html>