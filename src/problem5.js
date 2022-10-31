function problem5(money) {
  let answer;
  answer = calcUnit(money);
  return answer;
}

module.exports = problem5;

const calcUnit = (money) => {
  let resultValue;
  const unitArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  resultValue = unitArray.map((v, i) => {
    let unitCount;
    if (i !== 0) {
      const charge = money % unitArray[i - 1];
      unitCount = parseInt(charge / v);
    } else {
      unitCount = parseInt(money / v);
    }

    return unitCount;
  });

  return resultValue;
};

/*
 const unitArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
 1. 값을 나눈 몫이 0이 아닌 경우, 계산 후 저장 및 값 빼기.
 2. unitArray.length만큼 반복

 */
