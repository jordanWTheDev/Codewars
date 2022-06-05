// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
// Example:
//
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!

//My answer
function removeEveryOther(arr){
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i+1, 1)
  }
  return arr
}

//Better Answer
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
