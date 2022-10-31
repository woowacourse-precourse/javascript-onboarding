/*
  ### 기능 목록

  1. user와 친구인 사람을 찾는다.
  1-1. friend에서 '친구'는 추천받지 않음으로, friends에서 user의 친구 관계를 삭제한다.
  2. user와 친구인 사람인 '친구의 친구'를 찾는다. 
  3. '친구의 친구' 사람(key)을 Map에 넣고 value = 10으로 설정한다.
  4. visitors를 참고해 방문객을 Map에 넣고, value+=1 점씩 매긴다.
  5. 점수순(내림차순), 이름순(오름차순)으로 정렬한다.  
*/

function problem7(user, friends, visitors) {
  let answer = new Map();
  const myFriend = [];

  let i = friends.length;
  while (i--) {
    if (friends[i].indexOf(user) == 0) {
      myFriend.push(friends[i][1]);
      friends.splice(i, 1);
    } else if (friends[i].indexOf(user) == 1) {
      myFriend.push(friends[i][0]);
      friends.splice(i, 1);
    }
  }

  friends.forEach((them) => {
    myFriend.forEach((one) => {
      them.indexOf(one) == 0
        ? answer.set(them[1], 10)
        : them.indexOf(one) == 1
        ? answer.set(them[0], 10)
        : "";
    });
  });

  visitors.forEach((element) => {
    !myFriend.includes(element)
      ? answer.get(element) != undefined
        ? answer.set(element, answer.get(element) + 1)
        : answer.set(element, 1)
      : "";
  });
}

module.exports = problem7;
