var active = false;
const button = document.getElementById('magicButton');
const side = document.getElementById('sidethingi');

button.addEventListener('click',
function(){

    if(!active){
    side.classList.add('show');
    setTimeout(() => {
    side.classList.add('showb');
    }, 400);
    active = true;
    }
    else{
        side.classList.remove('showb');

        setTimeout(() => {
            side.classList.remove('show');
        }, 150);
        active = false;
    }
}
);





