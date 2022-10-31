function problem7(user, friends, visitors) {
  var answer = [];
  let user_friend = ""; // user의 친구
  let person = []; // user의 친구의 친구
  let visitArr = []; // visitor에서 방문 빈도가 제일 많은 친구
  let recomendArr = []; // 최종 배열
  // user의 친구들 찾기
  friends.map((name) => {
    if (name.includes(user)) {
      user_friend = name.filter((element) => element !== user).join();
      // user의 친구들의 친구들 찾기
      friends.map((second) => {
        if (second.includes(user_friend)) {
          person.push(
            second.filter((element) => element !== user_friend).join()
          );
        }
      });
    }
  });
  let arr = new Set(person);
  recomendArr = [...arr];

  // visitors에서 찾기
  let count = 0;
  visitors.reduce((acc, cur) => {
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] === cur) {
        acc++;
      }
    }
    if (count <= acc) {
      count = acc;
      acc = 0;
      visitArr.push(cur);
    }
  }, 0);
  recomendArr.pop(user);
  answer = recomendArr.concat(visitArr);
  return answer;
}

module.exports = problem7;

// 기능 목록
// 인접행렬?
// 1. friends 에서 user와 묶인 친구를 찾아, 그 친구와 친구관계인 사람에게 점수를 추가한다.
// 2. visitors 에서 방문한 사람에게 점수를 준다.
// 3. 점수를 줄 방법을 모르겠음..
