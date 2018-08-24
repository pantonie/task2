//var scroll = document.getElementById('main-scroll');
// scroll.scroll = function () {
//     var arrow = document.getElementsByClassName('arrow')[0];
//     arrow.style.visibility('none');
// };

var modal = document.getElementById('modal');
var btn = document.getElementById('click1');
btn.onclick = function(){
    modal.style.display = 'block';
};
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}

