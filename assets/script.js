// Handwriting Effect
const texts = [
  "hello, I'm shivi",
  "design with purpose",
  "web development",
  "AI tools"
];

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

// Overlay and grid item functionality
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const closeButton = document.getElementById('closeOverlay');
  const overlayFrame = document.getElementById('overlayFrame');
  const gridItems = document.querySelectorAll('.grid-item1, .grid-item2, .grid-item3');

  const isMobile = () => window.innerWidth <= 768;

  const handleGridItemClick = (e) => {
    const gridItem = e.currentTarget;
    const link = gridItem.querySelector('a');
    
    if (link) {
      if (gridItem.classList.contains('nine')) {
        // For the Notion link, open in a new tab
        window.open(link.href, '_blank');
      } else if (!isMobile()) {
        // For other links, use the overlay on desktop
        e.preventDefault();
        overlayFrame.src = link.href;
        overlay.style.display = 'block';
      }
      // On mobile, non-Notion links will navigate normally
    }
  };

  gridItems.forEach(item => item.addEventListener('click', handleGridItemClick));

  const closeOverlay = () => {
    overlay.style.display = 'none';
    overlayFrame.src = '';
  };

  closeButton.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  window.addEventListener('resize', () => {
    if (isMobile()) closeOverlay();
  });
});