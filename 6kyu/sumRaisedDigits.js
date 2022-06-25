function sumDigPow(a, b) {
  let arr = [];
  let power = 1;
  for (let i = a; i <= b; i++) {
    if (
      i
        .toString()
        .split("")
        .reduce((a, b, c) => (a += Math.pow(+b, c + 1)), 0) == i
    ) {
      arr.push(i);
    }
  }
  return arr;
}
