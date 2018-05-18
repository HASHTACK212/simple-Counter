document.addEventListener('DOMContentLoaded', function () {
    const bg = chrome.extension.getBackgroundPage();

    const count_button = document.getElementById('count_button');

    count_button.addEventListener('click', function () {
        bg.count++;
    });
});