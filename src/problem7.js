function problem7(user, friends, visitors) {
  let answer = [];

  let friendsList = [];
  for (let i = 0; i < friends.length; i++) {
    let sliceFriends = friends[i].slice();
    sliceFriends.forEach((ele) => {
      friendsList.push(ele);
    });
  }
  const visitorFriends = friendsList.concat(visitors);
  return answer;
}

module.exports = problem7;
