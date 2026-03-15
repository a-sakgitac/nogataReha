/* ========================================
   緑樹会 ホームページ メインJS
   ======================================== */

(function () {
  'use strict';

  /* ----------------------------------------
     ハンバーガーメニュー開閉
     ---------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');

  var dropdownItem = document.querySelector('.nav__item--dropdown');
  var dropdownTrigger = dropdownItem ? dropdownItem.querySelector(':scope > .nav__link') : null;

  function closeNav() {
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('is-active');
  }

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      hamburger.classList.toggle('is-active', isOpen);
      // メニューが閉じたらアコーディオンもリセット
      if (!isOpen && dropdownItem) {
        dropdownItem.classList.remove('is-accordion-open');
      }
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        closeNav();
        if (dropdownItem) dropdownItem.classList.remove('is-accordion-open');
      }
    });

    // ナビリンククリックで閉じる（ドロップダウントリガーはスマホでは除外）
    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768 && link === dropdownTrigger) return;
        closeNav();
      });
    });
  }

  /* ----------------------------------------
     施設案内アコーディオン（スマホのみ）
     ---------------------------------------- */
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        dropdownItem.classList.toggle('is-accordion-open');
      }
    });
  }

  /* ----------------------------------------
     スクロール時ヘッダー背景変化
     ---------------------------------------- */
  var header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  /* ----------------------------------------
     スムーズスクロール（#アンカーリンク）
     ---------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
