document.getElementById("addButton").addEventListener("click", function() {
  var userInput = document.getElementById("inputText").value;
  document.getElementById("sectionToChange").textContent = userInput;
});
