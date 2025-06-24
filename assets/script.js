// Handwriting Effect
const texts = ["hello, I'm shivi"];
const handwritings = document.querySelectorAll('.handwriting');

const writeText = (element, text) => {
  let charIndex = 0;
  const write = () => {
    if (charIndex < text.length) {
      element.innerHTML += text.charAt(charIndex);
      charIndex++;
      setTimeout(write, 200);
    } else {
      setTimeout(() => {
        element.innerHTML = '';
        charIndex = 0;
        write();
      }, 2000);
    }
  };
  write();
};

handwritings.forEach((handwriting, index) => writeText(handwriting, texts[index]));