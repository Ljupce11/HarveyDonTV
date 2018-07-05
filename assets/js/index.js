$(document).ready(function() {
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


	// Add all option values to countryArr array
	$('select option').each(function() {
		var value = $(this).val();
		countryArr.push(value.toLowerCase());
	});

	loadRandom(); // Load random song from random country on page load

	titleFade(); // Fading title on mousemove

	$('.unmute').click(function(){
		player.unMute();
	});

	$(".pause").one("click", handler1); // Play, Pause video

	$(".unmute").one("click", handler3); // Mute, Unmute video

	$('main').css('opacity', '1'); // Fade in title on load

	// Play next video depending on option value
	$('.next').click(function() {
		if (prevClick >= 1) {
			prevClick--;
			playNext(e);		
		}
		else {
			playNext(e);
		}

		// !! New title shoud fade in on click !! 
	});

	$('.prev').click(function() {
		if (playedVideos.length > 1) {
			prevClick++;
			prevVideo = currVideo - prevClick;
			previousVideo(prevVideo);		
		}

	});

	setTimeout(function (){
		$('.title').css('transform', 'translateY(-50%)');
	}, 700);

});

var e;
var countryArr = new Array();
var player;
var link;
var name;
var country1;
var username;
var link1;
var name1;
var country2;
var username1;
var val;
var songNum;
var nextSong;
var numOfSongs = 1;
var playedVideos  = new Array();
var currVideo;
var prevClick = 1;

function capitalize(word) {
   return $.camelCase("-" + word);
}

// get random country from the countryArr array
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max - 1)) + 1;
}

function titleFade(){
	var timeout;
	document.onmousemove = function(){
		$('.title').css('opacity', '1');
		clearTimeout(timeout);
		timeout = setTimeout(function(){$('.title').css('opacity', '0');}, 4500);
	}
}

// Play video according to selected option value (country)
function countrySelection(select) {
    val = select.options[select.selectedIndex].text;
    if (val == "Random") {
    	$('.title').html('');
    	$('.right-footer').html('');
    	loadRandom();
    }
    else {
    	playedVideos = [];
    	player.unMute();
		$('.unmute').css('opacity', '0');
    	$('.title').html('');
    	$('.right-footer').html('');
    	loadByCountry(0);
    }
}

function playNext(e){
	player.unMute();
	$('.unmute').css('opacity', '0');
	$('.right-footer').html('');

	if (prevClick > 0 && prevVideo < playedVideos.length - 1) {
		prevVideo++;
		previousVideo(prevVideo);
	}
	else {
		if (val == 'Random' || $('.country').val() == 'Random') {
			$('.title').html('');
			nextRandom();
		}
		else if (val != 'Random' || $('.country').val() != 'Random'){
			$('.title').html('');
			if (nextSong >= numOfSongs) {
				nextSong = 1;
				loadByCountry(nextSong);
			}
			else {
				nextSong++;
				loadByCountry(nextSong);			
			}
		}			
	}
}

// Plays next random video by random country
function nextRandom(){
	var n = getRandomInt(countryArr.length);
	$.ajax({
		url: 'index.php',
		type: 'POST',
		data: ({randomCountry: countryArr[n]}),
		success: function(data){
		var arr = JSON.parse(data);
		link = arr.url;
		name = arr.name;
		country1 = arr.country;
		username = arr.username;
		playedVideos.push(arr);
		currVideo = playedVideos.length - 1;

		player.loadVideoById(link);
		$('.title').append('<h1 class="song-title">'+ name +'</h1><img class="flag" src="assets/img/flags/'+ country1 +'.png"><p class="song-country">'+ country1 +'</p>');
		$('.right-footer').append('<p class="submitted-by">Submitted by: '+ username +'</p>');
		}
	})


}

function previousVideo(i){

	$('.title').html('');
    $('.right-footer').html('');
	player.loadVideoById(playedVideos[i].url);
	$('.title').append('<h1 class="song-title">'+ playedVideos[i].name +'</h1><img class="flag" src="assets/img/flags/'+ playedVideos[i].country +'.png"><p class="song-country">'+ country1 +'</p>');
	$('.right-footer').append('<p class="submitted-by">Submitted by: '+ playedVideos[i].username +'</p>');

}

/* Load Random Video by Random Country when the website is opened */

