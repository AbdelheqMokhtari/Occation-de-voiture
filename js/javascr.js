var compteurImage=1;
var totalimage=10;

function slide(x){
    var image=document.getElementById('im');
    compteurImage = compteurImage + x;
    image.src="images/ima"+compteurImage+".jpg";
    if(compteurImage>= totalimage)
        {
            compteurImage=1;
        }
    if(compteurImage< 1){
        compteurImage=totalimage;
    }
    
}

function slideauto(){
    var image=document.getElementById('im');
    compteurImage = compteurImage + 1;
    image.src="images/ima"+compteurImage+".jpg";
    if(compteurImage>= totalimage)
        {
            compteurImage=1;
        }
    if(compteurImage< 1){
        compteurImage=totalimage;
    }
    
}
window.setInterval(slideauto,3000);