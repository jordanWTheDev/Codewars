// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8



//My Answer
function rowSumOddNumbers(n) {
    let start = (n*(n-1)+1)
    let last = (n*(n+1)-1)
    let total = 0;
    for (let i = start; i <= last; i+=2) {
      total = total + i
    }
    return total
  }

  //Better Answer

  function rowSumOddNumbers(n) {
      return Math.pow(n,3)
  }