// The second argument/parameter is expected to be a function


function findWaldo(arr, found) {
  //var index = 1;
  arr.forEach(function(element) {
  //console.log(element);
  var index = 1;

  if (element !== "Waldo") {
      index++
    } else {
      found(index);   // execute callback
    }
  })
}


function actionWhenFound(index) {
  console.log("Found him " + "at array " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
