//var scroll = document.getElementById('main-scroll');
// scroll.scroll = function () {
//     var arrow = document.getElementsByClassName('arrow')[0];
//     arrow.style.visibility('none');
// };

var modal1 = document.getElementById('modal1');
var btn1 = document.getElementById('click1');

var modal2 = document.getElementById('modal2');
var btn2 = document.getElementById('click2');

var modal3 = document.getElementById('modal3');
var btn3 = document.getElementById('click3');
btn1.onclick = function(){
    modal1.style.display = 'block';
};
btn2.onclick = function(){
    modal2.style.display = 'block';
};
btn3.onclick = function(){
    modal3.style.display = 'block';
};
window.onclick = function(event){
    if(event.target == modal1){
        modal1.style.display = 'none';
    }
    if(event.target == modal2){
        modal2.style.display = 'none';
    }
    if(event.target == modal3){
        modal3.style.display = 'none';
    }
}

//------------------------------


var sliderWidth = 40;
var slider = document.getElementById('tempSlider');
var slider1 = document.getElementById('tempSlider1');

slider.addEventListener('input', function(e){
    var gradient = [
        [0, [6,143,255]],
        [20, [255,216,0]],
        [40, [247,107,28]],
    ];
    var color=[];
    var degree = document.getElementById('modal-temperature');
    var ui = parseInt(this.value);
    var style = document.querySelector('[data="slider"]');
   degree.innerHTML = ui>0 ? '+' + ui : ui;
   for (let i=0; i<gradient.length; i++) {
       if (ui+10 < gradient[i][0]) {
           color = [i - 1, i];
           break;
       }
   }
   var firstcolor = gradient[color[0]][1];
   var secondcolor = gradient[color[1]][1];


    var firstcolor_x = sliderWidth*(gradient[color[0]][0]/40);
    var secondcolor_x = sliderWidth*(gradient[color[1]][0]/40)-firstcolor_x;
    var slider_x = sliderWidth*((ui+10)/40)-firstcolor_x;
    var ratio = slider_x/secondcolor_x


    var result = pickHex( secondcolor,firstcolor, ratio );

    style.innerHTML = "#tempSlider::-webkit-slider-thumb{ " +
        "position:relative;"+
        "width: 60px;"+
        "height: 60px;"+
        "-webkit-appearance: none;"+
        "border: 3px solid rgb(231,164,13);"+
        "box-shadow: 0 0 0 3px #FFFFFF;"+
        "border-radius: 50%;"+
        "cursor: pointer;"+
        "background: rgb("+ result.join()+");"+
        "}";

})

slider1.addEventListener('input', function(e){
    var gradient1 = [
        [0, [255,230,130]],
        [20, [255,194,65]],
        [40, [255,158,0]],
    ];
    var color=[];
    //var degree = document.getElementById('modal-temperature');
    var ui = parseInt(this.value);
    var style = document.querySelector('[data="slider1"]');
    //degree.innerHTML = ui>0 ? '+' + ui : ui;
    for (let i=0; i<gradient1.length; i++) {
        if (ui+10 < gradient1[i][0]) {
            color = [i - 1, i];
            break;
        }
    }
    var firstcolor = gradient1[color[0]][1];
    var secondcolor = gradient1[color[1]][1];


    var firstcolor_x = sliderWidth*(gradient1[color[0]][0]/40);
    var secondcolor_x = sliderWidth*(gradient1[color[1]][0]/40)-firstcolor_x;
    var slider_x = sliderWidth*((ui+10)/40)-firstcolor_x;
    var ratio = slider_x/secondcolor_x


    var result = pickHex( secondcolor,firstcolor, ratio );

    style.innerHTML = "#tempSlider1::-webkit-slider-thumb{ " +
        "position:relative;"+
        "width: 60px;"+
        "height: 60px;"+
        "-webkit-appearance: none;"+
        "border: 3px solid rgb(231,164,13);"+
        "box-shadow: 0 0 0 3px #FFFFFF;"+
        "border-radius: 50%;"+
        "cursor: pointer;"+
        "background: rgb("+ result.join()+");"+
        "}";

})


function pickHex(color1, color2, weight) {
    var p = weight;
    var w = p * 2 - 1;
    var w1 = (w/1+1) / 2;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
}