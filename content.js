chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg == 'click') {
        const DICTIONARY = {
            "afk": "away from keyboard",
            "are": "arrrrrr matey",
            "brb": "be right back",
            "lol": "laughing out loud",
            "ty": "thank you",
        };
        let reducer = (acc, val) => acc.replace(val, DICTIONARY[val]);
        let paragraphs = document.getElementsByTagName("p");
        for (p of paragraphs) {
            let str = p.innerText;
            let replaceText = Object.keys(DICTIONARY).reduce(reducer, str);
            p.innerText = replaceText;
        }
    }
});
