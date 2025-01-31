<?php
session_start();
if (isset($_SESSION['email'])) {
    header("Location: index.html");
    exit();
} else {
    header("Location: login.php");
    exit();
}
?>