function hideLoadingScreen() {
  var loadingScreen = document.getElementById('loading-screen');
  var loadingtext = document.querySelector('.loading-text');
  var mainer = document.querySelector('.main');

  mainer.classList.add('loading-screen-animation');
  loadingScreen.classList.add('push-out');
  loadingtext.classList.remove('fade-in');
  loadingtext.style.transition = `opacity 0.175s linear`;
  loadingtext.classList.add('fade-out');
  window.scrollTo(0, 0);

  // Now, instead of setting a fixed timeout, we will listen for the animation end event
  loadingScreen.addEventListener('animationend', function () {
    loadingScreen.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var minimumLoadingTime = 2000;

  var loadingtext = document.querySelector('.loading-text');
  loadingtext.classList.add('fade-in');

  var pageLoadTime = new Date().getTime() - window.performance.timing.navigationStart;

  var loaded = false;
  var resourcesLoaded = false;

  function checkLoadingComplete() {
    if (loaded && resourcesLoaded) {
      hideLoadingScreen();
    }
  }
  loaded = true;
  checkLoadingComplete();

  // Load event
  window.addEventListener('load', function () {
    var timeLeft = minimumLoadingTime - pageLoadTime;
    setTimeout(function () {
      resourcesLoaded = true;
      checkLoadingComplete();
    }, Math.max(timeLeft, 0));
  });
});
