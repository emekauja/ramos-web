// function app() {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log('entry ==>', entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
});

const hiddenElements = document.querySelectorAll('.inanimate');
hiddenElements.forEach((element) => observer.observe(element));
// }

// app();
