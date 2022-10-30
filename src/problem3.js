function problem3(number) {
  let stringOfClapNumbers = '';

  for (let currNum = 1; currNum <= number; currNum++) {
    const currStr = currNum.toString();

    if (currStr.includes('3') || currStr.includes('6') || currStr.includes('9'))
      stringOfClapNumbers += currStr;
  }

  return stringOfClapNumbers.split('').filter((str) => str === '3' || str === '6' || str === '9')
    .length;
}

module.exports = problem3;
