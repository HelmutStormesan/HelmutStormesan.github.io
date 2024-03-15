document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay texto guardado en el almacenamiento local
    var savedText = localStorage.getItem("savedText");
    if (savedText) {
      document.getElementById('sectionToChange').innerHTML = savedText;
    }
  
    document.getElementById('addButton').addEventListener('click', function() {
      // Obtener el valor del campo de entrada de texto
      var textInputValue = document.getElementById('textInput').value;
  
      // Obtener la sección de la página que deseas cambiar
      var sectionToChange = document.getElementById('sectionToChange');
  
      // Crear un nuevo elemento de párrafo para mostrar el texto ingresado
      var newParagraph = document.createElement('p');
      newParagraph.textContent = textInputValue;
  
      // Agregar el nuevo párrafo a la sección de la página que deseas cambiar
      sectionToChange.appendChild(newParagraph);
  
      // Guardar el texto en el almacenamiento local
      localStorage.setItem("savedText", sectionToChange.innerHTML);
  
      // Limpiar el campo de entrada de texto
      document.getElementById('textInput').value = '';
    });
  });
  
  