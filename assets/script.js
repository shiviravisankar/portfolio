/*------------- handwriting -------------*/

const text = "hello, i'm shivi";
const element = document.getElementById("handwriting1");

let index = 0;
let deleting = false;

function type() {

if (!element) return;

if (!deleting) {

element.textContent = text.slice(0, index + 1);
index++;

if (index === text.length) {
deleting = true;
setTimeout(type, 2200);
return;
}

const character = text[index - 1];

let delay = 90;

if (character === "," || character === "'") {
delay = 180;
}

setTimeout(type, delay);

} else {

element.textContent = text.slice(0, index - 1);
index--;

if (index === 0) {
deleting = false;
setTimeout(type, 600);
return;
}

setTimeout(type, 45);

}

}

window.addEventListener("load", () => {
type();
});

/*------------- smooth scroll-------------*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", e => {

const id = link.getAttribute("href");

if (id === "#") return;

const target = document.querySelector(id);

if (!target) return;

e.preventDefault();

target.scrollIntoView({
behavior: "smooth",
block: "start"
});

});

});