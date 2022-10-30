function problem1(pobi, crong) {
  var answer;
  
  let pobiNum = 0;
  let crongNum = 0;
  let leftPage = 0;
  let leftMul = 0;
  let leftSum = 0;
  let rightPage = 0;
  let rightMul = 0;
  let rightSum = 0;

  function biggestValue(num) {
    if (num[0] != num[1] -1) {
      answer = -1;
      return;
    }

    leftPage = num[0].toString().split('').map(Number);
    rightPage = num[1].toString().split('').map(Number);
    
    leftMul = leftPage[0];

    if (leftPage.length > 1) {
      for(let i = 1; i < leftPage.length; i++) {
      leftMul *= leftPage[i];
      }
    }

    leftSum = 0;

    for(let i = 0; i < leftPage.length; i++) {
      leftSum += leftPage[i];
    }

    if (leftSum >= leftMul) {
      leftPage = leftSum;
    } else {
      leftPage = leftMul;
    }

    rightMul = rightPage[0];

    if (rightPage.length > 1) {
     for(let i = 1; i < rightPage.length; i++) {
      rightMul *= rightPage[i];
     }
    }

    rightSum = 0;

    for(let i = 0; i < rightPage.length; i++) {
      rightSum += rightPage[i];
    }

    if (rightSum >= rightMul) {
      rightPage = rightSum;
    } else {
      rightPage = rightMul;
    }

    if (rightPage > leftPage) {
      return rightPage;
    } else {
      return leftPage;
    }
  }

pobiNum = biggestValue(pobi);
crongNum = biggestValue(crong);
  
  if (pobiNum > crongNum) {
    answer = 1;
  } else if (crongNum > pobiNum) {
    answer = 2;
  } else if (crongNum == pobiNum) {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
