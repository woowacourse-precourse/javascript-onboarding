function problem3(number) {
  var answer;
  answer = 0;

  function numToArray(num) {
    let digits = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });
      return digits;
  }

  for(let i = 0; i<= number;i++) {
    let numAry = numToArray(i);
    for(let j = 0; j < numAry.length; j++) {
      if(numAry[j] === 3 || numAry[j] === 6 || numAry[j] === 9) {
        answer++;
      }
    }
  }

  return answer;
}

module.exports = problem3;
