function problem3(number) {
  const clapNumber = ["3", "6", "9"];
  let clapCounter = 0;

  for (let i = 1; i <= number; i++) {
    clapCounter += (i + "")
      .split("")
      .filter((n) => clapNumber.includes(n)).length;
  }

  return clapCounter;
}

module.exports = problem3;
