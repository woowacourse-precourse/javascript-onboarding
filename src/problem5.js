/* 
 * Features
 * 1. 화폐 단위 환산 => 배열로 리턴
 *  
 * Exceptions
 * 1. 1이상 1000000
 */

const isOutOfRange = money => !(money >= 1 && money <= 1000000)

function problem5(money) {
  let answer = [];
  let units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  if(isOutOfRange(money)) {
    throw 'Input range error!'
  }
  units.map((unit) => {
    answer.push(parseInt(money / unit));
    money %= unit;
  })

  return answer;
}

module.exports = problem5;
