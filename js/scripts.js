const VOWELS = ["a", "e", "i", "o", "u", "y"];

//Business Logic
function toPigLatin(input) {
  console.log(input);
  var words = parsePhrase(input);
  console.log(words);
  parseWords(words);
}

function parsePhrase(userInput) {
  var words = userInput.split(" ");
  return words;
}

function parseWords(wordsArray) {
  for(var i = 0; i < wordsArray.length; i++) {
    var lettersArray = wordsArray[i].split("");

    if (VOWELS.includes(lettersArray[0]) && lettersArray[0] !== "y") {
      var newWord = addWayToEnd(wordsArray[i]);
      console.log(newWord);
    }

    lettersArray.forEach(function(letter) {
      //do something to each letter
    });
  }
}

function addWayToEnd(word) {
  //add way to the end of string
  console.log("add way to end of the word");
  return word + "way";
}

function displayResult(input) {
  alert(input);
}

// UI Logic
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var result = toPigLatin(userInput);
    // displayResult(result);
  });
});
