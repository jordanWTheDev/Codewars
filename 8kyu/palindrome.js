// Write a function that checks if a given string (case insensitive) is a palindrome.

// My answer
function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase()
    ? true
    : false;
}
