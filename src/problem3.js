function problem3(number) {
  let answer = 0;

  // [3, 6, 9] 포함된 정규식 변수 생성.
  let numberOfGame = /[3|6|9]/g;

  for(let i = 1; i <= number; i++) {
    // 체크해서 match 되는 숫자 저장.
    let numberOfMatch = (""+i).match(numberOfGame);
    // undefined가 아니라면 return 값에 길이만큼 더해줌. 
    if(numberOfMatch != undefined) answer += numberOfMatch.length;
  }

  return answer;
}

module.exports = problem3;
