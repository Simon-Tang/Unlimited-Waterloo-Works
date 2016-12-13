// EULA
chrome.runtime.onInstalled.addListener(function (details) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('oninstalled.html')
    })
});
