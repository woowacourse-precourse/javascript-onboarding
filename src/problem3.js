function checkNumberRange(number) {
  if (number < 1 || number > 10000) {
    return false;
  }

  return true;
}

function check369(splitedNum) {
  let snap = 0;

  for (let j = 0; j < splitedNum.length; j++) {
    if (
      splitedNum[j] === "3" ||
      splitedNum[j] === "6" ||
      splitedNum[j] === "9"
    ) {
      snap++;
    }
  }

  return snap;
}

function problem3(number) {
  if (!checkNumberRange(number)) {
    return;
  }

  let snapSum = 0;

  for (let i = 1; i <= number; i++) {
    const splitedNum = i.toString().split("");

    snapSum += check369(splitedNum);
  }

  return snapSum;
}

module.exports = problem3;
