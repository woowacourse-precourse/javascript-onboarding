function problem7(user, friends, visitors) {
  var answer;

  const friendsListGetter = (finder) => {

    const friendsList = [];

    friends.map(friend => {
      if(friend.indexOf(finder) !== -1) {
        friendsList.push(friend[1-friend.indexOf(finder)]);
      }
    })

    return friendsList;
  };

  const userFriendsListGetter = (user) => {

    const userFriendsList = friendsListGetter(user);

    return userFriendsList;
  }

  const friendOfFriendListGetter = (userFriendsList) => {

    const friendOfFriendList = [];

    userFriendsList.map(friend => {
      friendList = friendsListGetter(friend);
      friendList.map(friend => {
        if(friend !== user) {
          friendOfFriendList.push(friend);
        }
      })
    })

    return friendOfFriendList;
  };

  const userFriendsList = userFriendsListGetter(user);
  const friendOfFriendList = friendOfFriendListGetter(userFriendsList);

  return answer;
}

module.exports = problem7;
