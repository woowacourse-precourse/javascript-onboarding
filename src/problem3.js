function problem3(number) {
  let handsClap = 0;

  //1부터 세기
  for (let i = 1; i <= number; i++) {
    handsClap += check369(i);
  }

  return handsClap;
}

//각 자리수에 3,6,9 개수 리턴
const check369 = (num) => {
  let sum = 0;
  let res;
  while (num > 0) {
    if (num < 0) break;
    res = Math.floor(num % 10);
    if (res === 3 || res === 6 || res === 9) sum++;
    num = Math.floor(num / 10);
  }
  return sum;
};

module.exports = problem3;
