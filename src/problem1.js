function problem1(pobi, crong) {
  var answer;
  answer = returnValue(pobi, crong);

  return answer;
}

// 예외값 처리
function isEven(num) {
  let result = (num % 2 === 0);

  return result;
}

function isOdd(num) {
  let result = (num % 2 === 1);

  return result;
}

function isValidRange(num) {
  let minPage = 1;
  let maxPage = 400;

  let result = (num > minPage && num < maxPage);
  
  return result;
}

function isValidOrder(pages) {
  let [leftPage, rightPage] = pages;
  let result = (leftPage === rightPage - 1);

  return result;
}

function isValidList(pages) {
  let result;
  result = (pages.length === 2);

  return result;
}

function isValidInput(pages) {
  let [leftPage, rightPage] = pages;
  let result;
  result = isOdd(leftPage) && isEven(rightPage) && isValidOrder(pages) && isValidRange(leftPage) && isValidRange(rightPage) && isValidList(pages);

  return result;
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
  const pobiWin = 1;
  const crongWin = 2;
  const draw = 0;
  const exceptCase = -1;
  result = isValidInput(pobi) && isValidInput(crong);

  if(result === false) {
    return exceptCase;
  }
  else {
    if(pobiMaxValue > crongMaxValue) {
      result = pobiWin;
    } else if(pobiMaxValue < crongMaxValue) {
      result = crongWin;
    } else if (pobiMaxValue === crongMaxValue) {
      result = draw;
    }

    return result;
  }
}
module.exports = problem1;
