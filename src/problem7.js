function problem7(user, friends, visitors) {
  const findFriends = findFriends(user, friends);
}

function findFriends(user, friends) {
  let friendArr = [];

  friends.map((friend) => {
    if(friend.includes(user)){
      const deliteUserName = friend.filter((el) => el !== user);
      friendArr.push(deliteUserName)
    }
  })
  return friendArr;
}

function findFriendsOfFriend(user, friends, findFriends) {
  let friendsOfFriend = [];
  
  friends.map((friend) => {
    findFriends.map((userFriend) => {
      if(friend.includes(userFriend) && !friend.includes(user)) {
        const friendsOfFriendArr = friend.filter((el) => el !== userFriend);
        if (!friendsOfFriendArr.includes(friendsOfFriendArr[0])) {
          friendsOfFriend.push(friendsOfFriendArr[0])
        }
      }
    })
  })
  return friendsOfFriend;
}

module.exports = problem7;
