//number까지 배열을 만드는 함수 -기능목록 1
const range = (from, to, step = 1) =>
  [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);

//3,6,9를 가지고 있는지 체크하는 함수 - 기능목록 2
function includes369(num) {
  if (
    num.toString().includes("3") ||
    num.toString().includes("6") ||
    num.toString().includes("9")
  )
    return true;
  return false;
}

function problem3(number) {
  let arrNumber = range(1, number);
  return arrNumber.filter((item) => includes369(item));
}

module.exports = problem3;
