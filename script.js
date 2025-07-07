// hiding the header when scrolling down
let lastScrollY = window.scrollY;
const navLinks = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const scrollDelta = Math.abs(currentScrollY - lastScrollY);

  if (scrollDelta > 10) {
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navLinks.classList.add('hide'); // scroll down
    } else {
      navLinks.classList.remove('hide'); // scroll up
    }
    lastScrollY = currentScrollY;
  }

  if (currentScrollY <= 0) {
    navLinks.classList.remove('hide'); // show nav at very top
  }
});

// wiggle project card when mouse hovers over 
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('wiggling');

    // remove the class after the animation completes
    setTimeout(() => {
      card.classList.remove('wiggling');
    }, 500); // match animation duration
  });
});