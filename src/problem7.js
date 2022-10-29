function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getMyFriend(user,friends){
  const foundFriends = [];
  friends.forEach(friend => {
    if(friend.includes(user)){
      const friendName = friend.filter(friend => friend !== user);
      foundFriends.push(...friendName);
    }
  })

  return foundFriends;
}
module.exports = problem7;
