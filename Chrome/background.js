function handleInstalled(reason) {
		if (reason != "browser_update" && reason != "chrome_update") {
			chrome.tabs.create({
				url: `./changelog.html#${reason}`
			});
		}
}
  
let browser = chrome || browser;
browser.runtime.onInstalled.addListener(reason => {
	handleInstalled(reason.reason);
});
