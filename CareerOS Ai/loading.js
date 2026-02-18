(function () {
  var OVERLAY_ID = 'loading-overlay';
  var DEFAULT_DURATION = 1000;

  function getOverlay() {
    return document.getElementById(OVERLAY_ID);
  }

  function showLoading() {
    var el = getOverlay();
    if (el) {
      el.classList.add('is-visible');
      el.setAttribute('aria-hidden', 'false');
    }
  }

  function hideLoading() {
    var el = getOverlay();
    if (el) {
      el.classList.remove('is-visible');
      el.setAttribute('aria-hidden', 'true');
    }
  }

  function withLoading(callback, duration) {
    duration = duration || DEFAULT_DURATION;
    showLoading();
    setTimeout(function () {
      if (typeof callback === 'function') callback();
      hideLoading();
    }, duration);
  }

  window.CareerOSLoading = {
    show: showLoading,
    hide: hideLoading,
    withLoading: withLoading
  };
})();
