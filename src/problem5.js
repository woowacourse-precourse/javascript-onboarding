/**
 * Problem 5
 * 1. 50000, 10000, 5000, 1000, 500, 100, 50, 10, 1을 key로 갖는 Map 자료구조 작성
 * 2. 입력된 money에 대해 Map.keys()로 순회하며 각 금액의 몫을 구하고 money에서 차감
 * 3. Map.values()를 반환
 * @param {number} money 1 이상 1,000,000 이하
 * @returns {number[]}
 */
function problem5(money) {
  const moneyDict = new Map([
    [50000, 0],
    [10000, 0],
    [5000, 0],
    [1000, 0],
    [500, 0],
    [100, 0],
    [50, 0],
    [10, 0],
    [1, 0],
  ]);
  for (const key of moneyDict.keys()) {
    const share = Math.floor(money / key);
    moneyDict.set(key, share);
    money -= share * key;
  }
  return [...moneyDict.values()];
}

module.exports = problem5;
