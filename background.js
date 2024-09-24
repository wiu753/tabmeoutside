chrome.commands.onCommand.addListener(function (command) {
    if (command === "next-tab") {
        chrome.tabs.query({ currentWindow: true }, function (tabs) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
                let currentIndex = activeTabs[0].index;
                let nextIndex = (currentIndex + 1) % tabs.length;
                chrome.tabs.update(tabs[nextIndex].id, { active: true });
            });
        });
    }

    if (command === "previous-tab") {
        chrome.tabs.query({ currentWindow: true }, function (tabs) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
                let currentIndex = activeTabs[0].index;
                let previousIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                chrome.tabs.update(tabs[previousIndex].id, { active: true });
            });
        });
    }
});
