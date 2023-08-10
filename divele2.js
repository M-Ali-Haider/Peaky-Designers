const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

const smolbox1 = document.getElementById('smolbox1');
const smolbox2 = document.getElementById('smolbox2');
                                                                   //tab is in divele.js file not in this one idk how but it works
line3.style.marginRight = 70 + window.innerWidth - tab.clientWidth - tab.offsetLeft + 'px';

const obs3 = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
                line4.classList.add('line4show');
                if(entry.target.id == 'smolbox1'){
                    smolbox1.classList.add('smallboxshow');
                }
                if(entry.target.id == 'smolbox1'){
                    smolbox2.classList.add('smallboxshow');
                }
        }
        else{
            line4.classList.remove('line4show');
            if(entry.target.id == 'smolbox1'){
                smolbox1.classList.remove('smallboxshow');
            }
            if(entry.target.id == 'smolbox2'){
                smolbox2.classList.remove('smallboxshow');
            }

        }
    });
},{
    rootMargin: "-50px"
});

obs3.observe(line4);
obs3.observe(smolbox1);
obs3.observe(smolbox2);