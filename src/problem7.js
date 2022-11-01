const getScore = (user, visitors, friendList) => {
  const user_friends = new Set(friendList[user]);
  const score = {};

  user_friends.forEach((friend) => {
    friendList[friend].forEach((rec_friend) => {
      if (user_friends.has(rec_friend)) return;
      if (rec_friend == user) return;
      if (score[rec_friend] === undefined) score[rec_friend] = 0;
      score[rec_friend] += 10;
    });
  });

  visitors.forEach((visitor) => {
    if (user_friends.has(visitor)) return;
    if (user_friends.has(visitor)) return;
    if (score[visitor] === undefined) score[visitor] = 0;
    score[visitor] += 1;
  });

  return score;
};

const getFriendList = (friends) => {
  const friendList = {};

  friends.forEach((friend) => {
    if (friendList[friend[0]] === undefined) friendList[friend[0]] = [];
    if (friendList[friend[1]] === undefined) friendList[friend[1]] = [];
    friendList[friend[0]].push(friend[1]);
    friendList[friend[1]].push(friend[0]);
  });

  return friendList;
};

const compare = (S1, S2) => {
  if (S1[0] == S2[0]) {
    return S1[1] < S2[1];
  }
  return S1[0] > S2[0];
};

function problem7(user, friends, visitors) {
  var answer = [];
  const friendList = getFriendList(friends);
  const score = getScore(user, visitors, friendList);
  const recommend = [];

  for (let key in score) {
    recommend.push([score[key], key]);
  }
  recommend.sort(compare);

  for (let i = 0; i < 5; i++) {
    if (i >= recommend.length) break;
    answer.push(recommend[i][1]);
  }

  return answer;
}

module.exports = problem7;
