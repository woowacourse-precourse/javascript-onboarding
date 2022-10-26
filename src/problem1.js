function problem1(pobi, crong) {
  var answer;
  let pobiArr = [];
  let crongArr = [];
  let pobiNumtoStr;
  let crongNumtoStr;
  let sum;
  let multiply;

  for (let i = 0 ; i < 2 ; i++) {
    pobiNumtoStr = pobi[i].toString();
    crongNumtoStr = crong[i].toString();
    sum = 0;
    multiply =1;

    for (let i = 0; i < pobiNumtoStr.length; i++) {
      sum += parseInt(pobiNumtoStr[i]);
      multiply *= parseInt(pobiNumtoStr[i]);
      }
    pobiArr.push(sum, multiply);
    sum = 0;
    multiply =1;

    for (let i = 0; i < crongNumtoStr.length; i++) {
      sum += parseInt(crongNumtoStr[i]);
      multiply *= parseInt(crongNumtoStr[i]);
      }
    crongArr.push(sum, multiply);
  }

  pobiArr.sort((a, b) => {
    return b - a;
  });

  crongArr.sort((a, b) => {
    return b - a;
  });

  console.log(pobiArr[0]);
  console.log(crongArr[0]);

  if (pobiArr[0] > crongArr[0]) {
    answer = 1;
  } else if (crongArr[0] > pobiArr[0]) {
    answer = 2;
  } else if (crongArr[0] === pobiArr[0]) {
    answer = 0;
  }





  return answer;
}

module.exports = problem1;

console.log(problem1([97, 98], [197, 198]));