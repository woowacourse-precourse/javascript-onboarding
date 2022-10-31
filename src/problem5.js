/**
 * 기능 목록
 * 1. 숫자을 입력 받는다.
 * 2. 돈을 각각의 돈의 액수로 변환한다
 *   2-1. 돈이 50000 이상이면 50000으로 나눈 값은 첫번 째 배열에 추가하고, 나머지를 돈에 대입한다.
 *   2-2. 돈이 10000 이상이면 10000으로 나눈 값은 다음 배열에 추가하고, 나머지를 돈에 대입한다.
 *   2-3. 돈이 5000 이상이면 5000으로 나눈 값은 다음 배열에 추가하고, 나머지를 돈에 대입한다.
 *   2-4. 돈이 1000 이상이면 1000으로 나눈 값은 다음 배열에 추가하고, 나머지를 돈에 대입한다.
 *   2-5. 돈이 500 이상이면 500으로 나눈 값은 다음 배열에 추가하고, 나머지를 돈에 대입한다.
 *   2-6. 돈이 100 이상이면 100으로 나눈 값은 다음 배열에 추가하고, 나머지를 돈에 대입한다.
 *   2-7. 돈이 50 이상이면 50으로 나눈 값은 다음 배열에 추가하고, 나머지를 돈에 대입한다.
 *   2-8. 돈이 10 이상이면 10으로 나눈 값은 다음 배열에 추가하고, 나머지를 마지막 배열에 추가한다.
 * 3. 변환된 배열을 return 한다.
 */

const units = {
  UNITS: [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1],
  getConvertibleIndex(money) {
    return this.UNITS.findIndex((unit) => unit <= money);
  },
  getUnit(index) {
    return this.UNITS[index];
  },
  convert(money) {
    const unitsCnt = new Array(this.UNITS.length).fill(0);
    let result = money;
    while (result > 0) {
      const index = this.getConvertibleIndex(result);
      const unit = this.getUnit(index);
      unitsCnt[index] = Math.floor(result / unit);
      result %= unit;
    }
    return unitsCnt;
  },
};

/**
 * @param {number} money
 * @returns {number[]} result (an array of length 9)
 */
function problem5(money) {
  const result = units.convert(money);
  return result;
}

module.exports = problem5;
