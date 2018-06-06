const VOWELS = ["a", "e", "i", "o", "u", "y"];

//Business Logic
function getPhrase(input) {
  var words = parsePhrase(input);
  return words;
}

function parsePhrase(userInput) {
  var words = userInput.split(" ");
  return words;
}

function toPigLatin(wordsArray) {
  var finishedWords = [];
  wordsArray = removePunctuation(wordsArray);
  for(var i = 0; i < wordsArray.length; i++) {
    var pieces = [];
    if (!isNaN(parseInt(wordsArray[i]))) {
      finishedWords.push(wordsArray[i]);
      continue;
    }
    var lettersArray = wordsArray[i].split("");
    if (wordsArray[i][0] === "s" && wordsArray[i][1] === "q" && wordsArray[i][2] === "u") {
      pieces.push(wordsArray[i][0], wordsArray[i][1], wordsArray[i][2]);
      var newWord = createWord(pieces, wordsArray[i]);
      finishedWords.push(newWord);
    } else if (!VOWELS.includes(wordsArray[i][0]) && wordsArray[i][0] === "q" && wordsArray[i][1] === "u") {
      pieces.push(wordsArray[i][0], wordsArray[i][1]);
      var newWord = createWord(pieces, wordsArray[i]);
      finishedWords.push(newWord);
    } else if (!VOWELS.includes(wordsArray[i][0]) || wordsArray[i][0] === "y") {
      pieces.push(wordsArray[i][0]);
      var newWord = createWord(pieces, wordsArray[i]);
      finishedWords.push(newWord);
    } else if (VOWELS.includes(wordsArray[i][0]) && wordsArray[i][0] !== "y") {
      var newWord = addWayToEnd(wordsArray[i]);
      finishedWords.push(newWord);
    } else if (VOWELS.includes(wordsArray[i][0])) {
      var newWord = createWord(pieces, wordsArray[i]);
      finishedWords.push(newWord);
    }
  }
  return finishedWords.join(" ");
}

function removePunctuation(wordList) {
  var pattern = /[-!$%#@^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
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
    displayResult(result);
  });

  $("#try-again").click(function() {
    location.reload();
  });
});
