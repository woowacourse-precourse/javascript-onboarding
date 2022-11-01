const makeArr = (number) => String(number).split("");

const filterArrayBy = (arr, ...by) => arr.filter((v) => by.includes(+v));

function problem3(number) {
  let cnt = 0;
  for (let i = 0; i <= number; i++) {
    const temp = filterArrayBy(makeArr(i), 3, 6, 9);
    cnt += temp.length;
  }

  return cnt;
}

module.exports = problem3;

