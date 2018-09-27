var words = ["ground", "control", "to", "major", "tom"];


function map(list, callback) {
  // fill me in
  var array = [];
  for (var i = 0; i < list.length; i++) {
    array.push(callback(list[i]));
  }
  return array;
}

/*map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});*/