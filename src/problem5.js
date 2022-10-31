function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const changes = new Array(unit.length).fill(0); //잔돈 갯수 세줄 배열 만들기
  let remainMoney = money;
  let index = 0;

  //남은 돈이 없을때까지 반복
  while (remainMoney > 0) {
    const checkUnit = unit[index];

    if (checkUnit > remainMoney) {
      index++;
      continue;
    }
    const quotient = Math.floor(remainMoney / checkUnit); //나눠준 몫만큼 해당 금액의 숫자 추가
    changes[index] = quotient;
    remainMoney = remainMoney % checkUnit; //남은 돈 최신화
    index++;
  }

  return changes;
}

module.exports = problem5;
