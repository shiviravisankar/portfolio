function gifOn(img) 
{
    let gif = img.getAttribute('data-gif');
    img.src = gif; 
}
  
function gifOff(img) 
{
let png = img.src;
png = png.replace('.gif', '.png');   
img.src = png;
}