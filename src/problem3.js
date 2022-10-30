function numberToArray(number) {
  let numArray = [];
  let i = 0;

  for (; i <= number; i++) {
    numArray.push(String(i).split(""));
  }

  return numArray;
}

function countClap(numArray) {
  let count = 0;

  numArray.forEach((numArray) =>
    numArray.forEach((num) => {
      if (num === "3" || num === "6" || num === "9") {
        count = count + 1;
      }
    })
  );

  return count;
}
