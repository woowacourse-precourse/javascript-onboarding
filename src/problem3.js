function problem3(number) {
  let answer = 0;
  let numArr = [];

  for (let i = 1; i <= number; i++) {
    numArr.push(i.toString().split(""));
  }

  numArr = numArr.flat();

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === "3" || numArr[i] === "6" || numArr[i] === "9") answer++;
  }

  return answer;
}

module.exports = problem3;
