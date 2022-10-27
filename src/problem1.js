function problem1(pobi, crong) {
  var answer;
  answer = returnValue(pobi, crong);

  return answer;
}

function compare(a, b) {
  let maxValue = Math.max(a, b);

  return maxValue;
}

// 한 페이지의 최댓값
function addOrMultiply(page) {
  let addResult = 0;
  let multiplyResult = 1;
  let numString = page.toString();
  let result;
  for(let i = 0; i < numString.length; i++) {
    addResult += parseInt(numString[i]);
    multiplyResult *= parseInt(numString[i]);
  }
  result = compare(addResult, multiplyResult);

  return result;
}

// 두 페이지 각각의 최댓값
function eachMaxValue(leftPage, rightPage) {
  let leftMaxValue, rightMaxValue;
  let maxValues;
  leftMaxValue = addOrMultiply(leftPage);
  rightMaxValue = addOrMultiply(rightPage);
  maxValues = [leftMaxValue, rightMaxValue];

  return maxValues; 
}

// 두 페이지 비교
function leftOrRight(pages) {
  let leftPage = pages[0];
  let rightPage = pages[1];
  let [leftMaxValue, rightMaxValue] = eachMaxValue(leftPage, rightPage);
  let maxValuePage = compare(leftMaxValue, rightMaxValue);

  return maxValuePage;
}

// 포비와 크롱 비교
function pobiCrongMaxValue(pobi, crong) {
  let pobiMaxValue, crongMaxValue, pobiCrongMaxValue;
  pobiMaxValue = leftOrRight(pobi);
  crongMaxValue = leftOrRight(crong);
  pobiCrongMaxValue = [pobiMaxValue, crongMaxValue];

  return(pobiCrongMaxValue);
}

// 결과값
function returnValue(pobi, crong) {
  let [pobiMaxValue, crongMaxValue] = pobiCrongMaxValue(pobi, crong);
  let result;
  if(pobiMaxValue > crongMaxValue) {
    result = 1;
  } else if(pobiMaxValue < crongMaxValue) {
    result = 2;
  } else if (pobiMaxValue === crongMaxValue) {
    result = 0;
  } else {
    result = -1;
  }

  return result;
}

module.exports = problem1;
