const makeArr = (number) => String(number).split("");
const filterArrayBy = (arr, ...args) => arr.filter((v) => args.includes(+v));

function problem3(number) {
  let cnt = 0;
  for (let i = 0; i < number + 1; i++) {
    const temp = filterArrayBy(makeArr(i), 3, 6, 9);
    cnt += temp.length;
  }
  return cnt;
}
console.log(problem3(33));
module.exports = problem3;
