<?php
//@AUTHOR - Momin Irfan
//@DATE - 10/07/2016


$servername = "localhost";
$username = "Peruna3330DBUser";
$password = "Sr3Nw4480!";
$dbname = "smu3330_43231257_db";
$pw = "pwd";
$sql = ""; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//$conn -> query("CREATE TABLE Nonprofs (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(256), email VARCHAR(256), password VARCHAR(256), description VARCHAR(256), website VARCHAR(256))"); 
//$conn -> query("INSERT INTO Nonprofs (name,email,password,description, website) VALUES('he','he','he','he','he')");  

//create logic to add entries to the database
if ($_GET['add'] == "true")
{	
	if ($_POST['name'] != "" && $_POST['email'] != "" && $_POST['password'] != "" && $_POST['description'] != "" && $_POST['website'] != "")
	{
		$sql = mysqli_prepare($conn, "INSERT INTO Nonprofs (name, email, password, description, website) VALUES (?, ?, ?, ?, ?)");
		mysqli_stmt_bind_param($sql, 'sssss', $_POST['name'], $_POST['email'], password_hash($_POST['password'], PASSWORD_DEFAULT), $_POST['description'], $_POST['website']);
		
		if (mysqli_stmt_execute($sql))
		{
			echo "Entry Added Succesfully\n"; 
			$sql->close(); 
		}
		else 
		{
			echo "MYSQL QUERY BINDING Failed\n";
		}
	}
	else
	{
		$sql = "Wrong inputs entered";
	}
	
}


//create option to display the contents of the database as a JSON Array 
if ($_GET['display'] == "true")
{
	$res = $conn->query("SELECT * FROM Nonprofs ORDER BY id");
	$arr = array(); 
	while ($row = mysqli_fetch_assoc($res))
	{
		$arr[] = $row; 
	}

	echo json_encode($arr); 
}

mysqli_close($conn); 


?> 