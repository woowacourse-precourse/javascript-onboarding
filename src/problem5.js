function problem5(money) {
  let answer = [];
  // 1. 화폐 단위를 담은 배열을 만든다.
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let index = 0; index < unit.length; index++) {
    // 2. 화폐 단위 배열을 순회하며 주어진 돈과 해당 index의 화폐 단위를 나눈 몫을 answer 배열에 넣는다.
    answer.push(Math.floor(money / unit[index]));
    // 3. 주어진 돈에서 해당 index의 단위로 나눈 몫과 화폐 단위를 곱한 값을 빼준다.
    money -= unit[index] * Math.floor(money / unit[index]);
  }
  return answer;
}

module.exports = problem5;
