function problem3(number) {
  let answer=0;
  // 369의 유무 확인하는 정규표현식 패턴
  const pattern=/[369]/g

  // 각 수를 문자열로 바꿔 369가 있는 개수 만큼 answer를 더해준다.
  for (let i=1;i<=number;i++) {
    answer+=(i.toString().match(/[369]/g)||[]).length
  }
  return answer;
}

module.exports = problem3;
