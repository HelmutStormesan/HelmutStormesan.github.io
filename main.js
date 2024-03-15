document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay texto guardado en el almacenamiento local y mostrarlo
    var savedText = localStorage.getItem("savedText");
    if (savedText) {
        document.getElementById('sectionToChange').innerHTML = savedText;
    }

    // Añadir un event listener al botón para cambiar la sección
    document.getElementById('addButton').addEventListener('click', function() {
        // Obtener el valor del campo de entrada de texto
        var textInputValue = document.getElementById('textInput').value;

        // Verificar si se ingresó algún texto
        if (textInputValue.trim() !== '') {
            // Obtener la sección de la página que deseas cambiar
            var sectionToChange = document.getElementById('sectionToChange');

            // Crear un nuevo elemento de párrafo para mostrar el texto ingresado
            var newParagraph = document.createElement('p');
            newParagraph.textContent = textInputValue;

            // Agregar el nuevo párrafo a la sección de la página que deseas cambiar
            sectionToChange.appendChild(newParagraph);

            // Guardar el texto actualizado en el almacenamiento local
            localStorage.setItem("savedText", sectionToChange.innerHTML);

            // Limpiar el campo de entrada de texto
            document.getElementById('textInput').value = '';
        } else {
            // Mostrar un mensaje de error si no se ingresó texto
            alert("Por favor, ingresa texto antes de cambiar la sección.");
        }
    });
});
