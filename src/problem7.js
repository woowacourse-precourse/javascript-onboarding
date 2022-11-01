/*
 * 1. user의 친구 찾는 기능
 * 2. user의 친구의 친구들을 찾아 +10하는 기능
 * 3. visitors의 이름에 +1하는 기능
 * 4. 점수 순으로 정렬 및 반환, 5개까지
 *   4-1. 0점인 경우 추천 x
 *   4-2. 점수가 같다면 sort()
 *
 */
function problem7(user, friends, visitors) {
  // 1. user의 친구 찾기 기능
  let userFriends = [];
  friends.forEach((twoBuddies) => {
    if (twoBuddies.includes(user)) {
      twoBuddies[0] === user ? userFriends.push(twoBuddies[1]) : userFriends.push(twoBuddies[0]);
    }
  });
  // 2. 친구의 친구를 찾아 +10 기능
  let friendScore = {};
  friends.forEach((twoBuddies) => {
    for (let i = 0; i < twoBuddies.length; i++) {
      const plusScore = twoBuddies.includes(userFriends[i]);
      const isInUser = twoBuddies.includes(user);
      if (plusScore && !isInUser) {
        twoBuddies[0] === userFriends[i] ? (friendScore[twoBuddies[1]] = 10) : (friendScore[twoBuddies[0]] = 10);
      }
    }
  });
  // 2-1. user의 친구가 user의 또다른 친구와 또 친구일 수도 있으니 걸러주기
  for (let friendName in friendScore) {
    for (let j = 0; j < userFriends.length; j++) {
      if (friendName === userFriends[j]) {
        delete friendScore[friendName];
      }
    }
  }
  // 3. visitors의 이름에 +1하는 기능
  visitors.forEach((visitor) => {
    if (!userFriends.includes(visitor)) {
      friendScore[visitor] ? (friendScore[visitor] += 1) : (friendScore[visitor] = 1);
    }
  });
  // 4. 점수 순으로 정렬 및 반환, 5개까지
  let scoreSort = [];
  for (friendName in friendScore) {
    scoreSort.push([friendName, friendScore[friendName]]);
  }
  scoreSort.sort((a, b) => b[1] - a[1]);
  const onlyFriendsName = scoreSort.map((friend) => friend[0]);
  return onlyFriendsName.slice(0, 5);
}

module.exports = problem7;
