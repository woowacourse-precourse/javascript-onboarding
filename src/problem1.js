function problem1(pobi, crong) {

  function characterMaxNumberFirst(character) { // 홀수 페이지 큰 수 반환 함수!
    let strarr1 = String(character[0]).split(""); // strarr1 = ['9','7']
    let numStr = strarr1.map(element => Number(element)); // strarr1 = [9,7]
    let stararr1_duplicate = numStr;
    let Plus = stararr1_duplicate.reduce(function (prev, cur, index) {
      return prev + cur;
    })
    let Multiply = stararr1_duplicate.reduce(function (prev, cur, index) {
      return prev * cur;
    });
    return Math.max(Plus, Multiply);
  }
  function characterMaxNumberSecond(character) { // 짝수 페이지 큰 수 반환 함수!
    let strarr1 = String(character[1]).split(""); // strarr1 = ['9','7']
    let numStr = strarr1.map(element => Number(element)); // strarr1 = [9,7]
    let stararr1_duplicate = numStr;
    let Plus = stararr1_duplicate.reduce(function (prev, cur, index) {
      return prev + cur;
    })
    let Multiply = stararr1_duplicate.reduce(function (prev, cur, index) {
      return prev * cur;
    });
    return Math.max(Plus, Multiply);
  }

  let pobiScore = Math.max(characterMaxNumberFirst(pobi), characterMaxNumberSecond(pobi));
  let crongScore = Math.max(characterMaxNumberFirst(crong), characterMaxNumberSecond(crong));
  
  if (pobiScore > crongScore) {
    return 1;
  } else if (crongScore > pobiScore) {
    return 2;
  } else if (pobiScore == crongScore) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = problem1;

//왼쪽 or 오른쪽 페이지 번호 각각을 모두 더하거나 곱해 가장 큰 수를 구한다. -> 그 중 가장 큰 숫자를 본인의 점수로 정한다.
// pobi, crong -> pobi win 1, crong win 2, same score 0 , exception -1

