const tab = document.getElementById('hovertab');
const ctab = document.getElementById('centertab');
const grad = document.getElementById('grad');
const grid = document.getElementsByClassName('grid5');
const line = document.getElementById('line');
const icon = document.getElementById('icon');
const line2 = document.getElementById('line2');

line.style.marginLeft = 70 + tab.offsetLeft + 'px';
icon.style.marginLeft = 70 + tab.offsetLeft + 'px';
line2.style.marginLeft = 70 + tab.offsetLeft + 'px';



var max_rot = 3;
tab.addEventListener('mousemove',function(e){
    var pagex = e.pageX - tab.offsetLeft;
    var pagey = e.pageY - window.scrollY;
    grad.style.opacity = 0.5;

    var tabc = tab.clientWidth / 2;
    var pos_wrt_ctr = (tabc - pagex) * 0.004;

    
    grad.style.transform = `translate(${pagex - grad.clientWidth / 2}px,${pagey - grad.clientHeight / 2 - tab.getBoundingClientRect().top}px)`;

    tab.style.transform = `rotateY(${pos_wrt_ctr}deg)`;
});
tab.addEventListener('mouseleave',function(){
    tab.style.transform = `rotateY(0deg)`;
    grad.style.opacity = 0;

});
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
};

const obs = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){

            ctab.classList.add('show2');
            tab.classList.add('showtab');
            for(var i=0;i<grid.length;i++){
                grid[i].classList.add('show');
            }
        }
        else{
            ctab.classList.remove('show2');
            tab.classList.remove('showtab');
            for(var i=0;i<grid.length;i++){
                grid[i].classList.remove('show');
            }
        }
    });
},options);

const obs2 = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            line2.classList.add('lineshow');
        }
        else{
            line2.classList.remove('lineshow');

        }
    });
},);

obs.observe(tab);
obs2.observe(tab);
