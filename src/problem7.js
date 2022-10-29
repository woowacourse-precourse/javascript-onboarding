function problem7(user, friends, visitors) {
  var answer;

  const userFriendsListGetter = (user, friends) => {

    const userFriendsList = [];

    friends.map(friend => {
      if(friend.indexOf(user) !== -1) {
        userFriendsList.push(friend[1-friend.indexOf(user)]);
      }
    })

    console.log(userFriendsList);

    return userFriendsList;
  }

  userFriendsListGetter(user, friends);

  return answer;
}

module.exports = problem7;
