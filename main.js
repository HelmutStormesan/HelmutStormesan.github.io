document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el botón y el div que queremos cambiar
    var addButton = document.getElementById("addButton");
    var sectionToChange = document.getElementById("sectionToChange");
  
    // Agregamos el listener de evento al botón
    addButton.addEventListener("click", function() {
      // Obtenemos el valor del input
      var inputText = document.getElementById("inputText").value;
      // Cambiamos el contenido del div al valor del input
      sectionToChange.textContent = inputText;
    });
  });
  