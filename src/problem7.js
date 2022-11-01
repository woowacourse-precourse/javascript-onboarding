/*
 * 1. user의 친구 찾는 기능
 * 2. user의 친구의 친구들을 찾아 +10하는 기능
 * 3. visitors의 이름에 +1하는 기능
 * 4. 점수 순으로 정렬 및 반환
 *   4-1. 0점인 경우 추천 x
 *   4-2. 점수가 같다면 sort()
 *
 */
function problem7(user, friends, visitors) {
  // 1. user의 친구 찾기 기능
  let userFriends = [];
  friends.forEach((element) => {
    if (element.includes(user)) {
      element[0] === user ? userFriends.push(element[1]) : userFriends.push(element[0]);
    }
  });
  // 2. 친구의 친구를 찾아 +10 기능
  let friendScore = {};
  friends.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      const plusScore = element.includes(userFriends[i]);
      const isInUser = element.includes(user);
      if (plusScore && !isInUser) {
        element[0] === userFriends[i] ? (friendScore[element[1]] = 10) : (friendScore[element[0]] = 10);
      }
    }
  });
  // 2-1. user의 친구가 user의 또다른 친구와 또 친구일 수도 있으니 걸러주기
  for (let i in friendScore) {
    for (let j = 0; j < userFriends.length; j++) {
      if (i === userFriends[j]) {
        delete friendScore[i];
      }
    }
  }
  // 3. visitors의 이름에 +1하는 기능
  visitors.forEach((element) => {
    if (!userFriends.includes(element)) {
      friendScore[element] ? (friendScore[element] += 1) : (friendScore[element] = 1);
    }
  });
}

module.exports = problem7;
