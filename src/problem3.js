function problem3(number) {
  let clapNumList;
  clapNumList = checkClapNum(number);
  return sumClapNumList(clapNumList);
}
function checkClapNum(number) {
  let clapNumList = [];
  let clapNum = 0;
  for (let num = 1; num <= number; num++) {
    clapNum = 0;
    num
      .toString()
      .split("")
      .map((x) => {
        if (x === "3" || x === "6" || x === "9") clapNum += 1;
      });
    clapNumList.push(clapNum);
  }
  return clapNumList;
}
function sumClapNumList(clapNumList) {
  return clapNumList.reduce((sum, curr) => sum + curr, 0);
}
problem3(14);
module.exports = problem3;
