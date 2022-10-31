function problem3(number) {}
function checkClapNum(number) {
  clapNumList = [];
  for (let num = 0; num < number.length; num++) {
    let clapNum = 0;
    num
      .toString()
      .split("")
      .map((x) => {
        if (x === "3" || x === "6" || x === "9") clapNum += 1;
      });
  }
  clapNumList.push(clapNum);
}

module.exports = problem3;
