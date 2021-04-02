/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const currentUl = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables


 * Begin Main Functions
 * 
 */

// build the nav and menu

for (const section of sections) {

    // Define local variables and creating new elements
    const newLis = document.createElement('li');
    const liText = section.firstElementChild.firstElementChild.textContent;
    const aTag = document.createElement('a');

    // adding attributes, classes and appending created elements
    newLis.setAttribute('id', 'li' + liText.replace(' ', '').toLowerCase())
    aTag.classList.add('menu__link')
    aTag.setAttribute('href', '#' + liText.replace(' ', '').toLowerCase());
    aTag.insertAdjacentText('beforeend', liText);
    newLis.appendChild(aTag);
    currentUl.appendChild(newLis);

    // Adding Event to scroll to section on link click
    newLis.addEventListener('click', (event) => {
        event.preventDefault();
        section.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    })
}

// Add event to add 'your-active-class' to section when near top of viewport for making it highlighted via css

document.addEventListener('scroll', function (e) {
    const elements = document.querySelectorAll('section');

    // For Loop in order to iterate through all sections 

    for (const element of elements) {

        // define local variables

        const elementTop = element.offsetTop - 150;
        const elementBottom = (element.offsetTop + element.offsetHeight) - 150;
        const isInViewport = pageYOffset >= elementTop && pageYOffset < elementBottom;
        const liId = 'li' + element.getAttribute('id');
        const getLiId = document.getElementById(liId);

        // adding the 'your-active-class' to those elements in the viewport and removing it from those outside the viewport; for the section and the li elements

        if (isInViewport) {
            if (!element.classList.contains('your-active-class')) {
                element.classList.add('your-active-class');
                getLiId.classList.add('your-active-class');
            };
        } else {
            if (element.classList.contains('your-active-class')) {
                element.classList.remove('your-active-class');
                getLiId.classList.remove('your-active-class');
            };
        }
    }
})




/**
 * End Main Functions
 */