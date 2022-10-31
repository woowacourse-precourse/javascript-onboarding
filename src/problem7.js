/*
  ### 기능 목록

  1. friends 에서 user를 찾는다.
  2. 해당 배열의 다른 사람(key)을 Set에 넣고 value = 10으로 설정한다.
  2. visitors를 참고하여 value+=1 점씩 매긴다.
  3. 점수가 0이하인 경우는 제외한다.
  4. 점수순, 이름순으로 정렬한다.  
*/

function problem7(user, friends, visitors) {
  const answer = new Map();
  friends.forEach((element) => {
    if (element.indexOf(user) != -1) {
      element.indexOf(user) == 0
        ? answer.set(element[1], 10)
        : answer.set(element[0], 10);
    }
  });
  console.log(answer);
  return answer;
}

module.exports = problem7;
