document.getElementById("addButton").addEventListener("click", function() {
  var userInput = document.getElementById("inputText").value;
  document.getElementById("sectionToChange").textContent = userInput;
});

document.getElementById('toggleView').addEventListener('click', function() {
  var container = document.querySelector('.container');
  if (container.style.maxWidth !== '360px') {
    container.style.maxWidth = '360px';
    this.textContent = 'Cambiar a Vista Web';
  } else {
    container.style.maxWidth = '800px';
    this.textContent = 'Cambiar a Vista Móvil';
  }
});

document.addEventListener('scroll', function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});


