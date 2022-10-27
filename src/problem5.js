function problem5(money) {
  var answer;

  const MINIMUM_NUMBER = 1;
  const MAXIMAL_NUMBER = 1000000;

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

  // - [ ] 화폐 단위 별로 변환 수 세기

  return answer;
}

module.exports = problem5;
