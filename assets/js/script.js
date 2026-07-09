(function () {
    'use strict';

    let player;

    window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: 'ByXuk9QqQkk',
        });
    };

    const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementsByClassName('close')[0];

    openModalBtn.onclick = function () {
        modal.style.display = 'block';
    };

    closeModalBtn.onclick = function () {
        modal.style.display = 'none';
        if (player && typeof player.stopVideo === 'function') {
            player.stopVideo();
        }
    };
})();
