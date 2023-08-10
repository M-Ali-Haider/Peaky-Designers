const tab = document.getElementById('hovertab');
const ctab = document.getElementById('centertab');
const grad = document.getElementById('grad');
const grid = document.getElementsByClassName('grid5');
const line = document.getElementById('line');
const icon = document.getElementById('icon');
const line2 = document.getElementById('line2');
const rad_grad = document.getElementById('rad-grad');
const smoltabs = document.getElementsByClassName('smallbox');
const smolgrad1 = document.getElementById('smolgrad1');
const smolgrad2 = document.getElementById('smolgrad2');
const iconic = document.querySelector('.icon');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const smolbox1 = document.getElementById('smolbox1');
const smolbox2 = document.getElementById('smolbox2');
const iconic2 = document.querySelector('.icon2');

const calculateTransform = (element, x, y) => {
    element.style.transform = `translate(${x}px, ${y}px)`;
};

line.style.marginLeft = 70 + tab.offsetLeft + 'px';
icon.style.marginLeft = 70 + tab.offsetLeft + 'px';
line2.style.marginLeft = 70 + tab.offsetLeft + 'px';

const handleMouseMove = (e, gradElement, tabElement, offsetLeft, offsetTop) => {
    gradElement.classList.add('smalgradshow');
    const translateX = e.pageX - gradElement.clientWidth / 2 - offsetLeft;
    const translateY = e.pageY - window.scrollY - offsetTop - gradElement.clientHeight / 2;
    calculateTransform(gradElement, translateX, translateY);
};

const handleMouseLeave = (gradElement) => {
    gradElement.classList.remove('smalgradshow');
};

smoltabs[0].addEventListener('mousemove', (e) => {
    handleMouseMove(e, smolgrad1, smoltabs[0].offsetLeft, smoltabs[0].getBoundingClientRect().top);
});

smoltabs[1].addEventListener('mousemove', (e) => {
    handleMouseMove(e, smolgrad2, smoltabs[1].offsetLeft, smoltabs[1].getBoundingClientRect().top);
});

smoltabs[0].addEventListener('mouseleave', () => {
    handleMouseLeave(smolgrad1);
});

smoltabs[1].addEventListener('mouseleave', () => {
    handleMouseLeave(smolgrad2);
});

const rotateTab = (e, gradElement, tabElement) => {
    const pagex = e.pageX - tabElement.offsetLeft;
    const pagey = e.pageY - window.scrollY;
    gradElement.style.opacity = 0.5;

    const tabc = tabElement.clientWidth / 2;
    const pos_wrt_ctr = (tabc - pagex) * 0.004;

    calculateTransform(gradElement, pagex - gradElement.clientWidth / 2, pagey - gradElement.clientHeight / 2 - tabElement.getBoundingClientRect().top);
    tabElement.style.transform = `rotateY(${pos_wrt_ctr}deg)`;
};

tab.addEventListener('mousemove', (e) => {
    rotateTab(e, grad, tab);
});

tab.addEventListener('mouseleave', () => {
    tab.style.transform = 'rotateY(0deg)';
    grad.style.opacity = 0;
});

const options = {
    root: null,
    threshold: 0,
};

const handleIntersection = (entries, targetElement, classes) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            targetElement.classList.add(...classes);
        } else {
            targetElement.classList.remove(...classes);
        }
    });
};

const obs = new IntersectionObserver((entries, observer) => {
    handleIntersection(entries, ctab, ['show2']);
    handleIntersection(entries, tab, ['showtab']);
    for (let i = 0; i < grid.length; i++) {
        handleIntersection(entries, grid[i], ['show']);
    }
}, options);

const obs2 = new IntersectionObserver((entries, observer) => {
    handleIntersection(entries, line, ['lineshow']);
    handleIntersection(entries, line2, ['lineshow']);
    handleIntersection(entries, iconic, ['fadeiconic']);
    handleIntersection(entries, rad_grad, [], ['opacity']);
}, options);

obs.observe(tab);
obs2.observe(tab);

line3.style.marginRight = `${70 + window.innerWidth - tab.clientWidth - tab.offsetLeft}px`;

const obs3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const entryId = entry.target.id;

        handleIntersection(entries, line3, ['line4show']);
        handleIntersection(entries, line4, ['line4show']);
        handleIntersection(entries, iconic2, ['fadeiconic']);

        if (entryId === 'smolbox1') {
            handleIntersection(entries, smolbox1, ['smallboxshow']);
        }

        if (entryId === 'smolbox2') {
            handleIntersection(entries, smolbox2, ['smallboxshow']);
        }
    });
}, {
    rootMargin: '-50px'
});

obs3.observe(line4);
obs3.observe(smolbox1);
obs3.observe(smolbox2);
