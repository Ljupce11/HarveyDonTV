<?php

	include 'includes/connect.php';

	if (isset($_POST['randomCountry'])) {
		$randomCountry = $_POST['randomCountry'];
		$sql = "SELECT * FROM $randomCountry";
		if ($query = mysqli_query($db, $sql)) {
			$rows = mysqli_num_rows($query);
			$randomSong = rand(1,$rows);
			$sql1 = "SELECT name, url, username FROM $randomCountry WHERE id='$randomSong'";
			if ($query1 = mysqli_query($db, $sql1)) {
				while ($row = mysqli_fetch_array($query1, MYSQLI_ASSOC)) {
					$name = $row['name'];
					$url = $row['url'];
					$username = $row['username'];
					$arr = array('name'=>$name, 'url'=>$url, 'country'=>$randomCountry, 'username'=>$username);
					echo json_encode($arr);
					exit();
				}
				
			}
			else {
				echo "query_error2";
				exit();
			}
			
		}
		else {
			echo "query_error";
			exit();
		}
	}

	if (isset($_POST['Country']) && isset($_POST['Song'])) {
		if ($_POST['Song'] == 0) {
			$country = $_POST['Country'];

			$sql = "SELECT * FROM $country";
			if ($query = mysqli_query($db, $sql)) {
				$rows = mysqli_num_rows($query);
				$randomSong = rand(1,$rows);
				$sql1 = "SELECT name, url, username FROM $country WHERE id='$randomSong'";
				if ($query1 = mysqli_query($db,$sql1)) {
					while ($row = mysqli_fetch_array($query1, MYSQLI_ASSOC)) {
						$name = $row['name'];
						$url = $row['url'];
						$username = $row['username'];
						$arr = array('name'=>$name, 'url'=>$url, 'country'=>$country, 'numRows'=>$rows, 'songID'=>$randomSong, 'username'=>$username);
						echo json_encode($arr);
						exit();
					}
				}
				else {
					echo "query_error1";
					exit();
				}
			}
			else {
				echo "query_error2";
				exit();
			}
		}
		else {
			$country = $_POST['Country'];
			$songNum = $_POST['Song'];

			$sql = "SELECT * FROM $country";
			if ($query = mysqli_query($db, $sql)) {
				$rows = mysqli_num_rows($query);
				$sql1 = "SELECT name, url, username FROM $country WHERE id='$songNum'";
				if ($query1 = mysqli_query($db,$sql1)) {
					while ($row = mysqli_fetch_array($query1, MYSQLI_ASSOC)) {
						$name = $row['name'];
						$url = $row['url'];
						$username = $row['username'];
						$arr = array('name'=>$name, 'url'=>$url, 'country'=>$country, 'numRows'=>$rows, 'songID'=>$songNum, 'username'=>$username);
						echo json_encode($arr);
						exit();
					}
				}
				else {
					echo "query_error1";
					exit();
				}
			}
			else {
				echo "query_error2";
				exit();
			}
		}
	}

?>



<!DOCTYPE html>
<html>
<head>
	<title>HarveyDonTV</title>
	<!-- <link rel="icon" href="assets/img/icon.jpg"> -->
	<link rel="stylesheet" type="text/css" href="assets/css/index.css">
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="assets/js/index.js"></script>
</head>
<body>

<div class="left-header">
	<div class="logo-div">
		<a href="">
			<img class="logo" src="assets/img/Logo.png">
		</a>
	</div>
	<select class="country" onchange="countrySelection(this)">
		<option value="Random" class="opt">Random</option>
		<option value="France" class="opt">France</option>
		<option value="Netherlands" class="opt">Netherlands</option>
		<option value="Italy" class="opt">Italy</option>
	</select>
</div>

<div class="right-header">
	<a target="_blank" href="http://shop.harveydontv.com"><p>SHOP</p></a>
	<a target="_blank" href="https://goo.gl/forms/Si36l1Bt3bENSTXD3"><p>SUBMIT A TRACK</p></a> 
	<a target="_blank" href=""><p>ABOUT</p></a>
	<a target="_blank" href="http://shop.harveydontv.com/contact"><p>CONTACT</p></a>
</div>

<main>
	<div class="title"></div>
</main>


<div class="background">
	<div class="foreground">
		<div id="player"></div>
	</div>	
</div>

<div class="left-footer">
	<button class="pause"><i class="fas fa-pause"></i></button>
	<button class="prev"><i class="fas fa-step-backward"></i> Prev</button>
	<button class="next"><i class="fas fa-step-forward"></i> Next</button>
	<button class="unmute"><i class="fas fa-volume-off"></i></button>
</div>

<div class="right-footer"></div>

</body>
</html>