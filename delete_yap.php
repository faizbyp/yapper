<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $yap_id = $_POST["id"];

    if (!empty($yap_id)) {
        $stmt = $conn->prepare("DELETE FROM yaps WHERE id = ?");
        $stmt->bind_param("i", $yap_id);
        $stmt->execute();
        $stmt->close();
    }
}
?>