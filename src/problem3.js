function findThreeSixNine(array, count) {
  const findNumber = ["3", "6", "9"];
  array.forEach((str) => {
    if (findNumber.includes(str)) {
      count += 1;
    }
  });
  return count;
}

function problem3(number) {
  let count = 0;

  for (let n = 1; n < number + 1; n++) {
    const strArr = String(n).split("");

    count = findThreeSixNine(strArr, count);
  }

  return count;
}

module.exports = problem3;
