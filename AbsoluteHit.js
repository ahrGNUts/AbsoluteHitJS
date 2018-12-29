/*
	@file AbsoluteHit.js
	@see https://bitbucket.org/pstrube/AbsoluteHit.git
	@author pstrube
*/

var bod = document.body;
var abshitAudio = document.createElement('AUDIO');
var emptyPage = false;
var win = window.visualViewport;
var imgPath = "assets/v/marker.something";

abshitAudio.id = "abshit";
abshitAudio.src = "assets/a/hitmarker.mp3";
abshitAudio.preload = "auto";
bod.appendChild(abshitAudio);

if(bod.clientHeight == 0){
	emptyPage = true;
	bod.style.height = window.innerHeight + "px";
}

// HEY! LISTEN!

bod.addEventListener("mousedown", function() {
	abshitAudio.play();
});

bod.addEventListener("resize", function() {
	bod.style.height = window.innerHeight;
});

win.addEventListener("resize", function() {
	// set body's height to the size of the viewport but only if it doesn't fit as is
})