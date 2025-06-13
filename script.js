function changeColor() {
  const body = document.body;
  const heading = document.getElementById('heading');

  body.classList.toggle('colored');
  heading.textContent = "You clicked the button!";
}
