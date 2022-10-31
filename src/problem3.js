/**
 * problem 3
 * @param {Number} number 
 * @returns {Number}
 */
function problem3(number) {
  let count = 0;
  // 1번부터 number 까지 박수를 몇번 쳐야 하는지를 계산하여 count에 더해줌
  for (let i = 1; i <= number; i++) {
    count += doClap(i);
  }
  return count;
}

/**
 * 들어온 숫자가 박수를 몇 번 쳐야하는지 계산
 * @param {Number} number 숫자
 * @returns {Number} 박수
 */
const doClap = (number) => {
  const strNumList = number.toString().split('');
  let claps = 0;
  // 3 6 9 에 해당하는 자릿수가 있다면 박수 증가
  strNumList.forEach(element => {
    if (element === '3' || element === '6' || element === '9') {
      claps++;
    }
  });
  return claps;
}

module.exports = problem3;
