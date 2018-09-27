var words = ["ground", "control", "to", "major", "tom"];

/*
function getword(words) {
  for (var i = 0; i < words.length; i++) {
    var result = words[i]

    console.log(result);
    map()
  }
}

getword(words);
*/

/*
var word = function (words, action) {
  for (var i = words.length - 1; i >= 0; i--) {
    var result = words[i]

    console.log(result);
  }
}
*/
newArray = [];
myArray = ['bob', 'george', 'steve', 'josh']

var x = function () {
  for (var i = 0; i < myArray.length; i++) {
    myArray[i]
  }
  return myArray[i]
}

function map(myArray, x) {
  newArray.push(myArray[x.length].length);
  return newArray;
};

console.log(map(myArray, x));

/*
map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/