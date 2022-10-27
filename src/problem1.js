function problem1(pobi, crong) {
  // 1. 책의 페이지가 연속된 숫자이어야 한다. (예외사항)
  if (pobi[0] !== pobi[1] - 1 || crong[0] !== crong[1] - 1) return -1;

  // 2. 포비와 크롱의 왼쪽 페이지 번호의 각 자리 숫자를 모두 더한 값을 구한다.
  const sumLeftPageByPobi = String(pobi[0])
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);

  const sumLeftPageByCrong = String(crong[0])
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);

  // 3. 포비와 크롱의 왼쪽 페이지 번호의 각 자리 숫자를 모두 곱해 가장 큰 수를 구한다.
  const multiplyLeftPageByPobi = String(pobi[0])
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);

  const multiplyLeftPageByCrong = String(pobi[0])
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);

  // 4. 포비와 크롱의 오른쪽 페이지 번호의 각 자리 숫자를 모두 더한 값을 구한다.
  const sumRightPageByPobi = String(pobi[1])
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);

  const sumRightPageByCrong = String(crong[1])
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);

  // 5. 포비와 크롱의 오른쪽 페이지 번호의 각 자리 숫자를 모두 곱한 값을 구한다.
  const multiplyRightPageByPobi = String(pobi[1])
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);

  const multiplyRightPageByCrong = String(crong[1])
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);

  // 6. 총 네가지의 값중 가장 큰 수를 구한다. 그리고 가장 큰 수를 본인의 점수로 한다.
  const pobiScore = Math.max(...[sumLeftPageByPobi, multiplyLeftPageByPobi, sumRightPageByPobi, multiplyRightPageByPobi]);
  const crongScore = Math.max(...[sumLeftPageByCrong, multiplyLeftPageByCrong, sumRightPageByCrong, multiplyRightPageByCrong]);

  // 7. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
}

module.exports = problem1;
