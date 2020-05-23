chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg == 'click') {
        const DICTIONARY = {
            "af": "articulate fart",
            "afk": "away from keyboard",
            "are": "arrrrrr matey",
            "brb": "be right back",
            "dm": "direct message",
            "fml": "farts may lie",
            "iirc": "if I recall correctly",
            "ikr": "I know right",
            "lol": "laughing out loud",
            "smh": "shiver me timbers",
            "til": "today I learned",
            "ty": "thank you",
            "wtf": "want to fart",
            "ysk": "you should know",
        };
        const re = new RegExp()
        let reducer = (acc, val) => (
            acc.replace(new RegExp(` ${val} `, 'gi'), ` ${DICTIONARY[val]} `)
        );
        let paragraphs = document.getElementsByTagName("p");
        for (p of paragraphs) {
            let str = p.innerText;
            let replaceText = Object.keys(DICTIONARY).reduce(reducer, str);
            p.innerText = replaceText;
        }

        let spans = document.getElementsByTagName("span");
        for (span of spans) {
            let str = span.innerText;
            let replaceText = Object.keys(DICTIONARY).reduce(reducer, str);
            span.innerText = replaceText;
        }
    }
});
