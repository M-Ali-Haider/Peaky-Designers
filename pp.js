const box = document.getElementById('elements');
const sbox = document.getElementsByClassName('e');
const bl = document.getElementsByClassName('bl');
const tr = document.getElementsByClassName('tr');
window.addEventListener('scroll',function() {
    var positon = box.getBoundingClientRect();
    var center = positon.top + box.clientHeight / 2;
    // console.log(this.window.innerHeight);
    if(this.window.innerHeight * 0.95 > center && positon.top + box.clientHeight * 0.7 > 0){

        for(var i = 0; i < sbox.length; i++){
            sbox[i].classList.add('shown');
            sbox[i].classList.remove('unshown');
        }
        for(var i = 0; i < tr.length; i++){
            tr[i].style.rotate =  10 + 'deg';
            bl[i].style.rotate = - 10 + 'deg';
        }
        box.classList.add('eShown');
    }
    else{
        box.classList.remove('eShown');
        for(var i = 0; i < sbox.length; i++){
            sbox[i].classList.remove('shown');
            sbox[i].classList.add('unshown');
        }
        for(var i = 0; i < tr.length; i++){
            bl[i].style.rotate = - 20 + 'deg';
            tr[i].style.rotate = 20 + 'deg';
        }
    }
});