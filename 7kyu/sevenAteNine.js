// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

// My answer
function sevenAte9(str) {
  str = str.split("");
  for (let i = 1; i < str.length; i++) {
    if (str[i] == 9 && str[i - 1] == 7 && str[i + 1] == 7) str.splice(i, 1);
  }
  return str.join("");
}
