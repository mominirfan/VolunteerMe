<?php
//@AUTHOR - Momin Irfan
//@DATE - 10/07/2016


$servername = "localhost";
$username = "Peruna3330DBUser";
$password = "Sr3Nw4480!";
$dbname = "smu3330_43231257_db";
$pw = "pwd";
$sql = "";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//create option to display the contents of the database as a JSON Array
if ($_GET['display'] == "true")
{
	$proj = $_GET['email'];
	$sql = $conn->query("SELECT name FROM Nonprofs WHERE email = '$proj'");
	//mysqli_stmt_bind_param($sql, 's', $_GET['email']);
	$arr = array();
	while ($row = mysqli_fetch_assoc($sql))
	{
		$arr[] = $row;
	}

	if(empty($arr))
	{

		$sql =$conn->query("SELECT name FROM Volunteers WHERE email = '$proj'");
		//mysqli_stmt_bind_param($sql, 's', $_GET['email']);
		while ($row = mysqli_fetch_assoc($sql))
		{
			$arr[] = $row;
		}
		if(empty($arr))
		{
			echo("neither");
		}
		else{
			echo("volunteer");
		}
	}
	else
	{
		echo("nonprofit");
	}


}

?>
