document.addEventListener('DOMContentLoaded', function () {
    const bg = chrome.extension.getBackgroundPage();

    const count_button = document.getElementById('count_button');
    const reset_button = document.getElementById('reset');
    const counter = document.getElementById('counter');
    const github = document.getElementById('github');

    counter.innerHTML = bg.count;
    
    count_button.addEventListener('click', function () {
        bg.count++;
        counter.innerHTML = bg.count;
    });

    reset_button.addEventListener('click', function () {
        bg.count = 0;
        counter.innerHTML = bg.count;
    });

    github.addEventListener('click', function () {
        chrome.tabs.create({ url: 'https://github.com/Jacobawesome82/simple-Counter' });
    });
});