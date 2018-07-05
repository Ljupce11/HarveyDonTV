<?php

	include '../includes/connect.php';

	if (isset($_POST['country']) && isset($_POST['songName']) && isset($_POST['url_id']) && isset($_POST['submitter'])) {
		$country = strtolower($_POST['country']);
		$name = $_POST['songName'];
		$url = $_POST['url_id'];
		$submitter = $_POST['submitter'];
		preg_match("/^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'>]+)/", $url, $matches);

		$sql = "INSERT INTO $country (name, url, username)
				VALUES ('$name', '$matches[1]', '$submitter')";
				
		if ($query = mysqli_query($db, $sql)) {
			echo "success";
			exit();
		}
		else {
			echo "fail";
			exit();
		}
	}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Submit a track</title>
	<title>HarveyDonTV</title>
	<link rel="stylesheet" type="text/css" href="../assets/css/submit.css">
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="../assets/js/index.js"></script>
</head>
<body>

	<div class="container-fluid centered">
	<div class="row">
		<div class="col-lg-10 centered submit-form">
			<br><h2>Track Confirmation</h2><br><br>

			<p class="desc">This is where you will add the requested tracks to the database.</p>
			<p class="desc">- You have to make sure there aren't any typos and you enter the Youtube URL ID in the correct format(not the full link), otherwise the video will not play.</p>
			<p class="desc">- The song name input is also important, you should enter the name in the following format : HarveyDon - Song name.</p>
			<p class="desc">- The 2 empty spaces before and after the dash are important because it makes the text look better.</p>
			<br><br>
			<div class="col-lg-6 centered form">
				<form spellcheck="false" id="submit-form">



				    <div class="form-group c">
				    	<label>Country</label>
				    	<select autocomplete='nope' placeholder="Keep an eye out on typos!" type="text" class="form-control inp" id="country" name="country">
				    		<option>France</option>
				    		<option>Netherlands</option>
				    		<option>Italy</option>
				    	</select>
				    	<span class="desc1"></span>
				    </div><br>

					<div class="form-group f">
					    <label>Song name</label>
					    <input autocomplete='on' placeholder="This is how the song name will be displayed on the homepage!" type="text" class="form-control inp" id="songName" name="songName">
					    <span class="desc1"></span>
					</div><br>

					<div class="form-group f">
					    <label>Youtube URL</label>
					    <input autocomplete='nah' type="text" class="form-control inp" id="url_id" name="url_id">
					</div><br>

					<div class="form-group f">
					    <label>Submitter name</label>
					    <input autocomplete='nah' type="text" class="form-control inp" id="submitter" name="submitter">
					</div><br>

					<div class="form-group g">
					    <button type="button" class="submit">Add Track</button><br>
					    <span id="status"></span>
					</div>

				</form>	
			</div>
		</div>
	</div>
</div>
	
<script type="text/javascript">
	$('.submit').click(function() {
		addTrack();
	});
</script>

</body>
</html>