function problem3(number) {
  const findNumber = ["3", "6", "9"];
  let count = 0;

  for (let n = 1; n < number + 1; n++) {
    const strArr = String(n).split("");

    strArr.forEach((str) => {
      if (findNumber.includes(str)) {
        count += 1;
      }
    });
  }

  return count;
}

module.exports = problem3;
