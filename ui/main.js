console.log('Loaded!');


var img = document.getElementById('1img');
var moveRight =0;
function moveRight()
{
    marginRight = marginRight +10;
    img.style.marginRight = margin.Right + px;
}

img.onclick =function(){
    //img.style.marginRight = "100px" ;
    var interval = setInterval(moveRight,50);
}