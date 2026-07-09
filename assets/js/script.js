(function () {
  'use strict';

  const openModalBtn = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.close');

  if (!openModalBtn || !modal || !closeModalBtn) {
    return;
  }

  let player;
  let lastFocusedElement;

  // A API do YouTube chama esta função global quando termina de carregar.
  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'ByXuk9QqQkk',
    });
  };

  function openModal() {
    lastFocusedElement = document.activeElement;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    closeModalBtn.focus();
    document.addEventListener('keydown', handleKeydown);
  }

  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleKeydown);

    if (player && typeof player.stopVideo === 'function') {
      player.stopVideo();
    }

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  // Fecha ao clicar fora da área do player (no fundo escuro da modal).
  modal.addEventListener('click', function (event) {
    if (event.target === modal || event.target.classList.contains('modal-content')) {
      closeModal();
    }
  });
})();
