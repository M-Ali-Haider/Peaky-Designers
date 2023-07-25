let sky = document.getElementById('sky');
let back = document.getElementById('back-m');
let front = document.getElementById('front-mount');
let birbs = document.getElementById('birbs');
let explore = document.getElementById('Explore');

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    back.style.top = value * 0.45 + 'px';
    birbs.style.left =- value * 0.5 + 'px';
    sky.style.top = value * 0.55 + 'px';
    //explore.style.marginTop = value * 0.6 + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the scroll event
    function handleScroll() {
      const header = document.querySelector('header');
      const scrollPosition = window.scrollY;
  
      // Set the header class based on the scroll position
      if (scrollPosition > 0) {
        header.classList.add('solid-header');
        header.classList.remove('transparent-header');
      } else {
        header.classList.remove('solid-header');
        header.classList.add('transparent-header');
      }
    }
  
    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);
  });
   let i = 0;
  const increment = 0.125;
  const decrement = -0.125;
  let scrollingDown = false;

 
  function updateMarqueePosition() {
    const marquee = document.getElementById("marqueer");
    marquee.style.transform = `translateX(${i}%)`;

    const marqueeer=document.getElementById("marqueeer");
    marqueeer.style.transform=`translateX(${i-100}%)`;

    const marqur=document.getElementById("marqur");
    marqur.style.transform=`translateX(${i+100}%)`;
    if (!scrollingDown) {
      i += increment;
      if (i >= 100) {
        i = 0;
      }
    } else {
      i += decrement;
      if (i <= -100) {
        i = 100;
      }
    }
    requestAnimationFrame(updateMarqueePosition);
  }

  requestAnimationFrame(updateMarqueePosition);

  let prevScrollY = window.scrollY;

  function updateScrollDirection() {
    const currentScrollY = window.scrollY;
    scrollingDown = currentScrollY > prevScrollY;
    prevScrollY = currentScrollY;
  }

  window.addEventListener("scroll", updateScrollDirection);
