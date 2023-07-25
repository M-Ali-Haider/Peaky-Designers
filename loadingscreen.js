function hideLoadingScreen() {
  var loadingScreen = document.getElementById('loading-screen');
  var loadingtext=document.querySelector('.loading-text');
  var mainer=document.querySelector('.main');

  mainer.classList.add('loading-screen-animation');
  loadingScreen.classList.add('push-out');
  loadingtext.classList.remove('fade-in');
  loadingtext.style.transition=`opacity 0.175s linear`;
  loadingtext.classList.add('fade-out');
  window.scrollTo(0, 0); 
  
  setTimeout(function () {
    loadingScreen.style.display = 'none';
  },750); 
}

window.addEventListener('load', function () {
  var minimumLoadingTime = 2000;

  var loadingtext=document.querySelector('.loading-text');
  loadingtext.classList.add('fade-in');

  var pageLoadTime = new Date().getTime() - window.performance.timing.navigationStart;

  if (pageLoadTime < minimumLoadingTime) {
    setTimeout(hideLoadingScreen, minimumLoadingTime - pageLoadTime);
  } else {
    hideLoadingScreen();
  }
});