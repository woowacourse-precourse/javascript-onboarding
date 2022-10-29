function problem3(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    const eachNumbers = separateNumber(i);

    eachNumbers.forEach((n) => {
      if (n === 3 || n === 6 || n === 9) {
        count = count + 1;
      }
    });
  }

  return count;
}

function separateNumber(number) {
  const strNumber = String(number);
  const eachNumbers = [...strNumber].map((value) => Number(value));

  return eachNumbers;
}

module.exports = problem3;
