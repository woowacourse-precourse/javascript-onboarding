function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;

/* numberHandler */
function addPageNumbers(page) {
  const pageArray = page.toString().split("");
  const addValue = pageArray.reduce((prev, value) => prev + parseInt(value), 0);

  return addValue;
}

function multiplyPageNumbers(page) {
  const pageArray = page.toString().split("");
  const multiplyValue = pageArray.reduce(
    (prev, value) => prev * parseInt(value),
    1
  );

  return multiplyValue;
}

function largestNum(pages) {
  const leftPage = pages[0];
  const rightPage = pages[1];
  const addLeft = addPageNumbers(leftPage);
  const addRight = addPageNumbers(rightPage);
  const multipleLeft = multiplyPageNumbers(leftPage);
  const multipleRight = multiplyPageNumbers(rightPage);
  const largestValue = Math.max(addLeft, addRight, multipleLeft, multipleRight);

  return largestValue;
}

/* Validation Function */
function isValidPage(pages) {
  isInRange(pages); //pages 값이 1~400의 값인지 판단.
  isOdd(pages[0]); //배열의 0번째 인덱스가 홀수인지 판단.
  //isEven(pages[1]) //배열의 1번째 인덱스가 짝수인지 판단.
  //isNeighboringValue(pages) //배열에 담긴 두 값의 차이가 1인지 판단.
}

function isInRange(pages) {
  let resultData;
  const leftValue = pages[0];
  const rightValue = pages[1];

  if (leftValue <= 1 || rightValue >= 400) {
    resultData = false;
  } else {
    resultData = true;
  }

  return resultData;
}

function isOdd(page) {
  let resultData;

  if (page % 2 === 1) {
    resultData = true;
  } else {
    resultData = false;
  }

  return false;
}

/*
왼쪽 홀수, 오른쪽 짝수.
모든 페이지에 번호가 할당.
특정 페이지가 찢어져 있을 수 있음.

# 페이지 번호 게임 
1. 책을 펼침.
왼쪽 페이지(oddNum), 오른쪽 페이지(evenNum)
page의 모든 자리수를 더함 || page의 모든 자리수를 곱함 
4가지 경우의 수 중 가장 큰 값을 return

포비 승 : 1
크롱 승 : 2
무승부 : 0
예외사항 : -1
---

### 함수화 할 기능
1. 각 자리수 더하는 함수.
function addPageNumbers(page){
    
}

2. 각 자리수 곱하는 함수.
function multiplyPageNumbers(page){
    
}

3. 매개변수를 받아 가장 큰 수 return하는 함수. (확장성을 고려해 2개가 아닌 여러개 받아도 될 듯?)
function largestNum(pages){
    const leftPage = pages[0];
    const rightPage = pages[1];
    const addLeft = addPageNumbers(leftPage);
    const multipleLeft = multiplyPageNumbers(leftPage);
    const addRight = addPageNumbers(rightPage);
    const multipleRight = multiplyPageNumbers(rightPage);
    const largestValue = Math.max(addLeft, multipleLeft, addRight, multipleRight)
    
    return largestValue; 
    //개행 어떻게 해야 가독성이 더 좋을지 고민. 찾아보기.
    //여기 가독성 너무 떨어짐. 코드 기능따라 더 쪼개면 좋을듯.
}


가장 큰 값을 가진 사람이 승리.

포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1

---
* 예외상황
const pobi = [leftValue, rightValue];
const crong = [leftValue, rightValue];


### 함수화 할 기능
페이지 검증하는 함수.
function isValid = (result) => {
    //1. hasValue(result) //각 페이지에 번호가 할당되어있는지 확인. [null, 4]
    //2. isInRange(result) //result 값이 1~400의 값인지 판단.
    //3. isOdd(result[0]) //배열의 0번째 인덱스가 홀수인지 판단.
    //4. isEven(result[1]) //배열의 1번째 인덱스가 짝수인지 판단.
    //5. isNeighboringValue(result) //배열에 담긴 두 값의 차이가 1인지 판단.
}


---

function problem1(pobi, crong) {
  const validation = isValidation(pobi, crong);
  if(!validatation){
    return -1;
  }

  const pobiResult = largestNum(pobi);
  const crongResult = largestNum(crong);
  if (pobiResult === crongResult) {
    return 0
  } else if (pobiResult > crongResult){
    return 1
  } else {
    return 2
  }
  //여기도 기능따라 나눠야 할 듯. 가독성 낮음.

}






*/
