<?php
include "db.php";

$result = $conn->query("SELECT * FROM yaps ORDER BY id DESC");
$yaps = [];

while ($row = $result->fetch_assoc()) {
    $yaps[] = $row;
}

echo json_encode($yaps);
?>