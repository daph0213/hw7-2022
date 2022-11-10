var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

	// Play Button
	this.document.getElementById("play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		video.volume = parseInt(document.getElementById("slider").value)/100;
		document.getElementById("volume").innerHTML =  document.getElementById("slider").value + "%";

	});

	//Pause Button
	this.document.getElementById("pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	//Slow Down
	this.document.getElementById("slower").addEventListener("click", function() {
		video.playbackRate = video.playbackRate - .1;
		console.log("New Slow Down Video Rate " + video.playbackRate);
	});

	// Speed Up
	this.document.getElementById("faster").addEventListener("click", function() {
		video.playbackRate = video.playbackRate + .1;
		console.log("New Speed Up Video Rate " + video.playbackRate);
	});

	//Skip Ahead
	this.document.getElementById("skip").addEventListener("click", function() {
		if(video.currentTime + 10 >67.40333){
			video.currentTime = 0;
		} else {
			video.currentTime = video.currentTime + 10;
		}
		console.log("New skipped time stamp " + video.currentTime);

	});

	//Mute
	this.document.getElementById("mute").addEventListener("click", function() {
		if(!video.muted){
			video.muted = true;
			console.log("mute");
			document.getElementById("mute").innerHTML = "Unmute";
		} else{
			video.muted = false;
			console.log("unmute");
			document.getElementById("mute").innerHTML = "Mute";
		}
	});

	//volume slider
	this.document.getElementById("slider").addEventListener("click", function() {
		video.volume = parseInt(document.getElementById("slider").value)/100;
		document.getElementById("volume").innerHTML =  document.getElementById("slider").value + "%";
		console.log("Volume slider " + video.volume);
	});

	//styled 
	this.document.getElementById("vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Old School added");
	});

	// original
	this.document.getElementById("orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("old school removed");
	});

});




