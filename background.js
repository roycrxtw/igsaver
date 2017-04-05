
var saveIgResource = function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {cmd: 'getTargetUrl'}, function(res){
			chrome.downloads.download({	// start download
				url: res.url
			});
		});
	});
};

chrome.contextMenus.create({
	title: "儲存IG影片/圖片",
	contexts: ["page", "link"],		// #todo-roy: 需要指定到精確目標
	documentUrlPatterns: ['https://www.instagram.com/*'],
	onclick: saveIgResource
});
