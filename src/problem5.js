function problem5(money) {
  let answer;

  const MINIMUM_NUMBER = 1;
  const MAXIMAL_NUMBER = 1000000;

  const 오만_원권 = 50000;
  const 만_원권 = 10000;
  const 오천_원권 = 5000;
  const 천_원권 = 1000;
  const 오백_원권 = 500;
  const 백_원권 = 100;
  const 오십_원권 = 50;
  const 십_원권 = 10;
  const 일_원권 = 1;

  // - [x] money는 1 이상 1,000,000 이하인 자연수이다.
  const isAllowMoneyRange = (_money, min, max) => {
    if (!typeof _money === 'number') {
      return false;
    }
    return _money >= min && _money <= max;
  };

  if (!isAllowMoneyRange(money, MINIMUM_NUMBER, MAXIMAL_NUMBER)) {
    throw new Error('money는 1 이상 1,000,000 이하인 자연수이다.');
  }

  // - [x] 화폐 단위 별로 출금 수 세기
  const caculate = (_money, unit) => {
    const getUnitCount = (_money, unit) => +(_money / unit + '').split('.')[0];
    const getRemainder = (_money, unit) => _money % unit;

    return [getUnitCount(_money, unit), getRemainder(_money, unit)];
  };

  const [오만원, 오만_원나머지] = caculate(money, 오만_원권);
  const [만원, 만_원나머지] = caculate(오만_원나머지, 만_원권);
  const [오천원, 오천_원나머지] = caculate(만_원나머지, 오천_원권);
  const [천원, 천_원나머지] = caculate(오천_원나머지, 천_원권);
  const [오백원, 오백_원나머지] = caculate(천_원나머지, 오백_원권);
  const [백원, 백_원나머지] = caculate(오백_원나머지, 백_원권);
  const [오십원, 오십_원나머지] = caculate(백_원나머지, 오십_원권);
  const [십원, 십_원나머지] = caculate(오십_원나머지, 십_원권);
  const [일원] = caculate(십_원나머지, 일_원권);

  answer = [오만원, 만원, 오천원, 천원, 오백원, 백원, 오십원, 십원, 일원];
  return answer;
}

module.exports = problem5;
