const friendList = [];
const friendOfFriendList = [];
let score = new Map();

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

function problem7(user, friends, visitors) {
  let answer;
  return answer;
}

module.exports = problem7;