function loadRandom(e){
	var i = getRandomInt(countryArr.length);

	// Send random country to index.php and return the needed values
	$.ajax({
		url: 'index.php',
		type: 'POST',
		data: ({randomCountry: countryArr[i]}),
		success: function(data){
		var arr = JSON.parse(data);
		link = arr.url;
		name = arr.name;
		country1 = arr.country;
		username = arr.username;
		playedVideos.push(arr);
		currVideo = playedVideos.length - 1;
		}
	})

	// Create player if it hasn't been done before 
	if (!window.onYouTubeIframeAPIReady){
		window.onYouTubeIframeAPIReady = function(){
	        player = new YT.Player('player', {
	            height: '100%',
	            width: '100%',
	            playerVars: {
	                controls: 0,
		            cc_load_policy: 0,
		            fs: 0,
		            iv_load_policy: 3,
		            modestbranding: 0,
		            rel: 0,
		            showinfo: 0,
		            autoplay: 1,
		            mute: 1,
		            enablejsapi: 1,
		            widgetid: 1
	            },
	            events: {
	            	'onReady': onPlayerReady,
	            	'onStateChange': onPlayerStateChange
	            }
	        });		    		
		}
		// Play random video
	    function onPlayerReady(event){
	    	$('iframe').removeAttr('allow');
	    	player.loadVideoById(link);
			event.target.setVolume(20);
			$('.title').append('<h1 class="song-title">'+ name +'</h1><img class="flag" src="assets/img/flags/'+ country1 +'.png"><p class="song-country">'+ country1 +'</p>');
			$('.right-footer').append('<p class="submitted-by">Submitted by: '+ username +'</p>');
		}
	    // Automatically Play next random video after current video has ended
	    function onPlayerStateChange(event){
			if (event.data === 0) {
				if (val == 'Random' || $('.country').val() == 'Random') {
					$('.title').html('');
					$('.right-footer').html('');
					nextRandom();
				}
				else if (val != 'Random' || $('.country').val() != 'Random'){
					$('.title').html('');
					$('.right-footer').html('');
					if (nextSong >= numOfSongs) {
						nextSong = 1;
						loadByCountry(nextSong);
					}
					else {
						nextSong++;
						loadByCountry(nextSong);
					}
				}
			}		                	
	    }
	}
	// If the YT iframe is already created, load next random video by new random url
	else {
		player.loadVideoById(link);
		$('.title').append('<h1 class="song-title">'+ name +'</h1><img class="flag" src="assets/img/flags/'+ country1 +'.png"><p class="song-country">'+ country1 +'</p>');
		$('.right-footer').append('<p class="submitted-by">Submitted by: '+ username +'</p>');		
	}
	
}

// Load video by selected country
function loadByCountry(songNum){

	var countryLower = val.toLowerCase();

	$.ajax({
		url: 'index.php',
		type: 'POST',
		data: ({Country: countryLower, Song: songNum}),
		success: function(data){

		var arr = JSON.parse(data);
		numOfSongs = arr.numRows;
		nextSong = arr.songID;
		link1 = arr.url;
		name1 = arr.name;
		country2 = arr.country;
		username1 = arr.username;
		playedVideos.push(arr);
		currVideo = playedVideos.length - 1;

    	player.loadVideoById(link1);
    	$('.title').append('<h1 class="song-title">'+ name1 +'</h1><img class="flag" src="assets/img/flags/'+ country2 +'.png"><p class="song-country">'+ country2 +'</p>');
		$('.right-footer').append('<p class="submitted-by">Submitted by: '+ username1 +'</p>');
    }

	})

}

/* Pause video on click */

function handler1() {
    jQuery("iframe").each(function() {
  		jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
	});
	$('.pause').html('<i class="fas fa-play"></i>');
    $(this).one("click", handler2);
}

/* Play video on click */

function handler2() {
    jQuery("iframe").each(function() {
  		jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
	});
	$('.pause').html('<i class="fas fa-pause"></i>');
    $(this).one("click", handler1);
}

// Unmute video
function handler3() {
	$('.unmute').html('<i class="fas fa-volume-up"></i>');
    $(this).one("click", handler4);
    $('.left-footer .unmute').css('background-color', 'rgba(0,255,0,0.6)');
}

// Mute video
function handler4() {
	$('.unmute').html('<i class="fas fa-volume-off"></i>');
    $(this).one("click", handler3);
    $('.left-footer .unmute').css('background-color', 'rgba(255,0,0, 0.8)');
}

// Add requested track to DB
function addTrack(){

	var country = $('#country').val(),
		name = $('#songName').val(),
		url_id = $('#url_id').val(),
		submitter = $('#submitter').val();

	if (country == '' || name == '' || url_id == '' || submitter == '') {
		$('#status').html('Please fill out all the fields.');
	}
	else {
		$.ajax({
				url: 'index.php',
				type: 'POST',
				data: $('#submit-form').serialize(),
				beforeSend: function(){
					$('#status').html('Please wait...');
				}
			})
			.done(function(data) {
				if (data == 'success') {
					$('#status').html('The track has been successfully added!');
				}
				else {
					$('#status').html('Something went wrong. Try Again!');
					console.log(data);
				}
			})
			.fail(function() {
				$('#status').html('Something went wrong. Try Again!');
			})	
	}	
}
		    