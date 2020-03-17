chrome.extension.sendMessage({}, function(response) {
	document.addEventListener("DOMContentLoaded", function(event) { 
        const threadListItems = document.querySelectorAll('.discussionListItem');
        const bannedWords = ['corona', 'coronavirus', 'corona virus', 'toilet paper', 'pandemic', 'covid', 'wuhan', 'food panic'];

        threadListItems.forEach(item => {
            for (let bannedWord of bannedWords) {
                if (item.textContent.toLowerCase().includes(bannedWord)) {
                    item.style.display = 'none';
                    break;
                }
            }
        });

    });
});