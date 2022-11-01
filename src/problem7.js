/* 
  기능 목록
  1. user와 친구인 아이디 배열에 담기
  2. user와 친구인 아이디의 친구들을 돌며 10점씩 추가
  3. visitor를 돌며 1점씩 추가 
  4. 주어진 점수 표에서 이미 친구인 아이디는 제외
  5. 친구 목록을 높은 점수 순으로 정렬, 점수가 같다면 이름순으로 정렬
*/

function friendCheck(friendsArray, id) {
  return friendsArray
    .filter((element) => element.includes(id))
    .map((element) => {
      if (element[0] === id) return element[1];
      else return element[0];
    });
}

function visitorCheck(visitors, scoreMap, friendArray) {
  for (const visitor of visitors) {
    if (!friendArray.includes(visitor)) {
      let score = 1;
      if (scoreMap.get(visitor)) score = scoreMap.get(visitor) + 1;
      scoreMap.set(visitor, score);
    }
  }
  return scoreMap;
}

function relatedFriendsCheck(user, friends, friendArray) {
  const scoreMap = new Map();
  const friendsArray = friendArray.map((element) =>
    friendCheck(friends, element)
  );
  if (friendsArray.length > 0) {
    const relateFriendsArray = friendsArray
      .reduce((acc, cur) => acc.concat(cur))
      .filter((element) => element !== user);

    for (const friend of relateFriendsArray) {
      let score = 10;
      if (scoreMap.get(friend)) score = scoreMap.get(friend) + 10;
      scoreMap.set(friend, score);
    }
  }
  return scoreMap;
}

function problem7(user, friends, visitors) {
  const friendArray = friendCheck(friends, user);

  const scoreMap = relatedFriendsCheck(user, friends, friendArray);
  scoreMap = visitorCheck(visitors, scoreMap, friendArray);

  var answer;
  return answer;
}

module.exports = problem7;
