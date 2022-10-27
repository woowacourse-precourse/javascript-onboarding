function problem1(pobi, crong) {
  if (!inputExecption(pobi, crong)) return -1;
  var answer;
  let pobiNumArr = [];
  let crongNumArr = [];

  for (let i = 0 ; i < 2 ; i++) {
    let pobiNumtoStr = pobi[i].toString();
    let crongNumtoStr = crong[i].toString();
    pobiNumArr = pobiNumArr.concat(mkNumArr(pobiNumtoStr));
    crongNumArr = crongNumArr.concat(mkNumArr(crongNumtoStr));
  }
  arrSort(pobiNumArr);
  arrSort(crongNumArr);

  if (pobiNumArr[0] > crongNumArr[0]) answer = 1;
  else if (crongNumArr[0] > pobiNumArr[0]) answer = 2; 
  else if (crongNumArr[0] === pobiNumArr[0]) answer = 0;
  return answer;
}

function mkNumArr(numtoStr) {
  let sum = 0;
  let multiply = 1;
  let numArr = [];
  
  for (let i = 0; i < numtoStr.length; i++) {
    sum += parseInt(numtoStr[i]);
    multiply *= parseInt(numtoStr[i]);
  }
  numArr.push(sum, multiply);
  return numArr;
}

function inputExecption(arr1, arr2) {
  let inputCheck = true;
  if (arr1[0] <= 1 || arr2[1] >= 400) inputCheck = false;
  else if (arr1[0] * arr2[0] % 2 !== 1) inputCheck = false;
  else if (arr1[1] - arr1[0] !== 1 || arr2[1] - arr2[0] !== 1) inputCheck = false;
  else if (arr1.length != 2 || arr2.length != 2) inputCheck = false;
  return inputCheck;
}

function arrSort(fullNumArr) {
  fullNumArr.sort((a, b) => {return b - a;});
  return fullNumArr;
}
module.exports = problem1;