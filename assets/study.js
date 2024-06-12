//handwriting effect
const texts = [
    "key challenges to address",
    "the users",
    "guiding principles",
    "design"
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

//highlight principles
const contentCategorization = document.querySelector('.content-categorization');
const uxWriting = document.querySelector('.ux-writing');
const visuals = document.querySelector('.visuals');
const typeHierarchy = document.querySelector('.type-hierarchy');
const designLanguage = document.querySelector('.design-language');

const contentDivs = [contentCategorization, uxWriting, visuals, typeHierarchy, designLanguage];
contentCategorization.style.opacity = '1';
contentDivs.forEach(div => {
  if (div !== contentCategorization) {
    div.style.opacity = '0.5';
  }
});


contentDivs.forEach(div => {
  div.addEventListener('mouseenter', () => {
    contentDivs.forEach(d => {
      d.style.opacity = d === div ? '1' : '0.5';
    });
  });

  div.addEventListener('mouseleave', () => {
    contentCategorization.style.opacity = '1';
    contentDivs.forEach(d => {
      if (d !== contentCategorization) {
        d.style.opacity = '0.5';
      }
    });
  });
});