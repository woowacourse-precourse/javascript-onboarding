const friendList = [];
const friendOfFriendList = [];
let score = new Map();

const checkUser = (user) => {
  if (typeof user !== 'string') return true;
  if (user.length < 1 || user.length > 30) return true;
  if (user !== user.toLowerCase()) return true;
  return false;
};

const checkFriends = (friends) => {
  if (!Array.isArray(friends)) return true;
  if (friends.length < 1 || friends.length > 10000) return true;

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length !== 2) return true;
    if (
      friends[i][0].length < 1 ||
      friends[i][0].length > 30 ||
      friends[i][1].length < 1 ||
      friends[i][1].length > 30
    )
      return true;
  }
  return false;
};

const checkVisitors = (visitors) => {
  if (
    visitors.length < 0 ||
    visitors.length > 10000 ||
    !Array.isArray(visitors)
  )
    return true;
  return false;
};

const checkValid = (user, friends, visitors) => {
  if (checkUser(user)) return true;
  if (checkFriends(friends)) return true;
  if (checkVisitors(visitors)) return true;
  return false;
};

const findFriend = (user, friends) => {
  friends.map((friend) => {
    const [A, B] = friend;
    if (A == user) friendList.push(B);
    if (B == user) friendList.push(A);
  });
  return friendList;
};

const findFriendOfFriend = (user, friends, friendList) => {
  friends.map((friend) => {
    const [A, B] = friend;
    friendList.map((friendName) => {
      if (A == friendName && B != user) friendOfFriendList.push(B);
      if (B == friendName && A != user) friendOfFriendList.push(A);
    });
  });
  return friendOfFriendList;
};

const getScoreFriendOfFriend = (friendOfFriendList) => {
  friendOfFriendList.map((friendOfFriend) => {
    score.has(friendOfFriend)
      ? score.set(friendOfFriend, score.get(friendOfFriend) + 10)
      : score.set(friendOfFriend, 10);
  });
  return score;
};

const getScoreVisitors = (visitors) => {
  visitors.map((visitor) => {
    if (!friendList.includes(visitor)) {
      score.has(visitor)
        ? score.set(visitor, score.get(visitor) + 1)
        : score.set(visitor, 1);
    }
  });
  return score;
};

function problem7(user, friends, visitors) {
  let answer;

  if (checkValid(user, friends, visitors)) return false;

  findFriend(user, friends);
  findFriendOfFriend(user, friends, friendList);
  getScoreFriendOfFriend(friendOfFriendList);
  getScoreVisitors(visitors);

  scoreArr = [...score].sort((a, b) => b[1] - a[1]);
  answer = scoreArr.slice(0, 5).map((score) => score[0]);

  return answer.length > 0 ? answer : false;
}

module.exports = problem7;

console.log(
  problem7(
    'mrko',
    [
      ['donut', 'andole'],
      ['donut', 'andole'],
      ['donut', 'jun'],
      ['donut', 'mrko'],
      ['shakevan', 'andole'],
      ['shakevan', 'jun'],
      ['shakevan', 'mrko'],
    ],
    ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
  )
);
