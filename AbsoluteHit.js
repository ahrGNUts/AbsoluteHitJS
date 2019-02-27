/*
	@file AbsoluteHit.js
	@see https://bitbucket.org/pstrube/AbsoluteHit.git
	@version 1.4
	@author Patrick Strube
	
	Commercial use prohibited.

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

	let validNodes = ["A", "BUTTON", "INPUT", "LABEL"];
	let validSubTypes = ["radio", "checkbox"];

	if(validNodes.includes(event.target.nodeName)){
		if(event.target.nodeName == "INPUT" && !validSubTypes.includes(event.target.type))
			return;

		if(event.target.nodeName == "LABEL" && !wrapperLabelClicked(event.target, validSubTypes))
			return

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


// helpers
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

function wrapperLabelClicked(target, subTypes){
	if(target.nodeName == "LABEL" && target.children.length > 0){
		for(let element of target.children){
			if(element.nodeName == "INPUT" && subTypes.includes(element.type))
				return true;
		}
	}
	return false;
}
