window.onload = function() {
    // Obtener el valor del almacenamiento local si existe
    var storedText = localStorage.getItem('inputText');
    if (storedText) {
      document.getElementById('sectionToChange').innerText = storedText;
    }
  
    // Función para cambiar la sección con el valor del input
    function changeSection() {
      var inputValue = document.getElementById('inputValue').value;
      document.getElementById('sectionToChange').innerText = inputValue;
  
      // Guardar el valor en el almacenamiento local
      localStorage.setItem('inputText', inputValue);
    }
  
    // Agregar un listener al botón
    document.getElementById('changeButton').addEventListener('click', changeSection);
  }
  