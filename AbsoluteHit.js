/*
	@file AbsoluteHit.js
	@see https://bitbucket.org/pstrube/AbsoluteHit.git
	@author pstrube
*/

var abshitAudio = document.createElement('AUDIO');
var imgPath48 = getCursorPath(48);
var imgPath32 = getCursorPath(32);

abshitAudio.id = "abshit";
abshitAudio.src = "assets/a/hitmarker.mp3";
abshitAudio.preload = "auto";
document.body.appendChild(abshitAudio);

// HEY! LISTEN!

window.document.addEventListener("mousedown", function() {
	document.getElementsByTagName('html')[0].style.cursor = "url(" + imgPath32 + "), auto";
	
	abshitAudio.play(); 
	
	setTimeout(function(){
		document.getElementsByTagName('html')[0].style.cursor = "auto";
	}, 100);
});

// helper
function getCursorPath(suffix) {
	var scripts = document.getElementsByTagName("script");
	var path;

	for(var i = 0; i < scripts.length; i++){
		if(scripts[i].src.includes("AbsoluteHit.js")){
			path = scripts[i].src;
			break;
		}
	}

	var lastSlash = path.lastIndexOf('/');
	path = path.slice(0, lastSlash+1);

	return path + "assets/v/marker_" + suffix + ".png";
}
