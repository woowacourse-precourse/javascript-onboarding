function problem7(user, friends, visitors) {
  const answer = recommandFriends(user, friends, visitors) ;
  return answer;
}

/* 유저의 친구 목록 */
/* 유저의 친구의 친구 목록 */
/* 낯선 사람 목록 */
/* 점수 계산 함수
    1. 친구의 친구인 경우 +10점
    2. 방문자인 경우 +1점
*/
function recommandFriends(user, friends, visitors) {
  const friendMap = makeFriendMap(friends);
}

function makeFriendMap(user, friends) {
  const friendMap = new Map();
  friends.forEach(function(friend) {
    const [friend1, friend2] = friend;
    addFrienMap(user, friendMap, friend1, friend2);
    addFrienMap(user, friendMap, friend2, friend1);
  });
  removeNotUsersFriends(user, friendMap);
  return friendMap;
}

function addFrienMap(user, friendMap, friendA, friendB) {
  if(isEqual(friendB, user)) return;
  const existFriend = friendMap.get(friendA);
  if (isEqual(existFriend, undefined)) friendMap.set(friendA, [friendB]);
  else existFriend.push(friendB);
}

function removeNotUsersFriends(user, friendMap) {
  const usersFriends = friendMap.get(user);
  const allFriends = friendMap.keys();
  for (const friend of allFriends) {
    if (usersFriends.includes(friend) === false) {
      friendMap.delete(friend);
    } 
  }
}

function isEqual(a, b) {
  return a === b;
}

/* 방문자 배열 중복 제거 및 중복 요소 counting */
/* 친구 목록 중 점수가 0인 친구는 제외하고 top5 추출 */

module.exports = problem7;
