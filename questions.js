var selectElementsStartingWithA = function(array) {
  answer = []
  for(var i = 0; i < array.length; i++) {
        if(array[i].charAt(0) === 'a')
            answer.push(array[i]);
    }
  return answer;
}

var selectElementsStartingWithVowel = function(array) {
  answer = []
  var vowels = ["a", "e", "i", "o", "u"];
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
        if(array[i].charAt(0) === vowels[j])
            answer.push(array[i]);
    }
  }
  return answer;
}

var removeNullElements = function(array) {
  array = array.filter(function(n){ return n != undefined });
  return array
}

var removeNullAndFalseElements = function(array) {
  return 'Write your method here';
}

var reverseWordsInArray = function(array) {
  return 'Write your method here';
}

var everyPossiblePair = function(array) {
  return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
  return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
