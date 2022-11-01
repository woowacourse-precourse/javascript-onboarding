function problem7(user, friends, visitors) {
  const findFriends = findFriends(user, friends);
  const friendsOfFriend = findFriendsOfFriend(user, friends, findFriends);
  const getScoreFriendOfFriend = getScoreFriendOfFriend(friendsOfFriend);

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
  let friendOfFriend = [];
  
  friends.map((friend) => {
    findFriends.map((userFriend) => {
      if(friend.includes(userFriend) && !friend.includes(user)) {
        const friendsOfFriendArr = friend.filter((el) => el !== userFriend);
        if (!friendsOfFriendArr.includes(friendsOfFriendArr[0])) {
          friendOfFriend.push(friendsOfFriendArr[0])
        }
      }
    })
  })
  return friendOfFriend;
}

function getScoreFriendOfFriend(friendsOfFriend) {
  let score = new Map();

  friendsOfFriend.map((friendOfFriend) => {
    score.has(friendOfFriend) 
    ? score.set(friendOfFriend, score.get(friendOfFriend) + 10)
    : score.set(friendOfFriend, 10);
  })
  return score;
}

module.exports = problem7;
