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

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// Define an array of colors
var colors = ['#FF5EA0', '#FAD914', '#70EBE8', '#3DD4E9', '#D6E715', '#FF6D64', '#84FA67', '#E990FF'];

// Function to apply randomization logic
function applyRandomColor(element) {
    var randomIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomIndex];
    element.style.backgroundColor = randomColor;
}

// Apply randomization for .description a elements
document.querySelectorAll('.description a').forEach(item => {
    item.addEventListener('mouseenter', function() {
        applyRandomColor(this);
    });

    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// Apply randomization for .tab:hover elements
document.querySelectorAll('.tab').forEach(item => {
    item.addEventListener('mouseenter', function() {
        if (this.classList.contains('hover')) {
            applyRandomColor(this);
        }
    });

    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

