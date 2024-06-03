<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $yap = $_POST["yap"];

    if (!empty($yap)) {
        $stmt = $conn->prepare("INSERT INTO yaps (yap) VALUES (?)");
        $stmt->bind_param("s", $yap);
        $stmt->execute();
        $stmt->close();
    }
}
?>