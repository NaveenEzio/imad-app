console.log('Loaded!');


var img = document.getElementById('1img');

var marginLeft =0;
function moveRight()
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 5;
}


img.onclick =function(){
    //img.style.marginRight = "100px" ;
    var interval = setInterval(moveRight, 100);
}