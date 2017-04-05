
var resourceURL = null;

// find img or video element recursively. 
function findElement(ele){
	if(ele === null){
		return null;
	}
	if(ele.tagName === 'IMG' || ele.tagName === 'VIDEO'){
		return ele;
	}else{
		return findElement(ele.firstChild);
	}
};

document.addEventListener('mousedown', function(evt){
	if(evt.button === 2){
		var ele = findElement(evt.target.parentElement);
		var tagName = ele.tagName;
		if(tagName === 'IMG' || tagName === 'VIDEO'){
			resourceURL = ele.getAttribute('src');
		}else{	// found nothing
			resourceURL = null;
		}
	}
}, true);


chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
	if(req.cmd === "getTargetUrl" && resourceURL !== null) {
		sendResponse({url: resourceURL});
	}
});