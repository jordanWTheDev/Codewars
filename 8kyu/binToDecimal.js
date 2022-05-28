// Complete the function which converts a binary number (given as a string) to a decimal number.

// My answer
function binToDec(bin) {
  let multi = 1;
  let total = 0;

  bin = bin.split("");
  for (let i = bin.length - 1; i >= 0; i--) {
    total += bin[i] * multi;
    multi *= 2;
  }
  return total;
}
