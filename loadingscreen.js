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
  var timeLeft = minimumLoadingTime - pageLoadTime;

  // Calculate the number of resources to be loaded (e.g., images, stylesheets)
  var resourceCount = 0;
  var loadedResources = 0;
  var resources = document.querySelectorAll('img, link[rel="stylesheet"]');

  function resourceLoaded() {
    loadedResources++;
    if (loadedResources === resourceCount && timeLeft <= 0) {
      hideLoadingScreen();
    }
  }

  resourceCount = resources.length;

  // Check if resources are already loaded (cached) before adding the event listeners
  for (var i = 0; i < resourceCount; i++) {
    if (resources[i].complete) {
      resourceLoaded();
    }
  }

  // Add event listeners for resources that are not yet loaded
  for (var i = 0; i < resourceCount; i++) {
    resources[i].addEventListener('load', resourceLoaded);
    resources[i].addEventListener('error', resourceLoaded); // Handle resource loading errors too
  }

  // Handle the case where the minimumLoadingTime is not reached, but all resources are loaded
  setTimeout(hideLoadingScreen, Math.max(timeLeft, 0));
});
