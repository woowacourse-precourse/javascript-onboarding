function problem1(pobi, crong) {
  let answer;

  // 기능 1
  const afterCheckPobi = checkException(pobi);
  const afterCheckCrong = checkException(crong);

  console.log(afterCheckPobi, afterCheckCrong);

  if (afterCheckPobi && afterCheckCrong) {
    // 기능 2
    const maxPobi = calculation(pobi);
    const maxCrong = calculation(crong);
    
    // 기능 3
  } else { // 예외사항이 발생한 경우
    answer = -1;
    return answer;
  }

  return answer;
}

// 기능 1. 입력 배열의 예외사항 체크
function checkException(pageList) {
  
  // 연속적인지 체크
  if (pageList[1] - pageList[0] != 1) {
    return false;
  }

  // 범위 체크
  if (pageList[0] <= 1 || pageList[1] >= 400) {
    return false;
  }

  // 홀수, 짝수 체크
  if (pageList[0] % 2 == 0 || pageList[1] % 2 == 1) {
    return false;
  }

  // 모두 만족하면 true
  return true;
}

// 기능 2. 계산하기
function calculation(pageList) {

  const leftPage = pageList[0].toString();
  const rightPage = pageList[1].toString();

  console.log("leftPage, rightPage: ", leftPage, rightPage);

  let leftPagePlace = []; // 왼쪽 페이지 자릿수
  let rightPagePlace = []; // 오른쪽 페이지 자릿수

  // 기능 2.1 자릿수로 구분하기
  for (let i = 0; i < leftPage.length; i++) {
    leftPagePlace.push(leftPage[i]);
  }
  for (let i = 0; i < rightPage.length; i++) {
    rightPagePlace.push(rightPage[i]);
  }

  console.log("leftPagePlace, rightPagePlace: ", leftPagePlace, rightPagePlace);



}
// 기능 3. 둘의 점수 비교하여 결과 리턴하기

pobi = [97, 98];
// pobi = [1, 2];
crong = [197, 198];

problem1(pobi, crong);

// module.exports = problem1;
