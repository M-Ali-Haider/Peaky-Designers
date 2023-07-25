const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const scrollDiv = document.getElementById("sliders");


let initialTransform1 = 50;
let initialTransform2 = 100;

function handleScroll() {
  const newPosition = window.scrollY;
  const scrollDifference = newPosition - initialScrollPosition;
  row1.style.transform = `translateX(${initialTransform1 + scrollDifference * 0.15}px)`;
  row2.style.transform = `translateX(${initialTransform2 - scrollDifference * 0.15}px)`;
}

function checkElementsInView(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting || entry.intersectionRatio > 5) {
      initialScrollPosition = window.scrollY;
      storeInitialTransform();
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  });
}

function storeInitialTransform() {
  const styles1 = window.getComputedStyle(row1);
  const styles2 = window.getComputedStyle(row2);
  initialTransform1 = parseInt(styles1.transform.split(',')[4], 10);
  initialTransform2 = parseInt(styles2.transform.split(',')[4], 10);
}

const observer = new IntersectionObserver(checkElementsInView, { threshold: 0.01 });
observer.observe(row1);
observer.observe(row2);


///////////////////////////////////////////

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;                                //extra height    // below div height - 10
  const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;


  const scrollPercentage = (scrollPosition / totalHeight) * 100;

  console.log(scrollPercentage,',',scrollPosition,',',totalHeight);
  const maxBorderRadius = 50;

  const newBorderRadius = (maxBorderRadius - (maxBorderRadius * scrollPercentage) / 100);
 // console.log(newBorderRadius);
  scrollDiv.style.borderRadius = `0% 0% 50% 50% / ${newBorderRadius}% ${newBorderRadius}% ${newBorderRadius}% ${newBorderRadius}%`;
  
});