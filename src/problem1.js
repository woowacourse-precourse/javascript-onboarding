function problem1(pobi, crong) {
  var answer;

  if (erroHandler(pobi, crong)) {
    return -1;
  }

  const pobiNum = userScore(pobi);
  const crongNum = userScore(crong);

  if (pobiNum > crongNum) return 1;
  if (pobiNum < crongNum) return 2;
  if (pobiNum === crongNum) return 0;

  return answer;
}

const erroHandler = (user1, user2) => {
  if (user1[1] - user1[0] !== 1 || user2[1] - user2[0] !== 1) {
    return true;
  }
  if (user1[1] >= 400 || user2[1] >= 400 || user1[0] <= 1 || user2[0] <= 1) {
    return true;
  }
  return false;
};

const calcValue = (number) => {
  let value = number
    .toString()
    .split("")
    .map((num) => Number(num));

  let plus = value.reduce((a, c) => a + c);
  let multiple = value.reduce((a, c) => a * c);

  if (plus > multiple) {
    return plus;
  }
  return multiple;
};

const userScore = (user) => {
  let num1 = calcValue(user[0]);
  let num2 = calcValue(user[1]);
  if (num1 > num2) {
    return num1;
  }
  return num2;
};

module.exports = problem1;
