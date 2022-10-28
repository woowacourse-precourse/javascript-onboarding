function findFriendsOfUser(user, friends) {
  let friendsArray = [];

  friends.map((friend) => {
    if (friend.includes(user)) {
      let newArray = friend.filter((element) => element !== user);
      friendsArray.push(newArray[0]);
    }
  });
  return friendsArray;
}

function findFriendsOfFriend(user, friendsOfUser, friends) {
  let friendsOfFriend = [];

  friends.map((friend) => {
    friendsOfUser.map((myFriend) => {
      if (friend.includes(myFriend) && !friend.includes(user)) {
        let newArray = friend.filter((element) => element !== myFriend);
        if (!friendsOfFriend.includes(newArray[0])) {
          friendsOfFriend.push(newArray[0]);
        }
      }
    });
  });
  return friendsOfFriend;
}

module.exports = problem7;
