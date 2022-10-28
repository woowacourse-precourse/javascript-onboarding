const getUserFriends = (user, friends) => {
  const userFriends = [];
  
  friends.forEach((friend) => {
    if (friend.includes(user) && friend[0] === user) {
      userFriends.push(friend[1]);
    }
    if (friend.includes(user) && friend[1] === user) {
      userFriends.push(friend[0]);
    }
  });

  return userFriends;
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
