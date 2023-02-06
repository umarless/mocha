let counter = 0;
function count() {
  counter++;
  document.querySelector("h1").innerHTML = counter;

  if (counter % 10 === 0) {
    alert(`Ohh! Its ${counter} now!`);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});

//document.querySelector('button').addEventListner('click', count)
