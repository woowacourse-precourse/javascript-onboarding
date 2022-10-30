function problem7(user, friends, visitors) {
  const answer = recommandFriends(user, friends, visitors);
  return answer;
}

/* 점수 계산 함수
    1. 친구의 친구인 경우 +10점
    2. 방문자인 경우 +1점
*/
function recommandFriends(user, friends, visitors) {
  const friendMap = makeFriendMap(user, friends);
  /* 추천할 사람들의 목록 */
  const recommandList = {};
  scoreForFriends(recommandList, friendMap);
  scoreForVisitors(recommandList, visitors);
  /* 낯선 사람 목록 */
  const recommands = filterRecommandList(recommandList, friendMap.get(user));
  return rankRecommands(recommands);
}

/* 친구 목록 중 점수가 0인 친구는 제외하고 top5 추출 */
function rankRecommands(recommands) {
  const ret = [];
  for (let i = 0 ; i < recommands.length && ret.length < 5 ; i++) {
    if (isEqual(recommands[i][1], 0)) break;
    ret.push(recommands[i][0]);
  }
  return ret;
}

function filterRecommandList(recommandList, usersFriends) {
  const recommands = [];
  const people = Object.keys(recommandList);
  for (const person of people) {
    if(usersFriends.includes(person)) continue;
    recommands.push([person, recommandList[person]]);
  }
  recommands.sort(comapreRecommands);
  return recommands;
}

function comapreRecommands(a, b) {
  if (a[1] > b[1]) return -1;
  else if (a[1] < b[1]) return 1;
  else {
    if (a[0] > b[0]) return 1;
    else return -1;
  }
}

function scoreForFriends(recommandList, friendMap) {
  friendMap.forEach(function(friendList) {
    friendList.forEach(function(friend) {
      if (isEqual(recommandList[friend], undefined)) {
        recommandList[friend] = 10;
      } else {
        recommandList[friend] += 10;
      }
    });
  });
}

/* 방문자 배열 중복 제거 및 중복 요소 counting */
function scoreForVisitors(recommandList, visitors) {
  visitors.forEach(function(visitor) {
    if (isEqual(recommandList[visitor], undefined)) {
      recommandList[visitor] = 1;
    } else {
      recommandList[visitor] += 1;
    }
  })
}

/* 유저의 친구 목록 */
/* 유저의 친구의 친구 목록 */
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
    if (isEqual(friend, user) || usersFriends.includes(friend)) continue;
    friendMap.delete(friend); 
  }
}

function isEqual(a, b) {
  return a === b;
}

module.exports = problem7;
