function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    //주어진 숫자만큼 반복
    let cnt = 0; //손뼉 카운트
    for (let j of String(i)) {
      //해당 숫자를 문자열로 바꾸어 안에 개수만큼 반복
      if (j === '3' || j === '6' || j === '9') cnt++;
      //3이나 6이나 9가 들어갈 때 카운팅
    }
    answer += cnt; //결과값에 더해주기
  }

  return answer; //결과 반환
}

module.exports = problem3;
