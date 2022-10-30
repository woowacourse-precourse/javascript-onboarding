function numberToArray(number) {
  let numArray = [];
  let i = 0;

  for (; i <= number; i++) {
    numArray.push(String(i).split(""));
  }

  return numArray;
}
