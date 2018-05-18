document.addEventListener('DOMContentLoaded', function () {
    const bg = chrome.extension.getBackgroundPage();

    const count_button = document.getElementById('count_button');
    const counter = document.getElementById('counter');

    counter.innerHTML = bg.count;
    
    count_button.addEventListener('click', function () {
        bg.count++;
        counter.innerHTML = bg.count;
    });
});