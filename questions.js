

var selectElementsStartingWithA = function(array) {
  var answer = []
  for(var i = 0; i < array.length; i++) {
        if(array[i].charAt(0) === 'a')
            answer.push(array[i]);
    }
  return answer;
}

var selectElementsStartingWithVowel = function(array) {
  var answer = []
  var vowels = ["a", "e", "i", "o", "u"];
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
        if(array[i].charAt(0) === vowels[j])
            answer.push(array[i]);
    }
  }
  return answer;
}

function removeNullElements(array) {
  var result = array.filter(isNotNull);
  return result
};

function isNotNull(element) {
  return element !== null;
};

function removeNullAndFalseElements(array) {
  function isNotFalse(element) {
    return element !== false;
  };
    var result = array.filter(isNotNull).filter(isNotFalse);
    return result
};


var reverseWordsInArray = function(array) {
  var result =[];
  for(var i=0; i < array.length; i++) {
    result.push(array[i].split('').reverse().join(''));
  };
  return result;
};

var everyPossiblePair = function(array) {
  answer = []
  for(var i=0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      if(array[i] < array [j]) {
        answer.push(new Array(array[i], array[j]));
      } else {
        answer.push(new Array(array[j], array[i]));
      }
    answer.sort()
    }
  }
  return answer
};

var allElementsExceptFirstThree = function(array) {
  x = array.slice(3);
  return x;
}

var addElementToBeginning = function(array, element) {
  array.splice(0, 0, element)
  return array;
}

var sortByLastLetter = function(array) {
  array.sort(function(a, b){
    var aLastLetter = a.slice(-1);
    var bLastLetter = b.slice(-1);
    return aLastLetter < bLastLetter ? -1 : aLastLetter > bLastLetter ? 1 : 0
  })
  return array;
};


var getFirstHalf = function(string) {
  var middle = Math.round(string.length / 2)
  var bob = string.substr(0, middle)
  return bob
}

var makeNegative = function(number) {
  if (number > 0) {
    number = number - (number*2);
  } else if (number < 0) {
    number = number;
  };
  return number;
};

var numberOfPalindromes = function(array) {
  var result = array.filter(isAPalindrome).length;
  return result

  function isAPalindrome(element) {
    return element === element.split('').reverse().join('');
  };
};

var shortestWord = function(array) {
  array.sort(function(a, b) {
    return a.length - b.length;
    });
  return array[0];
};

var longestWord = function(array) {
  array.sort(function(a, b) {
    return a.length - b.length;
    });
  return array.slice(-1)[0]
}

var sumNumbers = function(array) {
  var x = array.reduce(add,0);
  return x;
  function add(a, b) {
    return a + b;
  }
}

var repeatElements = function(array) {
  var array = array.concat(array);
  return array;
};

var stringToNumber = function(string) {
  var x = parseInt(string);
  return x;
}

var calculateAverage = function(array) {
  var x = array.reduce(add,0);
  return x / array.length
  function add(a, b) {
    return a + b;
  }
}

var getElementsUntilGreaterThanFive = function(array) {
  return array.slice(0,6)
};

var convertArrayToObject = function(array) {
  var object = {};
  for(var i = 0; i < array.length; i += 2) {
    object[array[i]] = array[i+1];
  }
  return object;
}

var getAllLetters = function(array) {
  //grab letters
  var newArray = [];
  var result = [];
  for(i= 0; i < array.length; i++) {
    newArray.push(array[i].split(''));
  };
  x = result.concat.apply(result, newArray).sort();
  // delete duplicates
  var newArr2 = [];
    for(var j = 0; j < x.length; j++){
        if(newArr2.indexOf(x[j]) == -1){
        newArr2.push(x[j]);
        }
    }
  return newArr2;
};

var swapKeysAndValues = function(object) {
  var result = {}
  for(var key in object) {
    result[object[key]] = key;
  }
  return result;
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
