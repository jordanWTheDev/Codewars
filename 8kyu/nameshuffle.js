// Write a function that returns a string in which firstname is swapped with last name.
//
// nameShuffler('john McClane'); => "McClane john"

//My answer
function nameShuffler(str){
  //Shuffle It
  let arr = str.split(' ')
  let reversed = arr.reverse()
  return reversed.join(' ')
}

//Better answer
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}
