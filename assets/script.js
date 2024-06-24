// Handwriting Effect
const texts = [
  "hello, I'm shivi",
  "design with purpose",
  "web development",
  "AI tools"
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
 
 // GIF Effect
 function gifOn(img) {
  let gif = img.getAttribute('data-gif');
  img.src = gif;
 }
 
 function gifOff(img) {
  let png = img.src;
  png = png.replace('.gif', '.png');
  img.src = png;
 }
 
 // Tab Switching
 const tabs = document.querySelectorAll('[data-tab-target]');
 const tabContents = document.querySelectorAll('[data-tab-content]');
 
 tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
 });
 
 // Infinite Scrolling
 const scrollers = document.querySelectorAll(".scroller");
 
 if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
 }
 
 function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
 }
 
 // Active Navigation Link
 const navLinks = document.querySelectorAll('.nav-link');
 const activeLink = document.querySelector('.nav-link.active');
 
 if (activeLink) {
  activeLink.classList.add('active');
 }
 
 navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
 });
 
 // Active Tab Change
 function updateActiveLink() {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('section');
 
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
 
    if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
 
      navLinks.forEach(link => link.classList.remove('active'));
 
      activeLink.classList.add('active');
    }
  });
 }
 
 window.addEventListener('scroll', updateActiveLink);