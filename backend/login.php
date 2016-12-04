<?php
session_start();

$servername = "localhost";
$username = "Peruna3330DBUser";
$password = "Sr3Nw4480!";
$dbname = "smu3330_43231257_db";
$pw = "pwd";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


if ($_GET['login'] == "true")
{
	$user = $_POST['user'];
	$pw = $_POST['pass'];
	$sql = "SELECT * FROM USER WHERE username='$user'";
    $result = $conn->query($sql);
    if ($result->num_rows === 1) 
    {
        $row = $result->fetch_array(MYSQLI_ASSOC);
        if (password_verify($pw, $row['password'])) 
        {

                //Password matches, so create the session
                $_SESSION['user'] = password_hash($row['username'], PASSWORD_DEFAULT);
                // header("Location: http://www.perunasoft.com/43231257/logged_in.php");
				echo "Match";

        }
        else
        {
            echo  "The username or password do not match";
        }
    }
    else
    {
    	echo "goofed fam";
    }

}

if ($_GET['logout'] == "true")
{
    session_destroy($_GET['user']);
    //header("Location: https://perunasoft.com/43231257/logout.php"); 
}


mysqli_close($conn);
?> 
