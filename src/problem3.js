function problem3(number) {
  if (number < 1 || number > 10000) {
    throw new Error('가능한 숫자의 범위가 초과하였습니다.');
  }

  return countClap(1, number, 0);
}

function countClap(number, max, count) {
  if (number > max) {
    return count;
  }

  const splited = number.toString().split('').map(Number);
  const currentClapCount = splited.filter((num) => isMulitple(num)).length;

  return countClap(number + 1, max, count + currentClapCount);
}

function isMulitple(number, base = 3) {
  return number % base === 0 && number !== 0;
}

module.exports = problem3;
