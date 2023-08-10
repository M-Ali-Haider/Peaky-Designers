const magicButton = document.querySelector('.magic-button');
const topBar = document.querySelector('.top-bar');
const bottomBar = document.querySelector('.bottom-bar');
const whymagic =document.querySelector('.why-magic');
const sideButtons = document.querySelectorAll('.sideButton');
const magicButton4=document.querySelector('.jdcr');
const whyMagic=document.querySelector('.jdcrt');
const bigcircle=document.querySelector('.majin')
const bigcircleinside=document.querySelector('.lilmajin');
let rotated = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1) {
    magicButton.style.display = "block";
    magicButton.style.animationName = "popUpAnimation";
  } else {
    magicButton.style.animationName = "popOffAnimation";
    setTimeout(() => {
      magicButton.style.display = "none";
    }, 250);
  }
});

magicButton.addEventListener('click',()=>{
  rotated=!rotated;
  whymagic.style.gap=rotated?'0px':'6.5px';
  topBar.style.transform=rotated?'rotate(-45deg)':'rotate(0)';
  bottomBar.style.transform=rotated?'rotate(45deg)':'rotate(0)';
  magicButton.style.backgroundColor=rotated?'white':'#1d1e20';
  bottomBar.style.backgroundColor=rotated?'#1d1e20':'gray';
})

magicButton.addEventListener('mouseenter',()=>{
  topBar.style.backgroundColor=`#1d1e20`;
});

magicButton.addEventListener(`mouseleave`,()=>{
  if(!rotated){
    topBar.style.backgroundColor=`white`;
  }
});


sideButtons.forEach(somethingHelper => {
somethingHelper.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const helperRect = somethingHelper.getBoundingClientRect();
  const helperCenterX = helperRect.left + helperRect.width / 10;
  const helperCenterY = helperRect.top + helperRect.height /10;
  const offsetX = (mouseX - helperCenterX) / 5;
  const offsetY = (mouseY - helperCenterY) / 5;
  somethingHelper.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
  somethingHelper.addEventListener('mouseleave', () => {
    somethingHelper.style.transform = 'translate(0, 0)';
  });
});

magicButton4.addEventListener('mousemove',(e)=>{
    const mouseXs = e.clientX;
    const mouseYs = e.clientY;
    const magicRect = magicButton4.getBoundingClientRect();
    const magicCenterX = magicRect.left + magicRect.width /2;
    const magicCenterY = magicRect.top + magicRect.height /2;
    const offsetXs = (mouseXs - magicCenterX) /2;
    const offsetYs = (mouseYs - magicCenterY) /2;

    const offX=(mouseXs - magicCenterX) /3;
    const offY = (mouseYs - magicCenterY) /3;

    magicButton4.style.transform = `translate(${offsetXs}px, ${offsetYs}px)`;
    whyMagic.style.transform = `translate(${offX}px, ${offY}px)`;
  });
  magicButton4.addEventListener('mouseleave', () => {
    magicButton4.style.transform = 'translate(0, 0)';
    whyMagic.style.transform = 'translate(0, 0)';
  });    

bigcircle.addEventListener('mousemove',(e)=>{
    const mouseXs = e.clientX;
    const mouseYs = e.clientY;
    const magicRect = bigcircle.getBoundingClientRect();
    const magicCenterX = magicRect.left + magicRect.width /2;
    const magicCenterY = magicRect.top + magicRect.height /2;
    const offsetXs = (mouseXs - magicCenterX) /3.05;
    const offsetYs = (mouseYs - magicCenterY) /3.05;
    const offseterX = (mouseXs - magicCenterX) /6;
    const offseterY = (mouseYs - magicCenterY) /6;
    bigcircle.style.transform = `translate(${offsetXs}px, ${offsetYs}px)`;
    bigcircleinside.style.transform = `translate(${offseterX}px, ${offseterY}px)`;
  });
  bigcircle.addEventListener('mouseleave', () => {
    bigcircle.style.transform = 'translate(0, 0)';
    bigcircleinside.style.transform = 'translate(0, 0)';
  });    
  
  







  
        
  
        
  
        
  
      
    

    
    
