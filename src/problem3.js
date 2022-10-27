//number까지 배열을 만드는 함수 -기능목록 1
const range = (from, to, step = 1) =>
  [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);

function problem3(number) {
  let arrNumber = Array.from({ length: number + 1 }, (x, i) => i);
}

console.log(range(1, 13, 5));
module.exports = problem3;
