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