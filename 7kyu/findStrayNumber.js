// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My answer
function stray(numbers) {
  let sortedNums = numbers.sort();
  console.log(sortedNums);
  return sortedNums[0] !== sortedNums[1]
    ? sortedNums[0]
    : sortedNums[sortedNums.length - 1];
}
