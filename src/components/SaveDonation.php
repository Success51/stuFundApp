<?php
$servername = "localhost"; // Usually localhost
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "test_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data from the request
$data = json_decode(file_get_contents("php://input"), true);

$transactionHash = $conn->real_escape_string($data['transactionHash']);
$amount = $conn->real_escape_string($data['amount']);
$comment = $conn->real_escape_string($data['comment']);
$campaignId = $conn->real_escape_string($data['campaignId']);
$donorAddress = $conn->real_escape_string($data['donorAddress']);

// Insert the donation into the database
$sql = "INSERT INTO donations (transactionHash, amount, comment, campaignId, donorAddress) VALUES ('$transactionHash', '$amount', '$comment', '$campaignId', '$donorAddress')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Donation saved successfully"]);
} else {
    echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>
