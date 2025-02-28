<?php 
session_start(); 
include 'db_connect.php'; // Connect to the database

if (!isset($_SESSION['username'])) { 
   header("Location: adminpage.html"); // Redirect if not logged in 
   exit(); 
}

$result = $conn->query("SELECT * FROM users"); // Assume 'users' is your table name 
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
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #333;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #ddd;
        }
    </style>
</head>

<body> 
    <div class="sidebar">
        <h2>Admin Menu</h2>
        <a href="adminpage.html">Dashboard</a>
        <a href="view_users.php">View Users</a>
        <!-- Add more links as needed -->
    </div>
    <div class="content">
        <h1>Registered Users</h1> 
        <table> 
            <tr> 
                <th>ID</th> 
                <th>Username</th> 
                <th>Email</th><!-- Assuming you have an email field --> 
            </tr> 
            <?php while($row = $result->fetch_assoc()): ?> 
            <tr> 
                <td><?php echo $row['id']; ?></td> 
                <td><?php echo $row['username']; ?></td> 
                <td><?php echo $row['email']; ?></td> 
            </tr> 
            <?php endwhile; ?> 
        </table> 
    </div>
</body> 
</html>