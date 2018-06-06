const VOWELS = ["a", "e", "i", "o", "u", "y"];

//Business Logic
function toPigLatin(input) {
  console.log("Input: " + input);
  var words = parsePhrase(input);
  console.log("Words: " + words);
  parseWords(words);
}

function parsePhrase(userInput) {
  var words = userInput.split(" ");
  return words;
}

function parseWords(wordsArray) {
  var finishedWords = [];
  var pieces = [];
  for(var i = 0; i < wordsArray.length; i++) {
    var lettersArray = wordsArray[i].split("");
    console.log("letters array: " + lettersArray);
    for(var j = 0; j < lettersArray.length; j++) {
      if (VOWELS.includes(lettersArray[0]) && lettersArray[0] !== "y") {
        var newWord = addWayToEnd(wordsArray[i]);
        console.log(newWord);
        finishedWords.push(newWord);
        var pieces = [];
        break;
      } else if (!VOWELS.includes(lettersArray[j]) && lettersArray[j] === "q" && lettersArray[j+1] === "u") {
        pieces.push(lettersArray[j], lettersArray[j + 1]);
        var newWord = createWord(pieces, wordsArray[i]);
        finishedWords.push(newWord);
        var pieces = [];
        break;
      } else if (!VOWELS.includes(lettersArray[j])) {
        pieces.push(lettersArray[j]);
      } else if (VOWELS.includes(lettersArray[j])) {
        var newWord = createWord(pieces, wordsArray[i]);
        finishedWords.push(newWord);
        var pieces = [];
        break;
        console.log("New word: " + newWord);
      }
    }
  }
  console.log(finishedWords);
}

function addWayToEnd(word) {
  //add way to the end of string
  console.log("add way to end of the word");
  return word + "way";
}

function createWord(pieces, word) {
  var start = pieces.length;
  var end = word.length;
  var lastHalf = word.slice(start, end);
  var suffix = pieces.join("");

  word = lastHalf + suffix;
  word = addAyToEnd(word);
  return word;
}

function addAyToEnd(word) {
  return word + "ay";
}

function displayResult(result) {
  //display results
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
