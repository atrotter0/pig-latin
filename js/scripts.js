const VOWELS = ["a", "e", "i", "o", "u", "y"];

//Business Logic
function getPhrase(input) {
  console.log("Input: " + input);
  var words = parsePhrase(input);
  console.log("Words: " + words);
  return words;
}

function parsePhrase(userInput) {
  var words = userInput.split(" ");
  return words;
}

function toPigLatin(wordsArray) {
  var finishedWords = [];
  var pieces = [];
  wordsArray = removePunctuation(wordsArray);
  for(var i = 0; i < wordsArray.length; i++) {
    if (!isNaN(parseInt(wordsArray[i]))) {
      finishedWords.push(wordsArray[i]);
      continue;
    }
    var lettersArray = wordsArray[i].split("");
    console.log("letters array: " + lettersArray);
    for(var j = 0; j < lettersArray.length; j++) {
      console.log(pieces);
      if (VOWELS.includes(lettersArray[0]) && lettersArray[0] !== "y") {
        var newWord = addWayToEnd(wordsArray[i]);
        console.log(newWord);
        finishedWords.push(newWord);
        break;
      } else if (!VOWELS.includes(lettersArray[j]) && lettersArray[j] === "q" && lettersArray[j + 1] === "u") {
        pieces.push(lettersArray[j], lettersArray[j + 1]);
        var newWord = createWord(pieces, wordsArray[i]);
        finishedWords.push(newWord);
        break;
      } else if (!VOWELS.includes(lettersArray[j]) || lettersArray[0] === "y") {
        pieces.push(lettersArray[j]);
        var newWord = createWord(pieces, wordsArray[i]);
        finishedWords.push(newWord);
        break;
      } else if (VOWELS.includes(lettersArray[j])) {
        var newWord = createWord(pieces, wordsArray[i]);
        finishedWords.push(newWord);
        break;
        console.log("New word: " + newWord);
      }
    }
    pieces = [];
  }
  return finishedWords.join(" ");
}

function removePunctuation(wordList) {
  var pattern = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  var newList = wordList.map(function(word) {
    var position = word.search(pattern);
    if (position >= 0) {
      symbol = word.substring(position);
      word = word.replace(symbol, "");
    }
    return word;
  });
  return newList;
}

function addWayToEnd(word) {
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
  $("#pig-latin").hide();
  $("#results-box").fadeIn(800);
  $("#results").text(result);
}

// UI Logic
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var words = getPhrase(userInput);
    var result = toPigLatin(words);
    console.log(result);
    displayResult(result);
  });

  $("#try-again").click(function() {
    location.reload();
  });
});
