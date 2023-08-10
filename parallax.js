document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    let scrollingDown = false;
    let i = 0;
    const increment = 0.085;
    const decrement = -0.085;
  
    function handleScroll() {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 0) {
        header.classList.add('solid-header');
        header.classList.remove('transparent-header');
      } else {
        header.classList.remove('solid-header');
        header.classList.add('transparent-header');
      }
    }
  
    function updateMarqueePosition() {
      const marquee = document.getElementById("marqueer");
      const marqueeer = document.getElementById("marqueeer");
      const marqur = document.getElementById("marqur");
  
      marquee.style.transform = `translateX(${i}%)`;
      marqueeer.style.transform = `translateX(${i - 100}%)`;
      marqur.style.transform = `translateX(${i + 100}%)`;
  
      if (!scrollingDown) {
        i += increment;
        if (i >= 100) i = 0;
      } else {
        i += decrement;
        if (i <= -100) i = 100;
      }
      requestAnimationFrame(updateMarqueePosition);
    }
  
    function updateScrollDirection() {
      const currentScrollY = window.scrollY;
      scrollingDown = currentScrollY > prevScrollY;
      prevScrollY = currentScrollY;
    }
  
    let prevScrollY = window.scrollY;
    window.addEventListener("scroll", updateScrollDirection);
  
    // Function to create an element with a class
    function createElementWithClass(tagName, className) {
      const element = document.createElement(tagName);
      element.classList.add(className);
      return element;
    }
    window.addEventListener('scroll', function () {
        const top = document.querySelector('header');
        const scroll = window.scrollY;
    
        if (scroll > 0) {
          top.classList.remove('big');
          top.classList.add('small');
        } else {
          top.classList.remove('small');
          top.classList.add('big');
        }
      });
  
    // Function to add a class with transition and remove it after the transition ends
    function addClassWithTransition(element, className, transitionProperty, transitionDuration) {
      element.classList.add(className);
      element.style.transition = `${transitionProperty} ${transitionDuration}ms linear`;
  
      function transitionEnd() {
        element.removeEventListener('transitionend', transitionEnd);
        element.classList.remove(className);
        element.style.transition = '';
      }
  
      element.addEventListener('transitionend', transitionEnd);
    }
  
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
  
    const minimumLoadingTime = 2000;
    const loadingText = document.querySelector('.loading-text');
    loadingText.classList.add('fade-in');
  
    const pageLoadTime = new Date().getTime() - window.performance.timing.navigationStart;
  
    let loaded = true;
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
  
    // Attach scroll and marquee update listeners after optimizations
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', updateScrollDirection);
    requestAnimationFrame(updateMarqueePosition);
  });
  
