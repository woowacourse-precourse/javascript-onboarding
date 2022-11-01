// 유저의 친구들을 구하는 함수
function getUserFriends(user, friends) {
  let userFriends = [];

  for ([friendA, friendB] of friends) {
    if (friendA === user) {
      userFriends.push(friendB);
    } else if (friendB === user) {
      userFriends.push(friendA);
    } else continue;
  }

  return userFriends;
}

// 유저의 친구들의 친구들을 Set에 넣으면서 10점을 부여하는 함수
function getMutualFriendScore(friendScore, userFriends, user, friends) {
  for (userFriend of userFriends) {
    for ([friendA, friendB] of friends) {
      if (friendA === userFriend && friendB !== user) {
        friendScore[friendB]
          ? (friendScore[friendB] += 10)
          : (friendScore[friendB] = 10);
      } else if (friendB === userFriend && friendA !== user) {
        friendScore[friendA]
          ? (friendScore[friendA] += 10)
          : (friendScore[friendA] = 10);
      } else {
        continue;
      }
    }
  }

  return friendScore;
}

// 유저의 친구를 제외한 방문자를 Set에 넣으면서 1점을 부여하는 함수
function getVisitorScore(friendScore, userFriends, visitors) {
  for (visitor of visitors) {
    if (userFriends.includes(visitor)) continue;

    friendScore[visitor]
      ? (friendScore[visitor] += 1)
      : (friendScore[visitor] = 1);
  }

  return friendScore;
}

// 이름과 점수를 정렬하고 상위 5개를 반환하는 함수
function getRecommendFriends(friendScore) {
  let answer = [];

  answer = Object.keys(friendScore).sort((a, b) => {
    if (friendScore[a] > friendScore[b]) return -1;
    if (friendScore[a] < friendScore[b]) return 1;
    if (a > b) return 1;
    if (a < b) return -1;
  });

  return answer.slice(0, 5);
}

function problem7(user, friends, visitors) {
  let answer;
  let friendScore = new Set();

  const userFriends = getUserFriends(user, friends);

  friendScore = getVisitorScore(friendScore, userFriends, visitors);
  friendScore = getMutualFriendScore(friendScore, userFriends, user, friends);
  answer = getRecommendFriends(friendScore);

  return answer;
}

module.exports = problem7;
