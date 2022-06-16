// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

//My answer
const xor = (a, b) =>
  a === true && b === true ? false : a === true || b === true ? true : false;

//Better answer
const xxor = (a, b) => a != b
}