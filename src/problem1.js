let pobiMax = [];
let crongMax = [];

const exception = (pobi, crong) => {
  if (pobi[0] === "" || pobi[1] === "") return -1;
  if (crong[0] === "" || crong[1] === "") return -1;
  if (pobi[0] % 2 === 0 || pobi[1] % 2 !== 0) return -1;
  if (crong[0] % 2 === 0 || crong[1] % 2 !== 0) return -1;
  if (pobi.reduce((a, b) => Math.abs(a - b)) !== 1) return -1;
  if (crong.reduce((a, b) => Math.abs(a - b)) !== 1) return -1;
};

function problem1(pobi, crong) {
  pobiMax, (crongMax = []);
  if (exception(pobi, crong) === -1) return -1;
  return answer;
}

module.exports = problem1;
