function problem1(pobi, crong) {
  var answer;
  if (!calNumber(pobi) || !calNumber(crong)) {
    answer = -1;
  } else {
    if (calNumber(pobi) === calNumber(crong)) {
      answer = 0;
    }
    if (calNumber(pobi) > calNumber(crong)) {
      answer = 1;
    }
    if (calNumber(pobi) < calNumber(crong)) {
      answer = 2;
    }
  }

  return answer;
}

function calNumber(num) {
  const leftNumber = num[0].toString();
  const rightNumber = num[1].toString();

  if (num[0] !== num[1] - 1) {
    return null;
  }

  const rightNumArr = rightNumber.split("").map((value) => {
    return Number(value);
  });
  const leftNumArr = leftNumber.split("").map((value) => {
    return Number(value);
  });

  const sumRightNum = rightNumArr.reduce((previousValue, currentValue) =>
    sumNum(previousValue, currentValue)
  );
  const multipleRightNum = rightNumArr.reduce((previousValue, currentValue) =>
    multiplyNum(previousValue, currentValue)
  );
  const calBigRightNum = compareNumber(sumRightNum, multipleRightNum);

  const sumLeftNum = leftNumArr.reduce((previousValue, currentValue) =>
    sumNum(previousValue, currentValue)
  );
  const multipleLeftNum = leftNumArr.reduce((previousValue, currentValue) =>
    sumNum(previousValue, currentValue)
  );
  const calBigLeftNum = compareNumber(sumLeftNum, multipleLeftNum);
  return compareNumber(calBigLeftNum, calBigRightNum);
}

function compareNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  if (num1 < num2) {
    return num2;
  }
  if (num1 === num2) {
    return num1;
  }
}

function sumNum(num1, num2) {
  return num1 + num2;
}

function multiplyNum(num1, num2) {
  return num1 * num2;
}
// 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
// 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
// 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
// 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.

module.exports = problem1;
