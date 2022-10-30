function problem3(number) {
  let StringOfClapNumbers = '';

  for (let currNum = 1; currNum <= number; currNum++) {
    const currStr = currNum.toString();

    if (currStr.includes('3') || currStr.includes('6') || currStr.includes('9'))
      StringOfClapNumbers += currStr;
  }
}

module.exports = problem3;
