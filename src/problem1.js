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
  // 각각의 숫자열을 문자로 반환
  const leftNumber = num[0].toString();
  const rightNumber = num[1].toString();

  if (num[0] !== num[1] - 1) {
    // 나열된 페이지의 숫자가 아니라면 예외 처리
    return null;
  }
  // 자리수마다 숫자 arr로 변환
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

  const sumLeftNum = leftNumArr.reduce((previousValue, currentValue) =>
    sumNum(previousValue, currentValue)
  );
  const multipleLeftNum = leftNumArr.reduce((previousValue, currentValue) =>
    sumNum(previousValue, currentValue)
  );
  // 계산 된 값을 비교
  const calBigRightNum = compareNumber(sumRightNum, multipleRightNum);
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

module.exports = problem1;
