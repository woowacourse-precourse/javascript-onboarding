function problem1(pobi, crong) {
  var answer;
  let pobiNumArr = [];
  let crongNumArr = [];
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
    pobiNumArr.push(sum, multiply);
    sum = 0;
    multiply =1;

    for (let i = 0; i < crongNumtoStr.length; i++) {
      sum += parseInt(crongNumtoStr[i]);
      multiply *= parseInt(crongNumtoStr[i]);
      }
    crongNumArr.push(sum, multiply);
  }
  //sort()를 이용해서 배열을 내림차순으로 정리
  pobiNumArr.sort((a, b) => {
    return b - a;
  });

  crongNumArr.sort((a, b) => {
    return b - a;
  });

  if (pobi[0] <= 1 || crong[1] >= 400 || 
      pobi[0] * crong[0] % 2 !== 1 || 
      pobi[1] - pobi[0] !== 1 || 
      crong[1] - crong[0] !== 1 ||
      pobi.length > 3 || pobi.lenth < 2 ||
      crong.length > 3 || crong.lenth < 2) {
    answer = -1;
  } else if (pobiNumArr[0] > crongNumArr[0]) {
    answer = 1;
  } else if (crongNumArr[0] > pobiNumArr[0]) {
    answer = 2;
  } else if (crongNumArr[0] === pobiNumArr[0]) {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
