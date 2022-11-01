function problem7(user, friends, visitors) {
  var answer;
  let userInfo = {
    name: user,
    friends: [],
  };

  friends.map((friend) => {
    if (userInfo.name === friend[0]) userInfo.friends.push(friend[1]);
    else if (userInfo.name === friend[1]) userInfo.friends.push(friend[0]);
  });

  return answer;
}

module.exports = problem7;
