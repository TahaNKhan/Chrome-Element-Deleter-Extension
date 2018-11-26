
'use strict';

let deleterEnabled = false;

chrome.browserAction.onClicked.addListener((tab) => {
    if (!deleterEnabled) {
        chrome.tabs.sendMessage(tab.id, { text: 'enable_deleter' }, () => { });
        deleterEnabled = true
    } else {
        chrome.tabs.sendMessage(tab.id, { text: 'disable_deleter' }, () => { });
        deleterEnabled = false;
    }
});