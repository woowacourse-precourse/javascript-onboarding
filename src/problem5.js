// #1
// 이번 문제도 풀어봤던 경험이 있어서 금방 풀 수 있었다
// 조건으로 주어진 모든 단위들에 대해서
// 더 높은 단위가 낮은 단위의 배수기 때문에 그리디 알고리즘을 적용할 수 있었다

function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = new Array(unit.length).fill(0);
  console.log(answer);
  let remainMoney = money;
  let index = 0;

  while (remainMoney > 0) {
    const checkUnit = unit[index];
    console.log(index, remainMoney, checkUnit);

    if (checkUnit > remainMoney) {
      console.log("pass");
      index++;
      continue;
    }
    const quotient = Math.floor(remainMoney / checkUnit);
    const thisRemain = remainMoney % checkUnit;
    console.log("몫,나머지", quotient, thisRemain);
    answer[index] = quotient;
    remainMoney = thisRemain;
    index++;
  }

  return answer;
}
problem5(82304);

module.exports = problem5;
