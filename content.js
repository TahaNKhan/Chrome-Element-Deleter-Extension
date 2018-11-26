const deleteElement = (e) => {
    e.preventDefault();
    e.target.remove();
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch(msg.text) {
        case 'enable_deleter':
            document.addEventListener('click', deleteElement, false);
            sendResponse('deleter_enabled');
            sendResponse('test');
            break;
        case 'disable_deleter':
            document.removeEventListener('click', deleteElement, false);
            sendResponse('deleter_disabled');
            break;
    }

});
