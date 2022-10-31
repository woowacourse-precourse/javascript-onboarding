function problem3(number) {
  let answer = 0;

  // 1. [3, 6, 9] 포함된 정규식 변수 생성.
  let numberOfGame = /[3|6|9]/g;

  for(let i = 1; i <= number; i++) {
    // 2. 체크해서 match 되는 숫자 저장.
    let numberOfMatch = (""+i).match(numberOfGame);
    // 3. count 
    if(numberOfMatch != undefined) answer += numberOfMatch.length;
  }

  return answer;
}

module.exports = problem3;
