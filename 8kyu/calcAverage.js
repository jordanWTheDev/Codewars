// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.

//My Answer
function find_average(array) {
  let count = 0;
  let total = 0;
  if (array.length === 0) {
    return 0
  } else {
      array.forEach(num => {
        count += num
        total++
      })
      return count/total
    }

}

//Better Answer
var find_average = (array) => {
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}
