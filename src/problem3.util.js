// input error check

const checkInputError = (n) => n < 1 || n > 10000;

// num에 대하여 손뼉 치는 횟수 count

const countClapOfNum = (n) =>
  String(n)
    .split("")
    .filter((n) => n !== "0" && Number(n) % 3 === 0).length;

// 1 부터 n 까지 count 구해서 더하기
const totalCountClap = (n) =>
  Array.from({ length: n }, (x, i) => i + 1)
    .map(countClapOfNum)
    .reduce((acc, cur) => acc + cur, 0);

exports.checkInputError = checkInputError;
exports.countClapOfNum = countClapOfNum;
exports.totalCountClap = totalCountClap;
