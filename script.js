// script.js
function changeColor() {
  const body = document.body;
  const heading = document.getElementById('heading');

  // Toggle background color
  body.style.backgroundColor = body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';

  // Change the heading text
  heading.textContent = "You clicked the button!";
}
