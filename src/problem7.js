const friendList = [];

const findFriendList = (user, friends) => {
  friends.map((friend) => {
    const [A, B] = friend;
    if (A == user) friendList.push(B);
    if (B == user) friendList.push(A);
  });
  return friendList;
};

function problem7(user, friends, visitors) {
  let answer;
  return answer;
}

module.exports = problem7;
