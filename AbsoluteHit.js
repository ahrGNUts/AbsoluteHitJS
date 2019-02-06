/*
	@file AbsoluteHit.js
	@see https://bitbucket.org/pstrube/AbsoluteHit.git
	@author pstrube
	@version 1.2

	TODO:
	fix lag in safari -- may not be possible because apple?
*/

const HIT_TIME = 100;
const PLUGIN_ROOT = getPluginRoot();

var abshitAudio = document.createElement('AUDIO');
var imgPath48 = PLUGIN_ROOT + "assets/v/marker_48.png";
var imgPath32 = PLUGIN_ROOT + "assets/v/marker_32.png";

abshitAudio.id = "abshit";
abshitAudio.src = PLUGIN_ROOT + "assets/a/hitmarker.mp3";
abshitAudio.preload = "auto";
document.body.appendChild(abshitAudio);

// HEY! LISTEN!

window.document.addEventListener("mousedown", event => {
	let oldAnchorStyle;

	if(event.target.nodeName == "A" || event.target.nodeName == "BUTTON"){
		oldAnchorStyle = event.target.style.cursor;
		event.target.style.cursor = "url(" + imgPath32 + "), auto";
		document.getElementsByTagName('html')[0].style.cursor = "url(" + imgPath32 + "), auto";
		
		abshitAudio.play(); 
	
		setTimeout(function(){
			event.target.style.cursor = oldAnchorStyle;
			document.getElementsByTagName('html')[0].style.cursor = "";
		}, HIT_TIME);
	}
});


// helper
function getPluginRoot() {
	var scripts = document.getElementsByTagName("script");
	var path;

	for(let i = 0; i < scripts.length; i++){
		if(scripts[i].src.includes("AbsoluteHit.js")){
			path = scripts[i].src;
			
			let lastSlash = path.lastIndexOf('/');
			return path.slice(0, lastSlash+1);
		}
	}
}
