function problem1(pobi, crong) {
  if (pobi[1] > 399 || crong[1] > 399 || pobi[0] < 2 || crong[0] < 2) {
    return -1;
  }
  else if ((pobi[0] + 1 != pobi[1]) || (crong[0] + 1 != crong[1]))
    return -1;
  
  const pobiMax = getMaxNumber(Array.from(String(pobi[0]), Number), Array.from(String(pobi[1]), Number));
  const crongMax = getMaxNumber(Array.from(String(crong[0]), Number), Array.from(String(crong[1]), Number));
  
  if (pobiMax === crongMax) {
    return 0
  } else if (pobiMax > crongMax) {
    return 1
  } else if (pobiMax < crongMax) {
    return 2
  } else {
    return -1
  }
}

function getMaxNumber(leftList, rightList) {
  const leftMax = getPageBig(leftList);
  const rightMax = getPageBig(rightList);

  return (leftMax > rightMax) ? leftMax : rightMax;
}

function getPageBig(numberList) {
  let sumNum = 0;
  let multiNum = 1;
  
  for (let i = 0; i < numberList.length; i++) {
    sumNum += numberList[i];
    multiNum *= numberList[i];
  }

  return (sumNum > multiNum) ? sumNum : multiNum;
}

module.exports = problem1;
