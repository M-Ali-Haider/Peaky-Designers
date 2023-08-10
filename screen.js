function createElementWithClass(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
  }
  
  function addClassWithTransition(element, className, transitionProperty, transitionDuration) {
    element.classList.add(className);
    element.style.transition = `${transitionProperty} ${transitionDuration}ms linear`;
  
    element.addEventListener('transitionend', function transitionEnd() {
      element.removeEventListener('transitionend', transitionEnd);
      element.classList.remove(className);
      element.style.transition = '';
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href='about.html'],a[href='main.html']");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const blackScreen = createElementWithClass("div", "black-screen");
        document.body.appendChild(blackScreen);
  
        requestAnimationFrame(function () {
          blackScreen.style.opacity = "1";
          blackScreen.style.transform = "translateY(0)";
        });
  
        setTimeout(function () {
          window.location.href = link.getAttribute("href");
        }, 650);
      });
    });
  });
  
  function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.querySelector('.loading-text');
    const mainer = document.querySelector('.main');
  
    addClassWithTransition(mainer, 'loading-screen-animation', 'opacity', 175);
    addClassWithTransition(loadingScreen, 'push-out', 'opacity', 175);
    loadingText.classList.remove('fade-in');
    window.scrollTo(0, 0);
  
    loadingScreen.addEventListener('transitionend', function () {
      loadingScreen.style.display = 'none';
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const minimumLoadingTime = 2000;
    const loadingText = document.querySelector('.loading-text');
    loadingText.classList.add('fade-in');
  
    const pageLoadTime = new Date().getTime() - window.performance.timing.navigationStart;
  
    let loaded = true; // No need to set this to true initially
    let resourcesLoaded = false;
  
    function checkLoadingComplete() {
      if (loaded && resourcesLoaded) {
        hideLoadingScreen();
      }
    }
  
    checkLoadingComplete();
  
    window.addEventListener('load', function () {
      const timeLeft = minimumLoadingTime - pageLoadTime;
      setTimeout(function () {
        resourcesLoaded = true;
        checkLoadingComplete();
      }, Math.max(timeLeft, 0));
    });
  });
  
