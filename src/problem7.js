function problem7(user, friends, visitors) {
  let answer = [];
  let recomendedScore = new Map();

  const userFriends = getUserFriends(user, friends);
  getShareFriends(user, userFriends, friends, recomendedScore);
  getVisitFriends(visitors, userFriends, recomendedScore);

  const recomendedFriend = [...recomendedScore].sort((a, b) => {
    if (a[1] == b[1]) return a[0] > b[0] ? 1 : -1;
    return b[1] - a[1];
  });

  recomendedFriend.map((friend) => {
    answer.push(friend[0]);
  });

  answer.slice(0, 5);
  return answer;
}

function getUserFriends(user, friends) {
  let userFriends = [];
  friends.map((friend) => {
    if (friend.includes(user)) {
      userFriends.push(friend[0] !== user ? friend[0] : friend[1]);
    }
  });
  return userFriends;
}

function getShareFriends(user, userFriends, friends, recomendedScore) {
  userFriends.map((userFriend) => {
    friends.map((friend) => {
      if (friend.includes(userFriend)) {
        const sameFriend = friend[0] === userFriend ? friend[1] : friend[0];
        if (sameFriend !== user) recomendedScore.set(sameFriend, 10);
      }
    });
  });
}

function getVisitFriends(visitors, userFriends, recomendedScore) {
  visitors.map((visitor) => {
    if (!userFriends.includes(visitor)) {
      if (recomendedScore.has(visitor)) {
        recomendedScore.set(visitor, recomendedScore.get(visitor) + 1);
      } else {
        recomendedScore.set(visitor, 1);
      }
    }
  });
}

module.exports = problem7;
