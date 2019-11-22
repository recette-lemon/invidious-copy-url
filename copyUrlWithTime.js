(function(){

function copyToClipboard(text){
	var copyDiv = document.createElement('div');
	copyDiv.contentEditable = true;
	document.body.appendChild(copyDiv);
	copyDiv.innerHTML = text;
	copyDiv.unselectable = "off";
	copyDiv.focus();
	document.execCommand('SelectAll');
	document.execCommand("Copy", false, null);
	document.body.removeChild(copyDiv);
}

var time = Math.floor(document.getElementById("player_html5_api").currentTime);
var id = location.href.split("v=")[1].split("&")[0];

var s = window.scrollY;
copyToClipboard("https://youtu.be/" + id + "?t=" + time);
scrollTo(0, s);

})();