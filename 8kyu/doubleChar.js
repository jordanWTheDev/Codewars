// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


//My answer
function doubleChar(str) {
  const arr = str.split('')
  const double = arr.map((a) => a+a )
  return double.join('')
}

//Better answer
const doubleChar = (str) => str.split("").map(c => c + c).join("");
