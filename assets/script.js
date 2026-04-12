const text = "hello, i'm shivi";
const el = document.getElementById("handwriting1");

let i = 0;

function typeLoop() {

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;

      let delay = 110;

      if (text[i - 1] === "," || text[i - 1] === "'") {
        delay += 120;
      }

      setTimeout(type, delay);

    } else {
      setTimeout(erase, 2200);
    }
  }

  function erase() {
    if (i > 0) {
      el.textContent = text.substring(0, i - 1);
      i--;

      setTimeout(erase, 55);
    } else {
      setTimeout(type, 500);
    }
  }

  type();
}

typeLoop();