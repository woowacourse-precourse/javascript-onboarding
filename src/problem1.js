function problem1(pobi, crong) {
  let answer;
  let pobiMaxNum = findMaxNumber(pobi);
  let crongMaxNum = findMaxNumber(crong);

    //예외상황 핸들링
    function checkError(arr) {
      //오른쪽 페이지는 왼쪽 페이지 + 1 이여야 함
      if (arr[0] + 1 !== arr[1]) return false;
  
      //왼쪽은 홀수,오른쪽 페이지 짝수이여 함
      if (arr[0] % 2 !== 1 || arr[1] % 2 !== 0) return false;
  
      //왼쪽페이지 첫페이지나 오른쪽 마지막페이지가 나오면 안됨
      if (arr[0] === 1 || arr[1] === 400) return false;
  
      //모두 통과해야 true
      return true;
    }
  
  //예외상황일 경우, -1 반환
  if (!checkError(pobi) || !checkError(crong)) return -1;

  //둘 중 높은 숫자 가진사람이 이긴다
  if (pobiMaxNum > crongMaxNum) {
    return (answer = 1);
  } else if (pobiMaxNum < crongMaxNum) {
    return (answer = 2);
  } else if (pobiMaxNum == crongMaxNum) {
    return (answer = 0);
  }
}

//가장 큰 수 구하기
function findMaxNumber(pagesArr) {
  let maxNum = 0;

  //for문을 돌려 값을 모두 구한다
  //각자리수의 숫자를 더하거나 곱하기 위해 문자열 변환후 하나씩 떼어준다.
  for (let i = 0; i < pagesArr.length; i++) {
    //reduce 함수를 사용해 배열의 각 요소 더해주거나 곱해줌
    let plusResult = pagesArr[i]
      .toString()
      .split("")
      .reduce((prev, cur) => {
        return (prev += parseInt(cur));
      }, 0);

    let multiplyResult = pagesArr[i]
      .toString()
      .split("")
      .reduce((prev, cur) => {
        return (prev *= parseInt(cur));
      }, 1);
    //곱하거나 더해준 값 중 가장 높은 숫자를 구한다
    maxNum = Math.max(pusResult, multiplyResult);
  }

  return maxNum;
}

module.exports = problem1;
