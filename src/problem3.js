/**
 * 배달이가 좋아하는 3,6,9 게임
 * - 3, 6, 9가 들어가는 개수만큼 손뼉을 쳐야 한다
 * @function problem3
 * @param {number} number 1부터 number까지 게임 진행
 * @returns {number} 손뼉을 치는 횟수
 *  */
function problem3(number) {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(String(i).split(''));
  }
  const numberOfClaps = numbers
    .flat()
    .filter((e) => e === '3' || e === '6' || e === '9').length;

  return numberOfClaps;
}

module.exports = problem3;
