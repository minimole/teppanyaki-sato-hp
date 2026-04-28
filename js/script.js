/* ================================================
   鉄板焼 里 - メインスクリプト
   ================================================ */

(function () {
  'use strict';

  /* ---- ヘッダー：スクロール時に影を追加 ---- */
  const header = document.getElementById('header');

  window.addEventListener('scroll', function () {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ---- ハンバーガーメニュー ---- */
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');

  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* ナビリンクをクリックしたらメニューを閉じる */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* メニュー外クリックで閉じる */
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target) && hamburger.classList.contains('is-open')) {
      closeMenu();
    }
  });

  function closeMenu() {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'メニューを開く');
    document.body.style.overflow = '';
  }

  /* ---- Escキーでメニューを閉じる ---- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && hamburger.classList.contains('is-open')) {
      closeMenu();
    }
  });

})();
