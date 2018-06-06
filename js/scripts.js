//Business Logic
function toPigLatin(input) {
  if (typeOf(input) !== "string") {
    return input;
  } else {
    var words = parsePhrase(input);
    
  }
}

function parsePhrase(userInput) {
  return userInput.split(" ");
}

function displayResult(input) {
  alert(input);
}

// UI Logic
$(document).ready(function() {
  console.log("hello");
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var result = toPigLatin(userInput);
    displayResult(result);
  });

});
