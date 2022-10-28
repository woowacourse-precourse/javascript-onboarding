// 기능 목록
// 1. user의 친구 구하기
// 2. user의 친구의 친구 구하기 => 각 10점씩
// 3. visitors 배열의 요소 => 각 1점씩 (단, user의 친구는 0점)
// 4. 3을 점수 높은 순으로 정렬하기
// 5. 단, 동점을 경우 이름순으로 정렬하기
// 6. answer는 최대 5명

function problem7(user, friends, visitors) {
  // 점수가 높은 순으로 최대 5명 정렬
  let answer = [];
  // 유저의 친구
  let userFriends = [];
  // 아이디를 키로, 점수를 값으로 가지는 객체
  let IdScore = {};

  // user의 친구 구하기
  friends
    .filter((el) => el.includes(user))
    .filter((el) => {
      for (let i = 0; i < el.length; i++) {
        if (el[i] !== user) userFriends.push(el[i]);
      }
    });

  // user의 친구의 친구 구하기
  for (let i = 0; i < userFriends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      // userFriends 요소를 가지고 있지만, userFriends 요소도 아니고, user도 아닐 때
      if (
        friends[j].includes(userFriends[i]) &&
        userFriends[i] === friends[j][0] &&
        !friends[j].includes(user)
      ) {
        // IdScore객체에 키가 있을 때
        if (IdScore.hasOwnProperty(friends[j][1])) IdScore[friends[j][1]] += 10;
        // IdScore객체에 키가 없을 때
        else IdScore[friends[j][1]] = 10;
      }
    }
  }

  // visitors 배열 요소들 각 1점씩
  visitors.map((el) => {
    // user의 친구가 아니고
    if (!userFriends.includes(el)) {
      // IdScore객체에 키가 있을 때
      if (IdScore.hasOwnProperty(el)) IdScore[el] += 1;
      // IdScore객체에 키가 없을 때
      else IdScore[el] = 1;
    }
  });

  // sort시키기 위해 객체인 IdScore를 배열로 만들기
  let sortable = [];
  for (let id in IdScore) {
    sortable.push([id, IdScore[id]]);
  }
  // 점수 높은 순으로 정렬
  sortable.sort((a, b) => {
    return b[1] - a[1];
  });

  return answer;
}

module.exports = problem7;
