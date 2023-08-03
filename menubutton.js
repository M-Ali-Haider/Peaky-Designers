const magicButton = document.querySelector(".magic-button");
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


const magicButton2 = document.querySelector('.magic-button');
const topBar = document.querySelector('.top-bar');
const bottomBar = document.querySelector('.bottom-bar');
const whymagic =document.querySelector('.why-magic');
let rotated = false;

magicButton2.addEventListener('click', () => {
  if (!rotated) {
    document.body.style.overflow = 'hidden';
    whymagic.style.gap=`0px`;
    topBar.style.transform = 'rotate(-45deg)';
    topBar.style.backgroundColor=`white`;
    bottomBar.style.transform = 'rotate(45deg)';
    magicButton2.style.backgroundColor=`white`;
    topBar.style.backgroundColor=`#1d1e20`;
    bottomBar.style.backgroundColor=`#1d1e20`;

  } else {
    document.body.style.overflow = 'auto';
    document.body.classList.remove('shaded-background');
    whymagic.style.gap=`6.5px`;
    bottomBar.style.backgroundColor=`gray`;
    topBar.style.transform = 'none';
    bottomBar.style.transform = 'none';
    magicButton2.style.backgroundColor=`#1d1e20`;
    bottomBar.style.backgroundColor=`gray`;
  }

  rotated = !rotated;
});


magicButton2.addEventListener('mouseenter',()=>{
  topBar.style.backgroundColor=`#1d1e20`;
});
magicButton.addEventListener(`mouseleave`,()=>{
  if(!rotated){
    topBar.style.backgroundColor=`white`;
  }
});
    const sideButtons = document.querySelectorAll('.sideButton');
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


    const magicButton4 = document.getElementById('magicButton');
    const whyMagic = document.getElementById('whymagicc');

    const range=3.75;
    const ranger=4.75;

    magicButton4.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const magicRect = magicButton4.getBoundingClientRect();
      const magicCenterX = magicRect.left + magicRect.width /2;
      const magicCenterY = magicRect.top + magicRect.height /2;

      const offsetX = (mouseX - magicCenterX) / range;
      const offsetY = (mouseY - magicCenterY) / range;

      const offseterX = (mouseX - magicCenterX) / ranger;
      const offseterY = (mouseY - magicCenterY) / ranger;


      magicButton4.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      whyMagic.style.transform = `translate(${offseterX}px, ${offseterY}px)`;
    });

    magicButton.addEventListener('mouseleave', () => {
      magicButton4.style.transform = 'translate(0, 0)';
      whyMagic.style.transform = 'translate(0, 0)';
    });



    const bbt = document.getElementById('bbt');
    const bbtj = document.getElementById('bbtj');
    
    bbt.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const bbtRect = bbt.getBoundingClientRect();
      const bbtCenterX = bbtRect.left + bbtRect.width /2;
      const bbtCenterY = bbtRect.top + bbtRect.height /2;

      const offsetX = (mouseX - bbtCenterX) / range;
      const offsetY = (mouseY - bbtCenterY) / range;

      const offseterX = (mouseX - bbtCenterX) / ranger;
      const offseterY = (mouseY - bbtCenterY) / ranger;


      bbt.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      bbtj.style.transform = `translate(${offseterX}px, ${offseterY}px)`;
    });

    bbt.addEventListener('mouseleave', () => {
      bbt.style.transform = 'translate(0, 0)';
      bbtj.style.transform = 'translate(0, 0)';
    });
  
    
