function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function findFriends(user, friends) {
  const friendArr = [];
  
  friends.map((friend) => {
    if(friend.includes(user)){
      const deliteUserName = friend.filter((el) => el !== user);
      friendArr.push(deliteUserName)
    }
  })
  return friendArr;
}

module.exports = problem7;
