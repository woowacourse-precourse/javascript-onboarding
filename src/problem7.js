function separateFriends(user, friend, friendNames, notFriends) {
  if (friend[0] === user) {
    friendNames[friend[1]] = friend[1]; // user의 친구
  } else if (friend[1] === user) {
    friendNames[friend[0]] = friend[0]; // user의 친구
  } else {
    notFriends.push(friend);
  }
}

function isIndirectFriend(friendNames, f, scores) {
  if (friendNames[f[0]]) {
    if (scores[f[1]]) scores[f[1]] = scores[f[1]] + 10;
    else scores[f[1]] = 10;
  } else if (friendNames[f[1]]) {
    if (scores[f[0]]) scores[f[0]] = scores[f[0]] + 10;
    else scores[f[0]] = 10;
  }
}

function scoreVisitor(scores, visitor) {
  if (scores[visitor]) {
    scores[visitor]++;
  } else {
    scores[visitor] = 1;
  }
}

function problem7(user, friends, visitors) {
  var answer = [];
  const friendNames = {}; // user의 친구
  const notFriends = [];
  const scores = {};
  friends.forEach((friend) => {
    separateFriends(user, friend, friendNames, notFriends);
  });
  notFriends.forEach((f) => {
    isIndirectFriend(friendNames, f, scores);
  });
  visitors.forEach((visitor) => {
    if (!friendNames[visitor]) {
      scoreVisitor(scores, visitor);
    }
  });

  const sortedScores = Object.fromEntries(
    Object.entries(scores).sort(([, a], [, b]) => b - a) // 내림차순 정렬
  );
  for (const score in sortedScores) {
    if (answer.length < 5) answer.push(score); // 최대 5 명 출력
    else return;
  }

  return answer;
}

module.exports = problem7;
