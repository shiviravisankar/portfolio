//handwriting effect
const texts = [
    "main features",
    "use case",
    "projected outcomes"
  ];
  
  const handwritings = document.querySelectorAll('.handwriting');
  
  handwritings.forEach((handwriting, index) => {
    let charIndex = 0;
  
    function writeText() {
      if (charIndex < texts[index].length) {
        handwriting.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(writeText, 200);
      } else {
        setTimeout(() => {
          charIndex = 0;
          handwriting.innerHTML = '';
          setTimeout(writeText, 1000);
        }, 2000);
      }
    }
  
    writeText();
  });