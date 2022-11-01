function problem3(number) {
  const allCountNumber = [];
  for (let i = 1; i <= number; i++) {
    const numberArray = String(i)
      .split("")
      .map((str) => Number(str));
    numberArray.map((el) => {
      if (el === 3) {
        allCountNumber.push(el);
      } else if (el === 6) {
        allCountNumber.push(el);
      } else if (el === 9) {
        allCountNumber.push(el);
      }
    });
  }

  var answer = allCountNumber.length;
  return answer;
}

module.exports = problem3;
