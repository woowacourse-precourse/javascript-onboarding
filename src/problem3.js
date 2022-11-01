function problem3(number) {
  let answer = 0;
  const targetNumbers = ["3", "6", "9"];

  const chenckNum = (strNum) => {
    for (let i = 0; i < strNum.length; i++) {
      if (targetNumbers.includes(strNum[i])) answer++;
    }
  };

  for (let num = 1; num <= number; num++) {
    const strNum = num.toString();
    chenckNum(strNum);
  }
}
module.exports = problem3;
