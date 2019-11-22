chrome.contextMenus.create({
	"title": "Copy YT URL",
	"contexts": ["video"],
	"onclick": copyUrl
});

chrome.contextMenus.create({
	"title": "Copy YT URL at current time",
	"contexts": ["video"],
	"onclick": copyUrlWithTime
});

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

function copyUrl(info, tab){
	var id = tab.url.split("v=")[1].split("&")[0];
	copyToClipboard("https://youtu.be/" + id);
}

function copyUrlWithTime(info, tab){
	chrome.tabs.executeScript(tab.id, {file: "copyUrlWithTime.js"})
}