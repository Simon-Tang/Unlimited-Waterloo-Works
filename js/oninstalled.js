// EULA
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'install') {
        chrome.tabs.create({
            'url': chrome.extension.getURL('about.html')
        });
    }
});
