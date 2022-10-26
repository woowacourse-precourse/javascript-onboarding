function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  if (pobi[0] % 2 === 0 || crong[0] % 2 === 0) return -1;
  function getMaxNumber(num) {
    let arr = String(num).split("");
    let plus = arr.reduce((a, c) => {
      a = a + parseInt(c);
      return a;
    }, 0);
    let multiple = arr.reduce((a, c) => {
      a = a * +c;
      return a;
    }, 1);
    return Math.max(plus, multiple);
  }
  let pobiMaxNum = Math.max(getMaxNumber(pobi[0], pobi[1]));
  let crongMaxNum = Math.max(getMaxNumber(crong[0], crong[1]));
  if (pobiMaxNum > crongMaxNum) return 1;
  if (pobiMaxNum < crongMaxNum) return 2;
  if (pobiMaxNum === crongMaxNum) return 0;
  return -1;
}

module.exports = problem1;
