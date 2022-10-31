const problem3 = number => {
  let clapCount = 0;

  for (let i = 1; i <= number; i++) {
    const currentNumber = i.toString();
    clapCount += (currentNumber.match(/3|6|9/g) || []).length;
  }

  return clapCount;
}

module.exports = problem3;
